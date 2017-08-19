
	var count = 0;
	var menu =  document.getElementsByClassName("list")[0];
	function showMenu(){
		if(count % 2 == 0){
			menu.style.top = "0px";
			menu.style.opacity = "0";
		}else {
			menu.style.top = "70px";
			menu.style.opacity = "1";
		}
		count++;
	}