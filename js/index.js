let translationLerp = 0;
let cubeHalfWidth = 50;
let mouseX = 0;
let mouseY = 0;

let cube = {

    /*point1: [100,1,100],
    point2: [100,1,1],
    point3: [100,100,100],
    point4: [100,100,1],//end of square1
    point5: [-1,-1,1],
    point6: [-1,1,1],
    point7: [-1,-1,-1],
    point8: [-1,1,-1],*/


    point1: {
        x: 1,
        y: 1,
        z: 100
    },
    point2: {
        x: 100,
        y: 1,
        z: 100
    },
    point3: {
        x: 100,
        y: 100,
        z: 100
    },
    point4: {
        x: 1,
        y: 100,
        z: 100
    },
    point5: {
        x: translationLerp + 1,
        y: translationLerp + 1,
        z: 100
    },
    point6: {
        x: translationLerp + 100,
        y: translationLerp + 1,
        z: 100
    },
    point7: {
        x: translationLerp + 100,
        y: translationLerp + 100,
        z: 100
    },
    point8: {
        x: translationLerp + 1,
        y: translationLerp + 100,
        z: 100
    },


}
function lerp(){
    translationLerp++;
    setTimeout(() => {
        
        updateSquare();
        translation1();
        lerp();
      }, "180");
}

function updateSquare(){

    square1 = document.getElementById("box")
    //console.log(`${cube[0][1]},${cube[0][2]} ${cube[1][1]},${cube[1][2]} ${cube[2][1]},${cube[2][2]} ${cube[3][1]},${cube[3][2]}`)
    document.getElementById("box").setAttribute("points",`${cube.point1.x},${cube.point1.y} ${cube.point2.x},${cube.point2.y} ${cube.point3.x},${cube.point3.y} ${cube.point4.x},${cube.point4.y} ${cube.point1.x},${cube.point1.y}`)
    
    document.getElementById("box2").setAttribute("points",`${cube.point5.x},${cube.point5.y} ${cube.point6.x},${cube.point6.y} ${cube.point7.x},${cube.point7.y} ${cube.point8.x},${cube.point8.y} ${cube.point5.x},${cube.point5.y}`)
    
    
    
    document.getElementById("connector0").setAttribute("points",`${cube.point1.x},${cube.point1.y} ${cube.point5.x},${cube.point5.y}`);
    document.getElementById("connector1").setAttribute("points",`${cube.point2.x},${cube.point2.y} ${cube.point6.x},${cube.point6.y}`);
    document.getElementById("connector2").setAttribute("points",`${cube.point3.x},${cube.point3.y} ${cube.point7.x},${cube.point7.y}`);
    document.getElementById("connector3").setAttribute("points",`${cube.point4.x},${cube.point4.y} ${cube.point8.x},${cube.point8.y}`);
    
    console.log(square1.getAttribute("points"))
}


function generateConnections(){
    let svg = document.getElementById("svg");

    for(var i = 0; i < 4; i++){
        svg.innerHTML += `<polyline class="connectors" id="connector${i}" points="" style="fill:white;stroke:blue;stroke-width:4"></polyline>`
    }
}

function translation1(){
    cube.point5.x++;
    cube.point5.y++;
    cube.point6.x++;
    cube.point6.y++;
    cube.point7.x++;
    cube.point7.y++;
    cube.point8.x++;
    cube.point8.y++;

    cube.point1.x = mouseX - cubeHalfWidth;
    cube.point1.y = mouseY - cubeHalfWidth;

    cube.point2.x = mouseX + cubeHalfWidth;
    cube.point2.y = mouseY - cubeHalfWidth;

    cube.point3.x = mouseX + cubeHalfWidth;
    cube.point3.y = mouseY + cubeHalfWidth;

    cube.point4.x = mouseX - cubeHalfWidth;
    cube.point4.y = mouseY + cubeHalfWidth;
}

onmousemove = function(e){mouseX = e.clientX;  mouseY = e.clientY; console.log(mouseX)};
// function onmousemove (axis){
//     mousePos = function(e){console.log("mouse location:", e.clientX, e.clientY)};
//     if axis

// }

generateConnections();
lerp();



