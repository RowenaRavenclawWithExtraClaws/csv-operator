interface Author {
  email: string;
  firstName: string;
  lastName: string;
}

interface Book {
  title: string;
  isbn: string;
  authors: Array<string>;
  description: string;
}

interface Magazine {
  title: string;
  isbn: string;
  authors: Array<string>;
  publishedAt: string;
}
