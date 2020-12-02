-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 02, 2020 at 08:15 AM
-- Server version: 8.0.22-0ubuntu0.20.04.2
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `socka`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES
(1, 'test', 'test', 'test@gmail.com'),
(2, 'test2', 'qwerty123!@#', 'test@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int NOT NULL,
  `author` varchar(50) NOT NULL,
  `title` text NOT NULL,
  `brief` text,
  `onindex` tinyint NOT NULL,
  `createtime` datetime NOT NULL,
  `updatetime` datetime NOT NULL,
  `content` text,
  `type` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Blocks`
--

CREATE TABLE `Blocks` (
  `block_id` varchar(15) NOT NULL,
  `block_name` char(25) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `locate` varchar(50) DEFAULT NULL,
  `description` char(50) DEFAULT NULL,
  `status` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Blocks`
--

INSERT INTO `Blocks` (`block_id`, `block_name`, `gender`, `locate`, `description`, `status`) VALUES
('boys', 'Gokul', 'M', 'blr', 'sdfdf', 'E'),
('er2', 'Mathura', 'M', 'blr', 'sdfdf', 'F'),
('girls', 'gg', 'F', 'blr', 'sdfdf', 'E');

-- --------------------------------------------------------

--
-- Table structure for table `Complaint`
--

CREATE TABLE `Complaint` (
  `complaint_id` varchar(15) NOT NULL,
  `complaint_date` timestamp NOT NULL,
  `resolved_date` date DEFAULT NULL,
  `particulars` char(50) DEFAULT NULL,
  `status` char(50) DEFAULT NULL,
  `staff_id` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Complaints`
--

CREATE TABLE `Complaints` (
  `id` int NOT NULL,
  `complaint` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Complaints`
--

INSERT INTO `Complaints` (`id`, `complaint`) VALUES
(1, 'Electricity issue!!'),
(2, 'Fan Broken'),
(3, 'No Bulb'),
(4, 'Broken door knob!!'),
(6, 'No water'),
(7, 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `Course`
--

CREATE TABLE `Course` (
  `course_id` varchar(15) NOT NULL,
  `course_name` char(30) NOT NULL,
  `year_no` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Course`
--

INSERT INTO `Course` (`course_id`, `course_name`, `year_no`) VALUES
('co1', 'cse', 3),
('co2', 'dbms', 3),
('co3', 'automata', 3);

-- --------------------------------------------------------

--
-- Table structure for table `forumuser`
--

CREATE TABLE `forumuser` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `lv` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `forumuser`
--

INSERT INTO `forumuser` (`id`, `username`, `password`, `lv`) VALUES
(1, 'test', 'test', 15);

-- --------------------------------------------------------

--
-- Table structure for table `LocalGuardian`
--

CREATE TABLE `LocalGuardian` (
  `guardian_name` char(30) NOT NULL,
  `reg_no` varchar(20) NOT NULL,
  `gender` char(1) DEFAULT NULL,
  `relation` char(20) DEFAULT NULL,
  `email_id` varchar(40) DEFAULT NULL,
  `address` varchar(75) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `LocalGuardian`
--

INSERT INTO `LocalGuardian` (`guardian_name`, `reg_no`, `gender`, `relation`, `email_id`, `address`) VALUES
('Krishna', 'BL.EN.U4CSE18117', 'M', 'Uncle', 'sriramnuthi@gmail.com', 'Dwarka'),
('Scarlet', 'BL.EN.U4CSE18091', 'F', 'Aunty', 'blackwidow@gmail.com', 'DisneyLand'),
('Tony Stark', 'BL.EN.U4CSE18123', 'M', 'God Father', 'mark1@gmail.com', 'Stark Tower');

-- --------------------------------------------------------

--
-- Table structure for table `LocalGuardian_Ph`
--

CREATE TABLE `LocalGuardian_Ph` (
  `ph_no` varchar(10) NOT NULL,
  `guardian_name` char(30) NOT NULL,
  `reg_no` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `message`) VALUES
(27, '123 og'),
(28, 'five go'),
(30, 'midnighoil'),
(31, 'sdfdsf'),
(32, 'sdfdsfsdfds'),
(33, '      sdfdsfsdfds'),
(36, 'does anyone have a pen');

-- --------------------------------------------------------

--
-- Table structure for table `outing`
--

CREATE TABLE `outing` (
  `gatepass_id` int NOT NULL,
  `outing_type` char(15) NOT NULL,
  `purpose` char(30) NOT NULL,
  `out_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expectedin_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualin_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `current_status` char(20) NOT NULL DEFAULT 'Requested',
  `reg_no` varchar(20) DEFAULT NULL,
  `staff_id` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `outing`
--

INSERT INTO `outing` (`gatepass_id`, `outing_type`, `purpose`, `out_date_time`, `expectedin_date_time`, `actualin_date_time`, `current_status`, `reg_no`, `staff_id`) VALUES
(1, 'sdfds', 'LocalGuardian\'s House', '2020-10-31 03:33:00', '2020-11-17 03:33:00', '2020-11-18 03:33:00', 'Granted', 'BL.EN.U4CSE18083', 'ds234'),
(2, 'sdf', 'LocalGuardian\'s House', '2020-11-04 04:23:00', '2020-11-20 04:23:00', '2020-11-19 04:23:00', 'Granted', 'BL.EN.U4CSE18073', 'ds234');

-- --------------------------------------------------------

--
-- Table structure for table `Parent_Ph`
--

CREATE TABLE `Parent_Ph` (
  `parent_ph` varchar(10) NOT NULL,
  `reg_no` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `product_name` varchar(200) DEFAULT NULL,
  `product_price` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`) VALUES
(9, 'kaazima', 1),
(10, 'priya', 2),
(11, 'abhi', 3),
(13, 'rakshit', 5555),
(14, 'yeppp', 44);

-- --------------------------------------------------------

--
-- Table structure for table `Room`
--

CREATE TABLE `Room` (
  `room_no` varchar(10) NOT NULL,
  `beds_no` int DEFAULT NULL,
  `status` char(50) DEFAULT NULL,
  `block_id` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Room`
--

INSERT INTO `Room` (`room_no`, `beds_no`, `status`, `block_id`) VALUES
('1', 5, 'E', 'girls'),
('2', 5, 'E', 'boys'),
('23', 5, 'E', 'er2');

-- --------------------------------------------------------

--
-- Table structure for table `Staff`
--

CREATE TABLE `Staff` (
  `staff_id` varchar(20) NOT NULL,
  `staff_name` char(40) NOT NULL,
  `gender` char(1) NOT NULL,
  `dob` date DEFAULT NULL,
  `email_id` varchar(40) DEFAULT NULL,
  `staff_role` char(20) DEFAULT NULL,
  `salary` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Staff`
--

INSERT INTO `Staff` (`staff_id`, `staff_name`, `gender`, `dob`, `email_id`, `staff_role`, `salary`) VALUES
('ashKetchup123', 'Pikachu', 'M', '1994-01-12', 'pikachu@pokemon.com', 'thunderbolt shock', 0),
('brinvavan123', 'wolfman', 'M', '1994-01-12', 'wolfOfWallStreet@wolf.com', 'waterKeeper', 7),
('ds234', 'lionKingSimba', 'M', '1994-01-12', 'sdfsf', 'simba@lionKing.com', 4),
('lank', 'wonderWomen', 'F', '1994-01-12', 'galgadot@gmail.com', 'amazonLily Guard', 99),
('mathura123', 'dog', 'M', '1994-01-12', 'shiro@gmail.com', 'warden hero', 5);

-- --------------------------------------------------------

--
-- Table structure for table `Staff_Block`
--

CREATE TABLE `Staff_Block` (
  `staff_id` varchar(20) NOT NULL,
  `block_id` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Staff_Ph`
--

CREATE TABLE `Staff_Ph` (
  `ph_no` varchar(10) NOT NULL,
  `staff_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--

CREATE TABLE `Student` (
  `reg_no` varchar(20) NOT NULL,
  `room_no` varchar(10) NOT NULL,
  `block_id` varchar(15) NOT NULL,
  `stud_name` char(40) NOT NULL,
  `gender` char(1) NOT NULL,
  `dob` date DEFAULT NULL,
  `blood_group` char(3) DEFAULT NULL,
  `email_id` varchar(40) DEFAULT NULL,
  `address` varchar(75) DEFAULT NULL,
  `father_name` char(40) DEFAULT NULL,
  `mother_name` char(40) DEFAULT NULL,
  `parent_email` varchar(40) DEFAULT NULL,
  `course_id` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Student`
--

INSERT INTO `Student` (`reg_no`, `room_no`, `block_id`, `stud_name`, `gender`, `dob`, `blood_group`, `email_id`, `address`, `father_name`, `mother_name`, `parent_email`, `course_id`) VALUES
('BL.EN.U4CSE18073', '23', 'girls', 'kaazima', 'F', '1994-01-12', 'O+', 'sriramnuthi@gmail.com', 'Hno: 298, 31 main, 10 cross, HSR LAYOUT Sector 1', 'Giri', 'dfsdfs', 'blenu4cse18083@bl.students.amrita.edu', 'co1'),
('BL.EN.U4CSE18083', '23', 'er2', 'Sriram', 'M', '2001-09-01', 'O+', 'sriramnuthi@gmail.com', 'hsr', 'g', 'p', '@gmail.com', 'co1'),
('BL.EN.U4CSE18084', '23', 'er2', 'Sriram', 'M', '1994-01-12', 'O+', 'sriramnuthi@gmail.com', 'dss', 'Giri', 'dfsdfs', 'sriramnuthi@gmail.com', 'co3'),
('BL.EN.U4CSE18091', '1', 'girls', 'Priya', 'F', '1994-01-12', 'O+', 'priya@gmail.com', 'sdds', 'sdfs', 'dfdsf', 'sdfds@gmail.com', 'co1'),
('BL.EN.U4CSE18117', '23', 'er2', 'Abhishek', 'M', '1980-03-10', 'B+', 'abhi@gmail.com', 'sdfsd', 'sdfds', 'dfsdfs', 'sdfs@outlook.com', 'co2'),
('BL.EN.U4CSE18123', '1', 'girls', 'rakshit', 'M', '1994-01-12', 'O+', 'sriramnuthi@gmail.com', 'Hno: 298, 31 main, 10 cross, HSR LAYOUT Sector 1', 'aa', 'dfsdfs', 'blenu4cse18083@bl.students.amrita.edu', 'co1');

-- --------------------------------------------------------

--
-- Table structure for table `Student_Complaint`
--

CREATE TABLE `Student_Complaint` (
  `complaint_id` varchar(15) NOT NULL,
  `reg_no` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Student_Ph`
--

CREATE TABLE `Student_Ph` (
  `ph_no` varchar(10) NOT NULL,
  `reg_no` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(60) NOT NULL,
  `full_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `username`, `password`, `full_name`) VALUES
(1, 'john', '6607a999607711cd339dce1de6d64425a0985cfd', 'John Doe');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(2, 'sriram', 'sriramnuthi@gmail.com', '$2a$12$xgC1/IuQg39R3dkIbmapjupck1jcuFzVEJ6gX0XSp3cHUzZCzQOxC'),
(3, 'pikachu', 'pikachu@gmail.com', '$2a$12$a.VhqhaYMle97PYgDAcuM.tNQPOmI27UlUsQW0a4hg7LGXOFxxxDm'),
(4, 'det', 'det@gmail.com', '$2a$12$4N0gFllWOjfSuPmhGTFJpeHC6f0CGb/qIw3w18XvRM1L6qO8P7JYm'),
(5, 'sharingan', 'sharingan@gmail.com', '$2a$12$TdqmB/h5fhANmkir8dzm2.8ZbJBmDONn4Bm9qUC6l7dv06YiGyB4C'),
(6, 'kaazima', 'kaazima@gmail.com', '$2a$12$K3oqcPX7Ole86XcDQE2Juu2IdH/J8hWqqJPNTr/QN3OuQrUMdjBJu'),
(8, 'Abhishek', 'abhishek@gmail.com', '$2a$12$3MPiZHMhr91wTDO9o69ouOfy5rK3f4SijRGCLZmjzDbhEtbkWufiO'),
(9, 'sriramnuthi', 'sas@gmail.com', '$2a$12$lNNUgw.FOscEkdgzQDTb9OP/DkvfpfnIPNEghM7dLRYQOWyPn1K6C'),
(10, 'priya', 'priya@gmail.com', '$2a$12$A3hXWdfIDTJb.uS8muCxR.ACKDy0E8.sKy5g/IvZOzjxl1prz5Ji.'),
(11, 'luffy@gmail.com', 'luffy@gmail.com', '$2a$12$9NYx4eGbh1Rj4ofitYNGcuVzzvipH86bTWC.Bjzr436yyV78UJSzy'),
(12, 'naruto', 'naruto@gmail.com', '$2a$12$lTdwqYCWaDoJ/xYYjyk5yO.DZVx28ZWTsdX2MOif5v07zMzpNtP5m');

-- --------------------------------------------------------

--
-- Table structure for table `usersStud`
--

CREATE TABLE `usersStud` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usersStud`
--

INSERT INTO `usersStud` (`id`, `name`, `email`, `password`) VALUES
(2, 'abhiram', 'abhiram@gmail.com', '$2a$12$me9k4XPRcDsbdqGIvbDCPeru5LmajY3WQ8Y4XRDwbkw1mqDTmfdMG'),
(3, 'kaazima', 'kaazima@gmail.com', '$2a$12$ilLkTguNDKg3vZDHTNtioOlqZXnLHZzWLy6P1bpEz3cFziwz/Op2G'),
(4, 'abhi', 'abhi@gmail.com', '$2a$12$rwo8UgBUSouyDctVCaMMlOzsRsjLQFW1tDexoQFHbzz8N9YhA/hr2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Blocks`
--
ALTER TABLE `Blocks`
  ADD PRIMARY KEY (`block_id`);

--
-- Indexes for table `Complaint`
--
ALTER TABLE `Complaint`
  ADD PRIMARY KEY (`complaint_id`),
  ADD KEY `complaint1` (`staff_id`);

--
-- Indexes for table `Complaints`
--
ALTER TABLE `Complaints`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `forumuser`
--
ALTER TABLE `forumuser`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `LocalGuardian`
--
ALTER TABLE `LocalGuardian`
  ADD PRIMARY KEY (`guardian_name`,`reg_no`),
  ADD KEY `guardian1` (`reg_no`);

--
-- Indexes for table `LocalGuardian_Ph`
--
ALTER TABLE `LocalGuardian_Ph`
  ADD PRIMARY KEY (`ph_no`,`guardian_name`,`reg_no`),
  ADD KEY `guardianph1` (`guardian_name`),
  ADD KEY `guardianph2` (`reg_no`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `outing`
--
ALTER TABLE `outing`
  ADD PRIMARY KEY (`gatepass_id`);

--
-- Indexes for table `Parent_Ph`
--
ALTER TABLE `Parent_Ph`
  ADD PRIMARY KEY (`parent_ph`,`reg_no`),
  ADD KEY `parentph1` (`reg_no`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `Room`
--
ALTER TABLE `Room`
  ADD PRIMARY KEY (`room_no`,`block_id`),
  ADD KEY `room1` (`block_id`);

--
-- Indexes for table `Staff`
--
ALTER TABLE `Staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `Staff_Block`
--
ALTER TABLE `Staff_Block`
  ADD PRIMARY KEY (`staff_id`,`block_id`),
  ADD KEY `staffblock2` (`block_id`);

--
-- Indexes for table `Staff_Ph`
--
ALTER TABLE `Staff_Ph`
  ADD PRIMARY KEY (`ph_no`,`staff_id`),
  ADD KEY `staffph1` (`staff_id`);

--
-- Indexes for table `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`reg_no`),
  ADD KEY `student1` (`room_no`),
  ADD KEY `student2` (`block_id`),
  ADD KEY `student3` (`course_id`);

--
-- Indexes for table `Student_Complaint`
--
ALTER TABLE `Student_Complaint`
  ADD PRIMARY KEY (`complaint_id`,`reg_no`),
  ADD KEY `studentcomplaint2` (`reg_no`);

--
-- Indexes for table `Student_Ph`
--
ALTER TABLE `Student_Ph`
  ADD PRIMARY KEY (`ph_no`,`reg_no`),
  ADD KEY `studentph1` (`reg_no`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `usersStud`
--
ALTER TABLE `usersStud`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Complaints`
--
ALTER TABLE `Complaints`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `forumuser`
--
ALTER TABLE `forumuser`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `outing`
--
ALTER TABLE `outing`
  MODIFY `gatepass_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `usersStud`
--
ALTER TABLE `usersStud`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Complaint`
--
ALTER TABLE `Complaint`
  ADD CONSTRAINT `complaint1` FOREIGN KEY (`staff_id`) REFERENCES `Staff` (`staff_id`);

--
-- Constraints for table `LocalGuardian`
--
ALTER TABLE `LocalGuardian`
  ADD CONSTRAINT `guardian1` FOREIGN KEY (`reg_no`) REFERENCES `Student` (`reg_no`);

--
-- Constraints for table `LocalGuardian_Ph`
--
ALTER TABLE `LocalGuardian_Ph`
  ADD CONSTRAINT `guardianph1` FOREIGN KEY (`guardian_name`) REFERENCES `LocalGuardian` (`guardian_name`),
  ADD CONSTRAINT `guardianph2` FOREIGN KEY (`reg_no`) REFERENCES `LocalGuardian` (`reg_no`);

--
-- Constraints for table `Parent_Ph`
--
ALTER TABLE `Parent_Ph`
  ADD CONSTRAINT `parentph1` FOREIGN KEY (`reg_no`) REFERENCES `Student` (`reg_no`);

--
-- Constraints for table `Room`
--
ALTER TABLE `Room`
  ADD CONSTRAINT `room1` FOREIGN KEY (`block_id`) REFERENCES `Blocks` (`block_id`);

--
-- Constraints for table `Staff_Block`
--
ALTER TABLE `Staff_Block`
  ADD CONSTRAINT `staffblock1` FOREIGN KEY (`staff_id`) REFERENCES `Staff` (`staff_id`),
  ADD CONSTRAINT `staffblock2` FOREIGN KEY (`block_id`) REFERENCES `Blocks` (`block_id`);

--
-- Constraints for table `Staff_Ph`
--
ALTER TABLE `Staff_Ph`
  ADD CONSTRAINT `staffph1` FOREIGN KEY (`staff_id`) REFERENCES `Staff` (`staff_id`);

--
-- Constraints for table `Student`
--
ALTER TABLE `Student`
  ADD CONSTRAINT `student1` FOREIGN KEY (`room_no`) REFERENCES `Room` (`room_no`),
  ADD CONSTRAINT `student2` FOREIGN KEY (`block_id`) REFERENCES `Room` (`block_id`),
  ADD CONSTRAINT `student3` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`);

--
-- Constraints for table `Student_Complaint`
--
ALTER TABLE `Student_Complaint`
  ADD CONSTRAINT `studentcomplaint1` FOREIGN KEY (`complaint_id`) REFERENCES `Complaint` (`complaint_id`),
  ADD CONSTRAINT `studentcomplaint2` FOREIGN KEY (`reg_no`) REFERENCES `Student` (`reg_no`);

--
-- Constraints for table `Student_Ph`
--
ALTER TABLE `Student_Ph`
  ADD CONSTRAINT `studentph1` FOREIGN KEY (`reg_no`) REFERENCES `Student` (`reg_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
