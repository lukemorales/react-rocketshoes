export function storeProducts(products) {
  return {
    type: '@products/STORE_PRODUCTS',
    products,
  };
}

export function setProductStatus(id, status) {
  return {
    type: '@products/SET_PRODUCT_STATUS',
    id,
    status,
  };
}
