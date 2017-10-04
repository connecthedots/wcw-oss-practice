export default function altFizzBuzz(numList){
  for (var i=0; i < numList.length; i++){
    if ((numList[i] % 15) === 0){
      numList.splice([i], 1, 'fizzBuzz')
    } else if ((numList[i] % 5) === 0){
      numList.splice([i], 1, 'Buzz')
    } else if ((numList[i] % 3) === 0){
      numList.splice([i], 1, 'Fizz')
    } else null
  } return numList
}
