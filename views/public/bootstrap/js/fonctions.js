let tableauLocalite = ['daloa','bouaké','yamoussoukro','guiglo'];
let tableauLocaliteG = ['abidjan','bouaké','yamoussoukro','aboisso','san-pédro','soubré','ferkéssédougou'];
function veriflocalite(variable)
{
    for(let i in tableauLocalite)
    {
        if($(variable).val() == tableauLocalite[i])
        {
            return true;
            break;
        }
    }
}
let feedback = true;
function veriflocaliteG(variable)
{
    for(let i in tableauLocaliteG)
    {
        if($(variable).val() == tableauLocaliteG[i])
        {
            return true;
            break;
        }
    }
}
function fermeboite(variable)
{
    if(variable == true)
    {
        $('.error_P').animate({marginTop:"-=250"},200);
        $('.error_P').fadeOut(200);
    }
}
function veriformNom(variable)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+=250"},300);
        verif = false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
        $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>le nom doit commencer par une majuscule et doit être supérieur a 3 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif = false;
    }
    else
    if((/^[A-Z]{1}[a-z]+$/.test($(variable).val()) || /^[A-Z]+$/.test($(variable).val())) && $(variable).val().length > 3)
    {
        $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth: "1.5em"});
        feedback = true;
        verif = true;
    }
    else
    {
        $('.error_P').removeClass('alert alert-success');
        $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>le nom doit commencer par une majuscule et doit être supérieur a 3 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        feedback = false;
        verif = false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
    return verif;
    
}
function veriformPrenoms(variable)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+=250"},300);
        return false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
        $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>le prénom doit être supérieur a 3 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif = false;
    }
    else
    if((/^([a-z]+\s*)+$/.test($(variable).val()) || /^([A-Z]+\s*)+$/.test($(variable).val()) || /^([A-Z]{1}[a-z]+\s*)+$/.test($(variable).val())) && $(variable).val().length > 3)
    {
        $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT"});
        feedback = false;
        verif = true;
    }
    else
    {
        $('.error_P').removeClass('alert alert-success');
        $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>le prénom doit être supérieur a 3 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        feedback = false;
        verif = false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
     return verif;
}
function veriformNumber(variable)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+550"},300);
        verif = false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
        $('.error_P').removeClass('alert alert-success')
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>le numéro doit contenir aux maximum 8 chiffres');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif = false;
    }
    else
    if($(variable).val().length == 8)
    {
        $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT"});
        feedback = true;
        verif =  true;
    }
    else
    {
        $('.error_P').removeClass('alert alert-success');
        $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>le numéro doit contenir aux maixmum 8 chiffres');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        feedback = false;
        verif = false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
    return verif;
}
function veriformLocalite(variable)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+550"},300);
        verif = false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
         $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>cette ville n\'est pas reconnue en tant que ville ciblé');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif =  false;
    }
    else if(veriflocalite(variable))
    {
         $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT"});
       feedback = true;
        verif = true;
    }
    else
    {
        $('.error_P').removeClass('alert alert-success');
        $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>cette ville n\'est pas reconnue en tant que ville ciblé');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        feedback = false;
        verif = false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
    return verif;
}
function veriformLocaliteG(variable)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+550"},300);
        return false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
         $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>cette ville n\'est pas reconnue en tant que ville de la côte d\'ivoire');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif = false;
    }
    else if(veriflocaliteG(variable))
    {
        $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT"});
        feedback = true;
        verif = true;
    }
    else
    {
        $('.error_P').removeClass('alert alert-success');
        $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>cette ville n\'est pas reconnue en tant que ville de la côte d\'ivoire');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        feedback = false;
        verif = false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
     return verif;
}
function veriformCultures(variable)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+550"},300);
        return false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
         $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>vous devez séparé le nom de votre cultures par des virgules,vous pouvez entré une culture si vous le voulez');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif =  false;
    }
    else if(/^[a-z]+$/.test($(variable).val()) || /^([a-z]+,?)+$/.test($(variable).val()))
    {
        $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT"});
        feedback = true;
        verif = true;
    }
    else
    {
        $('.error_P').removeClass('alert alert-success');
        $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>vos cultures doivent êtres séparés par des virgules,vous pouvez entrer une culture si vous le voulez');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        feedback = false;
        verif = false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
    return verif;
}
function veriformPassword(variable)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+550"},300);
        return false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
         $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>votre mot de passe doit fait au minimum 8 caractères et au maximum 16 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif = false;
    }
    else if($(variable).val().length >= 8 && $(variable).val().length <=16)
    {
        $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT"});
        feedback = true;
        verif =  true;
    }
    else
    {
        $('.error_P').removeClass('alert alert-success');
        $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span>information incorrect<br>votre mot de passe doit fait au minimum 8 caractères et au maximum 16 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        feedback = false;
        verif =  false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
    return verif;
}
function veriformPasswordC(variable,variable2)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+550"},300);
        return false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
         $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>votre mot de passe doit fait au minimum 8 caractères et au maximum 16 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif = false;
    }
    else if(($(variable).val().length >= 8 && $(variable).val().length <=16) && ($(variable).val() !== $(variable2).val()))
    {
        $('.error_P').removeClass('alert alert-success');
        $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle-o"></span> les mots de passe de concordent pas');
        $('#inscription p.error_P').css({color:"darkgreen",fontSize:"1.4em",fontFamily:"Bell MT"});
        feedback = false;
        verif = false;
    }
    else if(($(variable).val().length >= 8 && $(variable).val().length <=16) && ($(variable).val() == $(variable2).val()))
    {
        $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT"});
        feedback = true;
        verif = true;
    }
    else
    {
        $('.error_P').removeClass('alert alert-success');
        $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span>information incorrect<br>votre mot de passe doit fait au minimum 8 caractères et au maximum 16 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        feedback = false;
        verif = false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
    return verif;
}
function veriformEmail(variable)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+550"},300);
        return false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
         $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>votre email doit être de cette forme: nom.prenoms@gmail.com');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif =  false;
    }
    else if(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test($(variable).val()))
    {
        $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT"});
        feedback = true;
        verif = true;
    }
    else
    {
       $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>votre email doit être de cette forme: nom.prenoms@gmail.com');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        feedback = false;
        verif = false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
    return verif;
}
function veriformStructure(variable)
{
    let verif = true;
    if($(variable).val().length == 0)
    {
//        $('.error_P').fadeIn(300);
//        $('.error_P').animate({marginTop:"+550"},300);
        return false;
    }
    else if($(variable).val().length == 1 && feedback)
    {
        $('.error_P').fadeIn(300);
        $('.error_P').animate({marginTop:"+=250"},300);
         $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>le nom de votre strucutre doit commencer par une lettre majuscule et fait au plus 15 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
        verif = false;
    }
    else if(($(variable).val().length >= 3 && $(variable).val().length <= 15) && /^[A-Z]+[a-z]+$/.test($(variable).val()))
    {
        $('.error_P').removeClass('alert alert-danger');
        $('.error_P').addClass('alert alert-success');
        $('.error_P').html('<span class="fa fa-check-circle-o"></span> information correct');
        $('#inscription p.error_P').css({color:"green",fontSize:"1.4em",fontFamily:"Bell MT"});
         feedback = true;
        verif = true;
    }
    else
    {
        $('.error_P').removeClass('alert alert-success');
         $('.error_P').addClass('alert alert-danger');
        $('.error_P').html('<span class="fa fa-exclamation-circle"></span> information incorrect<br>le nom de votre strucutre doit commencer par une lettre majuscule et fait au plus 15 caractères');
        $('#inscription p.error_P').css({color:"darkred",fontSize:"1.4em",fontFamily:"Bell MT",lineWidth:"1.5em"});
         feedback = false;
        verif = false;
    }
    if(verif)
    {
        $('#form input[type="submit"]').css('display','inline-block');
    }
    else
    {
        $('#form input[type="submit"]').css('display','none');
    }
    return verif;
}