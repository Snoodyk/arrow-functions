/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b) {
return a+b
}
let sum = addTwoNumbers(3,5);
console.log(sum)
// Arrow Function With Parameters
const addTwoNumbers= (a,b) =>{
    return a+b
    }
    let sum2 = addTwoNumbers(4,5);
    console.log(sum2)
// Single Line Arrow Function With Parameters
const addTwoNumbers2 =(a,b) => a+b;
let sum3 = addTwoNumbers(5,5);
    console.log(sum3)
// Implicit Returns
const saySomething = message => console.log(message)
saySomething("Hello thar!!!");
const sayHello = () => console.log("hello")
// Returning Multiple Lines
const returnMultipleLines = () => (
    	`<p>
        This is a multiline string!
        </p>`
)
console.log(returnMultipleLines())