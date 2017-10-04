import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe('closestPair()', function(){
  const points = [
    [2,1],
    [4,0],
    [-1,0],
    [5,3],
    [-2,5],
    [3,-3],
    [-2,0],
    [3,4],
    [5,-4],
    [0,-2]
  ]

  const points2 = [
    [2,6]
  ]

  it('should be a function', function(){
    expect(closestPair).to.be.a('function')
  })

  it('return the pair of points with the least distance between them.', function(){
    expect(closestPair(points)).to.deep.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })
  })

  it('should return error message if only 1 point is given', function(){
    expect(closestPair(points2)).to.equal('error')
  })

})
