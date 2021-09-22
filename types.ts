export interface Author {
  email: string;
  firstName: string;
  lastName: string;
}

export interface Book {
  title: string;
  isbn: string;
  authors: Array<string>;
  description: string;
}

export interface Magazine {
  title: string;
  isbn: string;
  authors: Array<string>;
  publishedAt: string;
}

type Handler = (req: Express.Request, res: Express.Response) => void;

export interface Endpoint {
  url: string;
  handler: Handler;
}
