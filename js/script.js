const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 1980
canvas.height = 1080

class Player{
  constructor({x,y, width, height}){
    this.hp = 3
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.imageIdle = new Image()
    this.imageAttack = new Image()
    this.imageHit = new Image()
    this.imageIdle.src = "./assets/player.png"
    this.imageAttack.src = "./assets/player_attack.png"
    this.imageHit.src = "./assets/player_hit.png"
    this.image = this.imageIdle
    this.isAttacking = false
    this.isFacingRight = false
    this.isHit = false
  }

  draw(){
    if(this.isFacingRight){
      flip(this.x, this.y, this.width, 40)
    }
    drawRotatedImage(this.image, this.x, this.y, this.width, this.height, 40)
    c.restore()
  }

  attack(){
    this.isAttacking = true
    this.image = this.imageAttack
    setTimeout(()=>{this.isAttacking = false; this.image = this.imageIdle}, 200);
  }

  hit(){
    this.image = this.imageHit
    if(!this.isHit){
      this.hp -= 1
    }
    this.isHit = true
    setTimeout(()=>{this.image = this.imageIdle, this.isHit = false}, 1000);
  }

}

class Ball{
  constructor({x,y, width, height}){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.image = new Image()
    this.image.src = "./assets/ball.png"
    this.rotation = 0.1
    this.reversed = 1
    this.hit = false
  }

  draw(){
    this.x = rotate(1980/2,1080/2,1400, 200, this.rotation).x
    this.y = rotate(1980/2,1080/2,1400, 200, this.rotation).y
    c.drawImage(this.image, this.x, this.y, this.width, this.height)
    this.rotation += 1 * this.reversed
    if(
      this.x + 200 >= player.x && 
      this.x <= player.x + 200 && 
      this.y + this.height >= player.y && 
      this.y + this.height <= player.y + 200 &&
        player.isAttacking
    ){
      if(!this.hit){
        this.hit = true
        this.reversed = this.reversed *-1
        setTimeout(()=>{this.hit = false}, 1000)
      }
    }else if(
      this.x + 200 >= player.x && 
      this.x <= player.x + 200 && 
      this.y + this.height >= player.y && 
      this.y + this.height <= player.y + 200 &&
        !player.isAttacking
    ){
      player.hit()

    }


  }

}

function drawRotatedImage(image, x, y, w, h, degrees){
  c.save();
  c.translate(x+w/2, y+h/2);
  c.rotate(degrees*Math.PI/180.0);
  c.translate(-x-w/2, -y-h/2);
  c.drawImage(image, x, y, w, h);
  c.restore();
}

function flip(x, y, w, deg){
  const rad =  deg*Math.PI/180.0;
  c.save()
  c.translate(x + w/2, y+ w/2);
  c.scale(-1, 1);
  c.rotate(-rad - rad);
  c.translate(-(x+ w/2), -(y+w /2));
}

function rotate(cx, cy, x, y, angle,anticlock_wise = false) {
    if(angle == 0){
        return {x:parseFloat(x), y:parseFloat(y)};
    }if(anticlock_wise){
        var radians = (Math.PI / 180) * angle;
    }else{
        var radians = (Math.PI / -180) * angle;
    }
    var cos = Math.cos(radians);
    var sin = Math.sin(radians);
    var nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
    var ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return {x:nx, y:ny};
 }


//set jupiter
let jupiter = new Image()
jupiter.src = "./assets/jupiter.png"

//set player
let player = new Player({x: 1200, y:80, width: 200, height: 200})

let ball = new Ball({x: 1200, y:200, width: 50, height: 50})

const update = ()=>{
  c.clearRect(0,0,canvas.width, canvas.height)

  if(player.hp >= 0){
    player.draw()
  }
  ball.draw()
  c.drawImage(jupiter, 1980/2 - 800/2, 1080/2 - 800/2, 800, 800)
}

setInterval(update, 8)

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
