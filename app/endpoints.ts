import { Request, Response } from "express";
import {
  handleGetAll,
  handleGetBooks,
  handleGetBooksMagazines,
  handleGetMagazines,
} from "./handlers";
import { Endpoint } from "./types";

export const getEndpoints: Array<Endpoint> = [
  {
    url: "/books-magazines",
    handler: handleGetBooksMagazines,
  },
  {
    url: "/books",
    handler: handleGetBooks,
  },
  {
    url: "/magazines",
    handler: handleGetMagazines,
  },
  {
    url: "/all",
    handler: handleGetAll,
  },
];

export const postEndpoints: Array<Endpoint> = [
  {
    url: "/books",
    handler: (req: Request, res: Response) => {
      res.send("post books");
    },
  },
  {
    url: "/magazines",
    handler: (req: Request, res: Response) => {
      res.send("post magz");
    },
  },
];
