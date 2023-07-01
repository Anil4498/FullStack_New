let languages =['HTML','CSS','JAVASCRIPT','react']

//normal way
// console.log(languages[0]);
// console.log(languages[1]);
// console.log(languages[2]);

// adavance way of calling array
languages.map((a)=>{
    console.log(a)
}
)

let student =[
    {a:'apple',b:'banana'},
        {a:'apple',b:'banana',c:'cat'},
        {a:'apple',b:'banana',c:'cat'},
        {a:'apple',b:'banana',d:'dog'}
]
// to find
let item=student.find((item)=>{ return item.d=='dog'})
    console.log(item)

    // to filter
    let item1=student.filter((item)=>{ return item.b=='banana'})
    console.log(item1)

// 