const app = require("./app");

async function main() {
  await app.listen(3000);
  console.log("Server Connected in http://localhost:3000");
}
main();
