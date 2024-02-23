// const data ={
//     sofia:{
//         id:33,
//         study:[{
//             primary:[
//                 {schoolname:"abc primary schol"},
//                 {location:"petter barg"},
//             ]
//         }]
//     }
// };

// console.log(data.sofia.id)
// console.log(data.sofia.study[0].primary[1].location)

const student ={
    2222:{
        name:"jack",
        section: "c",
        class: "XI",
        adrss:{
            "building Name":12,
            "streat":"st jonson",
            "city": "petersburg",
            "cuntry": "uk"
        }
    },
    3333:{
        name:"hery",
        section: "d",
        class: "X",
        adrss:{
            "building Name":11,
            "streat":"st jonson",
            "city": "petersburg",
            "cuntry": "uk"
        }
    }
}

console.log(student[2222].adrss.city);
console.log(student[3333].adrss.streat);