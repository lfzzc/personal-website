
$(function(){
    var agent=navigator.userAgent;
    if(agent.indexOf('Chrome')!=-1){
        $('.item>a').css('overflow','visible');
        $('.item').hover(function(){
            $(this).find('img').css('z-index','-10')});
    }
    $('#concatme').on('click',function(){
        $('#address').show().animate({width:300},800);
    })
});