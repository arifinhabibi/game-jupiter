const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')



/*******************************
            Both 3
*********************************/


// header rectangle
context.beginPath();
context.roundRect(8,5,70,15,[10, 10, 0, 0]);
context.fillStyle = "orange";
context.fill();

// text player
context.fillStyle = 'white'
context.font = '11px serif'
context.fillText('Both 3', 28, 16, 150)

// background health
context.beginPath();
context.roundRect(8,20,70,20,[0, 0, 10, 10]);
context.fillStyle = "white";
context.fill();


// health
make_image_both3()

function make_image_both3(){
    const image_base = new Image()
    image_base.src = 'img/heart.png'
    image_base.onload = function(){
        const heart1 = context.drawImage(image_base, 20, 23, 15, 15)
        const heart2 = context.drawImage(image_base, 35, 23, 15, 15)
        const heart3 = context.drawImage(image_base, 50, 23, 15, 15)
    }   
}


/*******************************
            Both 2
*********************************/


// header rectangle
context.beginPath();
context.roundRect(8,105,70,15,[10, 10, 0, 0]);
context.fillStyle = "orange";
context.fill();

// text player
context.fillStyle = 'white'
context.font = '11px serif'
context.fillText('Both 2', 28, 117, 150)

// background health
context.beginPath();
context.roundRect(8,120,70,20,[0, 0, 10, 10]);
context.fillStyle = "white";
context.fill();

// health
make_image_both2()

function make_image_both2(){
    const image_base = new Image()
    image_base.src = 'img/heart.png'
    image_base.onload = function(){
        const heart1 = context.drawImage(image_base, 20, 123, 15, 15)
        const heart2 = context.drawImage(image_base, 35, 123, 15, 15)
        const heart3 = context.drawImage(image_base, 50, 123, 15, 15)
    }   
}

/*******************************
            Both 1
*********************************/


// header rectangle
context.beginPath();
context.roundRect(220,105,70,15,[10, 10, 0, 0]);
context.fillStyle = "orange";
context.fill();

// text player
context.fillStyle = 'white'
context.font = '11px serif'
context.fillText('Both 1', 240, 117, 150)

// background health
context.beginPath();
context.roundRect(220,120,70,20,[0, 0, 10, 10]);
context.fillStyle = "white";
context.fill();

// health
make_image_both1()

function make_image_both1(){
    const image_base = new Image()
    image_base.src = 'img/heart.png'
    image_base.onload = function(){
        const heart1 = context.drawImage(image_base, 233, 123, 15, 15)
        const heart2 = context.drawImage(image_base, 248, 123, 15, 15)
        const heart3 = context.drawImage(image_base, 263, 123, 15, 15)
    }   
}


/*******************************
            Player
*********************************/


// header rectangle
context.beginPath();
context.roundRect(220,5,70,15,[10, 10, 0, 0]);
context.fillStyle = "orange";
context.fill();

// text player
context.fillStyle = 'white'
context.font = '11px serif'
context.fillText('Player', 240, 16, 150)

// background health
context.beginPath();
context.roundRect(220,20,70,20,[0, 0, 10, 10]);
context.fillStyle = "white";
context.fill();

// health
make_image_player()

function make_image_player(){
    const image_base = new Image()
    image_base.src = 'img/heart.png'
    image_base.onload = function(){
        const heart1 = context.drawImage(image_base, 233, 23, 15, 15)
        const heart2 = context.drawImage(image_base, 248, 23, 15, 15)
        const heart3 = context.drawImage(image_base, 263, 23, 15, 15)
    }   
}




// jupiter image
jupiter_image()

function jupiter_image(){
    const image_base = new Image()
    image_base.src = 'img/jupiter.png'
    image_base.onload = function(){
        // context.rotate(45 * Math.PI / 360)
        const jupiter = context.drawImage(image_base, 96, 25, 100, 100)
    }   
}

// ball
// setInterval(ball, 1000)

ball(-60, 60)

function ball(x, y){
    const  image_base = new Image()
    image_base.src = 'img/ball.png'
    image_base.onload = () => {
        context.translate(x, y)
        const ball = context.drawImage(image_base, 10, 10)
    }
}
