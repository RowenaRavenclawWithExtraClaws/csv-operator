import express from "express";
import cors from "cors";
import { PORTNUMBER } from "./helpers";
import { Endpoint } from "./types";

const app = express();

const getEndpoints: Array<Endpoint> = [
  { url: "/all", handler: (req: object, res: object) => ({}) },
  { url: "/books", handler: (req: object, res: object) => ({}) },
  { url: "/magazines", handler: (req: object, res: object) => ({}) },
];

const postEndpoints: Array<Endpoint> = [
  { url: "/books", handler: (req: object, res: object) => ({}) },
  { url: "/magazines", handler: (req: object, res: object) => ({}) },
];

// middlewares
app.use(cors());

// endpoints
getEndpoints.forEach((endpoint) => app.get(endpoint.url, endpoint.handler));
postEndpoints.forEach((endpoint) => app.post(endpoint.url, endpoint.handler));

app.listen(PORTNUMBER, () => console.log(`listening on port ${PORTNUMBER}`));
