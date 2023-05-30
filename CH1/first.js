const apiKey = generateKey();

let items;
// don't touch below this line
fetch("https://api.boot.dev/v1/courses_rest_api/learn-http/items", {
  method: "GET",
  mode: "cors",
  headers: {
    "X-API-Key": apiKey,
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    items = data;
    logItems(items);
  });

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name);
  }
}
