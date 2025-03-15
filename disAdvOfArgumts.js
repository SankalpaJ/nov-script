// 1. Arguments obj can't be used with arrow functioons...

const add = () => {     // insted put this function add(){ }
    let res = 0;
    for (let i = 0; i < arguments.length; i++){
        res = res + arguments[i];
    }
    console.log('Addtion Result is: ', res);
}
add();
add(10, 20);
add(10, 20, 30);            // Errorssss.............

// 2. this can't be used with filter, map, reduce, forEach...

function add() {
    let res = arguments.reduce((acc, ele) => acc * ele, 1);
    console.log(res);
}
add();
add(10, 20);
add(10, 20, 30);          // argumemnts.reduce is not a func....
