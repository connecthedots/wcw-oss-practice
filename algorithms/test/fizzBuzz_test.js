import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('should replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 15 with "fizzBuzz"', function(){
    expect(fizzBuzz(15)).to.deep.equal([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'fizzBuzz'])
  })

})
