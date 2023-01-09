const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("order-cake", (flavour) => {
  console.log(`order placed for ${flavour} cake`);
});

emitter.on("order-cake", () => {
  console.log(`amount - Rs.${300}`);
});

emitter.emit("order-cake", "chocolate");
