let fan={
    wings:3,
    color:'red',
    company:{a:'sony',b:'intel'}
}
//console.log(fan.company.b)

interface Ihelmet<T>{
 [key:string]:T
}
let helmet:Ihelmet<string | boolean>={}
console.log(helmet)
helmet.belt="yes beslt is there"
console.log(helmet)
helmet.kkk="dfkdfhk"
helmet.belt=true



let items=[
    {
image:"address",
title:"this is dhony bat",
save:"up to 70 perscent",
prise:'100'
},
{
    image:"address",
    title:"this is dhony bat",
    save:"up to 70 perscent",
    prise:'100'
    },
    {
        image:"address",
        title:"this is dhony bat",
        save:"up to 70 perscent",
        prise:'100'
        }
]









// interface Ihelmet{
//     belt?:string
//     logo?:boolean
// }
// let helmet:Ihelmet={}
// console.log(helmet)
// helmet.belt="yes beslt is there"
// console.log(helmet)
// helmet.logo123=true





