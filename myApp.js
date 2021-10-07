const express = require("express");
const app = express();
const got = require("got");

app.get("/forecast/:userLocation", function (req, res) {
  got
    .get(
      "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=06677d83-572f-4514-94c1-ef214268b6fd"
    )
    .json()
    .then(function (body) {
      let names = [];
      let testId = "";
      for (let a of body.Locations.Location) {
        names.push(a);
      }
      console.log(req.params.Location);
      for (let i = 0; i < names.length; i++) {
        if (names[i].name === req.params.userLocation) {
          testId = names[i].id;
        }
      }
      return got
        .get(
          "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/" +
            testId +
            "?res=3hourly&key=06677d83-572f-4514-94c1-ef214268b6fd"
        )
        .json();
    })
    .then(function (response) {
      console.log(response);
      res.send(response.SiteRep.DV.Location.Period[0]);
    })
    .catch(function (ERR) {
      console.error(ERR);
      res.send(ERR)
    });
});

app.listen(3000);
