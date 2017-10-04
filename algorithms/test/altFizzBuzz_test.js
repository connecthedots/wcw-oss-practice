import { expect } from 'chai'
import altFizzBuzz from '../src/altFizzBuzz'

describe('altFizzBuzz', function(){

  it('should be a function', function(){
    expect(altFizzBuzz).to.be.a('function')
  })

  it('should replace multiples of 3 with "Fizz"', function(){
    expect(altFizzBuzz([1,3,4])).to.deep.equal([1,'Fizz',4])
  })

  it('should replace multiples of 5 with "Buzz"', function(){
    expect(altFizzBuzz([1,5,7])).to.deep.equal([1,'Buzz',7])
  })

  it('should replace multiples of 3 & 5 with "fizzBuzz"', function(){
    expect(altFizzBuzz([1,15,16])).to.deep.equal([1,'fizzBuzz',16])
  })

  it('should return the same array if no multiples of 3 or 5 exist', function(){
    expect(altFizzBuzz([1,2,4])).to.deep.equal([1,2,4])
  })
})
