//Functions are block of code to perform a specific task and it executed when invoking(calling) it


//function declaration:

function print(){

    console.log("Hello");
}

print();        //invoking the function

//funcion with return type:

function add(){
     
    let numOne=12;
    let numTwo=15;
    let total=numOne+numTwo;

    return total;
}

let result=add();

console.log(result)


//function with parameters:

function sub(a,b){

    let c=a-b;

    console.log(c)

}

sub(10,5);



