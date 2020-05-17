var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/config', function(req, res, next) {
  res.send({
    version: 1,
    partNumber: "Example",
    internalPrintFormat: [
      {
        "type": "InVehicleTest",
        "filename": "a_json1.json"
      },
      {
        "type": " SystemTest",
        "filename": "a_json2.json"
      },
      {
        "type": "DeviceInfo",
        "filename": "a_json.json"
      }
    ]
  });
});

router.get('/api/config/configVersion', (req, res, next) => {
  res.send({
    version: 1
  });
});

router.get('/getFile', (req, res, next) => {
  if (req.query.fileName === "a_json1.json") {
    res.sendFile('a_json1.json', { root: path.join(__dirname, '../public') });
  } else if (req.query.fileName === "a_json2.json") {
    res.sendFile('a_json2.json', { root: path.join(__dirname, '../public') });
  } else if (req.query.fileName === "a_json3.json") {
    res.sendFile('a_json3.json', { root: path.join(__dirname, '../public') });
  } else {
    res.sendFile('a_json1.json', { root: path.join(__dirname, '../public') });
  }
});

module.exports = router;
