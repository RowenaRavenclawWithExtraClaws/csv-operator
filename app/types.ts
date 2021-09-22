import { Request, Response } from "express";

export interface Book {
  title: string;
  isbn: string;
  authors: string;
  description: string;
}

export interface Magazine {
  title: string;
  isbn: string;
  authors: string;
  publishedAt: string;
}

export interface GeneralType extends Book, Magazine {}

type Handler = (req: Request, res: Response) => void;

export interface Endpoint {
  url: string;
  handler: Handler;
}
