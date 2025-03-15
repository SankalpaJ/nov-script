// we have used func decln..
// function hositing = function declarations [Java doesn't support this feature..]
// it z d process that d funtions can be hoisted at d top of func delcartion at d time of memory alloctaion phase(MA)...
// it can be access before & after its declartions anywhere in program.....
// GLOBAL SCOPE:-- any variables r functionns not declared inside a class it present in outside of class... Ex(add(), sub())..

add()
sub()

function sub(){
    // console.log(x + y);   // Cannot access 'x' before initialization => TDZ
    let x = 20;
    var y = 10;
    console.log(x + y);  // 30
}
function add(){
    console.log(a + b);  // NaN = [undefined + undefined] bcz they declar using 'var' keyword...
    var a = 50;     
    var b = 10;
    console.log(a + b);   // 60
}                       // after these all executed then again it goes back to add() or sub()...
