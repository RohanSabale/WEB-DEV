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



// Callback functions
                                // functions are first class citizens in js , we can take function and pass  into another function
                                // the function we pass is an call back function.
                                // it gives access to whole asynchronous world in the synchronous single threaded language.

                                // if any operation blocks the call stack that is known as blocking the main thread.

                              

                                function x()
                                {
                                    
                                }
                                x(function y())     // y is an callback function
                                {
                                    
                                }

     
// Event loop
                                
                                

                                
// Road map
// 1. Basics of the language
//                                         javascript lexical structure
//                                         javascript expressions
//                                         javascript types 
//                                         javascript variables
//                                         javascript math oeprators
//                                         javascript functions 
//                                         javascript immediately - invoked function expressions IIFE 
//                                         this
//                                         javascript arrow functions
//                                         javascript loops
//                                         javascript loops and scope 
//                                         javascript arrays
//                                         javascript template literals 
//                                         javascript semicolons
//                                         strict mode 

// 2. Built in objects
//                                 javascript dates 
//                                 the math object 
                        
// 3. asynchronous programming 
//                                 asynchronous programming and callbacks
//                                 javascript timers 
//                                 javascript promises
//                                 async and await

// 4. events
//                                 the javascript event loop
//                                 javascript events

// 5. data structure
//                                 the javascript map data structure
//                                 the javascript set data structure
        
// 6 . Advanced topics 
                                    
//                                     JavaScript Functional Programming
//                                     Efficiently load JavaScript with defer and async
//                                     CORS
//                                     JavaScript Closures
//                                     JavaScript Regular Expressions
//                                     Unicode in JavaScript


// ** How tos 
                                
//                                 Generate random and unique strings in JavaScript
//                                 How to inspect a JavaScript object
//                                 How to trim the leading zero in a number
//                                 How to replace all occurrences of a string
//                                 How to check if an object property is undefined
//                                 How to append an item to an array
//                                 How to remove a property from an object
//                                 How to get the current timestamp
//                                 How to convert a string to a number
//                                 How to format a number as currency
//                                 How to uppercase the first letter of a string
//                                 How to deep clone an object
//                                 How to remove an item from an array
//                                 How to check if a string contains a substring

                            
                                        
                                        