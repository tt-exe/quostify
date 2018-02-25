function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}
    function downloadCanvas(link, canvasId, filename) {
      var meh = document.getElementById(canvasId).toDataURL();
      var blob = dataURLtoBlob(meh);
      link.href = URL.createObjectURL(blob);
      link.download = filename;

    }