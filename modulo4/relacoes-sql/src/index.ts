import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

CREATE TABLE Rating(
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY(movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating VALUES("002", "Filme excelente!", 10, "002");

INSERT INTO Rating VALUES("003", "Filme excelente!", 10, "003");

INSERT INTO Rating VALUES("004", "Filme excelente!", 10, "004");

INSERT INTO Rating VALUES("001", "Filme excelente!", 10, "001");

ALTER TABLE Movie DROP COLUMN Evaluation;

DELETE FROM Movie WHERE id = "002";

DELETE FROM Movie WHERE Rate = id = "003";

CREATE TABLE MovieCast(
    movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY(movie_id) REFERENCES Movie(id),
    FOREIGN KEY(actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast VALUES("002", "001"), ("003", "002"), ("004", "004");

INSERT INTO MovieCast VALUES("002", "005"), ("003", "005"), ("004", "001");

INSERT INTO MovieCast VALUES("002", "003");

DELETE FROM Actor WHERE  id = "001";

SELECT Movie.title, Movie.id, Rating.rate FROM Movie JOIN Rating ON Movie.id = Rating.movie_id;

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

