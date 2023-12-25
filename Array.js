function findUniqueElements(inputArray) {
    const uniqueArray = [];
  
    for (let i = 0; i < inputArray.length; i++) {
      let isUnique = true;
  
      // Check if the element is already in the uniqueArray
      for (let j = 0; j < uniqueArray.length; j++) {
        if (inputArray[i] === uniqueArray[j]) {
          isUnique = false;
          break;
        }
      }
  
      // If the element is not found in uniqueArray, add it
      if (isUnique) {
        uniqueArray.push(inputArray[i]);
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 3, 2, 5, 6, 6, 7];
  const resultArray = findUniqueElements(inputArray);
  console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6, 7]