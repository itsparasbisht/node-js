console.log("first task");

process.nextTick(() => console.log("nextTick task"));

console.log("second task");

Promise.resolve().then(() => console.log("promise task"));

setTimeout(() => {
  console.log("timeout task");
});

console.log("third task");
