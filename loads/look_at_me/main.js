// Loading function
var box_loading_name = 'box'; 
var content_div_name = 'contents';
document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive') {
        document.getElementById('contents').style.display="none";
    } else if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
            document.getElementById(box_loading_name).style.display="none";
            document.getElementById(content_div_name).style.display="block";
        },1500);
    }
}