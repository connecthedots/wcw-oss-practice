import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('should return an array of only the shared values', function(){
    expect(setIntersection([1,2,3,4],[2,4,6,8])).to.deep.equal([2,4])
  })

  it('array length is equal to non-duplicate numbers', function(){
    let arrayLength = setIntersection([1,2,3,4], [2,4,6,8]).length
    expect(arrayLength).to.equal(2)
  })

})
