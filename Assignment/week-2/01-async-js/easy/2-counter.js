console.log("Counter without using setInterval");

let count = 0;

const counter = () => {
  count++;
  console.log(count);
  setTimeout(counter, 1000);
};

setTimeout(counter, 1000);
