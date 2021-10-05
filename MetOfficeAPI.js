const got = require("got");
class apiData{
    constructor(Elevation,ID,latitude,longitude,name,region,unitaryAuthArea){
        this.Elevation=Elevation
        this.ID=ID
        this.latitude=latitude
        this.longitude=longitude
        this.name=name
        this.region=region
        this.unitaryAuthArea=unitaryAuthArea
 }}

function pushToClass(APIData){
    for (let i = 0;i < 6002; i ++ ){
        const APIData = new apiData(APPData[i])
    return APIData


    }
}




async function index(){
    got.get(
        "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=06677d83-572f-4514-94c1-ef214268b6fd"
    )
    .json()
    .then(function(body){
        pushToClass(body.Locations.Location)
    // console.log(APIData)
    console.log(APIData)
    return
    })
}

