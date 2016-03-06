/*function Getpostion(){    
var vscroll = document.body.scrollTop;    
alert(vscroll);
}*/



$(window).scroll(function() {
    if ( $(window).scrollTop() == 0 ) {
        // Your div has reached the top
        $("#logo-main").hide();
    }else {
    	$("#logo-main").show();
    }
});

//$( window ).scroll(function() {
  //if(document.body.scrollTop){
  	//alert('top');
  //}
//});