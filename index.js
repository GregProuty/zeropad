// Given a string, zero pad any whole number to X char.

// Examples:

// "area 59", 4

// return "area 0059"

// "123 Foo st", 5

// return "00123 Foo st"

// "123 Foo st", 2

// return "123 Foo st"

// "Area59asdf234", 4

// return "Area0059asdf0234"

// const parseNumbers = str => {

// }
const pad = (int, digits) =>
  int.length >= digits
    ? int
    : new Array(digits - int.length + 1).join('0') + int

const zeroPad = (str, digits) => {
  const nums = str.match(/[0-9]+/g)

  nums.forEach(num => {
    str = str.replace(num, pad(num, digits))
  })

  return str
}

console.log(zeroPad('area 59', 4))
console.log(zeroPad('123 Foo st', 5))
console.log(zeroPad('123 Foo st', 2))
console.log(zeroPad('Area59asdf234', 4))
