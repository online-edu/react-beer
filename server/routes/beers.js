const express = require("express");
const request = require("request");
const router = express.Router();

const DEMO_URL = "https://api.brewerydb.com/v2";
const KEY = "?key=bbd8e9f800b52500d7a3e1528c032250";
const PARAMS = "&hasLabels=Y&order=random&randomCount=10";

router.get("/beers", (req, res, next) => {
  const url = `${DEMO_URL}/beers/${KEY}${PARAMS}`;
  request.get(url, (err, apiResponse, body) => {
    !err && apiResponse.statusCode === 200
      ? res.send(body)
      : res.sendStatus(500).json(err);
  });
});

router.get("/beer/:id", (req, res, next) => {
  const url = `${DEMO_URL}/beer/${req.params.id}/${KEY}`;
  request.get(url, (err, apiRes, body) => {
    !err && apiRes.statusCode === 200
      ? res.send(body)
      : res.sendStatus(500).json(err);
  });
});

module.exports = router;
