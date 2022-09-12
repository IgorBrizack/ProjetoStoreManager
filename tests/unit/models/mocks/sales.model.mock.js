const productsInsertedWithsuccesMock = {
  "id": 3,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
}

const newProductsInsertedMock = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

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

const allSalesByIdMock = [
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
  productsInsertedWithsuccesMock,
  newProductsInsertedMock,
  allSalesMock,
  allSalesByIdMock
}