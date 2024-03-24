// The speed difference divided by 5 should give the demerit points

function speedPoints(speed) {
  const speedDifference = speed - 70;

  if (speedDifference === 0) {
    return "OK";
    // Speed difference of 60 means the demerit points are 12
  } else if (speedDifference >= 5 && speedDifference <= 60) {
    let demeritPoints = speedDifference / 5;
    return demeritPoints;
  } else if (speedDifference > 60) {
    return "License suspended";
  }
};
// Example below shows output printed if one travells at the speed of 80
console.log(speedPoints(80));
