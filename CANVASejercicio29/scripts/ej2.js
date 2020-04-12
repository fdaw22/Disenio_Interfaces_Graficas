window.onload=function(){
    this.canvas.addEventListener("mousedown", function(evt) {
        var mousePos = oMousePos(canvas, evt);
        contexto.moveTo(mousePos.x,mousePos.y);
        console.log(mousePos.x+" "+mousePos.y+" inicio");
      }, false);
    this.canvas.addEventListener("mouseup", function(evt) {
        var mousePos = oMousePos(canvas, evt);
        contexto.lineTo(mousePos.x, mousePos.y);
        contexto.stroke();
        console.log(mousePos.x+" "+mousePos.y+" fin");
    }, false);
}

var canvas = document.getElementById("dibujo2");
var contexto = canvas.getContext("2d");

function oMousePos(canvas, evt) {
var ClientRect = canvas.getBoundingClientRect();
return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
}
}