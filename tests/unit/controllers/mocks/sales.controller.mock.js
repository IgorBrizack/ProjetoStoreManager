const inserterdSalesMock = {
  "id": 3,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 1
      }
    ]
}

const allSalesMock = [
  {
    "saleId": 1,
    "date": "2022-09-12T19:46:47.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-09-12T19:46:47.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-09-12T19:46:47.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const salesById = [
  {
    "date": "2022-09-12T19:46:47.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-09-12T19:46:47.000Z",
    "productId": 2,
    "quantity": 10
  }
]

module.exports = {
  inserterdSalesMock,
  allSalesMock,
  salesById
}