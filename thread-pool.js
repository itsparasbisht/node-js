process.env.UV_THREADPOOL_SIZE = 6;

const fs = require("node:fs");
const MAX_CALLS = 6;

console.time("total");

fs.mkdir("samples", () => {
  for (let i = 1; i < MAX_CALLS; i++) {
    fs.writeFile(`samples/file${i}.txt`, "hello there", (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
  console.timeEnd("total");
});
