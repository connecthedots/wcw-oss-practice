export default function factorial(n){
  if (n < 0){
    return "Please enter a positive integer"
  }

  if (n === 1){
    return n
  } else
    return n * factorial(n-1)
}
