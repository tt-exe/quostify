function watermark(){
    var wat = new Image();
    wat.onload = function () {
        ctx.drawImage(wat, 0, 0);
    }
    wat.src = "img/"+ind+".png";

}