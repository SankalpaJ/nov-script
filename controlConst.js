// if - else:----
// var age = 19
// if (age > 19) {
//     console.log("Age is greater than 18..")
// }
// else {
//     console.log("Age is not greater than 18..")
// }

// switch:-----
// break :-- if particular statement z exectued it will exit from d loop...
// let day = "Tuesday"
// switch(day) {
//     case 'Monday':
//         console.log("Start of the work week!");
//         break;
//     case 'Tuesday':
//         console.log("It's Tuesday");
//         break;
//     case 'Wednesday':
//         console.log("Wednesday...");
//         break;
//     case 'Friday':
//         console.log("Almost weekend");
//         break;
//     default:
//         console.log("Just another day..");
// }

// for loop:---------
// for(var i = 0; i <= 5; i++){
//     console.log("Count is:", i);  // prints 1 to 5 count
// }

// while loop:---------
// let count = 1;
// while (count <= 5) {
//     console.log("Count is:", count);  // prints 1 to 5 count
//     count++;
// }

// do while loop:---------
// let number = 1;
// do {
//     console.log("Number: ", number);
//     number++;
// } while(number <= 3);     // prints 1 to 3 number

// for of loop : returns value of each item.. In seprate lines----------
// var arr = [100, 200, 300, 400, 500]
// for (var i of arr) {
//     console.log(i);    // 100, 200, 300, 400, 500
// }

// for in loop: returns index of each item..---------
// var arr1 = ['Apple', 'Banana','Mango']
// for(var i in arr1) {
//     console.log(i);   // 0, 1, 2
// }
 
// forEach:-  accepts function as parameter(callback fun)------
// var arr3 = [10, 20, 30, 40]
// arr3.forEach((ele, index)=>{
//     console.log(ele, index);
// })                                 // 10 0, 20 1, 30 2, 40 3[index val]

// break--------
// for(let i = 1; i <= 3; i++){ 
//     if(i === 3) {
//         break;
//     }
//     console.log(i);    
// }                        // 1 2
 
// continue----
for(let i = 0; i <= 5; i++){
    if(i === 3) {
        continue;
    }
    console.log(i);   
}                          // 0 1 2 4 5 ['3' will be sikkped]