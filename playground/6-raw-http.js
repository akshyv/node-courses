const http = require("http");
const https = require("https");

url = "someurl.com";

try {
  const request = http.request(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data = data + chunk.toString();
    });
    response.on("end", () => {});
  });
} catch {
  const request = https.request(url, (response) => {
    let dat = "";
    response.on("data", (chunk) => {});
    response.on("end", () => {
      console.log(JSON.parse(data));
    });
  });
}
request.on("error", (error) => {
  console.log("error", error);
});
request.end();
