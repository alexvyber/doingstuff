const employees = [
  { eNo: 1001, salary: 3000 },
  { eNo: 1002, salary: 2200 },
  { eNo: 1003, salary: 3400 },
  { eNo: 1004, salary: 6000 },
]
let totalSalary = employees.reduce((accumulator, current) => {
  return accumulator + current.salary
}, 0)
console.log(totalSalary)
