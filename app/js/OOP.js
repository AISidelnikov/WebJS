let userTom = new Object();
userTom.name = "Tom";
userTom.age = 23;
console.log(userTom.name);
console.log(userTom.age);

let userBob = {
        name: "Bob",
        age: 26,
        display: function()
        {
            document.write("name: "+this.name+"<br>");
            document.write("age: "+this.age+"<br>");
        }
};
console.log(userBob.name);
console.log(userBob.age);

let name = "Alex";
let age = 20;
let userAlex = {name, age,
display()
{
    document.write("name: "+this.name+"<br>");
    document.write("age: "+this.age+"<br>");
},
move(place)
{
    console.log(this.name,"gose to", place);
},
};
console.log(userAlex.name);
console.log(userAlex.age);

let teacher = {userAlex, course: "JavaScript"};
console.log(teacher.userAlex);
console.log(teacher.course);

userTom.display = function()
{
    document.write("name: "+userTom.name+"<br>");
    document.write("age: "+userTom.age+"<br>");
}
userTom.display();
userBob.display();
userAlex.display();
userAlex.move("the shop");

let userJim = {};
userJim["name"] = "Jim";
userJim["age"] = 25;
userJim["display"] = function()
{
    document.write("name: "+this.name+"<br>");
    document.write("age: "+this.age+"<br>");
};
userJim["display"]();


function createObject(propName, propValue)
{
    return {
        [propName]: propValue,
        print(){
            console.log(`${propName}: ${propValue}`);
        }
    };
}
let Bill = createObject("name", "Bill");
Bill.print();

delete userTom.name;
console.log(userTom.name);

Object.freeze(userAlex);
userAlex.name = "Fill";
userAlex.display();

const personData = [["name", "Tom"],["age", 26]];
const person = Object.fromEntries(personData);
console.log(person.name);
console.log(person.age);


var country = {
 
    name: "Германия",
    language: "немецкий",
    capital:{
     
        name: "Берлин",
        population: 3375000,
        year: 1237
    }
};
console.log("Столица: " + country.capital.name);

const tom = {name: "Tom", age: 37};
const bob = Object.assign({},tom);
bob.name = "Bob";
bob.age = 24;
console.log(bob.name);
console.log(bob.age);

console.log("name" in userAlex);
console.log(userAlex.hasOwnProperty("firstname"));

for (const prop in userJim)
{
    console.log(prop, " : ", userJim[prop]);
}

for (const prop of Object.entries(userBob))
{
    document.write(prop + "<br>");
}

document.write(Object.keys(userAlex));
document.write("<br>");
document.write(Object.values (userAlex));
document.write("<br>");

function createUser(pName,pAge)
{
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
        },
        driveCar: function(car){
            document.write(this.name + " ведет машину " + car.name + "<br/>");
        }
    }
}

function createCar(mName, mYear){
    return{
        name: mName,
        year: mYear
    };
};

var Jac = createUser("Jac", 14);
Jac.displayInfo();
var bently = createCar("Бентли", 2004);
Jac.driveCar(bently);


function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function(){
        document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
    };
};

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
        document.write(this.name + " ведет машину " + car.name + "<br/>");
    };
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
};
 
var Sam = new User("Sam", 26);
Sam.displayInfo();
var bently = new Car("Бентли", 2004);
Sam.driveCar(bently);

console.log(bently instanceof Car)

User.prototype.hello = function(){
    document.write(this.name + " говорит: 'Привет!'<br/>");
};
User.prototype.maxAge = 110;
Sam.hello();


function User2 (name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + _age + "<br>");
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
 
var Din = new User2("Том", 26);
console.log(Din._age); 
console.log(Din.getAge()); 
Din.setAge(32);
console.log(Din.getAge()); 
Din.setAge("54"); 

function User3 (name, age) {
    this.name = name;
    this.age = age;
}
var Chip = new User("Chip", 26);
function display(){
    console.log("Ваше имя: " + this.name);
}
display.call(Chip); 




function User3 (name, age) {
    this.name = name;
    this.age = age;
    this.go = function(){document.write(this.name + " идет <br/>");}
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
}
User3.prototype.maxage = 110;
 

function Employee(name, age, comp){
    User3.call(this, name, age);
    this.company = comp;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company + "<br/>");
    };
}
Employee.prototype = Object.create(User.prototype);
 
var Deil = new User3("Том", 26);
var bill = new Employee("Билл", 32, "Google");
Deil.go();
bill.go();
Deil.displayInfo(); 
bill.displayInfo(); 
console.log(bill.maxage);

