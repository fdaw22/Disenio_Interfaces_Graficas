window.onload=function(){
    this.crearArrayObjects();
    this.dibujaCarta();
    this.canvas.addEventListener("click", function(evt) {
        var mousePos = oMousePos(canvas, evt);
        for(x = 0; x < 2; x++){
            for(y = 0; y < 6; y++){
                if(mousePos.x>=cartas[x][y].x && mousePos.x<=cartas[x][y].x+cartas[x][y].ancho && mousePos.y>=cartas[x][y].y && mousePos.y<=cartas[x][y].y+cartas[x][y].largo){
                    alert(cartas[x][y].info);
                }
            }
        }
        console.log(mousePos.x+" "+mousePos.y+" fin");
    }, false);
}
function Carta(x,y,ancho,largo,info){
    this.x=x;
    this.y=y;
    this.ancho=ancho;
    this.largo=largo;
    this.info=info;
}

var cartas;

function crearArrayObjects(){
    cartas=[[1,2,3,4,5,6],[7,8,9,10,11,12]];
    alert(cartas[1][5]);
    var espaciox=10;
    var espacioy=10;
    var coeficiente1=0;
    var coeficiente2=0;
    for(x = 0; x < 2; x++){
        for(y = 0; y < 6; y++){
            cartas[x][y] = new Carta(espaciox=espaciox+coeficiente1,espacioy+coeficiente2,50,50,Math.round(Math.random()*101));
            coeficiente1=70;
        }
        coeficiente2=70;
        coeficiente1=0;
        espaciox=10;
    }
    alert(cartas[1][0].y);
}

var canvas = document.getElementById("dibujo3");
var contexto = canvas.getContext("2d");

function dibujaCarta(){
    for(x = 0; x < 2; x++){
        for(y = 0; y < 6; y++){
            contexto.fillStyle = "orange";
            contexto.fillRect(cartas[x][y].x,cartas[x][y].y,cartas[x][y].ancho,cartas[x][y].largo);
            //alert(cartas[x][y].info);
        }
    }
}

function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    return { //objeto
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
    }
}
