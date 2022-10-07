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
      this.isDodging = false


      this.healthImage = new Image()
      this.healthImage.src = './assets/heart.png'
    }
  
    draw(){
      if(this.isFacingRight){
        flip(this.x, this.y, this.width, 40)
      }

      if (this.isDodging) {
          drawRotatedImage(this.image, this.x - 100, this.y + 100, this.width, this.height, 40)
      } else {
          drawRotatedImage(this.image, this.x, this.y, this.width, this.height, 40)
      }
      c.restore()
    }
  
    attack(){
      this.isAttacking = true
      this.image = this.imageAttack
      setTimeout(()=>{this.isAttacking = false; this.image = this.imageIdle}, 200);
    }
  
    hit(){
        if (!this.isDodging) {
          this.image = this.imageHit
          if(!this.isHit){
            this.hp -= 1
          }
          this.isHit = true
          setTimeout(() => {this.image = this.imageIdle, this.isHit = false}, 1000);
      }
    }

    dodge(){
        this.isDodging = true
        console.log('hallo')
        setTimeout(() => {this.isDodging = false}, 1000)
    }

    
    update(){
        if (this.hp > 0) {
            this.draw()

            if(
              ball.x + ball.width >= this.x && 
              ball.x <= this.x + this.width && 
              ball.y + ball.height >= this.y && 
              ball.y + ball.height <= this.y + this.width &&
                this.isAttacking
            ){
              if(!ball.hit){
                ball.hit = true
                ball.reversed = ball.reversed *-1
                setTimeout(()=>{ball.hit = false}, 1000)
              }
            }else if(
              ball.x + ball.width >= this.x && 
              ball.x <= this.x + this.width && 
              ball.y + ball.height >= this.y && 
              ball.y + ball.height <= this.y + this.width &&
                !this.isAttacking
            ){
              this.hit()
            }
        }
        
        c.fillStyle = 'orange'
        c.fillRect(1550, 40, 400, 100)
        c.fillStyle = 'white'
        c.fillRect(1550, 40 + 100, 400, 150)
        c.font = '40px serif'
        c.fillText('dudung', 1550 + 150, 40 + 60)

        let space = 50
        
        if (this.hp > 0) {
          for(let i = 0; i < this.hp; i++ ){
              c.drawImage(this.healthImage, 1550 + space , 40 + 130, 80, 80)
              space += 100
          }
      } else {
          c.fillStyle = 'red'
          c.font = '40px serif'
          c.fillText('Died',1550 + 160, 40 + 190)
      }

       
    }
  
  }
  