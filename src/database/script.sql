create database insightTrip;
use insightTrip;

create user 'API'@'localhost' identified by 'webDataViz0API';
grant insert, select, update on insightTrip.* to 'API'@'localhost';
show grants for 'API'@'localhost';

CREATE DATABASE InsightTrip;

USE InsightTrip;

CREATE TABLE Area (
    idArea INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(45)
);

CREATE TABLE Funcionario (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(45),
    CPF CHAR(14),
    Email VARCHAR(256),
    Senha VARCHAR(45),
    Telefone VARCHAR(11),   
    fkAdministrador INT,
    CONSTRAINT fkFuncionario FOREIGN KEY (fkAdministrador) 
    REFERENCES Funcionario(idFuncionario),
    fkArea INT, 
    CONSTRAINT fkArea FOREIGN KEY (fkArea) 
    REFERENCES Area(idArea)
);


CREATE TABLE Agencia (
    idAgencia INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(45),
    CNPJ CHAR(18),
    Endereco VARCHAR(45),
    CEP CHAR(10),
    fkAdministrador INT,
    CONSTRAINT fkAdministradorAgencia FOREIGN KEY (fkAdministrador) 
        REFERENCES Funcionario(idFuncionario)
);

CREATE TABLE Estado (
    idEstado INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(45),
    Regiao VARCHAR(45),
    CodigoIBGE CHAR(2)
);

CREATE TABLE Criminalidade (
    idCriminalidade INT PRIMARY KEY AUTO_INCREMENT,
    DataHora DATETIME,
    QtdVitimas INT, 
    MunicipiosPerigosos VARCHAR(45),
    fkEstado INT,
    CONSTRAINT fkEstadoCriminalidade FOREIGN KEY (fkEstado) 
        REFERENCES Estado(idEstado)
);

CREATE TABLE Eventos (
    idEventos INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(45),
    Descricao VARCHAR(45),
    dataHota DATETIME
);

CREATE TABLE EstadoHasEvento (
    idEventoEstado INT PRIMARY KEY AUTO_INCREMENT,
    dtEventoInicio DATE,
    dtEventoTermino DATE,
    fkEstado INT,
    CONSTRAINT fkEstadoEventos FOREIGN KEY (fkEstado) 
        REFERENCES Estado(idEstado),
    fkEventos INT,
    CONSTRAINT fkEventosEstado FOREIGN KEY (fkEventos) 
        REFERENCES Eventos(idEventos)
);

CREATE TABLE Aeroporto (
    idAeroporto INT PRIMARY KEY AUTO_INCREMENT,
    NomeAeroporto VARCHAR(75),
    SiglaAeroporto VARCHAR(10),
    Continente VARCHAR(45),
    fkEstado INT,
    CONSTRAINT fkEstadoAeroportos FOREIGN KEY (fkEstado) 
        REFERENCES Estado(idEstado)
);

-- Tabela associativa entre Agência e Aeroporto
CREATE TABLE AgenciaHasAeroporto (
    fkAgencia INT,
    fkAeroporto INT,
    PRIMARY KEY (fkAgencia, fkAeroporto),
    CONSTRAINT fkAgenciaAeroporto FOREIGN KEY (fkAgencia) 
        REFERENCES Agencia(idAgencia),
    CONSTRAINT fkAeroportoAgencia FOREIGN KEY (fkAeroporto) 
        REFERENCES Aeroporto(idAeroporto)
);

CREATE TABLE Passagem (
    idPassagem INT PRIMARY KEY AUTO_INCREMENT,
    NomePassagem VARCHAR(75),
    Natureza VARCHAR(45),
    Origem VARCHAR(75),
    Destino VARCHAR(75),
    dtViagem DATETIME
);

CREATE TABLE Passageiros (
    idPassageiros INT PRIMARY KEY AUTO_INCREMENT,
    QtdPassageiros INT, 
    DataHora DATETIME,
    fkPassagem INT,
    CONSTRAINT fkPassagemPassageiros FOREIGN KEY (fkPassagem) 
        REFERENCES Passagem(idPassagem)
);

-- É necessario que a tabela estado esteja alimentada 
INSERT INTO Estado (Nome, Regiao, CodigoIBGE) VALUES
('Acre', 'Norte', '12'),
('Alagoas', 'Nordeste', '27'),
('Amapá', 'Norte', '16'),
('Amazonas', 'Norte', '13'),
('Bahia', 'Nordeste', '29'),
('Ceará', 'Nordeste', '23'),
('Distrito Federal', 'Centro-Oeste', '53'),
('Espírito Santo', 'Sudeste', '32'),
('Goiás', 'Centro-Oeste', '52'),
('Maranhão', 'Nordeste', '21'),
('Mato Grosso', 'Centro-Oeste', '51'),
('Mato Grosso do Sul', 'Centro-Oeste', '50'),
('Minas Gerais', 'Sudeste', '31'),
('Pará', 'Norte', '15'),
('Paraíba', 'Nordeste', '25'),
('Paraná', 'Sul', '41'),
('Pernambuco', 'Nordeste', '26'),
('Piauí', 'Nordeste', '22'),
('Rio de Janeiro', 'Sudeste', '33'),
('Rio Grande do Norte', 'Nordeste', '24'),
('Rio Grande do Sul', 'Sul', '43'),
('Rondônia', 'Norte', '11'),
('Roraima', 'Norte', '14'),
('Santa Catarina', 'Sul', '42'),
('São Paulo', 'Sudeste', '35'),
('Sergipe', 'Nordeste', '28'),
('Tocantins', 'Norte', '17');



