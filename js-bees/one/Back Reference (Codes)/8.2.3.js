let str = "Code is 123-5678 and 456-456"
let ptrn = /(?<zipcode>\d+)-\k<zipcode>/g
console.log(str.match(ptrn))
