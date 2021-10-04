const got = require("got");

async function index(){
    got.get(
        "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=06677d83-572f-4514-94c1-ef214268b6fd"
    )
    .json()
    .then(function(body){
    console.log(body.Locations.Location[0])
        return 4
    })
}

index();

