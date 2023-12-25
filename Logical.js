function findCommonElements(arr1, arr2) {
    const commonElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          // Check if the element is not already in the commonElements array
          let isUnique = true;
          for (let k = 0; k < commonElements.length; k++) {
            if (arr1[i] === commonElements[k]) {
              isUnique = false;
              break;
            }
          }
  
          // If the element is unique, add it to the commonElements array
          if (isUnique) {
            commonElements.push(arr1[i]);
          }
  
          // Break out of the inner loop as we found a common element
          break;
        }
      }
    }
  
    return commonElements;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const result = findCommonElements(array1, array2);
  console.log(result); // Output: [3, 4, 5]