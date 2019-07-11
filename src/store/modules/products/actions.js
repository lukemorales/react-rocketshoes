export default function storeProducts(products) {
  return {
    type: '@products/STORE_PRODUCTS',
    products,
  };
}
