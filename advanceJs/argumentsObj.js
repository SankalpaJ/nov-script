function add() {
    console.log('Inside add Function');
}
add();         // Inside add Function
add('Hello');  // Inside add Function

/* fun mul() ----> Mul parameters: ------- (requmts to solve).....
 if mul(a,b) ---> a * b
 if mul(a,b,c) ---> a * b * c
 if mul(a,b, c, d) ---> a * b * c * d     ---> using condtion statements....
 if more than 4 or less than 2 provide error msgs */        

 function mul() {
    if(arguments.length === 2) {
        console.log(`Multipy of ${arguments[0]} and ${arguments[1]} is:`,
            arguments[0] * arguments[1]);                 --> String formating...
    } 
    else if (arguments.length === 3) {
        console.log(`Multiply of ${arguments[0]}, ${arguments[1]} and ${arguments[2]} is: `,
            arguments[0] * arguments[1] * arguments[2]);
    }
    else if (arguments.length === 4) {
        console.log(`Multiply of ${arguments[0]}, ${arguments[1]}, ${arguments[2]} and ${arguments[3]} is: `,
            arguments[0] * arguments[1] * arguments[2] * arguments[3]);
    }
    else {
        console.log('Invaild number of Arguments...');
    }
 }
 mul();          // Invaild number of Arguments...        --->     args = []
 mul(10, 20);    // Multipy of 10 and 20 is: 200           -->     args = [10, 20]
 mul(10, 20, 30); // Multipy of 10, 20 and 30 is: 6000      -->    args = [10, 20, 30]
 mul(10, 20, 30, 40); // Multiply of 10, 20, 30 and 40 is:  240000  --->  args = [10,20,30,40]

 //----------------------------------------------------------------------------------------------------------------------------------

 // using for-loop
function mul() {
    // arguemts = [] --> so it not go inside for-loop..
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {  // here i = 0; and then argumets = 0
        res = res * arguments[i];
    }
    console.log('Multiplication Result is: ', res);
}
mul();     //  Multiplication Result is: 1

/* by using "argument object" & "spread operator" we get know how much user will pass d inputs or values as an input */