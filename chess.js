  let queen = {
      direction: "S",
      position: {
          x: 4,
          y: 4
      }
  }

  console.log("Default direction of queen: " + queen.direction);
  console.log("Default position of queen: " + queen.position.x, queen.position.y);

  function updatePosition(x_co, y_co) {
      queen.position.x = x_co;
      queen.position.y = y_co;
  }

  function jumpMoveForward(direction, steps) {
      var i = 0;
      var j = 0;
      steps = parseInt(steps)
      switch (direction) {
          case "N":
              i = queen.position.y - steps;
              if (i < 8 && i >= 0) {
                  queen.position.y = queen.position.y - steps;
              } else {
                  console.log("crossing boundary");
              }
              break;
          case "S":
              i = queen.position.y + steps;
              if (i < 8 && i >= 0) {
                  queen.position.y = queen.position.y + steps;
              } else {
                  console.log("crossing boundary");
              }
              break;
          case "E":
              i = queen.position.x + steps;
              if (i < 8 && i >= 0) {
                  queen.position.x = queen.position.x + steps;
              } else {
                  console.log("crossing boundary");
              }
              break;
          case "W":
              i = queen.position.x - steps;
              if (i < 8 && i >= 0) {
                  queen.position.x = queen.position.x - steps;
              } else {
                  console.log("crossing boundary");
              }
              break;
          case "NE":
              i = queen.position.y + steps;
              j = queen.position.x + steps;
              if (i < 8 && i >= 0 && j < 8 && j >= 0) {

                  queen.position.y = queen.position.y + steps;
                  queen.position.x = queen.position.x + steps;
              } else {
                  console.log("crossing boundary");
              }
              break;
          case "NW":
              i = queen.position.y - steps;
              j = queen.position.x - steps;
              if (i < 8 && i >= 0 && j < 8 && j >= 0) {
                  queen.position.y = queen.position.y + steps;
                  queen.position.x = queen.position.x - steps;
              } else {
                  console.log("crossing boundary");
              }
              break;
          case "SE":
              i = queen.position.y + steps;
              j = queen.position.x + steps;
              if (i < 8 && i >= 0 && j < 8 && j >= 0) {
                  queen.position.y = queen.position.y + steps;
                  queen.position.x = queen.position.x + steps;
              } else {
                  console.log("crossing boundary");
              }
              break;
          case "SW":
              i = queen.position.y + steps;
              j = queen.position.x - steps;
              if (i < 8 && i >= 0 && j < 8 && j >= 0) {
                  queen.position.y = queen.position.y + steps;
                  queen.position.x = queen.position.x - steps;
              } else {
                  console.log("crossing boundary");
              }
              break;
          default:
              console.log("wrong direction");
      }
  }

  let direction = prompt("Enter the direction");
  let steps = prompt("Enter the steps");
  jumpMoveForward(direction, steps);
  console.log("Updated position of queen : " + queen.position.x, queen.position.y);