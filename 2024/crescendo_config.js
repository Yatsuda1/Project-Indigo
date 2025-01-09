var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024micmp2"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "L1 Coral Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "L2 Coral Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "L3 Coral Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "L4 Coral Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Procesor Scores",
      "code": "ass",
      "type": "counter"
    }
  ],
  "teleop": [
     { "name": "L1 Coral Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "L2 Coral Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "L3 Coral Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "L4 Coral Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "tss",
      "type": "counter"
    },

    { "name": "Dropped Coral",
      "code": "tms",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Climb Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "D": "Deep Slimb<br>",
        "S": "Shallow Climb<br>",
        "F": "Attempted but failed<br>",
        "P": "Parked<br>",
        "X": "No Climb/Park Attempted<br>"
      },
      "defaultValue": "x"
    },
  ],
  "postmatch": [
    { "name": "Played Defense",
      "code": "def",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 150
    }
  ]
}`;
