	var timer = false;;
								$.fn.carousel = function(i){
									timer = false;
									$("div#carouselBlock li")
										.eq(i)
										.click();
									
											if(i+1 < $("div#carouselBlock li").length ) 
											{
												timer = setTimeout('$().carousel('+ (i+1)+ ')', 3000);
											}else if(i+1 == $("div#carouselBlock li").length ){
													timer = setTimeout("$('div#carouselBlock ul li:first-child').addClass('current');$('div#carouselBlock a.pane:first').addClass('current');$('div#carouselBlock ul li:last-child').removeClass('current');$('div#carouselBlock a.pane:last-child').removeClass('current');", 3000);
											}
									}			
									$(document).ready(function(){		
										if($("div#carouselBlock li").length <= 1) 
										{
											$("div#carouselBlock .tabs").hide();
										}
										var stackObj = $("div#accordionBlock .stack");
										$("div.item p",stackObj)
											.click(
												function(){
													$("div.item",stackObj).removeClass("current");
													$(this)
														.parent(".item")
														.addClass("current");
												}
											);
										
										
										var slideItemWidth = 143;
										var nVarObj = $("div#newVarietiesBlock");
										var n = $("div.slide .item",nVarObj).length;
										var t;
										$("div.slide",nVarObj)
											.css({width: n*slideItemWidth})
											.css({left:  0});
										$("div.ctrl",nVarObj)
											.click(
												function(){
													if(clickCheck == true){
														showHeroLoad();
														t=setTimeout("hideHeroLoad();",1400);
														var w = slideItemWidth;
														var d = ($(this).is("#next"))?-1:1;
														var p = d*w;
														var vO = $("div.viewer",nVarObj).offset().left;
														var sO = $("div.slide",nVarObj).offset().left;
														var vW =  $("div.viewer", nVarObj).width();
														var sW =  $("div.slide", nVarObj).width();																									
														if (	sO - vO + p > 0 || sW + sO - vO + p < vW){return false;}
														$("div.slide", nVarObj).animate({left:'+=' + p + 'px' }, 1000)
														$("div.ctrl", nVarObj).removeClass('disable');
														if (	sO - vO + (p*2) > 0 || sW + sO - vO + (p*2) < vW){$(this).addClass('disable');}
													}else{
														return false; 
													}
													
												}
											);
											
										var slideItemWidth1 = 166;
										var nVarObj1 = $("div#accessoryProductsBlock");
										var n1 = $("div.slide .item",nVarObj1).length;
										var t1;
										$("div.slide",nVarObj1)
											.css({width: n1*slideItemWidth1})
											.css({left:  0});
										$("div.ctrl",nVarObj1)
											.click(
												function(){
													if(clickCheck1 == true){
														showHeroLoad1();
														t1=setTimeout("hideHeroLoad1();",1400);
														var w1 = slideItemWidth1;
														var d1 = ($(this).is("#next"))?-1:1;
														var p1 = d1*w1;
														var vO1 = $("div.viewer",nVarObj1).offset().left;
														var sO1 = $("div.slide",nVarObj1).offset().left;
														var vW1 =  $("div.viewer", nVarObj1).width();
														var sW1 =  $("div.slide", nVarObj1).width();																									
														if (	sO1 - vO1 + p1 > 0 || sW1 + sO1 - vO1 + p1 < vW1){return false;}
														$("div.slide", nVarObj1).animate({left:'+=' + p1 + 'px' }, 1000)
														$("div.ctrl", nVarObj1).removeClass('disable');
														if (	sO1 - vO1 + (p1*2) > 0 || sW1 + sO1 - vO1 + (p1*2) < vW1){$(this).addClass('disable');}
													}else{
														return false; 
													}
													
												}
											);
											
											
										var carObj = $("div#carouselBlock")
										$("div.tabs li", carObj)
											.click(
												function(){
													clearTimeout(timer);
													var i = $("div.tabs li", carObj)
														.index(this);
																									
													$("a.pane",carObj)
														.removeClass("current")	
														.eq(i)
															
														.fadeIn("slow")
													.addClass("current");
													$("div.tabs li", carObj)
														.removeClass("current");
													$(this)
														.addClass("current");											
												}
											)
								
										$().carousel(0);
										})


var clickCheck = true;

function hideHeroLoad(){
	clickCheck = true;
}

function showHeroLoad(){
	clickCheck = false;
}

var clickCheck1 = true;

function hideHeroLoad1(){
	clickCheck1 = true;
}

function showHeroLoad1(){
	clickCheck1 = false;
}

function checkHideRolloverToZoom() {
	var xLargeImageNum = $('div.thumbnails div.small-image img[name=xLargeImage]').size();
//alert("xLargeImageNum =" + xLargeImageNum);	
	if(xLargeImageNum < 1) {
		$('div.zoom-messages').hide();
	}	
}

function checkHideThumbnail() {
	var smallImageNum = $('div.thumbnails div.small-image img.thumbnailItem').size();
//alert("smallImageNum =" + smallImageNum);	
	if(smallImageNum <= 1) {
		$('div.thumbnails').hide();
	}	
}

$(document).ready(function(){
						  

	setTimeout("checkHideRolloverToZoom(); checkHideThumbnail();",1000  );	
	
	// Hide the links to product detail tabs if the tab has no info inside (with none class)
	if ( $("div.product-detail-tab li.ui-tabs-3 a").length == 1 && $("div.product-detail-tab li.ui-tabs-3 a").hasClass("none") == false )
		$("div.product-detail-info div.sizing-guide").removeClass("none").addClass("block");
	if ( $("div.product-detail-tab li.ui-tabs-4 a").length == 1 && $("div.product-detail-tab li.ui-tabs-4 a").hasClass("none") == false )
		$("div.product-detail-info div.shipping-info").removeClass("none").addClass("block");	

	if($('#accessoryProductsBlock .item').size() <= 4){
		$('#accessoryProductsBlock .ctrl').css('visibility', 'hidden');
	}
	
	$('div.related-items div.showNextRelatedItems a').live('click', function(){
		var container = $("div.related-items");
		$('div.relatedItem1', container).addClass('none');
		$('div.relatedItem2', container).addClass('none');
		$('div.relatedItem3', container).addClass('none');
		$('div.relatedItem4', container).removeClass('none');
		$('div.relatedItem5', container).removeClass('none');
		$('div.relatedItem6', container).removeClass('none');
		$('div.showNextRelatedItems', container).addClass('none');
		$('div.showPrevRelatedItems', container).removeClass('none');
	});
	$('div.related-items div.showPrevRelatedItems a').live('click', function(){
		var container = $("div.related-items");		
		$('div.relatedItem1', container).removeClass('none');
		$('div.relatedItem2', container).removeClass('none');
		$('div.relatedItem3', container).removeClass('none');
		$('div.relatedItem4', container).addClass('none');
		$('div.relatedItem5', container).addClass('none');
		$('div.relatedItem6', container).addClass('none');
		$('div.showNextRelatedItems', container).removeClass('none');
		$('div.showPrevRelatedItems', container).addClass('none');	
	});
	
	
	$('div.also-like-items div.showNextUpsellItems  a').live('click', function(){
		var container = $("div.also-like-items");
		$('div.upsellItem1', container).addClass('none');
		$('div.upsellItem2', container).addClass('none');
		$('div.upsellItem3', container).addClass('none');
		$('div.upsellItem4', container).removeClass('none');
		$('div.upsellItem5', container).removeClass('none');
		$('div.upsellItem6', container).removeClass('none');
		$('div.showNextUpsellItems', container).addClass('none');
		$('div.showPreUpsellItems', container).removeClass('none');
	});
	$('div.also-like-items div.showPreUpsellItems a').live('click', function(){
		var container = $("div.also-like-items");		
		$('div.upsellItem1', container).removeClass('none');
		$('div.upsellItem2', container).removeClass('none');
		$('div.upsellItem3', container).removeClass('none');
		$('div.upsellItem4', container).addClass('none');
		$('div.upsellItem5', container).addClass('none');
		$('div.upsellItem6', container).addClass('none');
		$('div.showNextUpsellItems', container).removeClass('none');
		$('div.showPreUpsellItems', container).addClass('none');	
	});	
	
	
	
	// *** Dialog Zoom-view: Begin ***

	$(".dialog-zoom-view").live("click", function() {
		$("#dialog").load('/dialog/productZoom.jsp', function() {
			var zoomViewDiv = $("div.dialog-zoom-view-container");
			var pdpDiv = $("div.product-detail-info");
			var xLargeImage = $("div.xLarge-image img.xLarge-image", zoomViewDiv); 
			
			// copy the product title
			$("p.title", zoomViewDiv).html($("div.title-group h1").html());
			
			// copy xLarge Image
			xLargeImage.attr("src", $("div.small-image img.xLargeImage0", pdpDiv).attr("src") );
			
			// copy thumbnail Images
			$("div.small-image", zoomViewDiv).append($("div.small-image img.thumbnailItem", pdpDiv).clone());
			
			// copy swatches Images
			if ( $("div.color-swatches", pdpDiv).children().length > 0 ) {
				$("div.color-group").removeClass("none");
				$("div.color-swatches", zoomViewDiv).append($("div.color-swatches", pdpDiv).children().clone());
				
				$("div.color-swatches img", zoomViewDiv).removeClass("none").addClass("block");
			}
		
			// handler for clicking on thumbnails
			$("div.small-image img.thumbnailItem", zoomViewDiv).live("click", function() {
				var src = $("div.small-image img.xLargeImage" + $(this).attr("index"), pdpDiv).attr("src");
				src = src != null ? src : "__EMPTY__";
				xLargeImage.attr("src", src);
			});
			
			// handler for clicking on swatches
			var colourXLargeImageSrcMap = new Object;
			$("div.skuDetails ul.hasInventory", pdpDiv).each(function() {
				var colourCode = $(this).attr("colourCode");
				if (colourXLargeImageSrcMap[colourCode] == null) {
					colourXLargeImageSrcMap[colourCode] = $(".xLargeColourImage img", $(this)).attr("src");
					if (colourXLargeImageSrcMap[colourCode] == null)
						colourXLargeImageSrcMap[colourCode] = "__EMPTY__";
				}
			});
			$("div.color-swatches a", zoomViewDiv).live("click", function() {
				var selectedColourCode = $("span.colorVar", $(this)).html();
				var selectedColourName = $("span.colorName", $(this)).html();				
				$("span.selectedColorName", zoomViewDiv).html(selectedColourName);

				xLargeImage.attr("src", colourXLargeImageSrcMap[selectedColourCode]);
				
				$("div.color-swatches span.boxBoder", zoomViewDiv).removeClass('color-border');
				$("span.boxBoder", $(this)).addClass('color-border');
			});
						
		}).dialog('option', 'width', 870).dialog('option', 'position', ['center','top'] ).dialog("open").dialog('option', 'bgiframe', true);	
		
		return false;
	});
	
	// *** Dialog Zoom-view: End ***	
	
	
});