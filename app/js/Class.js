class Person
{
    static #retirementAge = 65;
    
    #name = "Unknown";
    #age = 0;
    #id;
    name;
    age;
    move(place)
    {
        console.log(`Go to ${place}`);
    }
    eat()
    {
        console.log("Eat");
    }
    print()
    {
        console.log(`Name: ${this.#name} Age: ${this.#age} retirement age: ${Person.#retirementAge} ID: ${this.#id}`);
        
    }
    constructor(persName, persAge, persId)
    {
        this.#name = this.#checkName(persName);
        this.setAge(persAge);
        this.#id = persId;
    }
    setAge(persAge)
    {
        if(persAge > 0 && persAge < 110)
        {
            this.#age = persAge;
        }
    }
    setName(persName)
    {
        this.#name = this.#checkName(persName);
    }
    #checkName(name)
    {
        if(typeof name === "string")
        {
            return name;
        }
    }
    static printClassInfo()
    {
        console.log(this.#retirementAge);
    }
    printName()
    {
        return this.#name;
    }
    printAge()
    {
        return this.#age;
    }
    static calculateRestAges(person){
        if(this.#retirementAge > person.#age){
            const restAges = this.#retirementAge - person.#age;
            console.log(`До пенсии осталось ${restAges} лет`);
        }
        else console.log("Вы уже на пенсии");
    }
    static setRetAge(age)
    {   
        this.#retirementAge = age;
    }

    set age(value)
    {
        if(value > 0 && value < 110)
        {
            this.#age = value;
        }
    }

    get age()
    {
        return this.#age;
    }

    set name(value)
    {
        if(typeof value === "string")
        {
            this.#name = value;
        }
    }

    get name()
    {
        return this.#name;
    }

    set id(value)
    { 
        this.#id = value;
    }
}
const tom = new Person();
tom.setAge(23);
tom.setName("Tom");
tom.move("Hosputal");
tom.eat();
tom.print();
Bob = new Person("Bob", 25);
Bob.print();
Person.setRetAge(70);
Person.printClassInfo();
Person.calculateRestAges(tom);
tom.id = "001";
tom.print();




