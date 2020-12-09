//String Conversion
let nilai = true;
console.log(`Variabel nilai merupakan ${typeof nilai}`); 

nilai = String(nilai); //diubah menjadi string
console.log(`Variabel nilai merupakan ${typeof nilai}`);

//Numeric Conversion
console.log("28"/"4"); //division for non-number

let bilangan = "274";
console.log(`Variabel bilangan merupakan ${typeof bilangan}`);

let bil = Number(bilangan);
console.log(`Variabel bilangan merupakan ${typeof bil}`);

let bukanBilangan = Number("Ini bukanlah sebuah bilangan");

console.log(bukanBilangan);

// undefined -> NaN
// null -> 0
// true and false -> 1 and 0
console.log(Number(true));