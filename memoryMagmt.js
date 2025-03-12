// var keyword:---------------
// 1. d variable which are declared using var will be initialized
//        with 'undefined' at d time of memory allocation phase...
// 2. as soon as JS will be executed, then global exection record will be created...
// 3. Global exection record will be divided into:--
//         a) Memory allocation phase..(var, func, obj declaration...)
//         b) Code exection phase..(assined value..)

console.log(a)  // undefined
var a = 20;
console.log(a);      // 20

// let keyword (TDM):-- "Uninitialized variables"---------
// 1. d variable which are declared using let will be initialized
//        as 'Temporal Dead Zone' at (a)...
// 2. variables presented inside TDM can't be accessed..
// 3. if we try it shows d error..
 

console.log(a); // Error  
let a = 500;
console.log(a);       // 500

// const var(TDM):----------------
// 1. same  as let var..
console.log(a);          // Reference Error  
const a = 500;
console.log(a);         // 500
