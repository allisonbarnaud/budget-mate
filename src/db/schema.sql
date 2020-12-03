CREATE DATABASE budget-mate;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password_digest TEXT,
    username TEXT
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    amount INTEGER,
    details TEXT,
    transactionDate DATE, 
    category TEXT,
    additionalInfo TEXT,
    user_id INTEGER
);