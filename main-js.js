var speed   = 4,
    min     = 15,
    max     = 50,
    width   = min,
    height  = min;
var circle  = document.getElementsByClassName("circle");
function inter(){
    for(var i =0;i<6;i++){
        width   += speed ;
        height  += speed ;
        circle[i].style.width   = "" + width + "px";
        circle[i].style.height  = "" + height + "px";
        circle[i].style.background  = "rgb("+y*50+","+(255-y*2)+","+(y*2)+")";
        circle[i].style.marginTop   = ""+(max-y)+"px";
        if(y > max){speed = -speed;}
        if(y < min){speed = -speed;} 
    }
}
window.setInterval(inter,1000/3);
