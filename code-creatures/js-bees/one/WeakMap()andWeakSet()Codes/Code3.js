let product = new WeakSet()
let obj = {}
let obj1 = {}
let obj2 = {}
product.add(obj, 1001)
product.add(obj1, 1002)
product.add(obj2, 1003)
console.log(product.has(obj))
console.log(product.has(obj1))
console.log(product.has(obj2))
