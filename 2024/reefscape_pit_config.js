var config_data = `
{
  "dataFormat": "tsv",
  "title": "Reefscape Scouting 2025",
  "page_title": "Reefscape",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Dimensions",
      "code": "dmn",
      "type": "text"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "t": "Tank<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Deep Climb",
      "code": "clm",
      "type": "bool"
    },
    { "name": "Shallow Climb",
      "code": "clm",
      "type": "bool"
    },
    { "name": "Max Pieces In Auto",
      "code": "trp",
      "type": "number"
    },
       { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Took a picture?",
      "code": "pic",
      "type": "bool"
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
