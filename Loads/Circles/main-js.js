var speed   = 4,
    min     = 15,
    max     = 50,
    width   = min,
    height  = min,
    color   = 51;
var circle  = document.getElementsByClassName("circle");
function inter(){
    for(var i =0;i<6;i++){
        circle[i].style.width   = "" + width + "px";
        circle[i].style.height  = "" + height + "px";
        circle[i].style.background  = "rgb("+color*i+","+(255-color*i)+","+(color*i)+")";
        circle[i].style.marginTop   = ""+(max-height)+"px";
        if(width > max){speed = -speed;}
        if(width < min){speed = -speed;} 
        width   += speed ;
        height  += speed ;
    }
}
window.setInterval(inter,1000/3);
