// isEven
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

// Factorail
function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

// kebab case => snake case
function kebabToSnake(text) {
  //Use regular expression with 'g'(global) flag to replace all
  var snakeText = text.replace(/-/g, "_");
  return snakeText;
}
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blash"));
