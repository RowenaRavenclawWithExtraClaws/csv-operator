import dotenv from "dotenv";

dotenv.config();

export const PORTNUMBER = process.env.PORT ? process.env.PORT : 8000;
