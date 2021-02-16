let decimal = [10, 15, 16, 5005, 52390903]

decimal.forEach((decimal) => {
  console.log(`${decimal} to binary is ${decimal.toString(2)}`)
  console.log(`${decimal} to octal is ${decimal.toString(8)}`)
  console.log(`${decimal} to hexadecimal is ${decimal.toString(16)}`)
})
