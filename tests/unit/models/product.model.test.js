const { expect } = require('chai');
const productsModel = require('../../../src/models/products.model')

const sinon = require('sinon');

const connection = require('../../../src/models/connection');

const {
  productsFromDb,
  productById,
  insertedNewProduct
  } = require('./mocks/product.model.mock');

describe('Teste de unidade do model de products', function () {
  afterEach(sinon.restore)

  it('Requisitando todos os produtos do meu banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([productsFromDb]);

    const result = await productsModel.findAllProducts();

    expect(result).to.deep.equal(productsFromDb)
  })

  it('Requisitando um produto válido do meu banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([[productById]]);

    const result = await productsModel.findById(1);

    expect(result).to.deep.equal(productById)
  })

  it('Inserindo um novo produto a nossa tabela', async function () {
    sinon.stub(connection, 'execute').resolves([{insertId: 4}])

    const result = await productsModel.insert({
      "name": "ProdutoX"
    })

    expect(result).to.deep.equal(insertedNewProduct)
  })

})