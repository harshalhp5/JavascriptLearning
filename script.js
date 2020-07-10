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