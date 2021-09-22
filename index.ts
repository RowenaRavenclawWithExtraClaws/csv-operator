import express from "express";
import cors from "cors";
import { PORTNUMBER } from "./app/helpers";
import { getEndpoints } from "./app/endpoints";
import { postEndpoints } from "./app/endpoints";
import { Endpoint } from "./app/types";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// endpoints
getEndpoints.forEach((endpoint: Endpoint) =>
  app.get(endpoint.url, endpoint.handler)
);
postEndpoints.forEach((endpoint: Endpoint) =>
  app.post(endpoint.url, endpoint.handler)
);

app.listen(PORTNUMBER, () => console.log(`listening on port ${PORTNUMBER}`));
