import { Request, Response } from "express";
import path from "path";
import Data from "./data";
import { Book, Magazine } from "./types";

const books = new Data();
const magazines = new Data();

const booksFilePath = path.join(__dirname, "..", "files", "books.csv");
const magazinesFilePath = path.join(__dirname, "..", "files", "magazines.csv");

export const handleGetBooksMagazines = async (_: Request, res: Response) => {
  if (books.getItems().length === 0) await books.populateItems(booksFilePath);
  if (magazines.getItems().length === 0)
    await magazines.populateItems(magazinesFilePath);

  res.send({ books: books.getItems(), magazines: magazines.getItems() });
};

export const handleGetBooks = async (req: Request, res: Response) => {
  if (books.getItems().length === 0) await books.populateItems(booksFilePath);

  const isbn = req.query.isbn;
  const author = req.query.author;

  let booksData = books.getItems();

  if (isbn) {
    booksData = booksData.filter((bookData: Book) => bookData.isbn === isbn);

    if (booksData.length > 0) res.send({ book: booksData[0] });
    else res.status(404).send({ book: {} });
  } else if (author) {
    booksData = booksData.filter((bookData: Book) =>
      bookData.authors.split(",").includes(author as string)
    );

    if (booksData.length > 0) res.send({ books: booksData });
    else res.status(404).send({ books: [] });
  } else res.send({ books: booksData });
};

export const handleGetMagazines = async (req: Request, res: Response) => {
  if (magazines.getItems().length === 0)
    await magazines.populateItems(magazinesFilePath);

  const isbn = req.query.isbn;
  const author = req.query.author;

  let magazinesData = magazines.getItems();

  if (isbn) {
    magazinesData = magazinesData.filter(
      (magazineData: Magazine) => magazineData.isbn === isbn
    );

    if (magazinesData.length > 0) res.send({ magazine: magazinesData[0] });
    else res.status(404).send({ magazine: {} });
  } else if (author) {
    magazinesData = magazinesData.filter((magazineData: Magazine) =>
      magazineData.authors.split(",").includes(author as string)
    );

    if (magazinesData.length > 0) res.send({ magazines: magazinesData });
    else res.status(404).send({ magazines: [] });
  } else res.send({ magazines: magazinesData });
};

export const handleGetAll = async (_: Request, res: Response) => {
  if (books.getItems().length === 0) await books.populateItems(booksFilePath);
  if (magazines.getItems().length === 0)
    await magazines.populateItems(magazinesFilePath);

  let booksMagazines = [...books.getItems(), ...magazines.getItems()];

  booksMagazines = booksMagazines.sort((item1, item2) =>
    item1.title.localeCompare(item2.title)
  );

  res.send({ all: booksMagazines });
};
