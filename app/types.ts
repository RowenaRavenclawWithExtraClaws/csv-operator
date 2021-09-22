export interface GeneralTypes {}

export interface Author extends GeneralTypes {
  email: string;
  firstname: string;
  lastname: string;
}

export interface Book extends GeneralTypes {
  title: string;
  isbn: string;
  authors: string;
  description: string;
}

export interface Magazine extends GeneralTypes {
  title: string;
  isbn: string;
  authors: string;
  publishedAt: string;
}

type Handler = (req: Express.Request, res: Express.Response) => void;

export interface Endpoint {
  url: string;
  handler: Handler;
}
