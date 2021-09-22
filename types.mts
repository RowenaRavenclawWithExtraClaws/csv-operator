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
