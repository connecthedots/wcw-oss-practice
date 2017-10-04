export default function closestPair(points){
  const distance = function(arr1, arr2){
    return Math.sqrt((Math.pow((arr1[0] - arr2[0]), 2) + Math.pow((arr1[1] - arr2[1]), 2)))
  }
  if (points.length <= 1){
    return 'error'
  } else {
    var minDistance = distance(points[0], points[1])
    var minPoints = points.slice(0, 2)
    for (var i = 0; i < points.length - 1; i++){
      for (var j = i+1; j < points.length; j++){
        let p = points[i]
        let q = points[j]
        if(distance(p,q) < minDistance){
          minDistance = distance(points[i], points[j])
          minPoints = [ points[i], points[j] ]
        }
      }
    } return { pair: minPoints, distance: minDistance }
  }
}
