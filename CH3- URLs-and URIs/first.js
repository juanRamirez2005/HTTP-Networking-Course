function printURLParts(url) {
  const urlObj = new URL(url);
  console.log(`protocol: ${urlObj.protocol}`);
  console.log(`username: ${urlObj.username}`);
  console.log(`password: ${urlObj.password}`);
  console.log(`hostname: ${urlObj.hostname}`);
  console.log(`port: ${urlObj.port}`);
  console.log(`pathname: ${urlObj.pathname}`);
  console.log(`search: ${urlObj.search}`);
  console.log(`hash: ${urlObj.hash}`);
}

const fantasyUrl =
  "http://Makrom:makromwarrior@fantasyquest.com:8080/maps?sort=rank#id";
printURLParts(fantasyUrl);
