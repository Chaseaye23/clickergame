/*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/
 

  /*----- functions -----*/
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let player = {
    x: 100,
    y: 100,
    width: 50,
    height: 50
};

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(player.x, player.y, player.width, player.height); 
    requestAnimationFrame(update); 
}

update(); 