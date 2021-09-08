-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2021 at 07:04 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `forum`
--

-- --------------------------------------------------------

--
-- Table structure for table `discussion`
--

CREATE TABLE `discussion` (
  `id` int(11) NOT NULL,
  `parent_comment` varchar(500) NOT NULL,
  `student` varchar(1000) NOT NULL,
  `post` varchar(1000) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `discussion`
--

INSERT INTO `discussion` (`id`, `parent_comment`, `student`, `post`, `date`) VALUES
(169, '168', 'Rohit', 'To get unbiased , genuine content  ', '2021-09-07 13:28:10'),
(168, '', 'Ankit', 'Why should I follow this website ??', '2021-09-07 13:27:37'),
(165, '164', 'Mr Sharma', 'From user point of view It is great you will get exclusive podcast ,curate news etc', '2021-09-07 13:23:37'),
(164, '', 'Jasmeet', 'Why I should buy subscription ??', '2021-09-07 13:22:25'),
(163, '162', 'MR X', 'This is because people get emotional and send in fit of rage or happiness', '2021-09-07 13:21:22'),
(162, '0', 'Hemant', 'Why are so much fake news spreading ', '2021-09-07 13:20:20'),
(161, '159', 'khanna', 'Because we want marks', '2021-09-07 13:17:57'),
(159, '', 'Parveen', 'Why you make this website ??', '2021-09-07 13:15:06'),
(158, '156', 'Sambit Patra', 'Tumne 70 salo me ashe kare na tabhi desh ko ab ye nuksan uthana pada', '2021-09-07 13:13:39'),
(157, '156', 'Modi', 'Sher pala ha to kharcha to hoga', '2021-09-07 13:12:52'),
(156, '0', 'Rahul Gandhi', 'I want to know the truth of century of petrol price .', '2021-09-07 13:12:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `discussion`
--
ALTER TABLE `discussion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `discussion`
--
ALTER TABLE `discussion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
