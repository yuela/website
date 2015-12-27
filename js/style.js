/**
 * Created by ADMIN on 2015/12/27.
 */
$(document).ready(function(){
    $("section:first-child").click(function(whichpic){
        $("#image").style.display="block";
        var img=document.getElementById("image");
        var txt=document.getElementById("p1");
        var source=whichpic.getAttribute("href");
        var text=whichpic.getAttribute("title");
        img.setAttribute("src",source);
        txt[0].nodeValue=text;
    });
    function anim(duration){
        $('#mint').animate(
            {height: 'toggle'},
            {duration: duration}
        );
    }
    $('#closebtn').click(function() {
        $('#mintbar').slideUp();
        anim(600);
    });

    $('#mint').click(function() {
        anim(600);
        $('#mintbar').slideDown('slow');
    });
    <!--µã»÷Í¼Æ¬ÏÔÊ¾Í¼Æ¬ÂÖ²¥Ð§¹û-->
});
