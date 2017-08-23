var count = 1;
var menu =  document.getElementsByClassName("list")[0];
var container =  document.getElementsByClassName("container")[0];
function showMenu(){
	if(count % 2 != 0){
		menu.style.top = "80px";
		menu.style.opacity = "1";
		container.style.margin = "150px auto 0 auto"
	}else {
		menu.style.top = "0px";
		menu.style.opacity = "0";
		container.style.margin = "0 auto"
	}
	count++;
}