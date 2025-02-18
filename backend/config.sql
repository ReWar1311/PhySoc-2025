-- USER TABLE CREATION --
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,   -- A unique identifier for each user
    name VARCHAR(255) NOT NULL,           -- User's name (string, max 255 characters)
    contact VARCHAR(15),                  -- User's contact number (string, max 15 characters)
    email VARCHAR(255) NOT NULL UNIQUE,   -- User's email (string, max 255 characters) with unique constraint
    password VARCHAR(255) NOT NULL        -- User's password (string, max 255 characters)
);
