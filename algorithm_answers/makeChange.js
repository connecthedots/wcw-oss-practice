export default function makeChange({price, amountGiven}) {
  var changeStart = amountGiven - price
  var quarterCount = Math.floor(changeStart/25)
  var dimeCount = Math.floor((changeStart%25)/10)
  var nickelCount = Math.floor(((changeStart%25)%10)/5)
  var pennyCount = Math.floor(((changeStart%25)%10)%5)

    return {
      quarters: quarterCount,
      dimes: dimeCount,
      nickels: nickelCount,
      pennies: pennyCount
    }
}
