export default function binarySearch(disarray, target){
  let left = 0
  let right = disarray.length - 1

  while (left <= right){
    let middle = Math.floor((left + right) / 2)
    
    if (disarray[middle] === target){
      return middle
    } 
    if (disarray[middle] < target){
      left = middle + 1
    }
    if (disarray[middle] > target){
      right = middle - 1
    }
  }
}
