-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 28 Mars 2019 à 18:06
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `easyfood_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `bons_plats`
--

CREATE TABLE IF NOT EXISTS `bons_plats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `date_de_publication` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Contenu de la table `bons_plats`
--

INSERT INTO `bons_plats` (`id`, `nom`, `image`, `description`, `date_de_publication`) VALUES
(1, 'Purée de tomate', 'img (9).jpg', 'apprenez de la très bonne purée de tomates bon pour le coeur et l''esprit', '2019-03-27 04:42:27'),
(2, 'purée de carotte', 'img (10).jpg', 'apprenez de la très bonne purée de carottes bon pour le coeur et l''esprit', '2019-03-27 04:42:27'),
(3, 'coupole de fraises', 'img (7).jpg', 'apprenez a faire une bonne coupole de fraises, c''est hyper simple', '2019-03-27 04:43:54');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires_advice`
--

CREATE TABLE IF NOT EXISTS `commentaires_advice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `commentaire` text COLLATE utf8_unicode_ci,
  `id_advice` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_advice` (`id_advice`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Contenu de la table `commentaires_advice`
--

INSERT INTO `commentaires_advice` (`id`, `name`, `commentaire`, `id_advice`) VALUES
(3, 'Akoffi jean marie noel', 'merci marainne pour ton aide de la dernière fois', 2),
(4, 'Akoffi jean marie noel', 'mer de votre aide', 1);

-- --------------------------------------------------------

--
-- Structure de la table `commentaires_plats`
--

CREATE TABLE IF NOT EXISTS `commentaires_plats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `date_de_publication` date DEFAULT NULL,
  `id_plats` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_plats` (`id_plats`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Contenu de la table `commentaires_plats`
--

INSERT INTO `commentaires_plats` (`id`, `name`, `description`, `date_de_publication`, `id_plats`) VALUES
(1, 'Akoffi jean marie noel', 'mon commentaire', NULL, 1),
(2, 'Akoffi jean marie noel', 'mon commentaire', NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `commmentaires_good_practize`
--

CREATE TABLE IF NOT EXISTS `commmentaires_good_practize` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `commentaire` text COLLATE utf8_unicode_ci,
  `date_de_commentaire` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_publication` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_publication` (`id_publication`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Contenu de la table `commmentaires_good_practize`
--

INSERT INTO `commmentaires_good_practize` (`id`, `name`, `commentaire`, `date_de_commentaire`, `id_publication`) VALUES
(10, 'Soro ibraima', 'je te commente', '2019-03-28 11:55:04', 11);

-- --------------------------------------------------------

--
-- Structure de la table `conseils_sports`
--

CREATE TABLE IF NOT EXISTS `conseils_sports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `date_de_publication` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Contenu de la table `conseils_sports`
--

INSERT INTO `conseils_sports` (`id`, `img`, `description`, `date_de_publication`) VALUES
(1, 'img (2).jpg', 'il vous est conseillé de manger deux fois au minimum,par jour car cela améliorera votre santé votre vivacité.Ne vous arrêtez pas seulement a cela,vous pouvez repoussez vos limites plus loin. Ne vous demandez pas si j''y arriverais mais poser voous putôt les bonnes questions pour avoir les bonnes réponses.Ne me démande pas comment je faire, apprenez a le faire pour vous même et vous irez loin dans vos différents relations,merci je vais écrire du bla bla. Juste remplir les cases vide les gas,donc ne vous attendez de l''extraordinaire', '2019-03-27 02:26:56'),
(2, 'img (5).jpg', 'il vous est conseillé de manger deux fois au minimum,par jour car cela améliorera votre santé votre vivacité.Ne vous arrêtez pas seulement a cela,vous pouvez repoussez vos limites plus loin. Ne vous demandez pas si j''y arriverais mais poser voous putôt les bonnes questions pour avoir les bonnes réponses.Ne me démande pas comment je faire, apprenez a le faire pour vous même et vous irez loin dans vos différents relations,merci je vais écrire du bla bla. Juste remplir les cases vide les gas,donc ne vous attendez de l''extraordinaire', '2019-03-27 02:26:56');

-- --------------------------------------------------------

--
-- Structure de la table `publications_good_practize`
--

CREATE TABLE IF NOT EXISTS `publications_good_practize` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objet` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8_unicode_ci,
  `date_de_publication` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=15 ;

--
-- Contenu de la table `publications_good_practize`
--

INSERT INTO `publications_good_practize` (`id`, `objet`, `message`, `date_de_publication`, `id_user`) VALUES
(11, 'qdfdqsf', 'dfdqsfdsfds', '2019-03-28 00:58:21', 1);

-- --------------------------------------------------------

--
-- Structure de la table `recettes_plats`
--

CREATE TABLE IF NOT EXISTS `recettes_plats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text COLLATE utf8_unicode_ci,
  `id_plats` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_plats` (`id_plats`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Contenu de la table `recettes_plats`
--

INSERT INTO `recettes_plats` (`id`, `description`, `id_plats`) VALUES
(1, 'ce plat est extrêmement facile à concorter,pour le faire vous aurez besoin de la tomates, du piment,du sel et de pleins d''autres éléments.\r\npour commencer, ecraser les tomates et les aliments,les faires bouillir dans l''eau et les garder en ébulittion', 2),
(2, 'ce plat est extrêmement facile à concorter,pour le faire vous aurez besoin de la tomates, du piment,du sel et de pleins d''autres éléments.\r\npour commencer, ecraser les tomates et les aliments,les faires bouillir dans l''eau et les garder en ébulittion', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prenoms` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contacts` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `localite` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sexe` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mot_de_passe` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_inscription` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenoms`, `email`, `contacts`, `localite`, `sexe`, `mot_de_passe`, `date_inscription`) VALUES
(1, 'Akoffi', 'jean marie noel', 'rameaux.koffi@uvci.edu.ci', '45654545', 'abidjan', 'mascuin', '74be9d95d25d12ef198c7810e22c79c57ab90218f91c79bae42bfa2ec84fa228', '2019-03-25 03:43:35'),
(3, 'Boris', 'jean hal', 'boli@gmail.com', '11121212', 'divo', 'mascuin', '47daa6108edfc525d1eeba9d660a950e3559c722bdda96f0f7a5276a3f2f4740', '2019-03-26 23:51:51'),
(4, 'Soro', 'ibraima', 'soro@gmail.com', '44401519', 'abidjan', 'mascuin', 'b8bd1582646dff5079b47e621690e8231be58e317bcd48b2a86a0df82d96226f', '2019-03-28 11:52:52');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `commentaires_advice`
--
ALTER TABLE `commentaires_advice`
  ADD CONSTRAINT `commentaires_advice_ibfk_1` FOREIGN KEY (`id_advice`) REFERENCES `conseils_sports` (`id`);

--
-- Contraintes pour la table `commentaires_plats`
--
ALTER TABLE `commentaires_plats`
  ADD CONSTRAINT `commentaires_plats_ibfk_1` FOREIGN KEY (`id_plats`) REFERENCES `bons_plats` (`id`);

--
-- Contraintes pour la table `commmentaires_good_practize`
--
ALTER TABLE `commmentaires_good_practize`
  ADD CONSTRAINT `commmentaires_good_practize_ibfk_1` FOREIGN KEY (`id_publication`) REFERENCES `publications_good_practize` (`id`);

--
-- Contraintes pour la table `publications_good_practize`
--
ALTER TABLE `publications_good_practize`
  ADD CONSTRAINT `publications_good_practize_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `recettes_plats`
--
ALTER TABLE `recettes_plats`
  ADD CONSTRAINT `recettes_plats_ibfk_1` FOREIGN KEY (`id_plats`) REFERENCES `bons_plats` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
