export default function setCompliment(arr1, arr2){
  const concatSortArray = arr1.concat(arr2).sort()
  const results = []
  for (var i=0; i<concatSortArray.length; i++){
    arr1.includes(concatSortArray[i])
      ? null
      : results.push(concatSortArray[i])
  } return results
}
