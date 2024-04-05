import mysql from "serverless-mysql";
import "dotenv/config";

export const conn = mysql({
	config: {
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		port: 3306,
		database: process.env.DATABASE,
	},
});
