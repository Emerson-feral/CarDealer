const express = require('express');
const cors = require('cors');

require('dotenv').config();

const server = express();

const corOptions = {
  origin: 'https://localhost:8081'
};

const port = process.env.PORT || 2021;

server.use(cors(corOptions));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const employeeRouter = require('./routes/employeeRouter');
const vehicleRouter = require('./routes/vehicleRouter');

server.use('/api/employees', employeeRouter);
server.use('/api/vehicles', vehicleRouter);

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
