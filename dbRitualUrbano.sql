-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2022 a las 04:53:14
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ritualurbano`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoryproducts`
--

CREATE TABLE `categoryproducts` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoryproducts`
--

INSERT INTO `categoryproducts` (`id`, `nombre`) VALUES
(1, 'cafe'),
(3, 'cafetera'),
(4, 'merchandising'),
(5, 'otrosProductos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoryusers`
--

CREATE TABLE `categoryusers` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoryusers`
--

INSERT INTO `categoryusers` (`id`, `nombre`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `loggeduser`
--

CREATE TABLE `loggeduser` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre`, `descripcion`, `idCategoria`, `peso`, `imagen`, `precio`, `idUser`) VALUES
(2, 'Cafe Tostado', 'Cafe tostado proveniente de Colombia. bolsa papel', 1, 1200, '/img/coffee_item2-300x300.jpg', 2467.12, NULL),
(3, 'Gorritaa copada', 'Llevanos siempre con vos con el mejor merchandising de la marca.', 4, 150, '/img/coffee_item7-300x300.jpg', 1352, NULL),
(4, 'Latte Macchiatto', 'Te acompañamos en tu desayuno', 5, 300, '/img/coffee_item4-300x300.jpg', 471, NULL),
(5, 'Cafe Ecuatoriano', 'el mejor cafe tostado proveniente de ecuador', 1, 900, '/img/cafe.png', 2500, NULL),
(6, 'Cafe Tostado', 'Cafe tostado proveniente de Colombia.', 1, 900, '/img/cafe5.png', 1.123, NULL),
(7, 'Cafe Tostado!', 'Cafe tostado proveniente de Colombia.', 1, 900, '/img/cafe2.png', 1.123, NULL),
(8, 'Cafe en grano', 'Cafe virgen en grano para tostar', 1, 500, '/img/tg-2-1.jpeg', 3000, NULL),
(9, 'Molinillo Reliquia', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/coffee_item9-300x300.jpg', 4000, NULL),
(10, 'Cafetera Automatica', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/Products-12-450x450.jpg', 4000, NULL),
(11, 'Cafetera Acero Bombeada', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/cafetera_acero_bombeada.jpg', 5000, NULL),
(12, 'Cafetera Prensa Francesa', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/cafetera_prensa_francesa.jpg', 4000, NULL),
(13, 'Cafetera Napolitana', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/cafetera_napolitana.jpg', 4000, NULL),
(14, 'Cafetera Automatica Longhi', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/cafetera_automatica_longhi.jpg', 4000, NULL),
(15, 'Cafetera Breville Mini', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/cafetera_breville_mini.jpg', 4000, NULL),
(16, 'Cafetera Italiana de Aluminio', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/cafetera_italiana_aluminio.jpg', 4000, NULL),
(18, 'Cafetera Kubo Expresso', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/cafetera_kubo_expresso.jpg', 4000, NULL),
(19, 'Cafetera Automatica Philips', 'Una forma unica de moler los mejores granos.', 3, 1500, '/img/cafetera_phillis.jpg', 4000, NULL),
(20, 'Taza Ritual Urbano', 'Taza de la marca.', 4, 1500, '/img/coffee_item1-300x300.jpg', 2000, NULL),
(21, 'Vaso termicooooooo', 'Vaso para cafe.', 4, 150, '/img/Grid-home-item-show-img.jpg', 1500, NULL),
(22, 'Cafe en grano', 'Cafe Proveniente de Argentina', 1, 300, '/img/cafe4.png', 950, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `token` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `password`, `email`, `idCategory`, `image`) VALUES
(1, 'administrador1', 'administrador1', '$2a$10$iLjvAS.OKTGDanVZUSzTluT5tAG6xgrWGjBBkI3vcxLKCGIj/PEnG', 'admin1@admin1.com', 2, '/img/noimage.jpeg'),
(2, 'usuariodeprueba', 'usuariodeprueba', '$2a$10$Ne8c7Hk9bqe7apDCGTYBquiHp7P.T05iINQdlkEpiEo/QX7SHjIQu', 'usuario@deprueba.com', 1, '/img/1s/noimage.jpeg'),
(3, 'pepitoelcrack', 'sanchezito', '$2a$10$FyVF4tIAk/t/7zH75JDt8eF6FqEXoBXC886jGXuVQ7K7Z5tmVr/FC', 'pepe@correo.com', 1, '/img/1s/zeneraa-kbaD--620x349@abc.jpeg'),
(4, 'Administrador', 'Administrador', '$2a$10$DJFisYbOjhYBt.5dxIKyhuHRTy6A9AE9LJVx541Ae6DIMj7SZ3Pwi', 'admin@admin.com', 2, '/img/1s/about-img-2-1.png'),
(5, 'sarlanga', 'sarlanguita', '$2a$10$7t9.dflZKdfAiaZt3wF1V.rbOwpXktoqzasK8102I9P6DRy1rPqGy', 'sar@langa.com', 1, '/img/1s/aroma_photo_02.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoryproducts`
--
ALTER TABLE `categoryproducts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoryusers`
--
ALTER TABLE `categoryusers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `loggeduser`
--
ALTER TABLE `loggeduser`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d86459de-8141-43a5-b76c-180103f8eefd` (`idUser`),
  ADD KEY `FK_a9804ef0-8306-4dd8-badc-cff4ace62b60` (`idCategoria`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_e1e16868-c3ef-41d5-9683-93e192aec640` (`idCategory`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoryproducts`
--
ALTER TABLE `categoryproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_a9804ef0-8306-4dd8-badc-cff4ace62b60` FOREIGN KEY (`idCategoria`) REFERENCES `categoryproducts` (`id`),
  ADD CONSTRAINT `FK_d86459de-8141-43a5-b76c-180103f8eefd` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_e1e16868-c3ef-41d5-9683-93e192aec640` FOREIGN KEY (`idCategory`) REFERENCES `categoryusers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
