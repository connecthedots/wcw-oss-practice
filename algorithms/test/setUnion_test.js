import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('returns the union of two arrays', function(){
    expect(setUnion([1,2,3,4], [2,4,6,8])).to.deep.equal([1,2,3,4,6,8])
  })

  it('if no duplicates it concats and sorts arrays', function(){
    expect(setUnion([1,2,3,4], [5,6,7,8])).to.deep.equal([1,2,3,4,5,6,7,8])
  })

  it('array length is equal to non-duplicate numbers', function(){
    let arrayLength = setUnion([1,2,3,4], [2,4,6,8]).length
    expect(arrayLength).to.equal(6)
  })

})
