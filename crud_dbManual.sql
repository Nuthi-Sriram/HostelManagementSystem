CREATE TABLE Blocks(block_id varchar(15) PRIMARY KEY, block_name char(25), gender char(1), locate varchar(50), description char(50), status char(50))

CREATE TABLE Course(course_id varchar(15) PRIMARY KEY, course_name char(30) NOT NULL, year_no int)

CREATE TABLE Room(room_no varchar(10), beds_no int, status char(50), block_id varchar(15))

-- Now, make block_id (block) as foreign KEY (i.e, only 1 constraint)

ALTER TABLE `Room` ADD PRIMARY KEY( `room_no`, `block_id`);

CREATE TABLE Student(reg_no varchar(20) PRIMARY KEY, room_no varchar(10) NOT NULL , block_id varchar(15) NOT NULL, stud_name char(40) NOT NULL, gender char(1) NOT NULL, dob date, blood_group char(3), email_id varchar(40), address varchar(75), father_name char(40), mother_name char(40), parent_email varchar(40), course_id varchar(15))

-- Now, make room_no (room), block_id (room), course_id (course) as foreign keys (3 constraints as a whole)

CREATE TABLE Student_Ph(ph_no varchar(10), reg_no varchar(20))

-- Now, make reg_no (student) as foreign key (1 constraint)

ALTER TABLE `Student_Ph` ADD PRIMARY KEY( `ph_no`, `reg_no`);

CREATE TABLE Parent_Ph(parent_ph varchar(10), reg_no varchar(20))

-- Now, make reg_no (student) as foreign key (1 constraint)

ALTER TABLE `Parent_Ph` ADD PRIMARY KEY( `parent_ph`, `reg_no`);

CREATE TABLE Staff(staff_id varchar(20) PRIMARY KEY, staff_name char(40) NOT NULL, gender char(1) NOT NULL, dob date, email_id varchar(40), staff_role char(20), salary int)

CREATE TABLE Staff_Ph(ph_no varchar(10), staff_id varchar(20))

-- Now, make staff_id (staff) as foreign key (1 constraint)

ALTER TABLE `Staff_Ph` ADD PRIMARY KEY( `ph_no`, `staff_id`);

CREATE TABLE Staff_Block(staff_id varchar(20), block_id varchar(15))

-- Now, make staff_id (staff), block_id (blocks) as foreign keys (2 constraints)

ALTER TABLE `Staff_Block` ADD PRIMARY KEY( `staff_id`, `block_id`);

CREATE TABLE LocalGuardian(guardian_name char(30), reg_no varchar(20), gender char(1), relation char(20), email_id varchar(40), address varchar(75))

-- Now, make reg_no (student) as foreign key (1 constraint)

ALTER TABLE `LocalGuardian` ADD PRIMARY KEY( `guardian_name`, `reg_no`);

CREATE TABLE LocalGuardian_Ph(ph_no varchar(10), guardian_name char(30), reg_no varchar(20))

-- Now make guardian_name (localguardian), reg_no (localguardian) as foreign keys

ALTER TABLE `LocalGuardian_Ph` ADD PRIMARY KEY( `ph_no`, `guardian_name`, `reg_no`);

CREATE TABLE Complaint(complaint_id varchar(15) PRIMARY KEY, complaint_date timestamp NOT NULL, resolved_date date, particulars char(50), status char(50), staff_id varchar(20))

-- Now, make staff_id (staff) as foreign key

CREATE TABLE Student_Complaint(complaint_id varchar(15), reg_no varchar(20))

-- Now make complaint_id (complaint), reg_no (student) as foreign keys

ALTER TABLE `Student_Complaint` ADD PRIMARY KEY( `complaint_id`, `reg_no`);

CREATE TABLE Outing(gatepass_id varchar(15) PRIMARY KEY, outing_type char(15) NOT NULL, purpose char(30) NOT NULL, Out_date_time timestamp NOT NULL, expectedin_date_time timestamp default CURRENT_TIMESTAMP NOT NULL, actualin_date_time timestamp default CURRENT_TIMESTAMP NOT NULL, reg_no varchar(20), staff_id varchar(20))

-- Now make reg_no (student), staff_id (staff) as foreign keys