const express = require("express");
const app = express();
const ratelimit = require("express-rate-limit");
const helmet = require("helmet");
const mongosanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const path = require("path");
const cokieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();


// connect to database




app.use(bodyParser.json());
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
