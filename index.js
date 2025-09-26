function add(str) {
  if (str == "") return 0;
  let sum = 0;

  const parts = str.split("\n");
  if (parts.length > 0) str = parts.join(",");

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
  "1\n2,3", //6
];

testCase.forEach((str) => console.log(add(str)));

module.exports = add;
