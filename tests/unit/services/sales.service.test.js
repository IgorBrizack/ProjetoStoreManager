const { expect } = require('chai');
const salesService = require('../../../src/services/sales.service')
const salesModel = require('../../../src/models/sales.model')

const sinon = require('sinon');

const { insertSucces, allSalesServiceMock, salesByIdMockService } = require('./mocks/sales.service.mock');

describe('Teste unitário do salesService', async function () {
  afterEach(sinon.restore)

  it('Inserindo uma venda com sucesso', async function () {
    sinon.stub(salesModel, 'startSale').resolves(3);
    sinon.stub(salesModel, 'insert').resolves({ id: 3, itemsSold: insertSucces.message.itemsSold });


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

  it('passando parâmetros errado para a minha requisição', async function () {
      const result = await salesService.insertSales([
      {
        productI: 1,
        quantity: 1
      },
      {
        productId: 2,
        quantity: 5
      }
    ]);

    expect(result).to.deep.equal({ type: 'PRODUCT_IS_INVALID', message: '"productId" is required' })
  })

  it('Pegando todas minhas Sales', async function () {
    sinon.stub(salesModel, 'getAllSalesModel').resolves(allSalesServiceMock)

    const result = await salesService.getAllSalesService()

    expect(result).to.deep.equal(allSalesServiceMock)
  })

  it('Pegando sales pelo id', async function () {
    sinon.stub(salesModel, 'getSaleByIdModel').resolves(salesByIdMockService)

    const result = await salesService.getSaleByIdService(1)

    expect(result).to.deep.equal({type: null, message: salesByIdMockService})
  })
})
