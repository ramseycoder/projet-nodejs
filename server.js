let mysql = require('promise-mysql');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const morgan = require('morgan');
let twig = require('twig');
let multer = require('multer');
const crypto = require('crypto');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator')
mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password : config.db.password,
    database: config.db.database
}).then((db) => {
    console.log('connexion établit avec la base données');
    let app = express();
    let storageFichier = multer.diskStorage({
        destination: './views/public/fichiers',
        filename: (req,file,cb)=>{
            cb(null,Date.now()+'_'+file.originalname)
            }
    })
    const User = require('./User')(db)
   app.use(expressValidator())
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }))
    app.set('view engine','twig');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(express.static(`${__dirname}/views`));
    app.use(morgan('dev'))

    const uploadFichier = multer({storage:storageFichier}).single('fichier');
    //gerance page d'acceuil
    app.get('/',(req,res) => {
        if(req.session.agro)
        {
            res.redirect('/users')
        }
        else
        {
           res.render('index.twig'); 
        }
    })
    // fin
    app.get('/services',(req,res) => {
        res.render('pages/services.twig')
    }) //appel de la page service
    app.get('/contacts',(req,res) => {
        res.render('pages/contacts.twig')
    }) //appel de la page contacts
    app.get('/apropos',(req,res) => {
        res.render('pages/apropos.twig')
    }) //appel de la page apropos
    app.get('/inscription',(req,res) => {
        res.render('pages/inscription.twig')
    }) // appel de la page inscripton
    
    
    //appel de la page de connnexion
    app.get('/connexion',(req,res) => {
        if(req.session.agro)
        {
            res.redirect('/users')
        }
        else
        {
              if(req.query.e == "1"){
                //const error = req.session.errors;
                //req.session.errors = null;
                //console.log(error + ' ' + req.session.errors);
                let faux = true;
                let error;
                (req.session.errors !== null) ? error = req.session.errors : error = null;
                req.session.errors = null;
                res.render(`${__dirname}/views/pages/connexion.twig`, { user: "nil", errors: error,faux:faux })
            }
            else if(req.query.e == "2")
            {
                let fauxgros = true;
                let error;
                (req.session.errors !== null) ? error = req.session.errors : error = null;
                req.session.errors = null;
                res.render(`${__dirname}/views/pages/connexion.twig`, { user: "nil", errors: error,fauxgros:fauxgros })
            } else{res.render(`${__dirname}/views/pages/connexion.twig`, { user: "nil" })
            }   
        }
    })
    //fin
    
    // les pages de utilisateurs producteurs
    app.get("/users",async (req,res)=>{
        if(req.session.agro)
        {
            const user = req.session.agro
            let info = {}
            info.practizePublications = await User.getPractizePublications()
            info.commentairesPractize = await User.getCommentairesPractize()
            res.render('users/index.twig',{user:user,info:info})
        }
        else
            res.redirect('/')
    })
    
    app.get('/users/advice_and_sport', async (req,res)=>{
        if(req.session.agro)
        {
            const user = req.session.agro
            let info = {}
            info.conseils = await User.getConseilSport()
            info.commentairesConseils = await User.getCommentairesConseils()
            res.render('users/conseilsport.twig',{user:user,info:info})
            
        }
        else
            res.redirect('/')
    })
    
    app.get('/advice_and_sport', async (req,res)=>{
        if(req.session.agro)
        {
            const user = req.session.agro
            let info = {}
            info.conseils = await User.getConseilSport()
            info.commentairesConseils = await User.getCommentairesConseils()
            res.render('users/conseilsport.twig',{user:user,info:info})
            
        }
        else
            res.redirect('/')
    })
     app.post('/users/advice_and_sport', async (req,res)=>{
            let element = req.body;
            let comment = await User.setCommentairesConseils(element)
            if(comment)
            {
                const user = req.session.agro
                let info = {}
                let success = true;
                info.conseils = await User.getConseilSport()
                info.commentairesConseils = await User.getCommentairesConseils()
                res.render('users/conseilsport.twig',{user:user,info:info,success:success})
            }
    })
    
    //les pages du faites le vous -même
      app.get('/users/byourself', async (req,res)=>{
        if(req.session.agro)
        {
            const user = req.session.agro
            let info = {}
            info.plats = await User.getPlats()
            info.commentairesPlats = await User.getCommentairesPlats()
            if(req.query.schemas == "false")
            {
                let schemas = req.query.schemas
                res.render('users/yourself.twig',{user:user,info:info,schemas:schemas}) 
            }
            else
            {
                  res.render('users/yourself.twig',{user:user,info:info}); 
            }
            
        }
        else
            res.redirect('/')
    })
     app.get('/byourself', async (req,res)=>{
        if(req.session.agro)
        {
            const user = req.session.agro
            let info = {}
            info.plats = await User.getPlats()
            info.commentairesPlats = await User.getCommentairesPlats()
            res.render('users/yourself.twig',{user:user,info:info})
            
        }
        else
            res.redirect('/')
    })
    
   app.post('/users/byourself', async (req,res)=>{
            if(req.body.typeForm == "recettes")
            {
                let id_plat = req.body.id_plat
                 let infos = await User.getRecettesPlats(id_plat)
                 console.log(infos)
                if(infos.id_p)
                {
                    const user = req.session.agro
                    res.render('users/recettes.twig',{infos:infos,user:user})
                }
                else
                {
                    res.redirect('/users/byourself?schemas=false');
                }
            }
            else
           {
               let element = req.body;
                let comment = await User.setCommentairesPlats(element)
                if(comment)
                {
                    const user = req.session.agro
                    let info = {}
                    let success = true;
                    info.plats = await User.getPlats()
                    info.commentairesPlats = await User.getCommentairesPlats()
                    res.render('users/yourself.twig',{user:user,info:info,success:success})
                }
           }
    })
    
    
    //gerance des post de la page bonnes pratiques
    app.post('/users',uploadFichier,async (req,res)=>{
        if(req.body.typeForm == "publication")
        {
            let element = req.body;
            let fichier = req.file;
            console.log(fichier)
            let publish = await User.setPractizePublications(element,fichier.filename)
            if(publish)
            {
                let success = true;
                 const user = req.session.agro
                let info = {}
                info.practizePublications = await User.getPractizePublications()
                info.commentairesPractize = await User.getCommentairesPractize()
                res.render('users/index.twig',{user:user,info:info,success:success})
            }
        }
        else if(req.body.typeForm == "commentaire")
        {
            let element = req.body;
            let comment = await User.setCommentairesPractize(element)
            if(comment)
            {
                const user = req.session.agro
                let info = {}
                info.practizePublications = await User.getPractizePublications()
                info.commentairesPractize = await User.getCommentairesPractize()
                res.render('users/index.twig',{user:user,info:info})
            }
        }
        else if(req.body.typeForm == "deletepub")
        {
            let element = req.body;
            let del = await User.deletePractizePublications(element)
            console.log(del)
            if(del)
            {
                let supp = true;
                const user = req.session.agro
                let info = {}
                info.practizePublications = await User.getPractizePublications()
                info.commentairesPractize = await User.getCommentairesPractize()
                res.render('users/index.twig',{user:user,info:info,supp:supp})
            }
        }
    })
//rance des deletes de la page bonnes pratiques
//    app.delete('/users',async(req,res)=>{
//        let element = req.body;
//        let del = await User.deletePractizePublications(element)
//        if(del)
//        {
//            let supp = true;
//            const user = req.session.agro
//            let info = {}
//            info.practizePublications = await User.getPractizePublications()
//            info.commentairesPractize = await User.getCommentairesPractize()
//            res.render('users/index.twig',{user:user,info:info,supp:supp})
//        }
//    })
    app.get("/deconnexion",(req,res) => {
        delete req.session.agro
        res.redirect('/')
    })
    app.get("/users/deconnexion",(req,res) => {
        delete req.session.agro
        res.redirect('/')
    })
    // fin
    
    //traitement formulaire de connexion
    app.post('/connexion', async  (req,res) => {
            req.check('email','ce champ doit coorespondent a un email').isEmail();
            req.check('password','le mot de passe ne doit pas être vide').notEmpty()
            const error = req.validationErrors();
            if(error)
            {
                res.render(`${__dirname}/views/pages/connexion.twig`,{errors: error});
            }
            else {
                console.log(req.body)
                let email = req.body.email;
                let motdepasse = req.body.password;
                let dd = crypto.createHmac('sha256', motdepasse).update('I love cupcakes').digest('hex');
                console.log(dd);
                const connect = await User.connexion(email,dd);
                if(connect.id){
                    req.session.agro = connect
                    res.redirect('/users')
                }
                else res.redirect('/connexion?e=1')
            }
        }
    );
    // fin
    
    // traitement formulaire d'inscription
    app.post('/inscription', async (req,res) => {
              let element = req.body;
              element.passwordc = crypto.createHmac('sha256',element.passwordc).update('I love cupcakes').digest('hex');
              const users = await User.inscription(element);
              console.log(element)
              console.log(users)
              if(users){
                  let success = true;
                    console.log(success); res.render(`${__dirname}/views/pages/inscription.twig`,{success : success})
              }
              else
              {
                  res.render('/inscription')
              }
    })
    // fin
    app.get('/error',(req,res)=>{
        res.render(`${__dirname}/views/error.twig`)
    })
    app.use('*',(req,res)=>{
        res.redirect('/error');
    });
    app.listen(config.port,()=>{console.log("j'écoute sur le port 8080")});
}).catch((err)=>{
    console.log('connexion échoué');
});