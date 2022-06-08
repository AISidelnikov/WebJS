//===========Variables and constants==========
var username = "Tom<br>";
let age_user = 23;
const PI = 3.14;
document.write(username);
console.log(age_user);
//=============Data Types=====================
let str = "HelloWorld"; // string
let num = 123; // number
let bignum = 9007199254740991n; // bigint
var bool = false; // boolean
var text = `Name: ${username}`; // Interpolation
var under // underfined
var not = null// null
let user = {name: "Tom", age: 23}; // object
console.log(typeof str, typeof num, typeof bignum, typeof bool, typeof text, typeof under, typeof not, typeof user) // operation typeof
//==========Mathematical operations=============
let x=10, y=5;
console.log("x + y = ", x + y); // +
console.log("x - y = ", x - y); // -
console.log("x * y = ", x * y); // *
console.log("x / y = ", x / y); // /
console.log("x % y = ", x % y); // %
console.log("x ** y = ", x ** y); // **
x++;
console.log("x++ =  ", x); // increment
--x;
console.log("--x = ", x); // decriment
//==========Comparison operators=============
console.log("1 == num: ", 1 == num); // ==
console.log("1 === num: ", 1 === num); // ===
console.log("1 != num: ", 1 != num); // !=
console.log("1 !== num: ", 1 !== num); // !==
console.log("1 > num: ", 1 > num); // >
console.log("1 < num: ", 1 < num); // <
console.log("1 >= num: ", 1 >= num); // >=
console.log("1 <= num: ", 1 <= num); // <=
//==========Logical operations=============
console.log("num > 100 && num < 200: ", num > 100 && num < 200); // &&
console.log("num > 100 || bool == true: ", num > 100 || bool == true); // ||
console.log("num > 100 || bool == true: ", num > 100 || bool == true); // !
console.log("bool != true: ", num > 100 || bool != true); // ||
//==========Assignment Operations===========
let number = 10;
console.log("let number = ", number); // =
number += 5;
console.log("let number += 5; number = ", number); // +=
number -= 5;
console.log("let number -= 5; number = ", number); // -=
number *= 2;
console.log("let number *= 2; number = ", number); // *=
number /= 2;
console.log("let number /= 2; number = ", number); // /=
number **= 2;
console.log("let number **= 2; number = ", number); // **=
number %= 3;
console.log("let number %= 3; number = ", number); // *=
bool &&= true;
console.log("let bool &&= true; bool = ", bool); // *=
bool ||= true;
console.log("let bool ||= true; bool = ", bool); // *=
//==========Ternary operation===============
console.log("num < 100 ? true : false: ", num < 100 ? true : false); // ? :
console.log("not = false ?? true: ", not = false ?? true); // ??
console.log("not ??= str : ", not ??= str); // ??=
//==========Data Transformations===============
console.log("numeric to srting:", (typeof (String(num)))); // numeric to srting
number = "10";
console.log("srting to numeric:", (typeof (parseInt(number)))); // srting to numeric
number = "10";
console.log("srting binary number system to decimal number system:", (parseInt(number, 2)),"-", (typeof number)); // srting binary number system to decimal number system
//====================Array===================
const people = ["Tom ", 'Alex ', `Bob `]; //Array []
document.write(people + "<br>");
people[2] = "Jim";
document.write(people[2] + "<br>");
people[7] = "Bob";
document.write(people + "<br>");
//==============Multidimensional arrays=================
const numArray = 
[
    [false, 1, "two"],
    [3n, null, 5]
]
document.write(numArray + "<br>");
document.write("namArray[1][0] = ", numArray[1][0], " - ", typeof (numArray[1][0]));
//==============if..else=================
const income = 500;
if(income < 200){
 
    console.log("Доход ниже среднего");
}
else if(income>=200 && income<300){
     
    console.log("Чуть ниже среднего");
}
else if(income>=300 && income<400){
     
    console.log("Средний доход");
}
else{
    console.log("Доход выше среднего");
}
//==============switch..case=================
const income2 = 300;
switch(income2){
 
    case 100 : 
        console.log("Доход равен 100");
        break;
    case 200 : 
        console.log("Доход равен 200");
        break;
    case 300 : 
        console.log("Доход равен 300");
        break;
    default: 
        console.log("Доход неизвестной величины");
        break;
}
//==============for=================
for(let i = 0; i<5; i++)// for
{
    document.write(i + "<br>");
}
document.write("Конец работы цикла for" + "<br><br>");
for(let i=1; i <= 5; i++) // Nested loops
{      
    for(let j = 1; j <=5; j++){
        document.write((i + j) + "<br>");
    }
    document.write("Конец вложенного цикла for" + "<br>");
}
document.write("Конец работы вложеннных циклов" + "<br><br>");
for(let i = 1, j=1; i < 5, j < 4; i++, j++) // Using multiple counters in a loop
{
    document.write((i + j) + "<br>");
}
document.write("Конец работы цикла for с несколькими счетчиками" + "<br><br>");
//==============for in=================
const website = "WebVSCode";
for(ch of website){
      
    document.write(ch + "<br>");
}
document.write("Конец работы цикла for in" + "<br><br>");
//==============for of=================
for(const person of people) {
    document.write(person + "<br>");
}
document.write("Конец работы цикла for of" + "<br><br>");
//==============while=================
let i = 1;
while(i <=5){
     
    document.write(i + "<br>");
    i++;
}
document.write("Конец работы цикла while" + "<br><br>");
//==============do while=================
let j = 1;
do{
    document.write(j + "<br>");
    j++;
}while(j <= 5)
document.write("Конец работы цикла do while" + "<br><br>");