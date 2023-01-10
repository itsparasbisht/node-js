const fs = require("node:fs");

const readStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2, // read 2 bytes of data in each stream, by default each stream has 64KB of data in nodeJS
});

const writeStream = fs.createWriteStream("./file2.txt");

readStream.pipe(writeStream);
