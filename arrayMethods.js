//        to print even num
// var arr1 = [10, 34,35,33,43,20]

// for (var i = 0; i <= arr1.length-1; i++) {
//    if(arr1[i] % 2 == 0) {
//        console.log(arr1[i]);
//    }
//  }


//     to print odd num
//  var arr2 = [20, 30, 33, 43, 22, 10]

// for (var i = 0; i <= arr2.length-1; i++) {
//    if(arr2[i] % 2 != 0) {
//        console.log(arr2[i]);
//    }
//   }

// array operations

var arr3 = [10, 30, 40]
arr3.push(50);         // append ele at end of array
console.log('After push: ', arr3);  // [10, 30, 40, 50]

arr3.unshift(60);     // append ele at 0th index
console.log('After unshift: ', arr3);  // [60, 10, 30, 40, 50]