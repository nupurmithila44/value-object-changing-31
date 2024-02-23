const data ={
    sofia:{
        id:33,
        study:[{
            primary:[
                {schoolname:"abc primary schol"},
                {location:"petter barg"},
            ]
        }]
    }
};

// console.log(data.sofia.id)
console.log(data.sofia.study[0].primary[1].location)