drop database dancaTudin;
CREATE DATABASE dancaTudin;
USE dancaTudin;

CREATE TABLE endereco (
    idendereco INT AUTO_INCREMENT PRIMARY KEY,
    rua VARCHAR(45),
    numero VARCHAR(10),
    bairro VARCHAR(45),
    cep VARCHAR(20)
);

CREATE TABLE escola (
    idescola INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    responsavel VARCHAR(45),
    endereco_idendereco INT NOT NULL,
    FOREIGN KEY (endereco_idendereco) REFERENCES endereco(idendereco)
);

CREATE TABLE alunos (
    idalunos INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    estilo VARCHAR(20) NOT NULL,
    nivel VARCHAR(20) NOT NULL
);

CREATE TABLE aula (
    idaula INT AUTO_INCREMENT PRIMARY KEY,
    estilo VARCHAR(20) NOT NULL,
    nivel VARCHAR(20) NOT NULL,
    diaSemana VARCHAR(20) NOT NULL,
    horario TIME NOT NULL,
    idescola INT NOT NULL,
    FOREIGN KEY (idescola) REFERENCES escola(idescola)
);

CREATE TABLE avaliacao (
    idavaliacao INT AUTO_INCREMENT PRIMARY KEY,
    nota INT NOT NULL,
    comentario VARCHAR(255),
    idescola INT NOT NULL,
    idalunos INT NOT NULL,
    FOREIGN KEY (idescola) REFERENCES escola(idescola),
    FOREIGN KEY (idalunos) REFERENCES alunos(idalunos)
);

CREATE TABLE alunos_has_escola (
    idalunos INT NOT NULL,
    idescola INT NOT NULL,
    PRIMARY KEY (idalunos, idescola),
    FOREIGN KEY (idalunos) REFERENCES alunos(idalunos),
    FOREIGN KEY (idescola) REFERENCES escola(idescola)
);

select * from alunos;


ALTER TABLE alunos ADD COLUMN quiz VARCHAR(10) DEFAULT 'nao';

select * from alunos;


INSERT INTO alunos (nome, email, senha, estilo, nivel, quiz) VALUES
('Larissa Dias', 'larissa.dias@sptech.school', 'Senha@123', 'Forró', 'Básico', 'sim'),
('Pedro Carlos', 'pedro.carlos@sptech.school', 'Senha@123', 'Sertanejo', 'Intermediário', 'sim'),
('Maria Lima', 'maria.lima@sptech.school', 'Senha@123', 'Forró', 'Avançado', 'sim'),
('Ana Jardim', 'ana.jardim@sptech.school', 'Senha@123', 'Sertanejo', 'Básico', 'sim'),
('Arthur Santos', 'arthur.santos@sptech.school', 'Senha@123', 'Forró', 'Intermediário', 'sim'),
('Rayza Siqueira', 'rayza.siqueira@sptech.school', 'Senha@123', 'Sertanejo', 'Avançado', 'sim'),
('Victor Lima', 'victor.lima@sptech.school', 'Senha@123', 'Forró', 'Básico', 'sim'),
('Guilherme Mesquita', 'guilherme.mesquita@sptech.school', 'Senha@123', 'Sertanejo', 'Intermediário', 'sim'),
('Igor Reis', 'igor.reis@sptech.school', 'Senha@123', 'Forró', 'Avançado', 'sim'),
('Gustavo Furquim', 'gustavo.furquim@sptech.school', 'Senha@123', 'Sertanejo', 'Básico', 'sim'),
('Davi Silva', 'davi.silva@sptech.school', 'Senha@123', 'Forró', 'Intermediário', 'sim'),
('Gabriel Miguel', 'gabriel.miguel@sptech.school', 'Senha@123', 'Sertanejo', 'Avançado', 'sim'),
('Eric Costa', 'eric.costa@sptech.school', 'Senha@123', 'Forró', 'Básico', 'sim'),
('Victor Mello', 'victor.mello@sptech.school', 'Senha@123', 'Sertanejo', 'Intermediário', 'sim'),
('Reginaldo Lima', 'reginaldo.lima@sptech.school', 'Senha@123', 'Forró', 'Avançado', 'sim'),
('Daner Quispe', 'daner.quispe@sptech.school', 'Senha@123', 'Sertanejo', 'Básico', 'sim'),
('Daniel Garcia', 'daniel.garcia@sptech.school', 'Senha@123', 'Forró', 'Intermediário', 'sim');

INSERT INTO endereco (rua, numero, bairro, cep) VALUES
('Rua Domingos Tarroso', '101', 'Vila Rubi', '04823090'),     
('Rua João Damasceno', '85', 'Vila das Belezas', '05841160'),  
('Avenida dos Metalúrgicos', '1262', 'Cidade Tiradentes', '08471000'),
('Estrada do Alvarenga', '3752', 'Pedreira', '04474340'),      
('Av. Olga Fadel Abarca', 'S/N', 'Jardim Santa Terezinha', '03572020'); 


INSERT INTO escola (nome, responsavel, endereco_idendereco) VALUES
('CEU Vila Rubi', 'Alexandre Santos', 1),
('CEU Casa Blanca', 'Borges dos Reis', 2),
('CEU Água Azul', 'Paulo Souza', 3),
('CEU Alvarenga', 'Carlos Lima', 4),
('CEU Aricanduva', 'Irene Souza', 5);

INSERT INTO aula (estilo, nivel, diaSemana, horario, idescola) VALUES
('Forró', 'Básico', 'Sábado', '10:00:00', 1),
('Sertanejo', 'Intermediário', 'Domingo', '15:00:00', 1),
('Sertanejo', 'Avançado', 'Sábado', '09:00:00', 2),
('Forró', 'Básico', 'Domingo', '14:00:00', 2),
('Forró', 'Intermediário', 'Sábado', '11:00:00', 3),
('Sertanejo', 'Básico', 'Domingo', '16:00:00', 3),
('Sertanejo', 'Intermediário', 'Sábado', '10:00:00', 4),
('Forró', 'Avançado', 'Domingo', '15:00:00', 4),
('Forró', 'Básico', 'Sábado', '09:00:00', 5),
('Sertanejo', 'Avançado', 'Domingo', '14:00:00', 5);

select * from alunos;




