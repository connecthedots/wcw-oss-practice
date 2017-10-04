import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('returns an array with the fibonacci numbers to the nth position', function(){
    expect(fibonacci(10)).to.deep.equal([0,1,1,2,3,5,8,13,21,34])
  })

  it('returns an array with the fibonacci numbers to the nth position', function(){
    expect(fibonacci(0)).to.equal(0)
  })

})
