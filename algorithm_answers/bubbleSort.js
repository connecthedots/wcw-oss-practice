function swapIt(disarray, i, k){
  const temp = disarray[i]
  disarray[i] = disarray[k]
  disarray[k] = temp
}

export default function bubbleSort(disarray){
  for(var i = 0; i < disarray.length; i++){
    for(var k = 1; k < disarray.length; k++){
      if (disarray[k - 1] > disarray[k]) {
        swapIt(disarray, k - 1, k)
      }
    }
  }
  return disarray
}
