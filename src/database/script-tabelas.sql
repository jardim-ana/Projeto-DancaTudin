-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

REATE DATABASE dancaTudin;


USE dancaTudin;

CREATE TABLE estilo (
    idestilo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    nivel VARCHAR(45) NOT NULL
);

CREATE TABLE endereco (
    idendereco INT AUTO_INCREMENT PRIMARY KEY,
    rua VARCHAR(45),
    numero VARCHAR(45),
    bairro VARCHAR(45),
    cep VARCHAR(45)
);


CREATE TABLE escola (
    idescola INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    responsavel VARCHAR(45),
    endereco_idendereco INT NOT NULL,
    
    CONSTRAINT fk_escola_endereco
        FOREIGN KEY (endereco_idendereco) 
        REFERENCES endereco(idendereco)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


CREATE TABLE alunos (
    idalunos INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    idestilo INT,  
    
    CONSTRAINT fk_aluno_estilo
        FOREIGN KEY (idestilo)
        REFERENCES estilo(idestilo)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);


CREATE TABLE aula (
    idaula INT AUTO_INCREMENT PRIMARY KEY,
    data DATETIME NOT NULL,
    idestilo INT NOT NULL,
    idescola INT NOT NULL,

    CONSTRAINT fk_aula_estilo
        FOREIGN KEY (idestilo)
        REFERENCES estilo(idestilo)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_aula_escola
        FOREIGN KEY (idescola)
        REFERENCES escola(idescola)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


CREATE TABLE avaliacao (
    idavaliacao INT AUTO_INCREMENT PRIMARY KEY,
    nota INT NOT NULL,
    comentario VARCHAR(255),
    idescola INT NOT NULL,
    idalunos INT NOT NULL,

    CONSTRAINT fk_avaliacao_escola
        FOREIGN KEY (idescola)
        REFERENCES escola(idescola)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_avaliacao_aluno
        FOREIGN KEY (idalunos)
        REFERENCES alunos(idalunos)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


CREATE TABLE alunos_has_escola (
    idalunos INT NOT NULL,
    idescola INT NOT NULL,

    PRIMARY KEY (idalunos, idescola),

    CONSTRAINT fk_rel_aluno
        FOREIGN KEY (idalunos)
        REFERENCES alunos(idalunos)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_rel_escola
        FOREIGN KEY (idescola)
        REFERENCES escola(idescola)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
