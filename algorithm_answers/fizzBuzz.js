export default function fizzBuzz(number){
const array = []

  for (let i = 0; i <= number; i++) {
    if (i === 0) {
      array.push(++i)
    } else if (i % 15 === 0) {
      array.push('fizzBuzz')
    } else if (i % 3 === 0) {
      array.push('Fizz')
    } else if (i % 5 === 0) {
      array.push('Buzz')
    } else {
      array.push(i)
    }
  }return array
}
