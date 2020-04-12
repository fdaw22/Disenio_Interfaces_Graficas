window.onload=function(){
    this.regilla();
}
    var canvas = document.getElementById("dibujo");
    var contexto = canvas.getContext("2d");
function regilla(){

        for (var x=0; x<=300; x=x+10){
            contexto.moveTo(x,0);
            contexto.lineTo(x,300);
        }

        for (var y=0; y<=300; y=y+10){
            contexto.moveTo(0,y);
            contexto.lineTo(300,y);
        }
        contexto.strokeStyle = "#f00";
        contexto.stroke();
}