let cubeHalfWidth = 50;
let mouseX = 0;
let mouseY = 0;
let zHeight = 0.5;

let mouseMode = 6;

let cube = {
  point1: {
    x: -50,
    y: -50,
    z: 100 * zHeight,
  },
  point2: {
    x: 5,
    y: -5,
    z: 100 * zHeight,
  },
  point3: {
    x: 50,
    y: 50,
    z: 100 * zHeight,
  },
  point4: {
    x: -5,
    y: 5,
    z: 100 * zHeight,
  },
  /**********box2******** */
  point5: {
    x: -45,
    y: -45,
    z: 80 * zHeight,
  },
  point6: {
    x: 10,
    y: -10,
    z: 80 * zHeight,
  },
  point7: {
    x: 45,
    y: 45,
    z: 80 * zHeight,
  },
  point8: {
    x: -10,
    y: 10,
    z: 80 * zHeight,
  },
  /**********box3******** */
  point9: {
    x: -40,
    y: -40,
    z: 60 * zHeight,
  },
  point10: {
    x: 15,
    y: -15,
    z: 60 * zHeight,
  },
  point11: {
    x: 40,
    y: 40,
    z: 60 * zHeight,
  },
  point12: {
    x: -15,
    y: 15,
    z: 60 * zHeight,
  },
  /**********box4******** */
  point13: {
    x: -35,
    y: -35,
    z: 40 * zHeight,
  },
  point14: {
    x: 20,
    y: -20,
    z: 40 * zHeight,
  },
  point15: {
    x: 35,
    y: 35,
    z: 40 * zHeight,
  },
  point16: {
    x: -20,
    y: 20,
    z: 40 * zHeight,
  },
  /**********box5******** */
  point17: {
    x: -30,
    y: -30,
    z: 20 * zHeight,
  },
  point18: {
    x: 25,
    y: -25,
    z: 20 * zHeight,
  },
  point19: {
    x: 30,
    y: 30,
    z: 20 * zHeight,
  },
  point20: {
    x: -25,
    y: 25,
    z: 20 * zHeight,
  },
  /**********box6******** */
  point21: {
    x: -25,
    y: -25,
    z: 0,
  },
  point22: {
    x: 30,
    y: -30,
    z: 0,
  },
  point23: {
    x: 25,
    y: 25,
    z: 0,
  },
  point24: {
    x: -30,
    y: 30,
    z: 0,
  },
  /**********box7******** */
  point25: {
    x: -20,
    y: -20,
    z: -20 * zHeight,
  },
  point26: {
    x: 35,
    y: -35,
    z: -20 * zHeight,
  },
  point27: {
    x: 20,
    y: 20,
    z: -20 * zHeight,
  },
  point28: {
    x: -35,
    y: 35,
    z: -20 * zHeight,
  },
  /**********box8******** */
  point29: {
    x: -15,
    y: -15,
    z: -40 * zHeight,
  },
  point30: {
    x: 40,
    y: -40,
    z: -40 * zHeight,
  },
  point31: {
    x: 15,
    y: 15,
    z: -40 * zHeight,
  },
  point32: {
    x: -40,
    y: 40,
    z: -40 * zHeight,
  },
  /**********box9******** */
  point33: {
    x: -10,
    y: -10,
    z: -60 * zHeight,
  },
  point34: {
    x: 45,
    y: -45,
    z: -60 * zHeight,
  },
  point35: {
    x: 10,
    y: 10,
    z: -60 * zHeight,
  },
  point36: {
    x: -45,
    y: 45,
    z: -60 * zHeight,
  },
  /**********box10******** */
  point37: {
    x: -5,
    y: -5,
    z: -80 * zHeight,
  },
  point38: {
    x: 50,
    y: -50,
    z: -80 * zHeight,
  },
  point39: {
    x: 5,
    y: 5,
    z: -80 * zHeight,
  },
  point40: {
    x: -50,
    y: 50,
    z: -80 * zHeight,
  },
};

function initialize() {
  //rotate(0.7, 0.788, 0.7);
}
function rot() {
  rotate(0.01, 0.01, 0.01);
}

function lerp() {
  setTimeout(() => {
    updateSquare();
    generateConnectors();
    translation1();
    lerp();
    mouseMagic();
    rot();
  }, "20");
}

function updateSquare() {
  square1 = document.getElementById("box");
  //console.log(`${cube[0][1]},${cube[0][2]} ${cube[1][1]},${cube[1][2]} ${cube[2][1]},${cube[2][2]} ${cube[3][1]},${cube[3][2]}`)
  document
    .getElementById("box")
    .setAttribute(
      "d",
      `M${cube.point1.x} ${cube.point1.y} L${cube.point2.x} ${cube.point2.y} L${cube.point3.x} ${cube.point3.y} L${cube.point4.x} ${cube.point4.y} Z`
    );

  document
    .getElementById("box2")
    .setAttribute(
      "d",
      `M${cube.point5.x} ${cube.point5.y} L${cube.point6.x} ${cube.point6.y} L${cube.point7.x} ${cube.point7.y} L${cube.point8.x} ${cube.point8.y} Z`
    );
  document
    .getElementById("box3")
    .setAttribute(
      "d",
      `M${cube.point9.x} ${cube.point9.y} L${cube.point10.x} ${cube.point10.y} L${cube.point11.x} ${cube.point11.y} L${cube.point12.x} ${cube.point12.y} Z`
    );
  document
    .getElementById("box4")
    .setAttribute(
      "d",
      `M${cube.point13.x} ${cube.point13.y} L${cube.point14.x} ${cube.point14.y} L${cube.point15.x} ${cube.point15.y} L${cube.point16.x} ${cube.point16.y} Z`
    );
  document
    .getElementById("box5")
    .setAttribute(
      "d",
      `M${cube.point17.x} ${cube.point17.y} L${cube.point18.x} ${cube.point18.y} L${cube.point19.x} ${cube.point19.y} L${cube.point20.x} ${cube.point20.y} Z`
    );
  document
    .getElementById("box6")
    .setAttribute(
      "d",
      `M${cube.point21.x} ${cube.point21.y} L${cube.point22.x} ${cube.point22.y} L${cube.point23.x} ${cube.point23.y} L${cube.point24.x} ${cube.point24.y} Z`
    );
  document
    .getElementById("box7")
    .setAttribute(
      "d",
      `M${cube.point25.x} ${cube.point25.y} L${cube.point26.x} ${cube.point26.y} L${cube.point27.x} ${cube.point27.y} L${cube.point28.x} ${cube.point28.y} Z`
    );
  document
    .getElementById("box8")
    .setAttribute(
      "d",
      `M${cube.point29.x} ${cube.point29.y} L${cube.point30.x} ${cube.point30.y} L${cube.point31.x} ${cube.point31.y} L${cube.point32.x} ${cube.point32.y} Z`
    );
  document
    .getElementById("box9")
    .setAttribute(
      "d",
      `M${cube.point33.x} ${cube.point33.y} L${cube.point34.x} ${cube.point34.y} L${cube.point35.x} ${cube.point35.y} L${cube.point36.x} ${cube.point36.y} Z`
    );
  document
    .getElementById("box10")
    .setAttribute(
      "d",
      `M${cube.point37.x} ${cube.point37.y} L${cube.point38.x} ${cube.point38.y} L${cube.point39.x} ${cube.point39.y} L${cube.point40.x} ${cube.point40.y} Z`
    );

  //document.getElementById("connector0").setAttribute("points",`${cube.point1.x},${cube.point1.y} ${cube.point5.x},${cube.point5.y}`);
  //document.getElementById("connector1").setAttribute("points",`${cube.point2.x},${cube.point2.y} ${cube.point6.x},${cube.point6.y}`);
  //document.getElementById("connector2").setAttribute("points",`${cube.point3.x},${cube.point3.y} ${cube.point7.x},${cube.point7.y}`);
  //document.getElementById("connector3").setAttribute("points",`${cube.point4.x},${cube.point4.y} ${cube.point8.x},${cube.point8.y}`);

  //console.log(square1.getAttribute("points"))
}
//let lerpVal = 100;
const lerpVal = (a, b, amount) => (1 - amount) * a + amount * b;
let lerpAmount = 1;
function generateConnectors() {
  if (lerpAmount > 0) {
    document
      .getElementById("connector0")
      .setAttribute(
        "points",
        `${cube.point1.x},${cube.point1.y} ${lerpVal(
          cube.point37.x,
          cube.point1.x,
          lerpAmount
        )},${lerpVal(cube.point37.y, cube.point1.y, lerpAmount)}`
      );
    document
      .getElementById("connector2")
      .setAttribute(
        "points",
        `${cube.point3.x},${cube.point3.y} ${lerpVal(
          cube.point39.x,
          cube.point3.x,
          lerpAmount
        )},${lerpVal(cube.point39.y, cube.point3.y, lerpAmount)}`
      );

    document
      .getElementById("connector1")
      .setAttribute(
        "points",
        `${cube.point38.x},${cube.point38.y} ${lerpVal(
          cube.point2.x,
          cube.point38.x,
          lerpAmount
        )},${lerpVal(cube.point2.y, cube.point38.y, lerpAmount)}`
      );
    document
      .getElementById("connector3")
      .setAttribute(
        "points",
        `${cube.point40.x},${cube.point40.y} ${lerpVal(
          cube.point4.x,
          cube.point40.x,
          lerpAmount
        )},${lerpVal(cube.point4.y, cube.point40.y, lerpAmount)}`
      );
    lerpAmount -= 0.01;
  } else {
    document
      .getElementById("connector0")
      .setAttribute(
        "points",
        `${cube.point1.x},${cube.point1.y} ${cube.point37.x},${cube.point37.y}`
      );
    document
      .getElementById("connector2")
      .setAttribute(
        "points",
        `${cube.point3.x},${cube.point3.y} ${cube.point39.x},${cube.point39.y}`
      );

    document
      .getElementById("connector1")
      .setAttribute(
        "points",
        `${cube.point2.x},${cube.point2.y} ${cube.point38.x},${cube.point38.y}`
      );
    document
      .getElementById("connector3")
      .setAttribute(
        "points",
        `${cube.point4.x},${cube.point4.y} ${cube.point40.x},${cube.point40.y}`
      );
  }
}

function mouseMagic() {
  if (mouseMode === 3) {
    r = mouseX / window.screen.width + 25;
    r2 = mouseY / window.screen.width + 25;
  }
  if (r >= 10) {
    //r = 10;
  }
  // console.log(r, r2);
}

function generateConnections() {
  let svg = document.getElementById("svg");

  for (var i = 0; i < 4; i++) {
    svg.innerHTML += `<polyline class="connectors" id="connector${i}" points="" style="fill:white;stroke:url(#gradient1);stroke-width:1"></polyline>`;
  }
}
let r = 0.02;
let r2 = 0;
let r3 = 0;
function translation1() {
  //r += 0.01;
  //r2++;
  //r3++;
  if (mouseMode === 0) {
    let screenHalfHeight =
      (window.screen.height - window.screen.height / 2 - mouseY) / 3; //(window.screen.height - window.screen.height/2 - mouseY)/(window.screen.height)//window.screen.height/2 - (mouseY/window.screen.height )
    let screenHalfWidth =
      (window.screen.width - window.screen.width / 2 - mouseX) / 3;
    cube.point5.x = cube.point37.x - cubeHalfWidth + screenHalfWidth;
    cube.point5.y = cube.point37.y - cubeHalfWidth + screenHalfHeight;
    cube.point6.x = cube.point38.x - cubeHalfWidth + screenHalfWidth;
    cube.point6.y = cube.point38.y - cubeHalfWidth + screenHalfHeight;
    cube.point7.x = cube.point39.x - cubeHalfWidth + screenHalfWidth;
    cube.point7.y = cube.point39.y - cubeHalfWidth + screenHalfHeight;
    cube.point8.x = cube.point40.x - cubeHalfWidth + screenHalfWidth;
    cube.point8.y = cube.point40.y - cubeHalfWidth + screenHalfHeight;

    cube.point1.x = mouseX - cubeHalfWidth;
    cube.point1.y = mouseY - cubeHalfWidth;

    cube.point2.x = mouseX + cubeHalfWidth;
    cube.point2.y = mouseY - cubeHalfWidth;

    cube.point3.x = mouseX + cubeHalfWidth;
    cube.point3.y = mouseY + cubeHalfWidth;

    cube.point4.x = mouseX - cubeHalfWidth;
    cube.point4.y = mouseY + cubeHalfWidth;

    //console.log(screenHalfHeight)
  } else if (mouseMode === 1) {
    cube.point1.x = mouseX - cubeHalfWidth;
    cube.point1.y = mouseY - cubeHalfWidth;

    cube.point2.x = mouseX + cubeHalfWidth;
    cube.point2.y = mouseY - cubeHalfWidth;

    cube.point3.x = mouseX + cubeHalfWidth;
    cube.point3.y = mouseY + cubeHalfWidth;

    cube.point4.x = mouseX - cubeHalfWidth;
    cube.point4.y = mouseY + cubeHalfWidth;
  } else if (mouseMode === 2) {
    rotate(r, r2, r3);
  }
}

function rotate(pitch, roll, yaw) {
  var cosa = Math.cos(yaw);
  var sina = Math.sin(yaw);

  var cosb = Math.cos(-pitch);
  var sinb = Math.sin(-pitch);

  var cosc = Math.cos(roll);
  var sinc = Math.sin(roll);

  var Axx = cosa * cosb;
  var Axy = cosa * sinb * sinc - sina * cosc;
  var Axz = cosa * sinb * cosc + sina * sinc;

  var Ayx = sina * cosb;
  var Ayy = sina * sinb * sinc + cosa * cosc;
  var Ayz = sina * sinb * cosc - cosa * sinc;

  var Azx = -sinb;
  var Azy = cosb * sinc;
  var Azz = cosb * cosc;
  var cubepoints = [
    cube.point1,
    cube.point2,
    cube.point3,
    cube.point4,
    cube.point5,
    cube.point6,
    cube.point7,
    cube.point8,
    cube.point9,
    cube.point10,
    cube.point11,
    cube.point12,
    cube.point13,
    cube.point14,
    cube.point15,
    cube.point16,
    cube.point17,
    cube.point18,
    cube.point19,
    cube.point20,
    cube.point21,
    cube.point22,
    cube.point23,
    cube.point24,
    cube.point25,
    cube.point26,
    cube.point27,
    cube.point28,
    cube.point29,
    cube.point30,
    cube.point31,
    cube.point32,
    cube.point33,
    cube.point34,
    cube.point35,
    cube.point36,
    cube.point37,
    cube.point38,
    cube.point39,
    cube.point40,
  ];
  for (var i = 0; i < cubepoints.length; i++) {
    var px = cubepoints[i].x;
    var py = cubepoints[i].y;
    var pz = cubepoints[i].z;

    // if(i >= 5){
    // cubepoints[i].x = (cubepoints[i - 4].x - 10) + Axx*px + Axy*py + Axz*pz;
    // cubepoints[i].y = (cubepoints[i - 4].y - 10) + Ayx*px + Ayy*py + Ayz*pz;
    // cubepoints[i].z = (cubepoints[i - 4].z - 10) + Azx*px + Azy*py + Azz*pz;
    // }else{
    cubepoints[i].x = Axx * px + Axy * py + Axz * pz;
    cubepoints[i].y = Ayx * px + Ayy * py + Ayz * pz;
    cubepoints[i].z = Azx * px + Azy * py + Azz * pz;
  }
}

onmousemove = function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY; /*console.log(mouseX)*/
};
// function onmousemove (axis){
//     mousePos = function(e){console.log("mouse location:", e.clientX, e.clientY)};
//     if axis

// }
initialize();
generateConnections();
lerp();
