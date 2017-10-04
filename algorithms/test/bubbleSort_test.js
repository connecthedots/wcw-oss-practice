import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })

  it('sorts array of numbers using bubbleSort', function(){
    expect(bubbleSort([3,6,9,2,1,10,4,8,5,7]))
      .to.deep.equal([1,2,3,4,5,6,7,8,9,10])
  })

  it('returns the array if given an array with only one element', function(){
    expect(bubbleSort([1]))
      .to.deep.equal([1])
  })

  it('does not break if given an empty array', function(){
    expect(bubbleSort([]))
      .to.deep.equal([])
  })

})
