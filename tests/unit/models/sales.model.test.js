const { expect } = require('chai');
const salesModel = require('../../../src/models/sales.model')

const sinon = require('sinon');

const connection = require('../../../src/models/connection');

const {produtosInseridos} = require('./mocks/sales.model.mock')

describe('Teste de unidade do model de products', function () {
  afterEach(sinon.restore)

  it('Testando se um produto foi inserido', async function () {
    sinon.stub(connection, 'execute').resolves([produtosInseridos]);

    const result = await salesModel.insert();

  })
})