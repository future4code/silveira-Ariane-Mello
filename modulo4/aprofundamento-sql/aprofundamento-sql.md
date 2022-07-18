# Exercício 1

## a) Altera a table Actor removendo a column salary.

## b) Altera a table Actor mudando a column gender para o tipo sex sendo uma string de no máximo 6 caracteres.

## c) Altera a table Actor mudando a column gender para o tipo gender com o mesmo tipo sendo uma string de no máximo 255 caracteres.

## d) 

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercicio 2

## a) 

UPDATE Actor SET name = "Fernanda Torres", birth_date = "1965-09-15" WHERE id = "003";

## b) 

UPDATE Actor SET name= "JULIANA PAES" WHERE id = "005";

UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";

## c) 

UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005"; 

## d) 0 linha(s) afetada(s) Linhas correspondidas: 0 Alteradas: 0 Avisos: 0.

UPDATE Actor SET name = "Ariane Tier" WHERE id = "008";

# Exercício 3

## a) 

DELETE FROM Actor WHERE name = "Fernanda Torres";

## b)

DELETE FROM Actor WHERE gender = "male" and salary >= 100000000;


# Exercício 4

## a) 

SELECT MAX(salary) FROM Actor;

## b)

SELECT MIN(salary) FROM Actor WHERE gender = "female";

## c) 

SELECT COUNT(*) FROM Actor WHERE gender = "female"; 

## d)

SELECT SUM(salary) FROM Actor;

# Exercício 5

## a) Somou os gêneros e os separou por tipo.

SELECT COUNT(*), gender FROM Actor GROUP BY gender;

## b) 

SELECT id, name FROM Actor ORDER BY name DESC;

## c)

SELECT * FROM Actor ORDER BY salary ASC;

## d) 

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

## e) 

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

# Exercício 6

## a) 

ALTER TABLE Movie ADD playing_limit_date DATE;

## b)

ALTER TABLE Movie CHANGE evaluation evaluation FLOAT NOT NULL;

## c)

UPDATE Movie SET playing_limit_date = "2021-06-07" WHERE id = "001";

UPDATE Movie SET playing_limit_date = "2021-07-07" WHERE id = "002";

## d) 0 linha(s) afetada(s) Linhas correspondidas: Alteradas: 0 Avisos: 0.

DELETE FROM Movie WHERE id = "001";

UPDATE Movie SET synopsis = "Testando alteração" WHERE id = "001";
