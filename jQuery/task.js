$(document).ready(function(){
    console.log('hello')
    $('.hamburger').click(function(){
        $('nav a').toggle();
    })
    $(window).resize(function(){
        var x = $(window).width();
        if(x > 768){
            $('nav a').css('display','initial')
        }
        else{
            $('nav a').css('display','none')
        }
    })

});