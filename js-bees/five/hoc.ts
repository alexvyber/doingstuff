function getProducts(fetchData) {
  return async (categoryId) => {
    const data = await fetchData({ id: categoryId })
    return data.products
  }
}

function fetchData(query) {
  return fetch(`https://site.com/api/products?id=${query.id}`)
}

const byCategoryId = getProducts(fetchData)
const shoes = await byCategoryId("XYZ")
