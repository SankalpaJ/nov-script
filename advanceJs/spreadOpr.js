// we can achive func overloading using 2 key concepts: 
//                  1. Spread operator...(used to collect all d arguments in an actual array)
//                       -> it z available in both 'regular function' & 'arrow function'...
//                  2. arguments object...(its z array-like obj but not an array but behaves like array)
//                        -> it z  only available in 'regular funtion'

const add = (...args) => {   // here for user defined(argumets) as (args) write like this...
    let res = args.reduce((acc, ele) => acc * ele, 1);
    console.log('result is: ', res);
}
add();          // Result is: 1    ---> args = []
add(10, 20);    // Result is: 200  ---> args = [10, 20]
add(10, 20, 30); // Result is: 6000 --> args = [10, 20, 30]

function mul(...args) {
    let res = args.reduce((acc, ele) => acc * ele, 1);
    console.log('Multiply is: ', res);
}
mul();
mul(10, 20);
mul(10, 20, 30);