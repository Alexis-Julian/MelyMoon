-- CREATE DATABASE mely_moon;
USE mely_moon;


CREATE TABLE IF NOT EXISTS USERNAME(
	uid  INT NOT NULL AUTO_INCREMENT UNIQUE,
	email_address VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL,
    password_account VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    CONSTRAINT PK_USERNAME PRIMARY KEY(uid,email_address)
);

INSERT INTO USERNAME(email_address,username,password_account) VALUES('alexisjrojas@hotmail.es','Alexis','123');

SELECT * FROM USERNAME;