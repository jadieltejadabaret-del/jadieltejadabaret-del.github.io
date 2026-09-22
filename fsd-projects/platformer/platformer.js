$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 210, 10, 300, "black")

createPlatform(180, 211, 20, 10,"black")
createPlatform(160, 212, 40, 10, "black")
createPlatform(140, 213, 60, 10, "black")
createPlatform(120, 214, 80, 5, "black")
createPlatform(100, 215, 100, 5, "black")
createPlatform(80, 216, 120, 5, "black")
createPlatform(60, 217, 140, 5, "black")
createPlatform(40, 218, 160, 5, "black")
createPlatform(20, 219, 180, 5, "black")
createPlatform(0, 220, 200, 5, "black")

createPlatform(0, 100, 300, 5, "black")

createPlatform(100, 310, 100, 5, "black")

createPlatform(0, 405, 100, 5, "black")

createPlatform(100, 500, 100, 10, "black")

createPlatform(0, 600, 200, 10, "black")

createPlatform(320, 467, 100, 6, "black")

createPlatform(710, 600, 200, 10, "black")

createPlatform(1110, 500, 75, 10, "black")
createPlatform(1210, 325, 75, 10, "black")
createPlatform(960, 550, 50, 10, "black")
createPlatform(1010, 370, 50, 10, "black")

createPlatform(810, 260, 187, 10, "black")

createPlatform(1175, 120, 75, 10, "black")
createPlatform(1225, 118, 50, 10, "black")
createPlatform(1250, 116, 75, 10, "black")

createPlatform(625, 250, 50, 1, "black")

createPlatform(465, 85, 125, 5, "black")

createPlatform(400, 220, 50, 5, "black")
createPlatform(350, 210, 50, 5, "black")
createPlatform(345, 165, 10, 50, "black")
createPlatform(445, 225, 35, 5, "black")

createPlatform(200, 605, 50, 5, "black")
createPlatform(1160, 125, 20, 5, "black")
    // TODO 3 - Create Collectables
    createCollectable("keybetter", 1250, 50)
    createCollectable("keybetter", 700, 260)
    createCollectable("keybetter", 530, 50)
    createCollectable("keybetter", 150, 270)
    createCollectable("keybetter", 800, 540)
    createCollectable("keybetter", 100, 50)
    // TODO 4 - Create Cannons
    createCannon("top", 120, 2600)
    createCannon("left",650, 1)
    createCannon("bottom", 150, 2500)
    createCannon("bottom", 1200, 2900)
    createCannon("top", 780, 2600)
    createCannon("right", 520, 3000)
    createCannon("bottom", 400, 5000)
    createCannon("top", 100, 3500, 20, 10, 100, 1000, 6)
    createCannon("bottom", 100, 3500, 30, 10, 100, 400, 6)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
