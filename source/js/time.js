$(function(){
	var weekday=new Array(7)
	weekday[0]="星期天"
	weekday[1]="星期一"
	weekday[2]="星期二"
	weekday[3]="星期三"
	weekday[4]="星期四"
	weekday[5]="星期五"
	weekday[6]="星期六"
	setInterval(function(){
		var date=new Date();
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		var week=date.getDay();
		var hour=date.getHours();
		var minute=date.getMinutes();
		var s=date.getSeconds();
		hour=hour<10?"0"+hour:hour;
		minute=minute<10?"0"+minute:minute;
		s=s<10?"0"+s:s;
		$('.nowtime').html(year+"年"+month+"月"+day+"日"+" "+weekday[week]+" "+hour+":"+minute+":"+s);
	},1000);
	$('.marquee-content-items').marquee({duration: 15000});
});