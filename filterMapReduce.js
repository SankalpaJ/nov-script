// filter() :-- Array method
var arr1 = [10,11,12,13,14,15]
var newArray = arr1.filter(function(ele){   // filter() accepts parameters as function() ,, it accepts either 1 r 2 r 3 parametrs as i/p...
    if(ele % 2 === 0) {
        return ele;
    }
})
console.log('Original Array:', arr1);   // Original Array: [ 10, 11, 12, 13, 14, 15 ]
console.log('Even ele in arrya are:', newArray);   // Even ele in arrya are: [ 10, 12, 14 ]

// filter() :--- using arrow fun(=>):-----
var arr1 = [2, 4, 3, 6];
var newArray = arr1.filter((ele) =>ele  % 2 === 0);
console.log(newArray);          // [ 2, 4, 6 ]
// ------------------------------------------------------------------------------------

// map() :-- it also accepts fun() as parameter..
//array.map(function(ele){})
// var array = [1,2,3,4,5,6]
// var sq_arr = array.map(function(ele) {
//    return ele * ele;
// })
// console.log('Orginal Arrya:', array);
// console.log('Square Array:', sq_arr);

// map() :--- using arrow fun(=>):-----
var array = [12, 34, 55, 23, 10]
var sq_arr = array.map((ele) => ele * ele);
console.log('Orginal Arrya:', array);
console.log('Square Array:', sq_arr);
// -----------------------------------------------------------------

// reduce():--- it accepts function as parameter and it accepts 2 parameters...
// reduce(function(acc,ele){code}) :-- syntax.....
// using for-loop
// var array = [1,2,3,4]
// var sum = 0;
// for(var i = 0; i <= array.length-1; i++) {
//    sum = sum + array[i];
// }
// console.log("The sum is:", sum);         //The sum is: 10

// or using function()
// var arr = [1,2,3,4]
//var sum = arr.reduce(function(acc,ele){
//    return ele + acc;
//  },0);
// console.log("Sum is: ", sum)

// ------------------
// reduce() using callback function...

var arr = [1,2,3,4]
var sum = arr.reduce((acc,ele)=>ele + acc,0);
var product = arr.reduce((acc,ele)=> ele * acc,1);
console.log("sum is:", sum);                // sum is: 10
console.log("product is:",product);          // product is: 24





