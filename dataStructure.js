function isValid(s) {
  const stack = [];
  const mapping = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (mapping[char] !== undefined) {
      const topElement = stack.length === 0 ? "#" : stack.pop();
      if (mapping[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Question 1
const input_str1 = "{[()()]}";
console.log(isValid(input_str1));

// Question 2
const input_str2 = "{[()()]}{}";
console.log(isValid(input_str2));

// Question 3
const input_str3 = "{[()()]}";
let count = 0;
for (let char of input_str3) {
  if (char === "(" || char === "[" || char === "{") {
    count++;
  }
}
console.log(count);

// Question 4
const input_str4 = "{[()()]}";
let indices = [];
for (let i = 0; i < input_str4.length; i++) {
  if (input_str4[i] === "(" || input_str4[i] === "[" || input_str4[i] === "{") {
    indices.push(i);
  }
}
console.log(indices);
