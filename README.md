# CRUD com Docker, Apache, Node.js e MySQL

Este projeto é um ambiente completo de desenvolvimento de um sistema CRUD (Create, Read, Update, Delete) utilizando **Node.js**, **MySQL** e servido com **Apache HTTP Server**, tudo orquestrado com **Docker** e **Docker Compose**.

O objetivo é demonstrar como integrar múltiplos serviços (backend, banco de dados e servidor web) usando containers.

## 🧰 Tecnologias Utilizadas

- **Node.js 18.20.5** – Backend (Express)
- **MySQL 8.0** – Banco de dados relacional
- **Apache HTTP Server (httpd)** – Servidor para arquivos HTML/CSS
- **Docker e Docker Compose** – Containerização dos serviços

---

## 📁 Estrutura do Projeto

```
crud-docker-apache/
├── app/                    # Código-fonte Node.js (Express)
│   ├── public/             # Arquivos HTML/CSS/JS servidos pelo Apache
│   ├── server.js           # Lógica backend
│   ├── package.json        # Dependências do Node.js
│   └── ...
├── mysql/
│   └── init.sql            # Script de inicialização do banco de dados
├── Dockerfile              # Dockerfile do backend
└── docker-compose.yml      # Orquestração dos serviços
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

### Passo a passo

1. **Clone o repositório**

    ```bash
    git clone https://github.com/<nome-de-usuario>/crud-docker-apache.git
    cd crud-docker-apache/
    ```

2. **Build dos containers (limpando cache)**

    ```bash
    docker compose build --no-cache
    ```

3. **Suba os containers**

    ```bash
    docker compose up -d
    ```

---

## 🔗 Acessos

* Backend (Node.js API): [http://localhost:3000](http://localhost:3000)
* Frontend (Apache com arquivos HTML/CSS): [http://localhost:8080](http://localhost:8080)
* MySQL: `localhost:3307`

---

## 📦 Scripts do Banco

* O banco é inicializado automaticamente com o script `mysql/init.sql`, criando a base de dados `crud_db`.

---

## ❌ Como parar tudo

```bash
docker compose down
```

Para apagar volumes e containers órfãos:

```bash
docker compose down -v --remove-orphans
```

---

## 👨‍💻 Autor

Desenvolvido por [Lucas Marcondes](https://github.com/Lucas-RM)

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
