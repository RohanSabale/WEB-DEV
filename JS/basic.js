// where does jaava script runs?
// browser have java script engine ,
//     firefox : spidermonkey
//     chrome : V8

//     in 2009 took opensource engine in chrome and embedded in cpp program 
//     that called node , by this we can run js outside the browser now.

//     difference between js and scmascript?
//     ecma  - specification
//     js - programming language 


//Variables - we use variable to store data temporarily

//let name ;      // variables  that we define are undefined by default 
//in javascipt

// let name  = "rohan";
// console.log(name);

// rules for naming variables.
//cannot be reserved keyword 
// should be meaningful
// cannot start with a number(1name)
// cannot contain a space or hyphen (-)
// they are case sensitive
// declare each variable in separate line (best practice)

// constant - values cannot be changed 
//const interestRate = 0.2
// if you dont want to reassign const should be default choice

// primitive .value types
//1. string
//2. Number
//3. Boolean
//4 . undefinded
// 5 . null

// let name  = "Rohan";    // sting literal
// let age = 21;               // number literal
// let isAproved  = false;     // boolean literal
// let firstName  ;
// let lastName  = null;           // here we want to explicitly clear the value


// reference types
// 1. object 
// 2.array
// 3.function


// Dynamic typing
// static - declare valriable , cannot be changed 
// dynamic - declared variable can be chaged in run TimeRanges
// js is dynamic language   (string to number like)

// typeof  - gives the datatype
// we dont have integer and float , we have only integer

// objects 
                    

                    let person = {          // person is object
                        name :'Rohan',
                        age:21
                    };

                    //console.log(person);                //{ name: 'Rohan', age: 21 }

                    // Dot notation
                    // person.name = 'Sabale';     // changing the name of person object
                    // console.log(person.name);       //Sabale

                    // bracket notation
                    // person['name'] = 'sabale';
                    // console.log(person.name);       //sabale


// Arrays

                        let selectedColors = ['red' , 'blue'];        // array leterals , 
                        //console.log(selectedColors);        //[ 'red', 'blue' ]


// Functions        //set of statements that perform task or calcuates value

                        function greet(name)        //  parameter
                        {
                            console.log('hello ' + name);
                        }           // no semicolon at last of function

                        //greet('rohan');            // argument    //hello rohan





