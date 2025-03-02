// 4 types of functions

// 1. Function w/o input & w/o return
 function add() {
    var a = 10;
    var b = 20;
    console.log("Add is: ", a+b);
 }
 add();

 // 2. Functions with input and w/o return
 function sub(x,y) {
    console.log("Subtract is: ", x-y);
 }
 sub(200,100);

 // 3. Functions w/o input and with return
 function mul() {
    var p = 300;
    var q = 100;
    return p * q;
 }
 let res = mul();
 console.log("Product is: ", res);

 // 4. Functions with i/p and with return
 function div(a,b) {
    return a / b;
 }
 console.log("Division is: ", div(500,10));