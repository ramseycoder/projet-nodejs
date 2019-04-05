    function bis()
    {
        $('#contacts .contents .fa-envelope').animate({
            opacity:"1"
        },500).animate({opacity:"0"},250,bis)
        $('#contacts .contents .fa-map-marker').animate({
            opacity:"1"
        },500).animate({opacity:"0"},350,bis)
         $('#contacts .contents .fa-phone').animate({
            opacity:"1"
        },500).animate({opacity:"0"},450,bis)
    }
    function animimage()
    {
        $('#index .banner').animate({backgroundImage: "url('../../images/tn_coton.jpg')"},3000).animate({backgroundImage: "url('../../images/tn_feuille.jpg')"},3000).animate({backgroundImage: "url('../../images/tn_mangue.jpg')"},3000).animate({backgroundImage: "url('../../images/tn_poivron.jpg')"},3000,animimage)
    }
$(function(){
    $('#apropos h1,#inscription h1,#services h1,#contacts h1').animate({marginLeft: "+=2000"},500);
    $('#apropos .text').slideDown(500);
    $('#services .big_content p').slideDown(500);
    $('#apropos h3').fadeIn(1700);
    $('#services .big_content h2').fadeIn(1700);
    $('#apropos .anim').fadeIn(1700);
    bis();
    animimage();
});