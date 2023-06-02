function logContentType(resp) {
  const headerVal = resp.headers.get("content-type");
  console.log(headerVal);
}

const apiKey = generateKey();
const bootdevAPIDomain = "api.boot.dev";

const items = await getItemData(bootdevAPIDomain);

logContentType(items);

async function getItemData(domain) {
  const response = await fetch(
    `https://${domain}/v1/courses_rest_api/learn-http/items`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
    }
  );

  return response;
}

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
