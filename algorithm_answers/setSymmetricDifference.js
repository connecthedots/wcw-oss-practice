export default function setSymmetricDifference(arr1, arr2){
  const concatSortArray = arr1.concat(arr2).sort()
  const results = []

  for (var i=0; i<concatSortArray.length; i++){
    const firstContains = arr1.includes(concatSortArray[i])
    const secondContains = arr2.includes(concatSortArray[i])

    if ((firstContains && secondContains)){
      null
    } else if ((firstContains && !secondContains) ||
      (!firstContains && secondContains)){
        results.push(concatSortArray[i])
    }
  } return results
}
