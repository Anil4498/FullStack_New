var languages = ['HTML', 'CSS', 'JAVASCRIPT', 'react'];
//normal way
// console.log(languages[0]);
// console.log(languages[1]);
// console.log(languages[2]);
// adavance way of calling array
languages.map(function (a) {
    console.log(a);
});
var student = [
    { a: 'apple', b: 'banana' },
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', d: 'dog' }
];
var item = student.find(function (item) { return item.d == 'dog'; });
console.log(item);
var item1 = student.filter(function (item) { return item.b == 'banana'; });
console.log(item1);
// let myitems=[
//     {a:'apple',b:'banana'},
//     {a:'apple',b:'banana',c:'cat'},
//     {a:'apple',b:'banana',c:'cat'},
//     {a:'apple',b:'banana',d:'dog'}]
//     let item=myitems.find((item)=>{ return item.d=='dog'})
//     console.log(item)
//     let item1=myitems.filter((item)=>{ return item.c=='cat'})
//     console.log(item1)
