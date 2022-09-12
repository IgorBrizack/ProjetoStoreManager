const { expect } = require('chai');
const salesModel = require('../../../src/models/sales.model')

const sinon = require('sinon');

const connection = require('../../../src/models/connection');

const { productsInsertedWithsuccesMock,
  newProductsInsertedMock } = require('./mocks/sales.model.mock');

describe('Teste de unidade do model de products', function () {
  afterEach(sinon.restore)

  it('Testando se foi iniciado uma nova venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 3 }]);
    const resultId = await salesModel.startSale();
    expect(resultId).to.be.equal(3)
  })

  it('Verificando se as vendas foram inseridas', async function () {
    sinon.stub(connection, 'execute').resolves([productsInsertedWithsuccesMock])
    const resultSales = await salesModel.insert(3, newProductsInsertedMock)
    expect(resultSales).to.be.deep.equal(productsInsertedWithsuccesMock)
  })
})