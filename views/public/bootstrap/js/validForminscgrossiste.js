$(document).ready(function(){
    $('#formGrossistes').on("submit",function(){
		return false;
});
var j = 0; // permettra d'initialiser notre condition
let blockpreG1 =""; 
let blockpreG2 =""; 
let blockpreG3 = "";
let nom,prenoms,contacts,email,localite,structure,motdepasse,cmotdepasse ="";
let previewG = false; //variable qui permetttra de retourner 
let previewG1 = false; //variable qui permetttra de retourner  
/* formulaire inscription grossiste */
    $('#formGrossistes').on("click","#next",function(){ //si on clicuqe suit le bouton qui a l'id next,ce qui correspond au bouton suivant
		if(j == 0)
		{
			nom = $('#nomG').val(); //recupère le nom saisi
			prenoms = $('#prenomsG').val(); //recupere l'email saisi
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
			else if(veriformNom($('#nomG')) && veriformPrenoms($('#prenomsG')))
			{
                if(previewG) //si la variable est true on retourne le champs déja remplir
                {$('.block_G').html(blockpreG2.addClass('animated slideInRight faster'));
                }
                else
                {
                     //sauvegarde des champs actuelle pour la valeur retour
                    blockpreG1 = $('.block_G').children();
                    //initialisation des nouveaux champs qui remplaceront les présents grace à la méthode html..
                    //animation simulé par la class="animated slideInRight faster
                    $('.block_G').html('<div class="animated slideInRight faster"><input type="email" name="email" class="md-form md-outline form-control form-sm" placeholder="entrez votre email svp" id="emailG" onkeyup="veriformEmail(this);" onblur="fermeboite(veriformEmail(this));"/><input type="number" class="md-form md-outline form-control form-sm" name="contacts" placeholder="entrez vos contacts" id="contactsG" onkeyup="veriformNumber(this);" onblur="fermeboite(veriformNumber(this));"/></div>');
                }
                //on incrément i de 1 pour passer aux nouveaux champs formés
				j++;
				
			}
		}
		else if(j == 1)
		{
			contacts = $('#contactsG').val(); //permet de récuperer le numéro saisi
			email = $('#emailG').val();//permet de récuperer la culture saisi
            //on verifie si l'utilisateur a bien renseigné les champs
			if(email == "" || contacts == "")
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
			else if(veriformNumber($('#contactsG')) && veriformEmail($('#emailG')))
			{
                if(previewG1) //si la variable est true on retourne le champs déja remplir
                {
                    $('.block_G').html(blockpreG3.addClass('animated slideInRight faster'));
                }
                else
                {
                    //sauvegarde des champs actuelle pour la valeur retour
                    blockpreG2 = $('.block_G').children();
                    //initialisation des nouveaux champs qui remplaceront les présents grace à la méthode html..
                    //animation simulé par la class="animated slideInRight faster
                    $('.block_G').html('<div class="animated slideInRight faster"><input type="text" class="md-form md-outline form-control form-sm" name="localite" placeholder="entrez votre localite " id="localiteG" onkeyup="veriformLocaliteG(this);" onblur="fermeboite(veriformLocaliteG(this));"/><input type="text" class="md-form md-outline form-control form-sm" name="nom_structure" id="structureG" placeholder="entrez le nom de votre structure"  onkeyup="veriformStructure(this);" onblur="fermeboite(veriformStructure(this));"/></div>');
                    // on change le text du bouton suivant pour qu'il devient soumettre
		      }
            j++;//on increménte i de 1 pour passer aux champs suivant
            }
        }
        else if(j == 2)
        {
            localite = $('#localiteG').val(); //permet de récuperer le numéro saisi
			structure = $('#structureG').val();//permet de récuperer la culture saisi
            //on verifie si l'utilisateur a bien renseigné les champs
			if(localite == "" || structure == "")
			{
				  $('.error_P').fadeIn(300); $('.error_P').animate({marginLeft:"+=1100"},300);
                $('.error_P').addClass('alert alert-danger');
				$('.error_P').html("vous devez renseigner les champs svp");
                $('#inscription p.error_P').css({color: "red",fontSize: "1.4em",fontFamily: "Bell MT"});
                $('.error_P').delay(1500).animate({marginLeft:"+=1100"},300);
                $('.error_P').delay(1500).fadeOut(300);
                $('.error_P').css("marginLeft","-550px");
			}
			else if(veriformLocaliteG($('#localiteG')) && veriformStructure($('#structureG')))
			{
                //sauvegarde des champs actuelle pour la valeur retour
                blockpreG3 = $('.block_G').children();
                    //initialisation des nouveaux champs qui remplaceront les présents grace à la méthode html..
                    //animation simulé par la class="animated slideInRight faster
                    $('.block_G').html('<div class="animated slideInRight faster"><input type="hidden" id="show1" name="nom" /><input type="hidden" id="show2" name="prenoms" /><input type="hidden" id="show3" name="localite"/><input type="hidden" id="show4" name="contacts"/><input type="hidden" id="show5" name="email"><input type="hidden" id="show6" name="structure"><input type="hidden" name="typeUser" value="grossiste" /> <input type="password" name="password" id="p1G" class="md-form md-outline form-control form-sm" placeholder="entrez votre mot de passe" onkeyup="veriformPassword(this);" onblur="fermeboite(veriformPassword(this));"><input type="password" name="passwordc" id="p2G" class="md-form md-outline form-control form-sm" placeholder="confirmez votre mot de passe"  onkeyup="veriformPasswordC(this,\'#p1G\')" onblur="soumettreG(veriformPasswordC(this,\'#p1G\'));fermeboite(veriformPasswordC(this,\'#p1G\'));"></div>');
                    $('#show1').val(nom);
                    $('#show2').val(prenoms);
                    $('#show3').val(localite);
                    $('#show4').val(contacts);
                    $('#show5').val(email);
                    $('#show6').val(structure);
                    $('#formGrossistes #next').html('soumettre');
                    // on change le text du bouton suivant pour qu'il devient soumettre
                    j++;//on increménte i de 1 pour passer aux champs suivant
            }
        }
		else if(j == 3)
		{
			motdepasse = $('#p1G').val(); //permet de récupérer le mot de passe
			cmotdepasse = $('#p2G').val(); //permet de recuperer une fois encore le mot de passe
            //on vérifie si les champs ne sont pas vides
			if(motdepasse == "" ||  cmotdepasse == "")
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
//            else if((veriformPassword($('#p1G')) && veriformPassword($('#p2G'))) && (motdepasse != cmotdepasse)) //on vérifi si les deux mots de passe sont égaux
//            {
//                $('.error_P').fadeIn(300);   $('.error_P').animate({marginLeft:"+=1100"},300);
//                $('.error_P').addClass('alert alert-danger');
//				$('.error_P').html("les mots de passe ne concordent pas");
//                $('#inscription p.error_P').css({color: "red",fontSize: "1.4em",fontFamily: "Bell MT"});
//                $('.error_P').delay(1500).animate({marginLeft:"+=1100"},300);
//                $('.error_P').delay(1500).fadeOut(300);
//                $('.error_P').css("marginLeft","-550px");
//            }
//			else if((veriformPassword($('#p1G')) && veriformPassword($('#p2G'))) && (motdepasse == cmotdepasse))
//			{
//				$(this).prop("type","submit");//on champ le type du bouton suivant de text a submit afin qu'on puisse soumettre le formulaire
//			}
		}
	});
	$('#formGrossistes').on("click",'#prec',function() // si on clique sur le bouton précédent
	{
		if(j == 1)
		{
			$('.block_G').html(blockpreG1.addClass('animated slideInLeft faster')); // on affiche les champs renseignés au niveau ou i était égale a 1 grace a la méthode html et le blocPre1 qui contient les champs premiers
			$('#inscription #next').html('suivant'); //on change le text du bouton suivant de soumettre a suivant
            j--; // on décrémente i pour qui val 0 afin de retourner a l'état initial
		}
        else if(j == 2)
        { 
            
            $('.block_G').html(blockpreG2.addClass('animated slideInLeft faster'));// on affiche les champs renseignés au niveau ou i était égale a 2 grace a la méthode html et le blocPre2 qui contient les  duexièmes champs
            previewG = true;
			$('#next').html('suivant');//on change le text du bouton suivant de soumettre a suivant
            j--; // on décrémente i pour qui val 0 afin de retourner au niveau précédent
        }
        else if(j==3)
        {
            $('.block_P').html(blockpreG3.addClass('animated slideInLeft faster'));// on affiche les champs renseignés au niveau ou i était égale a 2 grace a la méthode html et le blocPre2 qui contient les  duexièmes champs
            previewG1 = true;
			$('#next').html('suivant');//on change le text du bouton suivant de soumettre a suivant
            j--; // on décrémente i pour qui val 0 afin de retourner au niveau précédent
        }
	});
});