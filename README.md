# Renovation API

The Renovation API is a RESTful API built with Node.js and Sequelize for managing projects, clients, and entrepreneurs. This document outlines setup and running instructions.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MariaDB](https://mariadb.org/download/)
- [Git](https://git-scm.com/downloads)

## API Endpoints

  - **Clients**
    - `GET /clients`: Retrieve all clients
    - `POST /clients`: Create a new client
    - `DELETE /clients/:id`: Delete a client by ID
  
  - **Entrepreneurs**
    - `GET /entrepreneurs`: Retrieve all entrepreneurs
    - `POST /entrepreneurs`: Create a new entrepreneur
    - `DELETE /entrepreneurs/:id`: Delete an entrepreneur by ID
  
  - **Projects**
    - `GET /projects`: Retrieve all projects
    - `POST /projects`: Create a new project
    - `DELETE /projects/:id`: Delete a project by ID

## Installation

1. **Clone the Repository**
   ```bash
   git clone git@github.com:abdelaithadji/renovation-api.git
    ```
2. **Install the App**
   ```bash
   cd renovation-api
    npm install
    ```
3. **Create & migrate Database**
    ```bash
    CREATE DATABASE renovation_api;
    ```
    ```bash
    npx sequelize-cli db:migrate
    ```
    ```bash
    npx sequelize-cli db:seed:all
    ```
4. **Running  Application**
    ```bash
    node index.js
    ```
    ```bash 
    cd renovation-frontend
    npm install   
    npm run start index.js
    ```
