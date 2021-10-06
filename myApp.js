const express = require("express");
const app = express();
const got = require("got");
let testId =""

app.get("/forecast/:userLocation", function (req, res) {
  got
    .get(
      "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=06677d83-572f-4514-94c1-ef214268b6fd"
    )
    .json()

    .then(function (body) {
      let names = [];
      for (let a of body.Locations.Location) {
        names.push(a);
      }
      console.log(req.params.Location)
      for (let i = 0; i < names.length ; i++){
        if (names[i].names===req.params.Location) {
          testId=names[i].id 
          return testId
        }
        return console.error("bruh, right a proper name.");
      };
      
      })
      return got
        .get(
          "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/" +
            testId +
            "?res=3hourly&key=06677d83-572f-4514-94c1-ef214268b6fd"
        )
        .json();
    });

app.listen(3000);
