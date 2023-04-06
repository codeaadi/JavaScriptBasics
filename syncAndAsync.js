// JavaScript support sync and Async 
// sync i.e. blocking
function greet(){
    console.log("Hi,");
    console.log("I`m a Student");
    console.log("I`m studing javaScript code blocking");
}
greet();

// JavaScript Also Support async
// Async i.e. non-blocking
function greet2(){
console.log("Hi,");
setTimeout(() => {
    console.log("Hey,I left Behind")
}, 3000);
console.log("hello,It's Async Exmple");
}
greet2();