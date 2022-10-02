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
      this.startingX = x
      this.startingY = y
    }
  
    draw(){
      this.x = rotate(1980/2 - this.width / 2,1080/2 - this.height / 2, this.startingX, this.startingY, this.rotation).x
      this.y = rotate(1980/2 - this.width / 2,1080/2 - this.height / 2, this.startingX, this.startingY, this.rotation).y
      c.drawImage(this.image, this.x, this.y, this.width, this.height)
      this.rotation += 1 * this.reversed

      
     
    }
  
  }