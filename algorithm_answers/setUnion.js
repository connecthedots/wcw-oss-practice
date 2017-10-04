export default function setUnion(arr1, arr2) {
  const arr = arr1.concat(arr2).sort()
  for (var i=0; i<arr.length; i++){
    if (arr[i] === arr[i+1]){
      arr.splice(arr[i], 1)
    }
  } return arr
}
