# Praxis Academy

**Catatan Mobile App Development - Javascript - React Native**

# let, var, dan const.

---

[JavaScript Hoisting](https://www.w3schools.com/js/js_hoisting.asp)

**let** adalah tipe variabel yang bisa diubah nilainya.

**const**  adalah tipe variabel yang tidak bisa diubah nilainya. Jika nilainya diubah, maka akan terjadi error.

**var** adalah tipe variabel yang bisa diubah nilainya dan bisa ***hoisting***.

***Hoisting*** hanya berlaku untuk **deklarasi**, tidak berlaku untuk **inisialisasi**.

```jsx
//Hoisting
x = 5;
console.log(`Nilai x adalah ${x}`); //template literal
var x;
//
x = 10;
console.log(`Nilai x apakah berubah? ${x}`);
//
console.log(`Nilai y adalah ${y}`);
var y=4;
//
let z = 27;
console.log("Nilai z adalah " + z);
//
console.log(`Nilai x, y, dan z adalah ${x}, ${y}, dan ${z}`);
```

```jsx
**Output**
Nilai x adalah 5
Nilai x apakah berubah? 10
Nilai y adlah undefined
Nilai z adalah 27
Nilai x, y, dan z adalah 10, 4, 27
```

---

## How to declare an array?

```jsx
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
```

## How to declare a function?

```jsx
//apparently a function
const wakeUp = function() {
    console.log("Wake up!");
}
wakeUp();
//function with argument
const wakeMeUp = function(name){
    console.log(`Wake up, ${name}!`);
}
wakeMeUp("Diko");
//arrow function
const sleepPlease = () => {
    console.log("It's already midnight.");
}
sleepPlease();
```

### Function → Variable

Function bisa dimasukkan ke dalam variabel dengan catatan function harus berisi return.

---

```jsx
const wakeMeUp = function(name){
    greet = `Wake up, ${name}!`;
    return greet;
}
x = wakeMeUp("Diko");
console.log(x);
```

---