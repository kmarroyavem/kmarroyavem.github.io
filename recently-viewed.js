$(document).ready(function(){
	
	$("div.newVarietiesBlock").each(function() {
		var nVarObj = $(this);
		var n = $("div.slide .item",nVarObj).length;
		if(n <= 5){
			$('.ctrl', this).addClass('hidden');
		}else{
			if($('.ctrl', this).hasClass('hidden')){
				$('.ctrl', this).removeClass('hidden');
			}
		}
	});

	
});