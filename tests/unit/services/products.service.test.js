const { expect } = require('chai');
const productsService = require('../../../src/services/products.service')
const productsModel = require('../../../src/models/products.model')

const sinon = require('sinon');

const {
  allProductsfromDb,
  oneProductFromDb
} = require('./mocks/products.service.mock');

describe('Teste unitário do productService', async function () {
  afterEach(sinon.restore)

  it('pegando todos os produtos', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(allProductsfromDb);

    const result = await productsService.getProducts();

    expect(result).to.deep.equal({ type: null, message: allProductsfromDb })
  })

  it('Pegando um produto por id', async function () {
    sinon.stub(productsModel, 'findById').resolves(oneProductFromDb);

    const result = await productsService.getProductById(1);

    expect(result).to.deep.equal({ type: null, message: oneProductFromDb })
  })

  it('Pegando um produto por id quando for inválido', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);

    const result = await productsService.getProductById(1);

    expect(result).to.deep.equal({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' })
  })

  it('Passando um produto sem name e passando com name, mas o length menor que 5', async function () {
    const result = await productsService.insertNewProduct({});
    const result2 = await productsService.insertNewProduct({name: 'dois'});

    expect(result).to.deep.equal({ type: 'PRODUCT_IS_INVALID', message: '"name" is required' })
    expect(result2).to.deep.equal({
      type: 'PRODUCT_SIZE_IS_INVALID',
      message: '"name" length must be at least 5 characters long',
    })
  })

  it('Quando um produto é inserido com sucesso', async function () {
    sinon.stub(productsModel, 'insert').resolves({ id: 3, name: 'Martelo de Thor' });

    const result = await productsService.insertNewProduct({ name: 'Martelo de Thor' });
    
    expect(result).to.deep.equal({ type: null, message: { id: 3, name: 'Martelo de Thor' }})
  })
})