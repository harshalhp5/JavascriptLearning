//array
let selectedcolors = ['red', 'blue','yellow'];
let name = 'Rupesh';

//function
function greet (){
    console.log('Hello Harshal');
}
greet();



//function using parameter and argument
function greet1(name,lastname)
{
    console.log('Hello ' + name +' ' + lastname );
}
greet1('Harshal1' , 'Pohare');
greet1('Rupesh' , '');


// Playing with HTML
//let result = document.getElementById("result");
function validateEmail(email){
    if(email.includes('@')){
        if(email.includes('.')){
            //result.innerText = true;
            return true;
        }
    }

    return false;
}

console.log(validateEmail('hp@gmail.com'));


// Javascript strings

const message = 'This is a string';
const message1 = 'This is how we put \' in JS and \n breaking line';

//String using Template

const message2 = `This needs no \ backslash to define 'single quotes' we can directly use it.
I simply pressed enter and Voila we are on next line`;

// Template with PLACEHOLDERS !!

const name1 ='Harshal';
const message3 = 'Hi ' + name1 + '\n So glad you\'re actually learning this.' + '\n Regards,' + '\n Yourself';
const another =
`Hi ${name1},

So glad you're actually learning this.

Regards,
Yourself`;

// LOOOOOOOOOOPSSSSS !!

for(let i=0; i<5; i++) {
    console.log('loooooop check' , i);
}
 // Using Loop to Display Odd & Even numbers

console.log('These are Odd Number till 10');
for(let i=1; i<=10; i++) {    
     if(i % 2 !== 0) console.log(i);

}

console.log('These are Even Number till 10');
for(i=1; i<=10; i++) {
      if(i % 2 == 0) console.log(i);
}

console.log('Printing Backwards :');
for(let i=10; i>=0; i--){
      console.log(i);  
}


console.log('Print 12345 in Decreasing order :');
for(let i=0;i<5;i++){
    let print='';
    for(let j=1;j<=(5-i);j++){
        print=print+j;
    }
    console.log(print);
}


console.log('Print ***** in Decreasing order :');
for(let i=1; i<6; i++){
    let print='*';
    for(let j=1; j<=(5-i); j++){
        print=print+'*'
    }
    console.log(print);
}


console.log('Print ***** in Increasing order :');
for(let i=0; i<5; i++){
    let print = '*';
    for(let j=1; j<=i; j++){
        print = print + '*'
    }
    console.log(print);
}


console.log('Print numbers starting from 5 in decreasing order :');
for(let i=0; i<5; i++){
    let print = '';
    for(let j=5; j>=5-i; j--){
        print = print + j;
    }
    console.log(print);
}
 // Filtering an Array or dislaying only Positive numbers :

console.log('Filtering an Array or displaying only Positive numbers :'); 
const num =[1,2,3,-4,-8,9,10];

const filtered = num.filter(n => n>= 0);
console.log(filtered);


/*
const filtered = num.filter(function(value){
    return value >= 0;
    
}); */

// Map Method - used to call every item on Array separately
/*
const items = filtered.map(n=> ({value : n}) );

console.log(items);
*/

console.log('Cleaner way to use Array Map Func :');
console.log('this is returning numbers greater than 3 in same array using another filter func :')
const items = num
    .filter(n => n >= 0)  
    .map(n=> ({ value: n}))
    //map func can have another filter it basically overrides first Map func
    
    .filter(obj => obj.value > 3)
    .map(obj => obj.value);
    
    
console.log(items);


// another Map Array Example :
console.log('Another Array map() example : ');
const colors = ['red', 'green', 'blue'];
const items1 = colors.map(color => `<li>${color}</li>`);
console.log(items1);


// Array REDUCE  

console.log('Sum of all the Numbers Method 1:');
let sum = 0;
for (let n of num)
sum = sum + n;

console.log(sum);

console.log('Sum of all the Numbers using REDUCE :');
const sum1 = num.reduce(
    (sum, i) => sum + i
);
console.log(sum1);

/* 
1 : OBJECT DESTRUCTURING :
 const address = {
     street: '',
     city : '',
     country : ''
 };

when calling these objects we need to define each object separately
like :

const street = address.street;
const city = address.city;
const country = address.country;

or we can clean the code after ES6 and directly use :

const {street, city, country} = address; 

*/

// Class: Car, Employee, Fruits - Class is a template
// Object: Lamborgini, Rupesh, Apple - Object is a runtime entity of class

// Constructor , Class, Inheritance :

console.log('Constructor , Class, Inheritance :');
class Person {
    // Constuctor is a default function in every class,
    // which is generally used to initialise the variable.
    // When you create a class object, constructor function is called by default.
    // this : is used to refere the calling/current object.
    constructor (name2) {
        this.name2 = name2;
    }
    
    walk() {
        console.log('walk');
    }
}
harshal = new Person('Harshal');
console.log(harshal.name2);

// Inheritance
class Teacher extends Person {
    constructor(name2, degree) {
        super(name2);
        this.degree = degree ;

    }

    teach() {
        console.log('teach');
    }
    
}

const teacher = new Teacher('Harshal', 'BE Comp');


console.log( `MODULARITY : 
A program's Modularity is increased by separating each class on a separate Document. 
and these pages / documents are linked to each other using "import" "export" functions
import { Teacher } from "./teacher";
export is set in front of the Classes that are to be imported

export class teacher extends Person {
}` 
);


