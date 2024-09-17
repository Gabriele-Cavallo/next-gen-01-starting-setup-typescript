// const userName = 'Max';
// let age = 30;

// function add(a: number, b: number){
//     let result;
//     result = a + b;
//     return result;
// }

// if(age > 20){
//     // var isOld = true;
//     let isOld = true;
// }

// console.log('isOld' , isOld); // Errore perchè isOld non esiste al di fuori dello scope del suo block

// const add = (a: number, b: number) => {
//     return a + b;
// } 
// const add = (a: number, b: number = 1) => a + b; //Forma breve se si ha una sola espressione
// console.log('add' , add(2, 5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');
// if(button){
//     button.addEventListener('click', event => console.log('event' , event))
// }
// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log('activeHobbies' , ...activeHobbies);

const person = {
    firstName: 'Max',
    age: 30
};
console.log('person' , person);

const copiedPerson = {...person};
console.log('copiedPerson' , copiedPerson);
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log('addedNumbers' , addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);