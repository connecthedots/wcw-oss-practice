export default function fibonacci(n) {
  const fibStart = [0,1]
  if (n <= 1){
    return n
  } else {
    function fibBuild(arr, num){
      const lastInArray = arr[arr.length - 1]
      const secondToLastInArray = arr[arr.length-2]
      const returnedArray = [lastInArray + secondToLastInArray]

      if (arr.length === num){
        return arr
      } else {
        return fibBuild(arr.concat(returnedArray), num)
      }
    } return fibBuild(fibStart, n)
  }
} 