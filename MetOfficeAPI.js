const got = require("got");

const tempName = "Ardlui"

const testId = "3068"

async function index(){
    got.get(
        "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=06677d83-572f-4514-94c1-ef214268b6fd"
    )
    .json()
    
    .then(function(body){
        let names = []
        for (let a of body.Locations.Location){
            names.push(a) 
        }
        var foundLocation = body.Locations.Location.find((obj)=> {
            if (obj.id=== testId) {
                return true;
                }
            return false;
        }) ;
        return got.get(
            "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/" + testId + "?res=3hourly&key=06677d83-572f-4514-94c1-ef214268b6fd"
        ).json();
       
    })
    .then(function(newBody){
        console.log(newBody.SiteRep.DV.Location.Period[0].Rep[0])
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
