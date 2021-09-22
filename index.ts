import express from "express";
import cors from "cors";
import { PORTNUMBER } from "./app/helpers";
import { Endpoint } from "./app/types";

const app = express();

const getEndpoints: Array<Endpoint> = [
  {
    url: "/all",
    handler: (req: express.Request, res: express.Response) => {
      res.send("get all");
    },
  },
  {
    url: "/books",
    handler: (req: express.Request, res: express.Response) => {
      res.send("get books");
    },
  },
  {
    url: "/magazines",
    handler: (req: express.Request, res: express.Response) => {
      res.send("get magz");
    },
  },
];

const postEndpoints: Array<Endpoint> = [
  {
    url: "/books",
    handler: (req: express.Request, res: express.Response) => {
      res.send("post books");
    },
  },
  {
    url: "/magazines",
    handler: (req: express.Request, res: express.Response) => {
      res.send("post magz");
    },
  },
];

// middlewares
app.use(cors());

// endpoints
getEndpoints.forEach((endpoint) => app.get(endpoint.url, endpoint.handler));
postEndpoints.forEach((endpoint) => app.post(endpoint.url, endpoint.handler));

app.listen(PORTNUMBER, () => console.log(`listening on port ${PORTNUMBER}`));
