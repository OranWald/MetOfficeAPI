const got = require("got");

const tempName = "Ardlui"


async function index(){
    got.get(
        "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=06677d83-572f-4514-94c1-ef214268b6fd"
    )
    .json()
    
    .then(function(body){
        let names = []
        for (let a of body.Locations.Location){
            names.push(a) // pushes to empty array names
        }
        var filteredArray = body.Locations.Location.filter((obj)=> {
            if (obj.id==="3068") {
                console.log(obj)
                return true;
                }
            return false;
        })
        return names;
    })
//     .then(function(names) {
//         for (const a of names){
//             //console.log(a["name"])
//             if (tempName.toLowerCase() === a["name"].toLowerCase()){
//                 // console.log(a)
//             }
//         }
//     })
}

index()
