// 1. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


function validateInteger(number){

    if(!Number.isInteger(number)){
        throw new Error('inavalid number. Please input an integer.') ; 
    }
    console.log("The number is valid.") ; 
}

let num = prompt("Enter an ineger : ") ; 

validateInteger(num) ; 

// trying it out :
try{
    validateInteger(12) ;
    validateInteger(12.2) ; 
}catch(error){
    console.log("caught an error :( ")
}