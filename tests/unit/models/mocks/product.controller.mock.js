const allProductsMock = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América"
  }
];

const onlyOneProductMock = {
  id: 1,
  name: "Martelo de Thor"
};

const insertedNewProductMock = {
  id: 4,
  name: "ProdutoX"
}

const productNotFoundMock = {
  message: "Product not found"
}

module.exports = {
  allProductsMock,
  onlyOneProductMock,
  insertedNewProductMock,
  productNotFoundMock
}