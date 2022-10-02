

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
  