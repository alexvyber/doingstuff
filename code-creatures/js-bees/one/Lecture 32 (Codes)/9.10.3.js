let str = "2020-JAN-30"
let ptrn = /^(19|20)\d\d([-\s])(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)([-\s])(0[1-9]|[12][0-9]|3[01])$/i
console.log(ptrn.test(str))
