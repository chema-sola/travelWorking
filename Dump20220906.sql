CREATE DATABASE  IF NOT EXISTS `travelworking` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `travelworking`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: travelworking
-- ------------------------------------------------------
-- Server version	5.7.34-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(10) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellidos` varchar(150) NOT NULL,
  `edad` date NOT NULL,
  `telefono` varchar(9) DEFAULT NULL,
  `foto` varchar(150) DEFAULT NULL,
  `password` varchar(150) NOT NULL,
  `pais` varchar(100) NOT NULL,
  `ciudad` varchar(150) DEFAULT NULL,
  `cpostal` varchar(10) DEFAULT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `rol` varchar(100) NOT NULL,
  `idioma` varchar(1500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'77777777m','midismael@gmail.com','ismael','cobo','2001-08-09','673139206',NULL,'1234','españa','vilanova','08800',NULL,'cliente','<p>español</p><p>inglés<p>'),(2,'1233777m','midisma1el@gmail.com','jonh 5','doe jimenez 5','2001-08-09','673139206','fghjkl.jpg','12345','españa','vilanova 5','08800',NULL,'traveler','<p>español</p><p>inglés<p>'),(3,NULL,'jonh@doe.com','jonh','doe jimenez','2022-01-09',NULL,NULL,'1234','españa',NULL,NULL,NULL,'traveler',NULL);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `idiomas`
--

DROP TABLE IF EXISTS `idiomas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `idiomas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idioma` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idiomas`
--

LOCK TABLES `idiomas` WRITE;
/*!40000 ALTER TABLE `idiomas` DISABLE KEYS */;
/*!40000 ALTER TABLE `idiomas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabajos`
--

DROP TABLE IF EXISTS `trabajos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabajos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estrellas` int(11) DEFAULT '0',
  `disponibilidadinicial` date NOT NULL,
  `disponibilidadfinal` date NOT NULL,
  `descripcion` text NOT NULL,
  `ayuda` text NOT NULL,
  `idioma` text NOT NULL,
  `residencia` text NOT NULL,
  `otros` text,
  `viajerosMinimo` text NOT NULL,
  `horasdia` text NOT NULL,
  `ClienteId` int(11) NOT NULL,
  `titulo` varchar(250) DEFAULT 'No title',
  PRIMARY KEY (`id`),
  KEY `trabajos_ibfk_1` (`ClienteId`),
  CONSTRAINT `trabajos_ibfk_1` FOREIGN KEY (`ClienteId`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabajos`
--

LOCK TABLES `trabajos` WRITE;
/*!40000 ALTER TABLE `trabajos` DISABLE KEYS */;
INSERT INTO `trabajos` VALUES (1,4,'2022-10-01','2023-08-01','lorem','lorem impsum ','inglés','plaça fabrica nova','no se aceptan perros','3','3h',2,'Titulo 1'),(2,1,'2022-10-01','2023-08-01','lorem','lorem','español nativo','reus','se aceptan perros','5','4h',1,'Mozo de almacén'),(3,0,'2022-08-01','2023-08-01','Firstly, we would 223want to report you that if you choose Mallorca to stay as a workawayer, you don\'t have to worry about coronavirus situation, because there is hardly any incidence of this virus compared to the rest of Spain.Once clarified this point, we would like to introduce us.','Language practice Ba23bysitting and creative play','Catalan: Fluent Eng23lish: Fluent Spanish: Fluent','You will have a private room, with a king size bed and very nice and new forniture. The house is new and all is full of quality and nice atmosphere.','internet access','2','3h',2,'Editor de vídeo'),(5,0,'2022-08-01','2023-08-01','lorem ipsum dolor de pies','Language practice Babysitting and creative play','Catalan: Fluent English: Fluent Spanish: Fluent','You will have a private room, with a king size bed and very nice and new forniture. The house is new and all is full of quality and nice atmosphere.','internet access','2','2h',2,'mozo de ejemplo');
/*!40000 ALTER TABLE `trabajos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabajosclientes`
--

DROP TABLE IF EXISTS `trabajosclientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabajosclientes` (
  `TrabajoId` int(11) NOT NULL,
  `ClienteId` int(11) NOT NULL,
  `estado` varchar(45) DEFAULT 'Pendiente',
  PRIMARY KEY (`TrabajoId`,`ClienteId`),
  UNIQUE KEY `TrabajosClientes_ClienteId_TrabajoId_unique` (`TrabajoId`,`ClienteId`),
  KEY `ClienteId` (`ClienteId`),
  CONSTRAINT `trabajosclientes_ibfk_1` FOREIGN KEY (`TrabajoId`) REFERENCES `trabajos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `trabajosclientes_ibfk_2` FOREIGN KEY (`ClienteId`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabajosclientes`
--

LOCK TABLES `trabajosclientes` WRITE;
/*!40000 ALTER TABLE `trabajosclientes` DISABLE KEYS */;
INSERT INTO `trabajosclientes` VALUES (3,2,'Pendiente'),(3,3,'Pendiente');
/*!40000 ALTER TABLE `trabajosclientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-06  9:05:38
