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
      "defaultValue": "s"
    },
  { "name": "Barge Hang",
      "code": "drv",
      "type": "radio",
      "choices": {
        "d": "Deep Hang<br>",
        "s": "Shallow Hang<br>",
        "b": "Both<br>",
        "n": "None"
      },
      "defaultValue": "n"
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
