$(document).ready(function(){
	 var source = $("#megallen-template").html();
	 var megallenTemplate = Handlebars.compile(source);
     $place = $("#place");
  
	  	$.get('/places', {city:"Seville"}, function(data) {
	    $place.html(megallenTemplate(data));
	   
	  });


 $(document).on("click","#next",function()
 {
	   var nextcity =$('.desc-div').data("place");
	   console.log(nextcity);
	  $.get('/places',{city:nextcity}, function(data){
	      
	  	$place.html(megallenTemplate(data));
	 });


});

});