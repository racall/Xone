function footerPosition(){
    var contentHeight = $(document.body).outerHeight(true),//网页正文全文高度
        winHeight = $(window).height();//可视窗口高度，不包括浏览器顶部工具栏
    if(!(contentHeight > winHeight)){
    	var footHeight=$("footer").height();
    	var h=winHeight+footHeight-contentHeight-45;
        $("footer").css("margin-top",h);
    }else{
    	$("footer").css("margin-top",0);
    }
}
footerPosition();
var re=/x/;
console.log(re);
re.toString=function(){
    closePage();
}
console.log(
    "%c小忆博客\n %cCopeleft \xa9 %s",
    'font-family: "微软雅黑", sans-serif;font-size:35px;color:#fafafa;-webkit-text-fill-color:#FAFAFA;-webkit-text-stroke: 1px #2390DA;text-shadow: 0px 0px 2px #686868, 0px 1px 1px #ddd, 0px 2px 1px #d6d6d6, 0px 3px 1px #ccc, 0px 4px 1px #c5c5c5, 0px 5px 1px #c1c1c1, 0px 6px 1px #bbb, 0px 7px 1px #777, 0px 8px 3px rgba(100, 100, 100, 0.4), 0px 9px 5px rgba(100, 100, 100, 0.1), 0px 10px 7px rgba(100, 100, 100, 0.15), 0px 11px 9px rgba(100, 100, 100, 0.2), 0px 12px 11px rgba(100, 100, 100, 0.25), 0px 13px 15px rgba(100, 100, 100, 0.3);',
    "font-size:12px;color:#999999;",
    (new Date).getFullYear()
);
var closePage = function() {
  open(location, '_self').close();
}
$(window).resize(footerPosition);
$(document).ready(function () {
    var delay = 1;
    var DELAY_STEP = 200;
    var animationOptions = { opacity: 1, top: 0};
    $('h1').animate(animationOptions).promise()
            .pipe(animateMain)
            .pipe(animateLocationIcon);
    function animateMain() {
        var dfd = $.Deferred();
        var els = $('.animate-init');
        var size = els.size();

        els.each(function (index, el) {
            delay++;
            $(el).delay(index * DELAY_STEP)
                    .animate(animationOptions);
            (size - 1 === index) && dfd.resolve();
        });
        return dfd.promise();
    }

    function animateLocationIcon() {
        $('article').delay(delay * DELAY_STEP).animate({
            opacity: 1,
            top: 0
        }).promise().done();
    }

});