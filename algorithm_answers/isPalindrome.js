export default function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z|0-9]/g, "")
  function reversedString(formattedStr) {
    if (formattedStr === ""){
      return "";
    } else {
      return reversedString(formattedStr.substr(1)) + formattedStr.charAt(0)
    }
  }
  return formattedStr == reversedString(formattedStr)
}
