const craftingCompleteWait = 4000;
const combiningMaterialsWait = 2000;
const smeltingIronBarsWait = 1000;
const shapingIronWait = 3000;

setTimeout(() => console.log("Iron Longsword Complete!"), craftingCompleteWait);
setTimeout(() => console.log("Combining Materials..."), combiningMaterialsWait);
setTimeout(() => console.log("Smelting Iron Bars..."), smeltingIronBarsWait);
setTimeout(() => console.log("Shaping Iron..."), shapingIronWait);

console.log("Firing up the forge");

await sleep(2500);
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
