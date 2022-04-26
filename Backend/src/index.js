const express = require('express');
const cors = require('cors');

require('dotenv').config();

const server = express();

const corOptions = {
  origin: 'https://localhost:8081'
};

const port = 2022;

server.use(cors(corOptions));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const employeeRouter = require('./routes/employeeRouter');

server.use('/api/employees', employeeRouter);

try {
  server.listen(
    port,
    () => {
      console.log(`Server is running in localhost:${port}`);
    }
  );
} catch (error) {
  console.log(`Error occurred: ${error.message}`);
}
