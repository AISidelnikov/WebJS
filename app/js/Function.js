//===========Hello World===========
function hello()
{
    console.log("hello");
}
//======Variables and constants as functions=======
let massage = hello;
massage();
function goodMorning()
{
    console.log("goodMorning");
}
massage = goodMorning;
massage();
function goodEvening()
{
    console.log("goodEvening");
}
massage = goodEvening;
massage();
//=========Anonymous functions=============
let mass = function()
{
    document.write("Anonymous functions<br>");
}
mass();
//=============Function Parameters=============
function print(massage)
{
    document.write(massage);
}
print("Function Parameters<br>")

function sum1(a, b)
{
    console.log("Function Parameters; sum1: " + a + ' + ' + b + ' = ', a + b);
}
sum1(2, 3);
//=============Optional parameters and default values================
function sum2(x, y )
{
    if(x === undefined) x = 5;
    if(y === undefined) y = 8;
    const res = x + y;
    console.log("Optional parameters and default values; sum2: " + x + ' + ' + y + ' = ', x + y);
}
sum2();
function sum3(x = 8, y = x + 5)
{
    const res = x + y;
    console.log("Optional parameters and default values; sum3: " + x + ' + ' + y + ' = ', x + y);
}
sum3();
//==============Array of arguments==============================
function sum4(){
    let result = 0;
    document.write("Transmitted parameters; sum4:<br>");
    for(const n of arguments)
    {
        document.write(n + "<br>");
        result += n;
    }
    document.write("Array of arguments: " + result + "<br>");
}
sum4(6, 4, 5);
//===============An indefinite number of parameters================
function display(season, ...temps){
    document.write("An indefinite number of parameters; display: "+season + ":<br>");
    for(index in temps){
        document.write(temps[index] + "<br>");
    }
}
display("Summer", 20, 23, 31);
//================Functions as parameters=========================
function sum(x, y)
{
    return x + y;
}
 
function subtract(x, y)
{
    return x - y;
}
 
function operation(x, y, func)
{
    const result = func(x, y);
    document.write("Functions as parameters; operation:<br>")
    document.write("Result: " + result + "<br>");
}
operation(10, 6, sum);
//================Returning a function from a function================
function menu(n)
{
    if(n==1) return function(x, y){ return x + y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return function(){ return 0;}
}
let action = menu(1);
result = action(2, 5);
document.write("Returning a function from a function; menu:<br>" + result + "<br>");
//====================Scope of variables====================
document.write("var - может использоваться вне блока<br>");
document.write("let и const - не могут использоваться вне блока<br>");
document.write('"use strict" - строгий режим, не позволяет создавать переменные без let или var или const <br>');
//======================Closures===========================
function outer()
{
    let out = 5;
    console.log("Closures; function outer:")
    function inner()
    {
        out++;
        console.log(out);
    }
    return inner;
}
let fn = outer();
fn();
fn();
fn();

function multiply(n){
    console.log("Closures; function multiply:")
    return function(m){ return n * m;};
}
var fn1 = multiply(6);
var result1 = fn1(6); 
console.log(result1); 
 
var fn2= multiply(4);
var result2 = fn2(6); 
console.log(result2); 
//=================Immediately Invoked Function Expression===================
(function()
    {
        document.write("Immediately Invoked Function Expression<br>");
    }
());

(function (n){
     
    var result = 1;
    for(var i=1; i<=n; i++)
        result *=i;
        document.write("Факториал числа " + n + " равен " + result + "<br>");
}(4));

//===============Pattern Module=======================
let calculator = (function()
{
    let data = { number: 0};
     
    return {
        sum: function(n){
            data.number += n;
        },
        subtract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
}
)();
calculator.sum(10);
calculator.sum(3);
console.log("Pattern Module; sum:");
calculator.display();   
calculator.subtract(4);
console.log("Pattern Module; subtract:");
calculator.display(); 
//==================Arrow functions=====================
const square = (n) => {
    let result = n * n;
    console.log(result);
}
console.log("Arrow functions:");
square(5);