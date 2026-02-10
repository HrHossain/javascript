function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
console.log("first" + i,j)
      // দুইটা element তুলনা
      if (arr[j] > arr[j + 1]) {

        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
     
    }
  }

  return arr;
}

// Example
let numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers));