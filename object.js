// Data Types: Object, String, number, boolean, null, undefined,
// Obejects : 1. JSON Obj {Key: value pair},
//            2. Array Obj [ele1, ele2, ele3, ....],
//            3. Functions

const s1 = {
    Name: "Priya",
    Age: 24,
    Fees_paid: 3400.43,
    Work_experience: {
        XYZ: '3 Months',
        ABC: '12 Months'
    },
    Marks: {
        Maths: 76,
        Science: 87,
    },
    Percentage: ['Sem-I: 76', 'Sem-II: 80', 'Sem-III: 85'],
    Performance: ()=> console.log('Good'),
}
console.log(s1, typeof s1);                   // Results complete dictnory as o/p
console.log(s1.Name, s1.Age, s1.Fees_paid);     // for specific data as o/p
console.log(s1.Name,": Marks of Maths: ", s1.Marks.Maths);
