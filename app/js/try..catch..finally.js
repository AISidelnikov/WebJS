function callSomeFunc()
{
    console.log("Функция callSomeFunc");
}
try{
    callSomeFunc();
    console.log("Конец блока try");
}
catch{
    console.log("Возникла ошибка!");
    console.log(error);
}
console.log("Остальные инструкции");

class Person{

    constructor(name, age)
    {
        if(age<0) throw "Возраст должен быть положительным";
        this.name = name;
        this.age = age;
    }
    print()
    {
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}

try{
    const tom = new Person("Tom", -12);
    tom.print();
}
catch(error)
{
    console.log("Произошла ошибка");
    console.log(error);
}