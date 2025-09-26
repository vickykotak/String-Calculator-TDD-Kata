function add(str) {
  if (str == "") return 0;
  let sum = 0;

  if (str.startsWith("//")) {
    const parts = str.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    str = parts[1];
  } else {
    const parts = str.split("\n");
    if (parts.length > 0) str = parts.join(",");
  }

  for (let i = 0; i < str.length; i++) {
    let flag = 0,
      num = 0;
    if (str[i] == "-") flag = 1;
    else num = parseInt(str[i]);
    if (flag)
      throw new Error(`negative numbers not allowed ${str[i] + str[i + 1]}`);
    else if (!isNaN(num)) sum += num;
  }

  return sum;
}

let testCase = [
  "", //0
  "1", //1
  "1,5", //6
  "1,2,3,4", //10
  "1\n2,3", //6
  "//;\n1;2", //3
  "1,-2", //erroor
];

testCase.forEach((str) => console.log(add(str)));

module.exports = add;
