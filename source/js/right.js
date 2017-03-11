$(function(){
	$('.pop-music').click(function(){
		$('.pop-music').tipso('hide');
		$('.musicbox').css("right","0");
		$('.pop-tags').css("opacity","0");
		$('.pop-friends').css("opacity","0");
		$(this).css("opacity","0");
	});
	// $('.pop').mouseleave(function(){
	// 	$('iframe').attr("src","http://music.163.com/outchain/player?type=0&id=486455340&auto=1&height=430");
	// });
	$('.pop-music').tipso({
		width: 60,
		position: 'left',
		//content: '<img class="music-img" width="32px" height="32px" src="http://blog.myiooc.cn/content/templates/NINE/images/music.svg">',
		background: 'rgba(221,221,221,0.5)',
		color: 'rgba(0,0,0,0.5)'
	});
	$('.player').mouseleave(function(){
		setTimeout(function(){
			$('.musicbox').css("right","-400px");
			$('.pop-music').css("opacity","100");
			$('.pop-tags').css("opacity","100");
			$('.pop-friends').css("opacity","100");
		},300);
	});


	$('.pop-tags').click(function(){
		$('.pop-tags').tipso('hide');
		$('.tags').css("right","0");
		$('.pop-friends').css("opacity","0");
		$('.pop-music').css("opacity","0");
		$(this).css("opacity","0");
	});
	$('.pop-tags').tipso({
		width: 60,
		position: 'left',
		background: 'rgba(221,221,221,0.5)',
		color: 'rgba(0,0,0,0.5)'
	});
	$('.tags').mouseleave(function(){
		setTimeout(function(){
			$('.tags').css("right","-400px");
			$('.pop-tags').css("opacity","100");
			$('.pop-friends').css("opacity","100");
			$('.pop-music').css("opacity","100");
		},300);
	});

	$('.pop-friends').click(function(){
		$('.pop-friends').tipso('hide');
		$('.friends').css("right","0");
		$('.pop-tags').css("opacity","0");
		$('.pop-music').css("opacity","0");
		$(this).css("opacity","0");
	});
	$('.pop-friends').tipso({
		width: 60,
		position: 'left',
		background: 'rgba(221,221,221,0.5)',
		color: 'rgba(0,0,0,0.5)'
	});
	$('.friends').mouseleave(function(){
		setTimeout(function(){
			$('.friends').css("right","-400px");
			$('.pop-friends').css("opacity","100");
			$('.pop-music').css("opacity","100");
			$('.pop-tags').css("opacity","100");
		},300);
	});
});