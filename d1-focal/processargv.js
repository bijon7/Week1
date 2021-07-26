const inputArray = process.argv.slice (2);
const addNumbers = function (arr){
let sum = 0;
for (let i = 0; i < arr.length; i++){

let item = arr[i];
sum += +(item);
}
return sum;
}
console.log (addNumbers (inputArray));