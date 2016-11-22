var speed=1,
    min = 15,
    max = 45,
    y = min;
var circle = document.getElementsByClassName("circle");
function inter(){
  for(var i =0;i<6;i++){
    y+= speed;
    circle[i].style.width = ""+y+"px";
    circle[i].style.background = "rgb("+y*50+","+(255-y*2)+","+(y*2)+")";
    circle[i].style.height = ""+y+"px";
    circle[i].style.marginTop = ""+(max-y)+"px";
    if(y > max){speed = -speed;}
    if(y < min){speed = -speed;} 
  }
}
window.setInterval(inter,1000/3);
