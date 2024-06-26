USE mely_moon;

DROP TABLE IF EXISTS USERS;

-- CREATE DATABASE mely_moon;



CREATE TABLE IF NOT EXISTS USERS(
	uid  INT NOT NULL AUTO_INCREMENT UNIQUE,
	email_address VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL,
    password_account VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    CONSTRAINT PK_USER PRIMARY KEY(uid,email_address)
);

 
CREATE TABLE IF NOT EXISTS FOLLOWERS(
	follower_id INT NOT NULL,
    following_id INT NOT NULL,
    CONSTRAINT PK_FOLLOWERS PRIMARY KEY(follower_id,following_id)
);  -- CREANDO UNA TABLA DE FOLLOWERS USANDO REFERENCIAS 

CREATE TABLE IF NOT EXISTS FRIENDS(
	friend_id INT NOT NULL,
    uid INT NOT NULL, -- USUARIO 
    CONSTRAINT PK_FRIENDS PRIMARY KEY(friend_id,uid)
); -- ALTER TABLE FOLLOWERS

CREATE TABLE IF NOT EXISTS USERS_ABOUT_ME(
	uid INT NOT NULL,
    about_me VARCHAR(800),
    created_at TIMESTAMP DEFAULT NOW(),
    last_modified TIMESTAMP DEFAULT NOW()
);

ALTER TABLE FOLLOWERS ADD CONSTRAINT check_follower_id CHECK(follower_id <> following_id); -- RESTRINGUE QUE UNA PERSONA SE PUEDA SEGUIR A SI MISMA 
 
 
 ALTER TABLE FOLLOWERS ADD CONSTRAINT FK_FOLLOWERS_USERS_FOLLOWER_ID FOREIGN KEY FK_FOLLOWERS_USERS_FOLLOWER_ID(follower_id) REFERENCES USERS(uid);
 ALTER TABLE FOLLOWERS ADD CONSTRAINT FK_FOLLOWERS_USERS_FOLLOWING_ID FOREIGN KEY FK_FOLLOWERS_USERS_FOLLOWING_ID(following_id) REFERENCES USERS(uid);
 
 -- ALTER TABLE FRIENDS
 ALTER TABLE FRIENDS ADD CONSTRAINT FK_FRIENDS_USERS_FRIEND_ID FOREIGN KEY FK_FRIENDS_USERS_FRIEND_ID(friend_id) REFERENCES USERS(uid);
 ALTER TABLE FRIENDS ADD CONSTRAINT FK_FRIENDS_USERS_UID FOREIGN KEY FK_FRIENDS_USERS_UID(uid) REFERENCES USERS(uid);
 
 ALTER TABLE FRIENDS ADD CONSTRAINT check_friend_id CHECK(friend_id <> uid); -- RESTRINGUE QUE UNA PERSONA SE PUEDA SEGUIR A SI MISMA 
 

 -- ALTER TABLE USERS_ABOUT_ME
 /* DROP TRIGGER IF EXISTS TRG_UPDATE_LASTMODIFIED;
 DELIMITER //
CREATE TRIGGER TRG_UPDATE_LASTMODIFIED AFTER UPDATE ON USER_ABOUT_ME
FOR EACH ROW 
BEGIN 
	UPDATE USERS_ABOUT_ME SET last_modified = NOW();
END // 
DELIMITER ;
