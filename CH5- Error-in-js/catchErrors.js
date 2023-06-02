try {
  printCharacterStats(4);
  printCharacterStats("eleven");
  printCharacterStats(10);
} catch (err) {
  console.log(err);
}

function printCharacterStats(level) {
  if (isNaN(level)) {
    throw `Parameter is not number!`;
  }
  console.log(`Your character is level ${level}`);
}
