$(document).ready(function(){
    $('#formProducteurs').on("submit",function(){ // si on clique sur le bouton suivant au  moment ou son type est submit
		return false; //on annule l'envoie du formulaire car cela seras fait avec node js, qu'on a pas encore vue pour le moment.
	});
var i = 0; // permettra d'initialiser notre condition
let blocPre = ""; //variable qui contiendra les champs suivant
let preview = false; //variable qui permetttra de retourner un block précis
let nom,prenoms,contacts,localite,cultures,motdepasse,cmotdepasse = "";
	$('#formProducteurs').on("click","#next",function(){ //si on clicuqe suit le bouton qui a l'id next,ce qui correspond au bouton suivant
		if(i == 0)
		{
			nom = $('#nom').val(); //recupère le nom saisi
			prenoms = $('#prenoms').val(); //recupere l'email saisi
            //on verifie si l'utilisateur a bien renseigné les champs
			if(nom == "" ||  prenoms == "") 
			{
                $('.error_P').fadeIn(300);
                $('.error_P').animate({marginLeft:"+=1100"},300);
                $('.error_P').addClass('alert alert-danger');
				$('.error_P').html("vous devez renseigner les champs svp");
                $('#inscription p.error_P').css({color: "red",fontSize: "1.4em",fontFamily: "Bell MT"});
                $('.error_P').delay(1500).animate({marginLeft:"+=1100"},300);
                $('.error_P').delay(1500).fadeOut(300);
                $('.error_P').css("marginLeft","-550px");
            }
			else if(veriformNom($('#nom')) && veriformPrenoms($('#prenoms')))
			{
                if(preview) //si la variable est true on retourne le champs déja remplir
                {
                    $('.block_P').html(blocPre2.addClass('animated slideInRight faster'));
                }
                else
                {
                     //sauvegarde des champs actuelle pour la valeur retour
                    blocPre1 = $('.block_P').children();
                    //initialisation des nouveaux champs qui remplaceront les présents grace à la méthode html..
                    //animation simulé par la class="animated slideInRight faster
                    $('.block_P').html('<div class="animated slideInRight faster"><input type="number" class="md-form md-outline form-control form-sm" name="contacts" placeholder="entrez vos contacts" id="contacts" onkeyup="veriformNumber(this)" onblur="fermeboite(veriformNumber(this))"/><input type="text" class="md-form md-outline form-control form-sm" name="localite" placeholder="entrez votre localite " id="localite" onkeyup="veriformLocalite(this)" onblur="fermeboite(veriformLocalite(this))"/></div>');
                }
                //on incrément i de 1 pour passer aux nouveaux champs formés
				i++;
				
			}
		}
		else if(i == 1)
		{
			contacts = $('#contacts').val(); //permet de récuperer le numéro saisi
			localite = $('#localite').val();//permet de récuperer la culture saisi
            //on verifie si l'utilisateur a bien renseigné les champs
			if(contacts == "" || localite == "")
			{
				  $('.error_P').fadeIn(300);
                $('.error_P').animate({marginLeft:"+=1100"},300);
                $('.error_P').addClass('alert alert-danger');
				$('.error_P').html("vous devez renseigner les champs svp");
                $('#inscription p.error_P').css({color: "red",fontSize: "1.4em",fontFamily: "Bell MT"});
                $('.error_P').delay(1500).animate({marginLeft:"+=1100"},300);
                $('.error_P').delay(1500).fadeOut(300);
                $('.error_P').css("marginLeft","-550px");
			}
			else if(veriformNumber($('#contacts')) && veriformLocalite($('#localite')))
			{
                 //sauvegarde des champs actuelle pour la valeur retour
				blocPre2 = $('.block_P').children();
                //initialisation des nouveaux champs qui remplaceront les présents grace à la méthode html..
                //animation simulé par la class="animated slideInRight faster
                $('.block_P').html('<div class="animated slideInRight faster"><input type="hidden" id="show1" name="nom" /><input type="hidden" id="show2" name="prenoms" /><input type="hidden" id="show3" name="localite"/><input type="hidden" id="show4" name="contacts"/><input type="hidden" name="typeUser" value="producteur" /><input type="text" class="md-form md-outline form-control form-sm" name="cultures" placeholder="Entrez les différents cultures que vous pratiquez" id="cultures" onkeyup="veriformCultures(this)" onblur="fermeboite(veriformCultures(this))"><input type="password" name="password" id="p1" class="md-form md-outline form-control form-sm" placeholder="entrez votre mot de passe" onkeyup="veriformPassword(this)" onblur="fermeboite(veriformPassword(this))"><input type="password" name="passwordc" id="p1" class="md-form md-outline form-control form-sm" placeholder="confirmez votre mot de passe" id="p2" onkeyup="veriformPasswordC(this,\'#p1\');" onblur="soumettreP(veriformPasswordC(this,\'#p1\'));fermeboite(veriformPasswordC(this,\'#p1\'))"></div>');
                $('#show1').val(nom);
                $('#show2').val(prenoms);
                $('#show3').val(localite);
                $('#show4').val(contacts);
                $(this).html('soumettre');// on change le text du bouton suivant pour qu'il devient soumettre
                i++;//on increménte i de 1 pour passer aux champs suivant
			}
		}
		else if(i == 2)
		{
            cultures = $('#cultures').val();
            motdepasse = $('#p1').val(); //permet de récupérer le mot de passe
			cmotdepasse = $('#p2').val(); //permet de recuperer une fois encore le mot de passe
            //on vérifie si les champs ne sont pas vides
			if(cultures == "" || motdepasse == "" ||  cmotdepasse == "")
			{
				  $('.error_P').fadeIn(300);
                $('.error_P').animate({marginLeft:"+=1100"},300);
                $('.error_P').addClass('alert alert-danger');
				$('.error_P').html("vous devez renseigner les champs svp");
                $('#inscription p.error_P').css({color: "red",fontSize: "1.4em",fontFamily: "Bell MT"});
                $('.error_P').delay(1500).animate({marginLeft:"+=1100"},300);
                $('.error_P').delay(1500).fadeOut(300);
                $('.error_P').css("marginLeft","-550px");
			}
//            else if((veriformPassword($('#p1')) && veriformPassword($('#p2'))) && (motdepasse != cmotdepasse)) //on vérifi si les deux mots de passe sont égaux
//            {
//                $('.error_P').fadeIn(300);
//                $('.error_P').animate({marginLeft:"+=1100"},300);
//                $('.error_P').addClass('alert alert-danger');
//				$('.error_P').html("les mots de passe ne concordent pas");
//                $('#inscription p.error_P').css({color: "red",fontSize: "1.4em",fontFamily: "Bell MT"});
//                $('.error_P').delay(1500).animate({marginLeft:"+=1100"},300);
//                $('.error_P').delay(1500).fadeOut(300);
//                $('.error_P').css("marginLeft","-550px");
//            }
//			else if((veriformPassword($('#p1')) && veriformPassword($('#p2'))) && (motdepasse == cmotdepasse))
//			{
//				$(this).prop("type","submit");//on champ le type du bouton suivant de text a submit afin qu'on puisse soumettre le formulaire
//			}
		}
	});
	$('#formProducteurs').on("click",'#prec',function() // si on clique sur le bouton précédent
	{
		if(i == 1)
		{
			$('.block_P').html(blocPre1.addClass('animated slideInLeft faster')); // on affiche les champs renseignés au niveau ou i était égale a 1 grace a la méthode html et le blocPre1 qui contient les champs premiers
			$('#inscription #next').html('suivant'); //on change le text du bouton suivant de soumettre a suivant
             afficheboutonretour = false;
            i--; // on décrémente i pour qui val 0 afin de retourner a l'état initial
		}
        else if(i == 2)
        { 
            
            $('.block_P').html(blocPre2.addClass('animated slideInLeft faster'));// on affiche les champs renseignés au niveau ou i était égale a 2 grace a la méthode html et le blocPre2 qui contient les  duexièmes champs
            preview = true;
			$('#next').html('suivant');//on change le text du bouton suivant de soumettre a suivant
            i--; // on décrémente i pour qui val 0 afin de retourner au niveau précédent
        }
	});
});
