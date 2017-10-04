import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('sorts array using merge sort algorithm', function(){
    expect(mergeSort([3,1,4,2,7,6,5,9,10,8])).to.deep.equal([1,2,3,4,5,6,7,8,9,10])
  })

  it('array length returned is equal to array length given ', function(){
    let arrayLength = mergeSort([3,1,4,2,7,6,5,9,10,8]).length
    expect(arrayLength).to.equal(10)
  })


})
