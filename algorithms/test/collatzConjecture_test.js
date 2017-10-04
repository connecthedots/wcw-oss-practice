import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  it('returns collatz conjecture array for a given positive integer input', function(){
    expect(collatzConjecture(7)).to.deep.equal([7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1])
  })

  it('returns 1 if input is 1', function(){
    expect(collatzConjecture(1)).to.deep.equal([1])
  })

  it('returns undefined if input contains a decimal', function(){
    expect(collatzConjecture(1.1576)).to.be.undefined
  })

})
