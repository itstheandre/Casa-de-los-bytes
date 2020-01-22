let platformsArr = [[new Platform()]];

const mapArr = [
  // map

  [
    // basement

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 1], // 3
    [0, 0, 1, 1, 1, 1, 0, 1, 0, 0], // 4
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0], // 5
    [1, 1, 0, 0, 0, 1, 0, 1, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0], // 8
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 2] // 9
  ],
  // basement
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 2
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0], // 3
    [0, 1, 0, 0, 2, 0, 0, 1, 0, 0], // 4
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0], // 5
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0], // 8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 9
  ],
  // first floor
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2], // 6
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2], // 7
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2], // 8
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2] // 9
  ],
  // Congratz
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 9
  ]
  // Roof is on fire
];

const guards = [
  // map
  [
    [1, 0, "down"],
    [3, 4, "left"],
    [1, 3, "left"]
  ],
  // basement
  [],
  // first floor
  [], // ROOF ARRAY
  // empty array where for loop below pushes guard

  [], // EMPTY ARRAY. PLAYERS WILL BE HERE
  [
    [2, 0, "down"],
    [3, 0, "down"],
    [4, 0, "down"],
    [5, 0, "down"],
    [6, 0, "down"],
    [2, 1, "down"],
    [4, 1, "down"],
    [6, 1, "down"],
    [4, 3, "down"],
    [5, 3, "down"],
    [6, 3, "down"],
    [4, 4, "down"],
    [4, 5, "down"],
    [5, 5, "down"],
    [6, 5, "down"],
    [4, 7, "down"],
    [5, 7, "down"],
    [6, 7, "down"],
    [4, 8, "down"],
    [6, 8, "down"],
    [2, 9, "down"],
    [3, 9, "down"],
    [4, 9, "down"],
    [5, 9, "down"],
    [6, 9, "down"]
  ]
];

// Roof Guard Creation
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i < 4 && j < 4) {
      guards[2].push([i, j, "down"]);
    }
    if (i < 10 && j < 4) {
      guards[2].push([i, j, "down"]);
    }
    if (i < 4 && j > 5) {
      guards[2].push([i, j, "down"]);
    }
  }
}

const movingArr = [
  // map
  [
    [6, 8, "up", "right", 2],
    [7, 3, "up", "right", 1],
    [5, 9, "down", "right", 2],
    [1, 7, "right", "right", 2],
    [2, 8, "left", "right", 2]
  ],
  // basement
  [
    //
    [5, 9, "up", "left", 2],
    [5, 8, "down", "left", 2],
    [2, 1, "up", "left", 1]
  ],
  // first floor
  [],
  // Roof is on fire
  []
  // You won
];

const stillArr = [
  // map
  [],
  // basement
  [
    [7, 0, "right", "right"],
    [3, 3, "up", "right"],
    [3, 5, "up", "left"],
    [2, 6, "up", "left"],
    [5, 3, "down", "left"],
    [5, 5, "down", "right"],
    [6, 6, "down", "right"]
  ],
  // first floor
  [],
  // Roof is on fire
  []
  // You won
];

const winArr = [
  [],
  // basement
  [],
  // First Floor
  [],
  // Roof
  [
    [2, 0],
    [3, 0],
    [4, 0],
    [6, 0],
    [4, 1],
    [6, 1],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [2, 5],
    [4, 5],
    [6, 5],
    [2, 7],
    [3, 7],
    [4, 7],
    [6, 7],
    [2, 8],
    [4, 8],
    [6, 8],
    [2, 9],
    [4, 9],
    [5, 9],
    [6, 9]
  ],
  []
  // Game Over
];
