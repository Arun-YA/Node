//JavaScript Variables can be declared in 3 ways:

//1.let - Only use let if you can't use const
 //2.var- Only use var if you MUST support old browsers
 //3.const- Always use const if the value should not be changed




function declareonly(){

    var a;             

    let b;            

   // const c;           //(SyntaxError: Missing initializer in const declaration)
                      
    const c=10;         //must initialise the value.

    console.log(a);     //Default value for a variable is "undefined".

};

//declareonly();

function redeclare(){

    var a=10;
    let b=11;
    const c=22;

//redeclaring the variables

var a=15;       //we can redeclare a variable using var


//let b=16;     //(SyntaxError: Identifier 'b' has already been declared)
               //we cannot redeclare a variable using let

//const c=27;     //(SyntaxError: Identifier 'c' has already been declared)
                //we cannot redeclare a variable using const

};

//redeclare();

function reassign(){

    var a=10;
    let b=11;
    const c=22;

    //reassgning the values

    a=15;           
    b=20;
    c=25;                  //we cannot reassign a value for the const.     

    console.log(a); 
    console.log(b); 
    //console.log(c);     //  TypeError: Assignment to constant variable.
  
}

//reassign();

//To check the scope in a block
if(true){

    var name="Arun";            //var- Global scope
    let age=21;                 //let- Local scope
    const employeeId=4467;      //const-Local scope

}

console.log(name);
//console.log(age);           //ReferenceError: age is not defined
//console.log(employeeId);     //ReferenceError: age is not defined



//To check the scope in the function:

function testScope(){

    var fName="Arun";              //var- Local scope
    let lName='Raj';               //let- Local scope
    const contactNumber=4467;      //const-Local scope

}

//console.log(fName);           //ReferenceError: fName is not defined
//console.log(lName);           //ReferenceError: lNameis not defined
//console.log(contactNumber);     //ReferenceError: contactNumber is not defined


