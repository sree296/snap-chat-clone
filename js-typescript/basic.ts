let age: number;
age = 25;
console.log(age);

let userName : string;
userName = "Sreeni";
console.log(userName);

let isTs: boolean;
isTs = true;
console.log(isTs);

let hobbies : string[];
hobbies = ['Music', 'Sports', '5'];
console.log(hobbies);

let person: {
    name : string;
    age: number;
    skills: string;
};

person = {
    name : 'Sreeni',
    age : 32,
    skills : 'TypeScript'
}
console.log(person);

//Union Type
let company : string | number = 'React';
company = 89;
console.log(company);

//Using Alias

type Car = {
    make : string;
    model : string;
    year : number;
}

let Audi : Car;

Audi = {
    make : 'Audi',
    model : 'A3',
    year : 2021
};
console.log(Audi);