// Function to merge two car objects
function mergeCars(car1, car2) {
    // Create a new object to store the merged properties
    const mergedCar = {};
  
    // Copy properties from car1
    for (let key in car1) {
      if (car1.hasOwnProperty(key)) {
        mergedCar[key] = car1[key];
      }
    }
  
    // Copy properties from car2, but avoid overwriting existing properties
    for (let key in car2) {
      if (car2.hasOwnProperty(key) && !mergedCar.hasOwnProperty(key)) {
        mergedCar[key] = car2[key];
      }
    }
  
    return mergedCar;
  }
  
  // Example car objects
  const car1 = { brand: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' };
  const car2 = { brand: 'Honda', model: 'Civic', year: 2022, fuelType: 'Gasoline' };
  
  // Merge the car objects
  const mergedCar = mergeCars(car1, car2);
  
  // Output the merged car object
  console.log(mergedCar);