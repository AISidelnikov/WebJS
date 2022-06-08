var tom = "Tom";
var bob = String("Bob");
console.log(tom.length);// Длина строки
console.log(bob.repeat(3));// Повторение строки
console.log(bob.indexOf("o"));// Для поиска в строке некоторой подстроки
console.log(bob.includes("ob"));// возвращает true, если строка содержит определенную подстроку
var  helloWrold = "Hello World!!!";
var world = helloWrold.substring(6, 11);// Для того, чтобы вырезать из строки подстроку
console.log(world);
var hello = helloWrold.slice(0, 5);// Для того, чтобы вырезать из строки подстроку
console.log(hello);
console.log(hello.toUpperCase());// для перевода в верхний регистр
console.log(hello.charAt(1), hello.charCodeAt(1));//возвращает символ возвращает; числовой код этого символа
var space = "  space   ";
console.log(space);
console.log(space.trim());// Для удаления начальных и концевых пробелов в стоке
console.log(hello.concat(world));// объединяет две строки
console.log(helloWrold.replace("World", "Team"));// заменяет первое вхождение одной подстроки на другую
var message = "let me speak from my heart";
var messagePart = message.split(" ");// разбивает строку на массив подстрок по определенному разделителю
console.log(messagePart);
console.log(message.startsWith("let"));// возвращает true, если строка начинается с определенной подстроки
console.log(message.endsWith("let"));// возвращает true, если строка начинается с определенной подстроки
let hello2 = "hello".padStart(8);  
console.log(hello2);
hello2 = "hello".padEnd(11, " world");// растянуть строку на определенное количество символов и заполнить строку слева и справа
console.log(hello2);

console.log(`Hello ${tom} and ${bob}`);

const myExp1 = /hello/i;
const myExp2 = new RegExp("hello");
const  result = myExp1.test(helloWrold);
console.log(result);

var initalText = "let me speak from my heart";
var exp = /\s/;
var res = initalText.split(exp);// разделение строк
res.forEach(vall => console.log(vall));
exp = /m[a-z]*/gi;
res = initalText.match(exp);// поиск в строке
res.forEach(vall => console.log(vall));

let PhoneNumber = "+1-234-567-8901";
let myExp = /\d-\d\d\d-\d\d\d-\d\d\d\d/;
PhoneNumber = PhoneNumber.replace(myExp,"00000000000");
document.write(PhoneNumber);

initalText = '<img src= "picture.png"/>';
myExp = /[a-z]+\.(png|jpg)/i;
res = initalText.match(myExp);
res.forEach(function(value, index, array)
{
    console.log(value);
})

myExp = /(\d{3})-(\d{2})-(\d{2})/;
res = myExp.exec("2022-04-06");
console.log(res[0]);

myExp = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
res = myExp.exec("2022-04-06");
console.log(res.groups);
console.log(res.groups.year);