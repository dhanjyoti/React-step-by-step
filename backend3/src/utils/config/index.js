import dotenv from "dotenv";
dotenv.config();

const configs = {};
configs.URI = process.env.URI;

export default configs;