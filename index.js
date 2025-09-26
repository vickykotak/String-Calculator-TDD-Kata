function add(str) {
  if (str == "") return 0;
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) sum += parseInt(str[i]);
  }

  return sum;
}

let testCase = [
  "", //0
  "1", //1
  "1,5", //6
  "1,2,3,4", //10
];

testCase.forEach((str) => console.log(add(str)));

module.exports = add;
