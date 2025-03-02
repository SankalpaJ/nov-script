var array = [10, 11, 2, 4, 3]
array.forEach((ele,index,arr) => console.log(ele, index, arr));

// filter
console.log(array.filter((ele) => ele % 2 === 0));    // [ 10, 2, 4 ]

// map
console.log(array.map((ele) => ele * ele));     // [ 100, 121, 4, 16, 9 ]

// reduce
console.log(array.reduce((acc,ele) => acc * ele, 1));    // 2640
console.log(array.reduce((acc,ele) => acc + ele, 0));