$(document).ready(function(){

var contador=1;

    $(".menu_bar").click(function(){
        if(contador==1){
            $("nav").animate({
                top:'-100%'
            });
            contador=0;
        }else{
            $("nav").animate({
                top:'8%',
            });
            contador=1;
        }
    });
});