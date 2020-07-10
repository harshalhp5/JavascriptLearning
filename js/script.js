//array
let selectedcolors = ['red', 'blue','yellow'];
let name = 'Rupesh';

//function
function greet (){
    console.log('Hello Harshal');
}
greet();
console.log('Hello');

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

//function using parameter and argument
function greet1(name,lastname)
{
    console.log('Hello ' + name +' ' + lastname );
}
greet1('Harshal1' , 'Pohare');
greet1('Rupesh' , '');