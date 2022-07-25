-- Active: 1654804337420@@35.226.146.116@3306@silveira-21814348-ariane-mello

CREATE TABLE estante_virtual_competition (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    date VARCHAR(255) NOT NULL,
    status_competition VARCHAR(255) NOT NULL
)