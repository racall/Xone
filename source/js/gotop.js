$(function(){
	var oconnorBody = jQuery("body"),
	defaultScroll = 0,
	$cancel = jQuery('#cancel-comment-reply-link'),
	cancel_text = $cancel.text();

	function drawCircle(id, percentage, color) {
					var width = $(id).width();
					var height = $(id).height();
	                var radius = parseInt(width/2.20);
	                var position = width;
	                var positionBy2 = position/2;
	                var bg = $(id)[0];
					id = id.split('#');
	                var ctx = bg.getContext('2d');
	                var imd = null;
	                var circ = Math.PI * 2;
	                var quart = Math.PI / 2;
					ctx.clearRect(0,0,width,height);
	                ctx.beginPath();
	                ctx.strokeStyle = color;
	                ctx.lineCap = 'square';
	                ctx.closePath();
	                ctx.fill();
	                ctx.lineWidth = 3;
	                imd = ctx.getImageData(0, 0, position, position);
	                var draw = function(current, ctxPass) {
	                    ctxPass.putImageData(imd, 0, 0);
	                    ctxPass.beginPath();
	                    ctxPass.arc(positionBy2, positionBy2, radius, -(quart), ((circ) * current) - quart, false);
	                    ctxPass.stroke();
	                }
	                draw(percentage / 100, ctx);
	            }
	$("#backtoTop").click(function() {		
		$("body,html").animate({
			scrollTop: 0
		},
		800);
		return false;
	})			
	jQuery(window).scroll(function() {
		var docHeight = (jQuery(document).height() - $(window).height()),
		$windowObj = jQuery(this),
		percentage = 0;
		if ($windowObj.scrollTop() < defaultScroll && $windowObj.scrollTop() > 200) {
			jQuery("#header-nav").addClass('metabar--affixed');
			
		} else {
			jQuery("#header-nav").removeClass('metabar--affixed');
			
		}	
		defaultScroll = $windowObj.scrollTop();
		percentage = parseInt(( defaultScroll / docHeight ) * 100);
		
		var backToTop = jQuery("#backtoTop");
		if(backToTop.length > 0){
		if ($windowObj.scrollTop() > 200) {
			jQuery("#backtoTop").addClass('button--show');
		} else {
			jQuery("#backtoTop").removeClass('button--show');
		}	
		$(".per").attr("data-percent",percentage);
		drawCircle('#backtoTopCanvas', percentage, '#666');
		}
	})
	 var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
	jQuery(document).on("click", ".js-showInfo",
	function(e) {
		e.preventDefault();
		$(".info").removeClass("v-hide");
	});
});








