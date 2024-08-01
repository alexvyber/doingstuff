let product = new WeakMap()
let obj = {}
product.set(obj, 1001)
console.log(product.get(obj))
