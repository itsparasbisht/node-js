const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("readable stream close event");
});

setImmediate(() => console.log("this is setImmediate"));
setTimeout(() => console.log("this is setTimeout"));
Promise.resolve().then(() => console.log("this is promise"));
process.nextTick(() => console.log("this is nextTick"));
