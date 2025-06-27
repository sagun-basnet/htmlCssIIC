var a;
let b = 15;
const c = 5;

function add(a, b, c) {
  return a + b + c;
}

// add(10, 15, 5);
console.log(add(10, 15, 5));

const addFun = (a, b, c) => a + b + c;

const arr = [
  10,
  15,
  5,
  "hello",
  false,
  12.5,
  null,
  undefined,
  NaN,
  [1, 2, 3],
  {
    name: "John",
    age: 30,
    arr2: [1, 2, 3],
  },
];

console.log(arr[10].arr2[1]);

const obj = {
  name: "John",
  age: 30,
  arr: [1, 2, 3],
  obj4: {
    name: "Jane",
    age: 25,
    arr2: [4, 5, 6],
  },
  add: function (a, b, c) {
    return a + b + c;
  },
};

console.log(obj.name);

try {
  const ab = 2;
  const bc = 3;
  console.log(ab + bc);
} catch (error) {
  console.log(error);
} finally {
  console.log("This will always run");
}
