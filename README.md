# Real Estate Backend

This is the backend server for the Real Estate application.

## Prerequisites

Before running the server, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/mp051998/real-estate-backend.git
  ```

2. Navigate to the project directory:

  ```bash
  cd real-estate-backend
  ```

3. Install the dependencies:

  ```bash
  npm install
  ```

4. Setup NVM
  
    ```bash
    nvm install 18.19.0
    nvm use 18.19.0
    ```

## Configuration

Before running the server, you need to configure the .env file
Add the following mandatory key value pairs to the .env file:

  ```bash
  MONGODB_CONNECTION_URI=<MongoDB URI>
  MONGODB_DATABASE_NAME=<MongoDB Database Name> # 'real-estate-master'
  ```

## Build the Project

To build the project, run the following command:

  ```bash
  npm run build
  ```

## Running the Server

To start the server, run the following command:

  ```bash
  npm start
  ```

