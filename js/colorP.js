function postprocess(){
    var rgb = getAverageRGB(document.getElementById('canv'));
          var s = 0.30 * rgb.r + 0.59 * rgb.g + 0.11 * rgb.b;
          if (s < 130) {
            ctx.fillStyle = "rgba(40, 37, 34, 0.3)";
            color = "rgb(227,233,238)";
            ind = 'light';
          } else {
            ctx.fillStyle = "rgba(227,233,238, 0.3)";
            color = "rgb(40, 37, 34)";
            ind = 'dark';
          }
          
          ctx.fillRect(0, 0, 1080, 1080);
}