const userName = 'Max';
let age = 30;

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
const add = (a: number, b: number) => a + b; //Forma breve se si ha una sola espressione
console.log('add' , add(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');
if(button){
    button.addEventListener('click', event => console.log('event' , event))
}
printOutput(add(5, 2));