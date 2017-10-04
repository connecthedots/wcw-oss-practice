import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('should take an imput and return the numeric factorial of that input', function(){
    expect(factorial(5)).to.deep.equal(120)
  })

  it('should return error if user puts in a negative number', function(){
    expect(factorial(-3)).to.equal("Please enter a positive integer")
  })
})
