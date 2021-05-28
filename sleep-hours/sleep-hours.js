function getSleepHours(day) {
  if (day === 'sunday') {
    return Math.floor(Math.random() * 12);
  } else if (day ==='monday') {
    return Math.floor(Math.random() * 12);
  } else if (day ==='tuesday') {
    return Math.floor(Math.random() * 12);
  } else if (day ==='wednesday') {
    return Math.floor(Math.random() * 12);
  } else if (day === 'thursday') {
    return Math.floor(Math.random() * 12);
  } else if (day === 'friday') {
    return Math.floor(Math.random() * 12);
  } else if (day == 'saturday') {
    return Math.floor(Math.random() * 12);
  } else {
    return 'SOMETHING IS WRONG';
  }
}

function getActualSleepHours() {
  return getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');
}

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You should get some rest.");
  } else {
    console.log("SOMETHING IS WRONG");
  }
}

calculateSleepDebt();














