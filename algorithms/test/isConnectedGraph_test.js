import { expect } from 'chai'
import isConnectedGraph from '../src/isConnectedGraph'

describe('isConnectedGraph()', function(){
  const graphA = {
    'a': ['b', 'c'],
    'b': ['a', 'd'],
    'c': ['a', 'd'],
    'd': ['b', 'c']
  }
  const graphB = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['c']
  }
  const graphC = {
    'a': [],
    'b': []
  }

  it('should be a function', function(){
    expect(isConnectedGraph).to.be.a('function')
  })

  it('returns true if graph is connected', function(){
    expect(isConnectedGraph(graphA)).to.eql(true)
  })

  it('returns false if graph is not connected', function(){
    expect(isConnectedGraph(graphB)).to.eql(false)
  })

  it('returns false if graph has no connection points', function(){
    expect(isConnectedGraph(graphC)).to.eql(false)
  })

})
