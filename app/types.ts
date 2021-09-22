export interface Author {
  email: string;
  firstname: string;
  lastname: string;
}

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

export interface GeneralType extends Author, Book, Magazine {}

type Handler = (req: Express.Request, res: Express.Response) => void;

export interface Endpoint {
  url: string;
  handler: Handler;
}
