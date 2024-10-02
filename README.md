# Renovation API

The Renovation API is a RESTful API built with Node.js and Sequelize for managing projects, clients, and entrepreneurs. This document outlines setup and running instructions.

## Table of Contents

- 📋 [Prerequisites](#prerequisites)
- ⚙️ [Installation](#installation)
- 🗄️ [Database Setup](#database-setup)
- 🚀 [Running the Application](#running-the-application)
- 📡 [API Endpoints](#api-endpoints)
- 🤝 [Contributing](#contributing)
- 📜 [License](#license)

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MariaDB](https://mariadb.org/download/)
- [Git](https://git-scm.com/downloads)

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
    npm run start index.js
    ```
