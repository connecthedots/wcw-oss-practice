import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('returns values not found in first array', function(){
    expect(setSymmetricDifference([1,2,3,4], [2,4,6,8])).to.deep.equal([1, 3, 6, 8])
  })

  it('array length is equal to non-duplicate numbers', function(){
    let arrayLength = setSymmetricDifference([1,2,3,4], [2,4,6,8]).length
    expect(arrayLength).to.equal(4)
  })

})
