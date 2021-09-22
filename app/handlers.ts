import { Request, Response } from "express";
import Data from "./data";

export const handleGetBooksMagazines = async (
  _: Request,
  res: Response,
  books: Data,
  magazines: Data,
  booksFilePath: string,
  magazinesFilePath: string
) => {
  if (books.getItems().length === 0) await books.populateItems(booksFilePath);
  if (magazines.getItems().length === 0)
    await magazines.populateItems(magazinesFilePath);

  res.send({ books: books.getItems(), magazines: magazines.getItems() });
};

export const handleGetItems = async (
  req: Request,
  res: Response,
  items: Data,
  itemsFilePath: string
) => {
  if (items.getItems().length === 0) await items.populateItems(itemsFilePath);

  const isbn = req.query.isbn;
  const author = req.query.author;

  let itemsData = items.getItems();

  if (isbn) {
    itemsData = items.filterByIsbn(isbn as string);

    if (itemsData.length > 0) res.send({ item: itemsData[0] });
    else res.status(404).send({ item: {} });
  } else if (author) {
    itemsData = items.filterByAuthor(author as string);

    if (itemsData.length > 0) res.send({ items: itemsData });
    else res.status(404).send({ items: [] });
  } else res.send({ items: itemsData });
};

export const handleGetAll = async (
  _: Request,
  res: Response,
  books: Data,
  magazines: Data,
  booksFilePath: string,
  magazinesFilePath: string
) => {
  if (books.getItems().length === 0) await books.populateItems(booksFilePath);
  if (magazines.getItems().length === 0)
    await magazines.populateItems(magazinesFilePath);

  let booksMagazines = [...books.getItems(), ...magazines.getItems()];

  booksMagazines = booksMagazines.sort((item1, item2) =>
    item1.title.localeCompare(item2.title)
  );

  res.send({ all: booksMagazines });
};
