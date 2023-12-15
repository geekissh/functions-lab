function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) return 0;
    if (distance <= 2000) return (distance - 400) * 0.02;
    if (distance <= 2500) return 25;
    return 'cannot travel that far';
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
  