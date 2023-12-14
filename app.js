//Fuente de código config.js
const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const app = express();
const PORT = 3000;

//configurar knex
const db = knex(knexConfig);

// Middleware para procesar JSON
app.use(express.json());