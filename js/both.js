class Both{
    constructor({x,y, width, height, IdleImage, attackImage, hitImage, rotation, dodgeX, dodgeY, textName, infoX, infoY}){
      this.hp = 3
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.imageIdle = new Image()
      this.imageAttack = new Image()
      this.imageHit = new Image()
      this.imageIdle.src = IdleImage
      this.imageAttack.src = attackImage
      this.imageHit.src = hitImage
      this.rotation = rotation
      this.dodgeX = dodgeX
      this.dodgeY = dodgeY
      this.image = this.imageIdle
      this.isAttacking = false
      this.isFacingRight = false
      this.isHit = false
      this.isDodging = false
      this.justAction = false


      this.textName = textName
      this.infoX = infoX
      this.infoY = infoY

      this.healthImage = new Image()
      this.healthImage.src = './assets/heart.png'
    }

    draw(){
        
        if(this.isFacingRight){
            flip(this.x, this.y, this.width, this.rotation)
        }
        
      

        if (this.isDodging) {
            drawRotatedImage(this.image, this.x + this.dodgeX, this.y + this.dodgeY, this.width, this.height, this.rotation)
        } else {
            drawRotatedImage(this.image, this.x, this.y, this.width, this.height, this.rotation)
        }
        c.restore()
        
    }
    
    
    
    attack(){
        this.isAttacking = true
        this.image = this.imageAttack
        
        if(!ball.hit){
            ball.hit = true
            ball.reversed = ball.reversed *-1
            setTimeout(()=>{ball.hit = false}, 1000)
        }
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
        setTimeout(() => {this.isDodging = false}, 1000)
    }
    
    
    randomAction(){
        const hasil = Math.floor(Math.random() * 4)
        if (hasil == 0) {
            this.attack()
        } else if(hasil == 1){
            this.hit()
        } else if(hasil == 2){
            this.dodge()
        } else if (hasil == 3){
            this.dodge()
        } else {
            this.hit()
        }
        this.justAction = true
        setTimeout(()=> {this.justAction = false}, 1000)
    }

    update(){
        if (this.hp > 0) {
            this.draw()
            
        }

        c.fillStyle = 'orange'
        c.fillRect(this.infoX, this.infoY, 400, 100)
        c.fillStyle = 'white'
        c.fillRect(this.infoX, this.infoY + 100, 400, 150)
        c.font = '40px serif'
        c.fillText(this.textName, this.infoX + 150, this.infoY + 60)
        
        let space = 50
        if (this.hp > 0) {
            for(let i = 0; i < this.hp; i++ ){
                c.drawImage(this.healthImage, this.infoX + space , this.infoY + 130, 80, 80)
                space += 100
            }
        } else {
            c.fillStyle = 'red'
            c.font = '40px serif'
            c.fillText('Died',this.infoX + 160, this.infoY + 190)
        }

        if(
            ball.x + ball.width >= this.x && 
            ball.x <= this.x + this.width && 
            ball.y + ball.height >= this.y && 
            ball.y + ball.height <= this.y + this.width  
        ){
            if (!this.justAction && this.hp > 0) {
                this.randomAction()
            }
        }
    }
}
