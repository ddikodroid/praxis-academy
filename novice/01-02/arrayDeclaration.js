const array1 = new Array(arrayLength=5);
array1[0]=1
array1[2]=2
array1[4]=3

array2 = new Array(3, 4, 5, 6, 7);
array3 = [1, 2, 3, 4, 5];

console.log(array1);
console.log(`Banyak elemen array1 adalah ${array1.length}`);
console.log(array2);
console.log(array3);

const array4 = [...array1, ...array2];
console.log(array4);
console.log(`Panjang array4 adalah ${array4.length}`);

const [first, , third] = array1;
console.log(first, third);