
let cubeHalfWidth = 50;
let mouseX = 0;
let mouseY = 0;

let mouseMode = 3;

let cube = {


    point1: {
        x: -100,
        y: -100,
        z: 100
    },
    point2: {
        x: 100,
        y: -100,
        z: 100
    },
    point3: {
        x: 100,
        y: 100,
        z: 100
    },
    point4: {
        x: -100,
        y: 100,
        z: 100
    },
    point5: {
        x: -100,
        y: -100,
        z: -100
    },
    point6: {
        x: 100,
        y: -100,
        z: -100
    },
    point7: {
        x: 100,
        y: 100,
        z: -100
    },
    point8: {
        x: -100,
        y: 100,
        z: -100
    },


}

function initialize(){
    rotate(0,.788,0);
}

function lerp(){
    
    setTimeout(() => {
        
        updateSquare();
        generateConnectors();
        translation1();
        lerp();
        mouseMagic();
      }, "20");
}



function updateSquare(){

    square1 = document.getElementById("box")
    //console.log(`${cube[0][1]},${cube[0][2]} ${cube[1][1]},${cube[1][2]} ${cube[2][1]},${cube[2][2]} ${cube[3][1]},${cube[3][2]}`)
    document.getElementById("box").setAttribute("points",`${cube.point1.x},${cube.point1.y} ${cube.point2.x},${cube.point2.y} ${cube.point3.x},${cube.point3.y} ${cube.point4.x},${cube.point4.y} ${cube.point1.x},${cube.point1.y}`)
    
    document.getElementById("box2").setAttribute("points",`${cube.point5.x},${cube.point5.y} ${cube.point6.x},${cube.point6.y} ${cube.point7.x},${cube.point7.y} ${cube.point8.x},${cube.point8.y} ${cube.point5.x},${cube.point5.y}`)
    
    
    
    //document.getElementById("connector0").setAttribute("points",`${cube.point1.x},${cube.point1.y} ${cube.point5.x},${cube.point5.y}`);
    //document.getElementById("connector1").setAttribute("points",`${cube.point2.x},${cube.point2.y} ${cube.point6.x},${cube.point6.y}`);
    //document.getElementById("connector2").setAttribute("points",`${cube.point3.x},${cube.point3.y} ${cube.point7.x},${cube.point7.y}`);
    //document.getElementById("connector3").setAttribute("points",`${cube.point4.x},${cube.point4.y} ${cube.point8.x},${cube.point8.y}`);
    
    //console.log(square1.getAttribute("points"))
}
//let lerpVal = 100;
const lerpVal = (a, b, amount) => (1 - amount) * a + amount * b;
let lerpAmount = 1;
function generateConnectors(){
    
    if(lerpAmount > 0){
    document.getElementById("connector0").setAttribute("points",`${cube.point1.x},${cube.point1.y} ${lerpVal(cube.point5.x, cube.point1.x,lerpAmount)},${lerpVal(cube.point5.y, cube.point1.y, lerpAmount)}`);
    document.getElementById("connector2").setAttribute("points",`${cube.point3.x},${cube.point3.y} ${lerpVal(cube.point7.x, cube.point3.x, lerpAmount)},${lerpVal(cube.point7.y, cube.point3.y, lerpAmount)}`);

    document.getElementById("connector1").setAttribute("points",`${cube.point6.x},${cube.point6.y} ${lerpVal(cube.point2.x, cube.point6.x, lerpAmount)},${lerpVal(cube.point2.y,cube.point6.y,lerpAmount)}`);
    document.getElementById("connector3").setAttribute("points",`${cube.point8.x},${cube.point8.y} ${lerpVal(cube.point4.x,cube.point8.x,lerpAmount)},${lerpVal(cube.point4.y,cube.point8.y,lerpAmount)}`);
    lerpAmount -= 0.01;
    }else{
        document.getElementById("connector0").setAttribute("points",`${cube.point1.x},${cube.point1.y} ${cube.point5.x},${cube.point5.y}`);
        document.getElementById("connector2").setAttribute("points",`${cube.point3.x},${cube.point3.y} ${cube.point7.x},${cube.point7.y}`);

        document.getElementById("connector1").setAttribute("points",`${cube.point2.x},${cube.point2.y} ${cube.point6.x},${cube.point6.y}`);
        document.getElementById("connector3").setAttribute("points",`${cube.point4.x},${cube.point4.y} ${cube.point8.x},${cube.point8.y}`);
    }
}

function mouseMagic(){
    if(mouseMode ===3){
        r = (mouseX/window.screen.width) + 50;
        r2 = (mouseY/window.screen.width) + 50;
    }
    if(r >= 10){
        //r = 10;
    }console.log(r)
   
}


function generateConnections(){
    let svg = document.getElementById("svg");

    for(var i = 0; i < 4; i++){
        svg.innerHTML += `<polyline class="connectors" id="connector${i}" points="" style="fill:white;stroke:blue;stroke-width:4"></polyline>`
    }
}
let r = 0.02;
let r2 = 0;
let r3 = 0;
function translation1(){
    //r += 0.01;
    //r2++;
    //r3++;
    if(mouseMode === 0){
    let screenHalfHeight = (window.screen.height - window.screen.height/2 - mouseY)/3//(window.screen.height - window.screen.height/2 - mouseY)/(window.screen.height)//window.screen.height/2 - (mouseY/window.screen.height )
    let screenHalfWidth = (window.screen.width- window.screen.width/2 - mouseX)/3
    cube.point5.x = cube.point1.x - cubeHalfWidth+screenHalfWidth;
    cube.point5.y = (cube.point1.y - cubeHalfWidth)+screenHalfHeight;
    cube.point6.x = cube.point2.x - cubeHalfWidth+screenHalfWidth;
    cube.point6.y = (cube.point2.y - cubeHalfWidth)+screenHalfHeight;
    cube.point7.x = cube.point3.x - cubeHalfWidth+screenHalfWidth;
    cube.point7.y = (cube.point3.y - cubeHalfWidth)+screenHalfHeight;
    cube.point8.x = cube.point4.x - cubeHalfWidth+screenHalfWidth;
    cube.point8.y = (cube.point4.y - cubeHalfWidth)+screenHalfHeight;

    cube.point1.x = mouseX - cubeHalfWidth;
    cube.point1.y = mouseY - cubeHalfWidth;

    cube.point2.x = mouseX + cubeHalfWidth;
    cube.point2.y = mouseY - cubeHalfWidth;

    cube.point3.x = mouseX + cubeHalfWidth;
    cube.point3.y = mouseY + cubeHalfWidth;

    cube.point4.x = mouseX - cubeHalfWidth;
    cube.point4.y = mouseY + cubeHalfWidth;

    //console.log(screenHalfHeight)
    }
    else if(mouseMode ===1){

            
            cube.point1.x = mouseX - cubeHalfWidth;
            cube.point1.y = mouseY - cubeHalfWidth;
        
            cube.point2.x = mouseX + cubeHalfWidth;
            cube.point2.y = mouseY - cubeHalfWidth;
        
            cube.point3.x = mouseX + cubeHalfWidth;
            cube.point3.y = mouseY + cubeHalfWidth;
        
            cube.point4.x = mouseX - cubeHalfWidth;
            cube.point4.y = mouseY + cubeHalfWidth;

    }
    else{
        rotate(r,r2,r3);
    }
}

function rotate(pitch, roll, yaw) {
    var cosa = Math.cos(yaw);
    var sina = Math.sin(yaw);

    var cosb = Math.cos(pitch);
    var sinb = Math.sin(pitch);

    var cosc = Math.cos(roll);
    var sinc = Math.sin(roll);

    var Axx = cosa*cosb;
    var Axy = cosa*sinb*sinc - sina*cosc;
    var Axz = cosa*sinb*cosc + sina*sinc;

    var Ayx = sina*cosb;
    var Ayy = sina*sinb*sinc + cosa*cosc;
    var Ayz = sina*sinb*cosc - cosa*sinc;

    var Azx = -sinb;
    var Azy = cosb*sinc;
    var Azz = cosb*cosc;
    var cubepoints = [cube.point1,cube.point2,cube.point3,cube.point4,cube.point5,cube.point6,cube.point7,cube.point8,];
    for (var i = 0; i < cubepoints.length; i++) {
        var px = cubepoints[i].x;
        var py = cubepoints[i].y;
        var pz = cubepoints[i].z;

        // if(i >= 5){
        // cubepoints[i].x = (cubepoints[i - 4].x - 10) + Axx*px + Axy*py + Axz*pz;
        // cubepoints[i].y = (cubepoints[i - 4].y - 10) + Ayx*px + Ayy*py + Ayz*pz;
        // cubepoints[i].z = (cubepoints[i - 4].z - 10) + Azx*px + Azy*py + Azz*pz;
        // }else{
        cubepoints[i].x = Axx*px + Axy*py + Axz*pz;
        cubepoints[i].y = Ayx*px + Ayy*py + Ayz*pz;
        cubepoints[i].z = Azx*px + Azy*py + Azz*pz;
        

    }
}

onmousemove = function(e){mouseX = e.clientX;  mouseY = e.clientY; /*console.log(mouseX)*/};
// function onmousemove (axis){
//     mousePos = function(e){console.log("mouse location:", e.clientX, e.clientY)};
//     if axis

// }
initialize();
generateConnections();
lerp();




