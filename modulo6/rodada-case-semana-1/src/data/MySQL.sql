-- Active: 1658167139378@@35.226.146.116@3306@silveira-21814348-ariane-mello
CREATE TABLE client_wirecard (
    id VARCHAR(255) PRIMARY KEY
);

CREATE TABLE buyer_wirecard (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL
);

CREATE TABLE creditcard_wirecard (
    id VARCHAR(255) PRIMARY KEY,
    card_holder_name VARCHAR(255) NOT NULL,
    card_number VARCHAR(255) NOT NULL,
    card_expiration_date VARCHAR(255) NOT NULL,
    cvv VARCHAR(255) NOT NULL
);

CREATE TABLE payment_wirecard (
    id VARCHAR(255) PRIMARY KEY,
    amount VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL
);



