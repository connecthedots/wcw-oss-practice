import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe('setCompliment()', function(){

  it('should be a function', function(){
    expect(setCompliment).to.be.a('function')
  })

  it('returns values not found in first array', function(){
    expect(setCompliment([3,1,2,4], [6,8,4,2])).to.deep.equal([6,8])
  })

  it('array length is equal to non-duplicate numbers', function(){
    let arrayLength = setCompliment([1,2,3,4], [2,4,6,8]).length
    expect(arrayLength).to.equal(2)
  })

})
