const fs = require("node:fs");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});

fs.writeFile("./file.txt", "Hello World", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("written...");
  }
});

fs.writeFile("./file.txt", "Hello World", { flag: "a" }, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("appended...");
  }
});
