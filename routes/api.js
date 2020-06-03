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

const bmisCredentials = {
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
  bmisCredentials,
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
  "dcaDefectStringMapping": "192-011507-dcadefectmapping-v1.json",
  "brickBehavior": {
    "conditions": [
      {
        "type": 1,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 2
        }
      },
      {
        "type": 1,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 1,
          "parameters": {
            "warningMessage": "An update is available.\\nTool must update in %1$s days or it will become unusable.\\nApply Update Now?"
          }
        }
      },
      {
        "type": 2,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 1,
          "parameters": {
            "warningMessage": "This tool cannot connect to the server.\\nIf you do not connect to the server within %1$s day(s), the tool will become unusable.\\nPlease connect to Wi-Fi. Do you want to edit Wi-Fi Settings?"
          }
        }
      },
      {
        "type": 2,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 2
        }
      },
      {
        "type": 3,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 1,
          "parameters": {
            "warningMessage": "This tool cannot connect to the server.\\nIf you do not connect to the server within %1$s day(s), the tool will become unusable.\\nPlease connect to Wi-Fi. Do you want to edit Wi-Fi Settings?"
          }
        }
      }
    ]
  },
  "boostVoltage": boostVoltageSchema,
  "deepDischargeMaxTime": 1200,  
  "customerLogo": {
    "onScreen": [ "onScreenLogo.png" ],
    "bluetoothPrint": [ "bluetoothPrintLogo.png" ],
    "internalPrint": [ "internalPrintLogo.png" ],
    "wifiPrint": [ "wifiPrintLogo.png" ],
    "email": [ "emailLogo.png" ]
  },
  "testCodes": testCodes,
  "bmisCredentials": bmisCredentials,
};

const aftermarketConfigFile = {
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
  "dcaDefectStringMapping": "192-011507-dcadefectmapping-v1.json",
  "brickBehavior": {
    "conditions": [
      {
        "type": 1,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 2
        }
      },
      {
        "type": 1,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 1,
          "parameters": {
            "warningMessage": "An update is available.\\nTool must update in %1$s days or it will become unusable.\\nApply Update Now?"
          }
        }
      },
      {
        "type": 2,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 1,
          "parameters": {
            "warningMessage": "This tool cannot connect to the server.\\nIf you do not connect to the server within %1$s day(s), the tool will become unusable.\\nPlease connect to Wi-Fi. Do you want to edit Wi-Fi Settings?"
          }
        }
      },
      {
        "type": 2,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 2
        }
      },
      {
        "type": 3,
        "conditionData": {
          "brickWarningThresholdDays": 5,
          "brickActivationThresholdDays": 10
        },
        "brickAction": {
          "actionType": 1,
          "parameters": {
            "warningMessage": "This tool cannot connect to the server.\\nIf you do not connect to the server within %1$s day(s), the tool will become unusable.\\nPlease connect to Wi-Fi. Do you want to edit Wi-Fi Settings?"
          }
        }
      }
    ]
  },
  "deepDischargeMaxTime": 1200,
};

/* GET users listing. */
router.get('/api/v2/ToolConfiguration/Configuration', (req, res, next) => {
  res.send(aftermarketConfigFile);
});

router.get('/api/v2/ToolConfiguration/Version', (req, res, next) => {
  res.send({
    version: 1
  });
});

router.get('/api/v2/ToolConfiguration/RawFile', (req, res, next) => {
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
    case "192-011507-footer-v1.json":
      sendFile(res, "192-011507-footer-v1.json");
      break;
    case "192-011507-translations-v1.db":
      sendFile(res, "192-011507-translations-v1.db");
      break;
    case "192-011507-dcadefectmapping-v1.json":
      sendFile(res, "192-011507-dcadefectmapping-v1.json");
      break;
    case "192-011507-brickbehavior-v1.json":
      sendFile(res, "192-011507-brickbehavior-v1.json");
      break;
    default:
      res.status(404).send({ success: false });
  }
});

const sendFile = (res, fileName) => {
  res.sendFile(path.join(__dirname, '../public/' + fileName));
};

module.exports = router;
