function add(str) {
  if (str == "") return 0;
  let sum = 0;

  let delimiter = /,|\n/;
  if (str.startsWith("//")) {
    const parts = str.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    str = parts[1];
  }

  const numList = str.split(delimiter).map(Number);
  let negativeNums = [];

  for (let i = 0; i < numList.length; i++) {
    let num = numList[i];
    if (!isNaN(num) && num < 0) negativeNums.push(num);
    else if (num > 1000) continue;
    else if (!isNaN(num)) sum += num;
  }

  if (negativeNums.length > 0)
    throw new Error(`negative numbers not allowed ${negativeNums}`);

  return sum;
}

let testCase = [
  "", //0
  "1", //1
  "1,5", //6
  "1,2,3,4", //10
  "1\n2,3", //6
  "//;\n1;2", //3
  "1,2000,2", //3
  "1,-2", //erroor
  "1,-2,-5", //error
];

testCase.forEach((str) => console.log(add(str)));

module.exports = add;
