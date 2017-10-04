import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('should return true if string is a palindrome', function(){
    expect(isPalindrome('racecar')).to.be.true
  })
    
  it('should return false if string is not a palindrome', function(){
    expect(isPalindrome('oakland')).to.be.false
  })

  it('removes special characters correctly using Regex', function(){
    expect(isPalindrome('Maps, DNA, and spam.')).to.equal(true)
  })
})
