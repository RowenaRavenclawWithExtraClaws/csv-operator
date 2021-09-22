import { Request, Response } from "express";
import Items from "./items";

export const handleRoot = (_: Request, res: Response) => {
  res.send(
    "Welcome to the csv operator API. You can find the detailed doc here https://github.com/RowenaRavenclawWithExtraClaws/csv-operator/blob/main/readme.md"
  );
};

export const handleGetBooksMagazines = async (
  _: Request,
  res: Response,
  books: Items,
  magazines: Items,
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
  items: Items,
  itemsFilePath: string
) => {
  if (items.getItems().length === 0) await items.populateItems(itemsFilePath);

  const isbn = req.query.isbn;
  const author = req.query.author;

  let itemsItems = items.getItems();

  if (isbn) {
    itemsItems = items.filterByIsbn(isbn as string);

    if (itemsItems.length > 0) res.send({ item: itemsItems[0] });
    else res.status(404).send({ item: {} });
  } else if (author) {
    itemsItems = items.filterByAuthor(author as string);

    if (itemsItems.length > 0) res.send({ items: itemsItems });
    else res.status(404).send({ items: [] });
  } else res.send({ items: itemsItems });
};

export const handleGetAll = async (
  _: Request,
  res: Response,
  books: Items,
  magazines: Items,
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

export const handlePostItems = async (
  req: Request,
  res: Response,
  items: Items,
  itemsFilePath: string,
  fileName: string
) => {
  await items.populateItems(itemsFilePath);

  await items.addNewItem(req.body, fileName);

  res.send({
    message: `new item was added to ${fileName}.csv`,
  });
};
