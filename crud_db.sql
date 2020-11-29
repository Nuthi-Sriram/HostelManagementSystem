CREATE TABLE Blocks
(
    block_id varchar(15) PRIMARY KEY,
    block_name char(25),
    gender char(1),
    locate varchar(50),
    description char(50),
    status char(50)
);

CREATE TABLE Course
(
    course_id varchar(15) PRIMARY KEY,
    course_name char(30) NOT NULL,
    year_no int
);

CREATE TABLE Room
(
    room_no varchar(10),
    beds_no int,
    status char(50),
    block_id varchar(15)
);

ALTER TABLE Room ADD constraint room1 FOREIGN KEY(block_id) REFERENCES Blocks(block_id);

ALTER TABLE `Room`
ADD PRIMARY KEY
( `room_no`, `block_id`);

CREATE TABLE Student
(
    reg_no varchar(20) PRIMARY KEY,
    room_no varchar(10) NOT NULL ,
    block_id varchar(15) NOT NULL,
    stud_name char(40) NOT NULL,
    gender char(1) NOT NULL,
    dob date,
    blood_group char(3),
    email_id varchar(40),
    address varchar(75),
    father_name char(40),
    mother_name char(40),
    parent_email varchar(40),
    course_id varchar(15)
);

ALTER TABLE Student ADD constraint student1 FOREIGN KEY(room_no) REFERENCES Room(room_no)
,
ADD constraint student2 FOREIGN KEY
(block_id) REFERENCES Room
(block_id),
ADD constraint student3 FOREIGN KEY
(course_id) REFERENCES Course
(course_id);

CREATE TABLE Student_Ph
(
    ph_no varchar(10),
    reg_no varchar(20)
);

ALTER TABLE Student_Ph ADD constraint studentph1 FOREIGN KEY(reg_no) REFERENCES Student(reg_no);

ALTER TABLE `Student_Ph`
ADD PRIMARY KEY
( `ph_no`, `reg_no`);

CREATE TABLE Parent_Ph
(
    parent_ph varchar(10),
    reg_no varchar(20)
);

ALTER TABLE Parent_Ph ADD constraint parentph1 FOREIGN KEY(reg_no) REFERENCES Student(reg_no);

ALTER TABLE `Parent_Ph`
ADD PRIMARY KEY
( `parent_ph`, `reg_no`);

CREATE TABLE Staff
(
    staff_id varchar(20) PRIMARY KEY,
    staff_name char(40) NOT NULL,
    gender char(1) NOT NULL,
    dob date,
    email_id varchar(40),
    staff_role char(20),
    salary int
);

CREATE TABLE Staff_Ph
(
    ph_no varchar(10),
    staff_id varchar(20)
);

ALTER TABLE Staff_Ph ADD constraint staffph1 FOREIGN KEY(staff_id) REFERENCES Staff(staff_id);

ALTER TABLE `Staff_Ph`
ADD PRIMARY KEY
( `ph_no`, `staff_id`);

CREATE TABLE Staff_Block
(
    staff_id varchar(20),
    block_id varchar(15)
);

ALTER TABLE Staff_Block ADD constraint staffblock1 FOREIGN KEY(staff_id) REFERENCES Staff(staff_id)
,
ADD constraint staffblock2 FOREIGN KEY
(block_id) REFERENCES Blocks
(block_id);

ALTER TABLE `Staff_Block`
ADD PRIMARY KEY
( `staff_id`, `block_id`);

CREATE TABLE LocalGuardian
(
    guardian_name char(30),
    reg_no varchar(20),
    gender char(1),
    relation char(20),
    email_id varchar(40),
    address varchar(75)
);

ALTER TABLE LocalGuardian ADD constraint guardian1 FOREIGN KEY(reg_no) REFERENCES Student(reg_no);

ALTER TABLE `LocalGuardian`
ADD PRIMARY KEY
( `guardian_name`, `reg_no`);

CREATE TABLE LocalGuardian_Ph
(
    ph_no varchar(10),
    guardian_name char(30),
    reg_no varchar(20)
);

ALTER TABLE LocalGuardian_Ph ADD constraint guardianph1 FOREIGN KEY(guardian_name) REFERENCES LocalGuardian(guardian_name)
,
ADD constraint guardianph2 FOREIGN KEY
(reg_no) REFERENCES LocalGuardian
(reg_no);

ALTER TABLE `LocalGuardian_Ph`
ADD PRIMARY KEY
( `ph_no`, `guardian_name`, `reg_no`);

CREATE TABLE Complaint
(
    complaint_id varchar(15) PRIMARY KEY,
    complaint_date timestamp NOT NULL,
    resolved_date date,
    particulars char(50),
    status char(50),
    staff_id varchar(20)
);

ALTER TABLE Complaint ADD constraint complaint1 FOREIGN KEY(staff_id) REFERENCES Staff(staff_id);

CREATE TABLE Student_Complaint
(
    complaint_id varchar(15),
    reg_no varchar(20)
);

ALTER TABLE Student_Complaint ADD constraint studentcomplaint1 FOREIGN KEY(complaint_id) REFERENCES Complaint(complaint_id)
,
ADD constraint studentcomplaint2 FOREIGN KEY
(reg_no) REFERENCES Student
(reg_no);

ALTER TABLE `Student_Complaint`
ADD PRIMARY KEY
( `complaint_id`, `reg_no`);

CREATE TABLE outing
(
    gatepass_id int PRIMARY KEY AUTO_INCREMENT,
    outing_type char(15) NOT NULL,
    purpose char(30) NOT NULL,
    out_date_time timestamp default CURRENT_TIMESTAMP NOT NULL,
    expectedin_date_time timestamp default CURRENT_TIMESTAMP NOT NULL,
    actualin_date_time timestamp default CURRENT_TIMESTAMP NOT NULL,
    current_status char(20) default 'Requested' NOT NULL,
    reg_no varchar(20),
    staff_id varchar(20)
);

ALTER TABLE outing ADD constraint outing1 FOREIGN KEY(reg_no) REFERENCES Student(reg_no)
,
ADD constraint outing2 FOREIGN KEY
(staff_id) REFERENCES Staff
(staff_id);

CREATE TABLE `users`
(
 `id` int
(10) unsigned NOT NULL AUTO_INCREMENT,
 `name` varchar
(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 `email` varchar
(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 `password` varchar
(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 PRIMARY KEY
(`id`),
 UNIQUE KEY `email`
(`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `usersStud`
(
 `id` int
(10) unsigned NOT NULL AUTO_INCREMENT,
 `name` varchar
(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 `email` varchar
(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 `password` varchar
(255) COLLATE utf8mb4_unicode_ci NOT NULL,
 PRIMARY KEY
(`id`),
 UNIQUE KEY `email`
(`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE article
(
    id int PRIMARY KEY NOT NULL
    AUTO_INCREMENT, author varchar
    (50) NOT NULL, title text NOT NULL, brief text , onindex tinyint NOT NULL, createtime DATETIME NOT NULL, updatetime DATETIME NOT NULL, content text, type text );


    CREATE TABLE forumuser( id int NOT NULL PRIMARY KEY AUTO_INCREMENT, username varchar
    (50) NOT NULL UNIQUE , password varchar
    (50) NOT NULL, lv int NOT NULL );    

    INSERT INTO forumuser (`username`,`password`,`lv`)VALUES('test','test','15');

