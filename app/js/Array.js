const users = new Array("Tom", "Bob", "Jim");
let people = ["Tom", "Bob", "Jim"];
const employee = Array.of("Tom", "Bob", "Jim");
users[3] = "Din";
console.log(users);

let array = Array.from("Hello");
console.log(array);
const numbers = [1, 2, 3, 4];
array = Array.from(numbers, n=>n*n);
console.log(array);

array = Array.from({length:3}, (element, index) => 
{
    console.log(element);
    return index;
})
console.log(array);
console.log(users.length);
console.log(...users);
let man = ["Tom", "Sam", "Bob"];
let women = ["Kate", "Alice", "Mary"];
people = [...man, "Alex", ...women];
console.log(...people);
function print(first, second, third)
{
    console.log(first);
    console.log(second);
    console.log(third);
}
print(...people);

let people2 = people.slice();// глубокое копирование
people2.push("Apple");// добавить в конец массива 
console.log(people2);
people2.pop();// удолить из конца массива
console.log(people2);
people2.unshift("Apple");// добовляет в начало массива
console.log(people2);
people2.shift();// удоляет и извлекает из начала массива
console.log(people2);
people2.splice(3,1);// удоляет элемент по индексу
console.log(people2);
let people3 = man.concat(women);// обьединяет массивы 
console.log(people3);
people3 = man.join("; ");// обьединяет массива в одну строку, используя определенный разделитель
console.log(people3);
people2.sort();// сортирует массив
console.log(people2);
people2.reverse();// переварачивает массив
console.log(people2);
console.log(people2.indexOf("Kate"));// возвращают индекс
console.log(people2.includes("Kate"));// проверяет, есть ли в массиве значение


class Team extends Array
{
    constructor(name, ...members)
    {
        super(...members);
        this.name = name;
    }
}

let barcelona = new Team ("Barcelona", "Tom", "Sam", "Bob");
console.log(barcelona);
for(const person of barcelona) {
    console.log(person);
}
barcelona.push("Tim"); 