CREATE DATABASE hamburguergama;

CREATE TABLE fornecedor (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  endereco VARCHAR(255),
  telefone VARCHAR(20)
);

CREATE TABLE clientes (
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

CREATE TABLE categorias (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(255) NOT NULL,
  descricao text,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
);

CREATE TABLE produtos (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT,
  preco DECIMAL(10,2),
  id_fornecedor INT,
  id_categoria int NOT NULL,
  FOREIGN KEY (id_fornecedor) REFERENCES fornecedor(id),
  FOREIGN KEY (id_categoria) REFERENCES categorias(id)
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









