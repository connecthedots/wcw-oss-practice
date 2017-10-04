// example output of pyramidBuilder(5)
// [
//   '    *    ',
//   '   ***   ',
//   '  *****  ',
//   ' ******* ',
//   '*********'
// ];

//eg n = 5 firstRow: 4spaces, 1*, 4spaces = 9characters
//         seconRow: 3spaces, 3*, 3spaces = 9characters
//         thirdRow: 2spaces, 5*, 2spaces = 9characters
//         fourhRow: 1space,  7*, 1space  = 9characters
//         fifthRow: 0spaces, 9*, 0spaces = 9characters

// pattern n = 5 => spaces = 9 => diff = 4
//         n = 4 => spaces = 7 => diff = 3
//         n = 3 => spaces = 5 => diff = 2
//         n = 2 => spaces = 3 => diff = 1
//         n = 1 => spaces = 1 => diff = 0
// answer: spaces = n*2 - 1 (will always be odd)

// determines number of spaces on either side of tip of tower of n floors high
// const beforeAndAfterPadding = (n) => {
//   return Math.floor((n*2 - 1)/2);
// };

// pattern:
// first push string with beforeAndAfterPadding(n - i) spaces, (i+1 x 2) - 1 *'s, beforeAndAfterPadding(n - i)
// second push string with beforeAndAfterPadding(n - i) spaces, (i+1 x 2) - 1 *'s,  beforeAndAfterPadding(n - i)
// third push string with beforeAndAfterPadding(n - i) spaces, (i+1 x 2) - 1 *'s,  beforeAndAfterPadding(n - i)

// steps:
// let eachStringLength = n*2 - 1
//  for loop nFloors times var i
//    for loop i+1 x 2 - 1 times var j
//      let string = + '*'
//    string.padstart(beforeAndAfterPadding(n - i) + (i+1 x 2) - 1)
//    string.padEnd(eachStringLength)

function pyramidBuilder(nFloors) {
  let result = [];
  let eachStringLength = nFloors * 2 - 1;

  const beforeAndAfterPadding = (n) => {
    return Math.floor((n*2 - 1)/2);
  };

  for(let i=0;i<nFloors;i++){
    let numOfAsteriks = (i+1)*2 - 1;
    let str = "*";
    for(let j=0;j<numOfAsteriks - 1;j++){
      str = "*" + str;
    }
    str = str.padStart(beforeAndAfterPadding((nFloors - i) + numOfAsteriks));
    str = str.padEnd(eachStringLength);
    result.push(str);
  }
  return result;
}

console.log(pyramidBuilder(1).join("\n"));
console.log(pyramidBuilder(2).join("\n"));
console.log(pyramidBuilder(4).join("\n"));
console.log(pyramidBuilder(8).join("\n"));
console.log(pyramidBuilder(16).join("\n"));
console.log(pyramidBuilder(32).join("\n"));
