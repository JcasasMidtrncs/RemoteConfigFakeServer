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
  inVehicle: [
    {
      chemistry: 1,
      voltage: 200
    }
  ],
  outOfVehicle: [
    {
      chemistry: 2,
      voltage: 220
    },
    {
      chemistry: 3,
      voltage: 130
    }
  ]
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

const brickBehavior = {
  conditions: [
    {
      type: 1,
      conditionData: [
        {
          "wifiThreshold": 3000
        }
      ],
      brickAction: {
        actionType: 1
      }
    },
    {
      type: 2,
      conditionData: [
        {
          "ssid": "encryptedSSID"
        },
        {
          "ssidThreshold": 3000
        }
      ],
      brickAction: {
        actionType: 1
      }
    }
  ]
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
  bmisConfiguration,
  decisionMappingSchema: 'decisionMappings.json',
  brickBehavior: brickBehavior
};

const may22Configuration = {
  "version": 1,
  "partNumber": "192-011507",
  "translationDatabase": "192-011507-translations-v1.db",
  "internalPrintFormat": {
    "formats": [
      {
        "type": "InVehicleChargeTest",
        "filename": "192-011507-internalPrint-inv_charge-v1.json"
      },
      {
        "type": "OutOfVehicleChargeTest",
        "filename": "192-011507-internalPrint-oov_charge-v1.json"
      },
      {
        "type": " BatteryDiagnostics",
        "filename": "192-011507-internalPrint-batDiag-v1.json"
      },
      {
        "type": "ChargeTest",
        "filename": "192-011507-internalPrint-charge-v1.json"
      },
      {
        "type": "SystemTest",
        "filename": "192-011507-internalPrint-system-v1.json"
      },
      {
        "type": "Footer",
        "filename": "192-011507-footer-v1.json"
      }
    ]
  },
  "decisionMappingSchema": "192-011507-dcadecisionmapping-v1.json",
  "dcaDefectStringMapping": "192-011507-dcadefectmapping-v1.json"
};

/* GET users listing. */
router.get('/api/config', (req, res, next) => {
  res.send(may22Configuration);
});

router.get('/api/config/version', (req, res, next) => {
  res.send({
    version: 1
  });
});

router.get('/api/getFile', (req, res, next) => {
  const fileName = req.query.fileName;
  switch(fileName) {
    case "192-011507-internalPrint-inv_charge-v1.json":
      sendFile(res, "192-011507-internalPrint-inv_charge-v1.json");
      break;
    case "192-011507-internalPrint-oov_charge-v1.json":
      sendFile(res, "192-011507-internalPrint-oov_charge-v1.json");
      break;
    case "192-011507-internalPrint-batDiag-v1.json":
      sendFile(res, "192-011507-internalPrint-batDiag-v1.json");
      break;
    case "192-011507-internalPrint-charge-v1.json":
      sendFile(res, "192-011507-internalPrint-charge-v1.json");
      break;
    case "192-011507-internalPrint-system-v1.json":
      sendFile(res, "192-011507-internalPrint-system-v1.json");
      break;
    case "192-011507-footer-v1.json":
      sendFile(res, "192-011507-footer-v1.json");
      break;
    case "192-011507-dcadecisionmapping-v1.json":
      sendFile(res, "192-011507-dcadecisionmapping-v1.json");
      break;
    case "192-011507-dcadefectmapping-v1.json":
      sendFile(res, "192-011507-dcadefectmapping-v1.json");
      break;
    default:
      res.status(404).send({ success: false });
  }
});

const sendFile = (res, fileName) => {
  res.sendFile(path.join(__dirname, '../public/' + fileName));
};

module.exports = router;
