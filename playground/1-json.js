const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const data = JSON.parse(dataBuffer.toString());
(data.name = "Akshy"), (data.age = 22);
console.log(data);
const bookJson = JSON.stringify(data);
fs.writeFileSync("2-json.json", bookJson);
