import express from "express";
import cors from "cors";
import { PORTNUMBER } from "./app/helpers";
import { getEndpoints } from "./app/endpoints";
import { postEndpoints } from "./app/endpoints";

const app = express();

// middlewares
app.use(cors());

// endpoints
getEndpoints.forEach((endpoint) => app.get(endpoint.url, endpoint.handler));
postEndpoints.forEach((endpoint) => app.post(endpoint.url, endpoint.handler));

app.listen(PORTNUMBER, () => console.log(`listening on port ${PORTNUMBER}`));
