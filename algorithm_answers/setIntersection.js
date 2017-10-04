export default function setIntersection(arr1, arr2) {

  const sorted_arr = arr1.concat(arr2).sort()
  const results = []
  for (var i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
          results.push(sorted_arr[i]);
      }
  }return results
}

