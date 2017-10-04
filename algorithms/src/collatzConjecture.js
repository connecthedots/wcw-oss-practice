export default function collatzConjecture(n){
  let numArray = [n]
  function recursiveCall(arr){
    const lastInArray = arr[arr.length-1]
    if ( lastInArray === 1){
      return arr
    } else if (( lastInArray )%2 === 0){
      return recursiveCall(arr.concat([[ lastInArray ] / 2 ]))
    } else if (( lastInArray )%2 === 1){
      return recursiveCall(arr.concat([( lastInArray *3) +1 ]))
    }
  } return recursiveCall(numArray)
}
