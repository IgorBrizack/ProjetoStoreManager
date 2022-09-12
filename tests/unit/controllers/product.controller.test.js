const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService }  = require('../../../src/services');
const productController = require('../../../src/controllers/products.controller');

const {
  allProductsMock,
  onlyOneProductMock,
  insertedNewProductMock,
  productNotFoundMock
} = require('../controllers/mocks/product.controller.mock');

describe('Teste de unidade do productController', function () {
  afterEach(sinon.restore);

  it('Trazendo todos os produtos do meu banco de dados', async function () {
    const res = {};
    const req = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProducts').
      resolves({ type: null, message: allProductsMock })
    
    await productController.allProducts(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsMock)
  })

  it('Trazendo um produto por id com sucesso', async function () {
    const res = {};
    const req = {params: {id: 1}};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById').
      resolves({ type: null, message: onlyOneProductMock })
    
    await productController.productById(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(onlyOneProductMock)
  })

  it('Trazendo um produto por id inválido', async function () {
    const res = {};
    const req = { params: { id: 999 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById').
      resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' })

    await productController.productById(req, res)

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(productNotFoundMock)
  })

  it('Cadastrando um produto com Sucesso', async function () {
    const res = {};
    const req = {
      body: {
        name: "ProdutoX"
      } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'insertNewProduct').
      resolves({ type: null, message: insertedNewProductMock })

    await productController.insertProduct(req, res)

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(insertedNewProductMock)
  })

  it('Falhando quando a requisição é passada sem a chave name', async function () {
    const res = {};
    const req = {
      body: {
        nam: "ProdutoX"
      }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'insertNewProduct').
      resolves({ type: 'PRODUCT_IS_INVALID', message: '"name" is required' })

    await productController.insertProduct(req, res)

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({
      message: "\"name\" is required"
    })
  })

  it('Falhando quando a requisição é passada com o nome do produto menor que 5 caracteres', async function () {
    const res = {};
    const req = {
      body: {
        name: "Pro"
      }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'insertNewProduct').
      resolves({ type: 'PRODUCT_SIZE_IS_INVALID', message: '"name" length must be at least 5 characters long' })

    await productController.insertProduct(req, res)

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(
      {
        message: "\"name\" length must be at least 5 characters long"
      }
    )
  })

})