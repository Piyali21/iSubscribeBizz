-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 03, 2025 at 01:12 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iSubscribeDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `irid` varchar(9) NOT NULL,
  `firstname` text DEFAULT NULL,
  `lastname` text DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `irid` text DEFAULT NULL,
  `firstname` text DEFAULT NULL,
  `lastname` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `phonenumber` text DEFAULT NULL,
  `referrername` text DEFAULT NULL,
  `leadname` text DEFAULT NULL,
  `registrationdate` text DEFAULT NULL,
  `subscriptionstartdate` text DEFAULT NULL,
  `subscriptionenddate` text DEFAULT NULL,
  `subscriptiontype` text DEFAULT NULL,
  `qrimage` mediumblob DEFAULT NULL,
  `isprinted` tinyint(1) DEFAULT NULL,
  `cardcolour` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `irid`, `firstname`, `lastname`, `email`, `phonenumber`, `referrername`, `leadname`, `registrationdate`, `subscriptionstartdate`, `subscriptionenddate`, `subscriptiontype`, `qrimage`, `isprinted`, `cardcolour`) VALUES
(5, '213457', 'John', 'Doe', 'john.doe@example.com', '+1234567890', 'Jane Smith', 'Mike Johnson', '2025-05-20T18:46:00Z', '2025-06-01T00:00:00Z', '2026-06-01T00:00:00Z', 'Premium', 0x68747470733a2f2f6578616d706c652e636f6d2f7172636f64652e706e67, 0, 'Gold'),
(7, 'IR123456', 'Piyali', 'Sen', 'piyali.sen@example.com', '9876543210', 'Arjun Das', 'LeadCorp Pvt Ltd', '2025-07-02', '2025-07-05', '2026-07-04', 'Premium', 0x71725f31613262336334642e706e67, 1, 'Blue');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`irid`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
