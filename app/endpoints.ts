import { Request, Response } from "express";
import path from "path";
import Data from "./data";
import {
  handleGetAll,
  handleGetItems,
  handleGetBooksMagazines,
} from "./handlers";
import { Endpoint } from "./types";

const books = new Data();
const magazines = new Data();

const booksFilePath = path.join(__dirname, "..", "files", "books.csv");
const magazinesFilePath = path.join(__dirname, "..", "files", "magazines.csv");

export const getEndpoints: Array<Endpoint> = [
  {
    url: "/books-magazines",
    handler: (req: Request, res: Response) =>
      handleGetBooksMagazines(
        req,
        res,
        books,
        magazines,
        booksFilePath,
        magazinesFilePath
      ),
  },
  {
    url: "/books",
    handler: (req: Request, res: Response) =>
      handleGetItems(req, res, books, booksFilePath),
  },
  {
    url: "/magazines",
    handler: (req: Request, res: Response) =>
      handleGetItems(req, res, magazines, magazinesFilePath),
  },
  {
    url: "/all",
    handler: (req: Request, res: Response) =>
      handleGetAll(
        req,
        res,
        books,
        magazines,
        booksFilePath,
        magazinesFilePath
      ),
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
