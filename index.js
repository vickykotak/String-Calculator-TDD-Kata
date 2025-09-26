function add(str) {
  if (str == "") return 0;
  let sum = 0;

  for (let i = 0; i < str; i++) {
    sum += parseInt(str[i]);
  }

  return sum;
}

let testCase = [
  "", //0
  "1", //1
];

testCase.forEach((str) => console.log(add(str)));

module.exports = add;
