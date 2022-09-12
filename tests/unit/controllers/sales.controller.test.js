const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const salesController = require('../../../src/controllers/sales.controller');

const {
  inserterdSalesMock
} = require('../controllers/mocks/sales.controller.mock');

describe('Teste de unidade do salesController', function () {
  afterEach(sinon.restore);

  it('Inserindo uma nova venda com sucesso', async function () {
    const res = {};
    const req = {
      body:
      {
        productId: 1,
        quantity: 1,
      }      
    }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'insertSales').
      resolves({ type: null, message: inserterdSalesMock })

    await salesController.insertSalesController(req, res)

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(inserterdSalesMock)
  })

  it('Verificando se retorna o erro quando o productId não é passado', async function () {
    const res = {};
    const req = {
      body:
      {
        productI: 1,
        quantity: 1,
      }
    }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'insertSales').
      resolves({ type: 'PRODUCT_IS_INVALID', message: '"productId" is required' })

    await salesController.insertSalesController(req, res)

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({
      "message": "\"productId\" is required"
    })
  })

})