
    function randombg(arr) {


        loader.classList.remove("hide");
        loader.classList.add("show");
        loaderp.classList.remove("hide");
        loaderp.classList.add("show");
        sig = makestr();
  
        img = new Image();
        img.crossOrigin = 'anonymous';
        var ctx = canvas.getContext("2d");
        img.src = "https://source.unsplash.com/random/1080x1080?sig=" + sig;
        img.onload = function () {
  
          loader.classList.remove("show");
          loader.classList.add("hide");
          loaderp.classList.remove("show");
          loaderp.classList.add("hide");
          ctx.drawImage(img, 0, 0);
  
  
          postprocess();
  
  
  
          var realWidth = 1080;
          var maxWidth = 960;
          var fsize = 80;
          var lineHeight = fsize * 1.3;
          var x = (canvas.width - maxWidth) / 2;
          var y = 200;
          console.log(arr);
          var text = arr['quoteText'];
  
          ctx.font = fsize + 'pt Lato';
          ctx.fillStyle = color;
          ctx.textAlign = "center";
  
          var lines = getLines(ctx, text, maxWidth);
          var l;
  
          for (l in lines) {
            var width = ctx.measureText(lines[l]).width;
            ctx.fillText(lines[l], 540, y);
            y += lineHeight;
          }
  
  
          y = 900;
          text = arr['quoteAuthor'];
          ctx.font = 30 + 'pt Lato';
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(text, 540, maxWidth);
          watermark();
        }
  
  
      }