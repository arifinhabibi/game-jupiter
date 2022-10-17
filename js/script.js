
// state
let gameState = 'starting'



//set jupiter
let jupiter = new Image()
jupiter.src = "./assets/jupiter.png"

//set player
let player = new Player({x: 1200, y:80, width: 200, height: 200})

// bot
let bot1 = new Both({x: 550, y:80, width: 200, height: 200, IdleImage: './assets/bot1.png', attackImage: './assets/bot1_attack.png', hitImage: './assets/bot1_hit.png', rotation: -40, dodgeX: 100, dodgeY: 100, textName: 'Both 1', infoX: 40, infoY: 40})
let bot2 = new Both({x: 550, y:800, width: 200, height: 200, IdleImage: './assets/bot2.png', attackImage: './assets/bot2_attack.png', hitImage: './assets/bot2_hit.png', rotation: -130 , dodgeX: 100, dodgeY: -100, textName: 'Both 2', infoX: 40, infoY: 800})
let bot3 = new Both({x: 1270, y:750, width: 200, height: 200, IdleImage: './assets/bot3.png', attackImage: './assets/bot3_attack.png', hitImage: './assets/bot3_hit.png', rotation: 130, dodgeX: -100, dodgeY: -70, textName: 'Both 3', infoX: 1550, infoY: 800})

let ball = new Ball({x: 700, y:150, width: 50, height: 50})



let degree = 1

const update = ()=>{
  c.clearRect(0,0,canvas.width, canvas.height)
  
  
  player.update()
  bot1.update()
  bot2.update()
  bot3.update()
  ball.draw()
  drawRotatedImage(jupiter, canvas.width/2 - 800/2, canvas.height/2 - 800/2, 800, 800, degree += 0.2)

}


setInterval(update, 10)

window.addEventListener("keydown", (e)=>{
  if(e.key == " "){
    player.attack()
  }
  if(e.key == "d"){
    player.isFacingRight = true
  }
  if(e.key == "a"){
    player.isFacingRight = false
  }

  if (e.key == "s") {
    player.dodge()
  }

})

