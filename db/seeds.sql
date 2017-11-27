USE call_logs_db;
DROP TABLE IF EXISTS users;
CREATE TABLE users 
(	
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	call_sign VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    password VARCHAR(255),
    comments VARCHAR(255),
    timestamps DATETIME
    );
    
INSERT INTO users (call_sign, email, password, comments,timestamps) VALUES ('KC0NUG', 'KC0NUG@GMAIL.COM', '1234', 'QTH: OVERLAND PARK, KS', current_timestamp());

