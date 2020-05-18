var express = require('express');
var router = express.Router();
const path = require('path');

const internalPrintFormatList = {
  formats: [
    {
      type: "InVehicleChargeTest",
      filename: "in_vehicle_print_format.json"
    },
    {
      type: "OutOfVehicleChargeTest",
      filename: "out_of_vehicle_print_format.json"
    },
    {
      type: "BatteryDiagnostics",
      filename: "battery_diagnostics_print_format.json"
    },
    {
      type: "ChargeTest",
      filename: "charge_test_print_format.json"
    },
    {
      type: "SystemTest",
      filename: "system_test_print_format.json"
    },
    {
      type: "Footer",
      filename: "footer_print_format.json"
    }
  ]
};

const boostVoltageSchema = {
  inVehicle: {
    chemistry: 120,
    voltage: 200
  },
  outOfVehicle: {
    chemistry: 130,
    voltage: 220
  }
};

const customerLogo = {
  onScreen: ["onScreenLogo.png"],
  bluetoothPrint: ["bluetoothPrintLogo.png"],
  internalPrint: ["internalPrintLogo.png"],
  wifiPrint: ["wifiPrintLogo.png"],
  email: ["emailLogo.png"],
};

const testCodes = {
  testCodeFiles: [
    {
      testType: 1,
      fileName: 'fake_test_code_file.json'
    },
    {
      testType: 2,
      fileName: 'fake_test_code_file.json'
    }
  ],
  testCodeRules: [
    {
      testType: 1,
      rules: [
        {
          ruleType: 0,
          applicationTypes: [
            1,
            2
          ],
          usages: [
            1,
            2,
            4
          ],
          values: [
            1,
            3
          ]
        }
      ]
    },
    {
      testType: 2,
      rules: [
        {
          ruleType: 0,
          applicationTypes: [
            1,
            2
          ],
          usages: [
            1,
            2,
            4
          ],
          values: [
            1,
            3
          ]
        }
      ]
    },
  ]
};

const bmisConfiguration = {
  username: "BmisEncryptedUsername",
  password: "BmisEncryptedPassword"
};

const configFileJson = {
  version: 1,
  partNumber: "APartNumber-123",
  translationDatabase: "translations.db",
  internalPrintFormatList,
  boostVoltage: boostVoltageSchema,
  deepDischargeMaxTime: 120,
  customerLogo,
  testCodes,
  bmisConfiguration
};

/* GET users listing. */
router.get('/api/config', (req, res, next) => {
  res.send(configFileJson);
});

router.get('/api/config/configVersion', (req, res, next) => {
  res.send({
    version: 1
  });
});

router.get('/getFile', (req, res, next) => {
  const fileName = req.query.fileName;
  switch(fileName) {
    case "in_vehicle_print_format.json":
      sendFile(res, "fake_print_json.json");
      break;
    case "out_of_vehicle_print_format.json":
      sendFile(res, "fake_print_json.json");
      break;
    case "battery_diagnostics_print_format.json":
      sendFile(res, "fake_print_json.json");
      break;
    case "charge_test_print_format.json":
      sendFile(res, "fake_print_json.json");
      break;
    case "system_test_print_format.json":
      sendFile(res, "fake_print_json.json");
      break;
    case "footer_print_format.json":
      sendFile(res, "fake_print_json.json");
      break;
    case "translations.db":
      sendFile(res, "translations.db");
      break;
    default:
      res.status(404).send({ success: false });
  }
});

const sendFile = (res, fileName) => {
  res.sendFile(path.join(__dirname, '../public/' + fileName));
};

module.exports = router;
