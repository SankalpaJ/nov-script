// function Declaration:-----

function add(a,b){
    console.log(a+b);
}
add(100,200);

// function expession:------
// here function() r block z completly assigned to sub variable, 
//  so insted of console.log we can directly we call sub().....
const sub = function(a,b) {
    console.log(a-b);
}
sub(100, 20);

// Arrow function:-------

const mul = (a,b) => {
    console.log(a * b);
}
mul(10, 20);

// when ever we have 1 statement to return their z no need to use of braces...

//const msg = ()=> "Hello World...";
//let res = msg();
//console.log(res);

const msg = ()=> {return "Hello world..."}
let res = msg();
console.log(res);
