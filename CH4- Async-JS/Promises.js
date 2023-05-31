const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newHP = currentHP - damage;
      if (newHP <= 0) {
        reject(
          `the player suffers ${damage} points of damage and has fallen unconscious`
        );
      } else {
        resolve(
          `The player suffers ${damage} points of damage and has ${newHP} hit points remaining `
        );
      }
    }, 1000);
  });
};

function runApplyDamageTest(damage, currentHP) {
  console.log(`Applying ${damage} damage to player with ${currentHP} HP...`);
  applyDamage(damage, currentHP)
    .then((message) => {
      console.log(`...applyDamage resolved with: ${message}`);
    })
    .catch((message) => {
      console.log(`...applyDamage rejected with: ${message}`);
    });
}

setTimeout(() => runApplyDamageTest(70, 50), 1000);
setTimeout(() => runApplyDamageTest(50, 50), 3000);
setTimeout(() => runApplyDamageTest(70, 50), 5000);
