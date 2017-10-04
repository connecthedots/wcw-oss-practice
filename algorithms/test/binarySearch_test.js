import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', function(){

  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })

  it('searches for target element and returns array position of the element', function(){
    expect(binarySearch([5,10,15,20,25,30,35,40,45,50], 45)).to.deep.equal(8)
  })

  it('returns element position when target is first element in the array', function(){
    expect(binarySearch([5,10,15,20,25,30,35,40,45,50], 5)).to.deep.equal(0)
  })

  it('returns element position when target is last element in the array', function(){
    expect(binarySearch([5,10,15,20,25,30,35,40,45,50], 50)).to.deep.equal(9)
  })

  it('returns undefined if target is not an element in the array', function(){
    expect(binarySearch([5,10,15,20,25,30,35,40,45,50], 32)).to.equal(undefined)
  })

  it('returns undefined for edge case: target search is small value not in the array', function(){
    expect(binarySearch([5,10,15,20,25,30,35,40,45,50], 2)).to.equal(undefined)
  })

   it('returns undefined for edge case: target search is large value not in the array', function(){
    expect(binarySearch([5,10,15,20,25,30,35,40,45,50], 95)).to.equal(undefined)
  })
})
