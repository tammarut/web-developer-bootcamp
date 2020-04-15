// My solution
function printReverse(list) {
  for (i = list.length - 1; i >= 0; i--) {
    console.log(list[i]);
  }
}
console.log("printReverse");
printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);

// My solution
// function isUniform(list) {
//   //วนเทียบแต่ละตัว
//   for (i = 0; i < list.length - 1; i++) {
//     //ถ้าไม่เท่ากัน(!=) แล้วreturn false
//     if (list[i] != list[i + 1]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

//His solution
function isUniform(arr) {
    var first = arr[0]
    for (var i = 1; i < arr.length; i++){
        if (arr[i] !== first) {
            return false;
        }
    }
    return true
}

console.log("isUniform");
console.log(isUniform([1, 1, 1, 1])); //true
console.log(isUniform([2, 1, 1, 1])); //false
console.log(isUniform(["a", "b", "p"])); //false
console.log(isUniform(["b", "b", "b"])); //true

function sumArray(list) {
  var sum = 0;
  list.forEach(function(value) {
    sum += value;
  });
  return sum;
}

console.log("sumArray");
console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));

console.log("max");
function max(list) {
    var max = list[0];
    for (i = 1; i < list.length; i++){
        if (list[i] > max) {
            max = list[i]
        }
    }
    return max
}

console.log(max([1, 2, 3])); //3
console.log(max([10, 3, 10, 4])); //10
console.log(max([-5, 100])); //100

