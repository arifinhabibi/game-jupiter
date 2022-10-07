
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



const update = ()=>{
  c.clearRect(0,0,canvas.width, canvas.height)
  
  
  player.update()
  bot1.update()
  bot2.update()
  bot3.update()
  ball.draw()
  c.drawImage(jupiter, canvas.width/2 - 800/2, canvas.height/2 - 800/2, 800, 800)

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







  



//const canvas = document.getElementById('canvas')
//const c = canvas.getContext('2d')
//
//let player;
//let ball;
//function sleep(ms) {
//    return new Promise(resolve => setTimeout(resolve, ms));
//}
//function rotate(cx, cy, x, y, angle,anticlock_wise = false) {
//    if(angle == 0){
//        return {x:parseFloat(x), y:parseFloat(y)};
//    }if(anticlock_wise){
//        var radians = (Math.PI / 180) * angle;
//    }else{
//        var radians = (Math.PI / -180) * angle;
//    }
//    var cos = Math.cos(radians);
//    var sin = Math.sin(radians);
//    var nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
//    var ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
//    return {x:nx, y:ny};
// }
//
//class Ball{
//  constructor({position, width, height, imageSrc}){
//    this.position = position
//    this.width = width
//    this.height = height
//    this.image = new Image()
//    this.image.onload = ()=> {}
//    this.image.src = imageSrc
//    this.rotation = 0
//    this.reversed = -1
//    this.hit = false
//  }
//
//  async draw(){
//    //c.save()
//    //c.translate(1980/2 , 1080/2);
//    //c.rotate(this.rotation)
//    //c.translate(-(1980/2) , -(1080/2));
//    c.drawImage(this.image, this.position.x - this.width/2, this.position.y - this.height/2, this.width ,this.height)
//    this.position.x = rotate(1980/2,1080/2,1400, 200, this.rotation).x
//    this.position.y = rotate(1980/2,1080/2,1400, 200, this.rotation).y
//    this.rotation += -0.8 * this.reversed
//    if(this.position.x + this.width > player.hitbox.position.x && this.position.x < player.hitbox.position.x + player.hitbox.width && this.position.y + this.height > player.hitbox.position.y && this.position.y < player.hitbox.position.y + player.hitbox.height && !this.hit && player.isAttacking){
//      this.reversed = this.reversed * -1
//      this.hit = true
//    sleep(2000).then(()=>{
//      this.hit= false
//    })
//    }
//
//
//    console.log(this.reversed)
//
//
//    //c.restore()
//  }
//
//
//}
//
//class Player{
//  constructor({position, width, height, images}){
//    this.position = position
//    this.width = width
//    this.height = height
//    this.images = images
//    this.idleImage = new Image()
//    this.idleImage.src = images.idle
//    this.attackImage = new Image()
//    this.attackImage.src = images.attack
//    this.hitImage = new Image()
//    this.hitImage.src = images.hit
//    this.image = this.idleImage
//    this.isAttacking = false
//    this.isHit = false
//    this.isFacingRight = false
//    this.hitbox = {
//      position: this.position,
//      width: 50,
//      height: 100,
//    }
//  }
//
//  draw(){
//      c.save()
//    if(this.isFacingRight){
//      c.translate(this.position.x + this.width/2, this.position.y + this.width/2);
//      c.scale(-1, 1);
//      c.rotate(-1.6);
//      c.translate(-(this.position.x + this.width/2), -(this.position.y + this.width/2));
//    }
//    if(this.isAttacking){
//      this.image = this.attackImage
//    }else if (this.isHit){
//      this.image = this.hitImage
//    }else{
//      this.image = this.idleImage
//    }
//    c.translate(this.position.x + this.width/2, this.position.y + this.width/2);
//    c.rotate(0.9);
//    c.translate(-(this.position.x + this.width/2), -(this.position.y + this.width/2));
//    if(this.isAttacking){
//
//    c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
//    }
//    c.drawImage(this.image, this.position.x, this.position.y, this.width ,this.height)
//    c.restore()
//  }
//}
//
//const init = () => {
//  setup()
//  setInterval(update, 8)
//}
//
//const setup = () => {
//  canvas.width = 1980
//  canvas.height = 1080
//  player = new Player({position: {x: 1300, y:200},width: 200, height: 200, images: {idle: "./assets/player.png", attack: "./assets/player_attack.png", hit: "./assets/player_hit.png"}})
//  ball = new Ball({position: {x: 1400, y: 500}, width: 100, height: 100, imageSrc: "./assets/ball.png"})
//}
//
//const update = () => {
//  clearCanvas()
//  const jupiter = new Image()
//  jupiter.src = "./assets/jupiter.png"
//  player.draw()
//  ball.draw()
//  c.drawImage(jupiter, 1980/2 - 800/2, 1080/2 - 800 / 2, 800, 800)
//}
//
//const clearCanvas = () => {
//  c.clearRect(0,0,canvas.width, canvas.height)
//}
//
//
//
//window.addEventListener("keydown", (e) => {
//  if(e.key == " "){
//    player.isAttacking = true
//  }
//  if(e.key == "d"){
//    player.isFacingRight = true
//  }
//  if(e.key == "a"){
//    player.isFacingRight = false
//  }
//});
//
//
//
//window.addEventListener("keyup", (e) => {
//  console.log(e)
//  if(e.key == " "){
//    player.isAttacking = false
//  }
//});
