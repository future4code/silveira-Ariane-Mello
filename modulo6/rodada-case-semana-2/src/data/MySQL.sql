-- Active: 1654804337420@@35.226.146.116@3306@silveira-21814348-ariane-mello

CREATE TABLE estante_virtual_competition (
    id_competition VARCHAR(255) PRIMARY KEY,
    competition_name VARCHAR(255) NOT NULL UNIQUE,
    start_date VARCHAR(255) NOT NULL,
    end_date VARCHAR(255) NOT NULL
);

CREATE TABLE estante_virtual_result_100m_rasos (
    id_athlete VARCHAR(255) PRIMARY KEY,
    competition_name VARCHAR(255) NOT NULL, 
    athlete_name VARCHAR(255) NOT NULL,
    value INT NOT NULL,
    unity VARCHAR(255) NOT NULL,
    FOREIGN KEY (competition_name) REFERENCES estante_virtual_competition(competition_name)
);

CREATE TABLE estante_virtual_result_dardo (
    id_athlete VARCHAR(255) PRIMARY KEY,
    competition_name VARCHAR(255) NOT NULL, 
    athlete_name VARCHAR(255) NOT NULL,
    value_1 VARCHAR(255) NOT NULL,
    value_2 VARCHAR(255) NOT NULL,
    value_3 VARCHAR(255) NOT NULL,
    unity VARCHAR(255) NOT NULL,
    FOREIGN KEY (competition_name) REFERENCES estante_virtual_competition(competition_name)
);