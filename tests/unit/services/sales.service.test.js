const { expect } = require('chai');
const salesService = require('../../../src/services/sales.service')
// const salesModel = require('../../../src/models/sales.model')

const sinon = require('sinon');

const { insertSucces } = require('./mocks/sales.service.mock');

describe('Teste unitário do salesService', async function () {
  afterEach(sinon.restore)

  it('Inserindo uma venda com sucesso', async function () {

    const result = await salesService.insertSales([
      {
        productId: 1,
        quantity: 1
      },
      {
        productId: 2,
        quantity: 5
      }
    ]);

    expect(result).to.deep.equal(insertSucces)
  })
})
