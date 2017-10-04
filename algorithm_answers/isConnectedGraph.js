export default function isConnectedGraph(graph = {}){
  
  if(graph == null){
    return 'cannot check null'
  }
  
  if(graph.constructor !== Object || graph.constructor === Array){
    return 'use objects as input data'
  }

  const maxWalkingSteps = Object.keys(graph).length

  for (let firstKey in graph){
    for (let lastKey in graph){
      if(firstKey != lastKey && !walkCheck(firstKey, lastKey, 1)){
        return false
      }
    }
    return true
  }

  function walkCheck(first, last, walkSteps){

    if(graph[first].indexOf(last) < 0 && walkSteps <= maxWalkingSteps){
      for (let value of graph[first]){
        if(walkCheck(value,last,walkSteps+1)){
          return true
        }
      }
      return false
    }
    if(graph[first].indexOf(last) < 0){
      return false
    }
    return true
  }
}
