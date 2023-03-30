CREATE DATABASE hamburguergama;

CREATE TABLE fornecedor (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  endereco VARCHAR(255),
  telefone VARCHAR(20)
);

REATE TABLE clientes (
  id INT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  endereco VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  email VARCHAR(255) UNIQUE
);

CREATE TABLE funcionarios (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  cpf VARCHAR(20)
);

CREATE TABLE produtos (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT,
  preco DECIMAL(10,2),
  id_fornecedor INT,
  FOREIGN KEY (id_fornecedor) REFERENCES fornecedor(id)
);

CREATE TABLE pedidos (
  id INT PRIMARY KEY,
  id_cliente INT,
  id_funcionario INT,
  hora DATETIME,
  valor_total DECIMAL(10,2),
  FOREIGN KEY (id_cliente) REFERENCES clientes(id),
  FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id)
);