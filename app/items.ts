import fs from "fs";
import csvParser from "csv-parser";
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
import { GeneralType } from "./types";
import path from "path";

class Items {
  items: Array<GeneralType>;

  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  async populateItems(filePath: string) {
    const fileContent = fs.createReadStream(filePath);
    const pipedFileContnet = fileContent.pipe(csvParser({ separator: ";" }));

    const end = new Promise((resolve) => {
      pipedFileContnet.on("data", (items: GeneralType) =>
        resolve(this.items.push(items))
      );
    });

    await end;
  }

  filterByIsbn(isbn: string) {
    return this.items.filter((item: GeneralType) => item.isbn === isbn);
  }

  filterByAuthor(author: string) {
    return this.items.filter((item: GeneralType) =>
      item.authors.split(",").includes(author as string)
    );
  }

  async addNewItem(item: Array<GeneralType>, fileName: string) {
    const csvWriter = createCsvWriter({
      path: path.join(__dirname, "..", "files", `${fileName}.csv`),
      header: [
        { id: "title", title: "title" },
        { id: "isbn", title: "isbn" },
        { id: "authors", title: "authors" },
        { id: "description", title: "description" },
      ],
      fieldDelimiter: ";",
      append: true,
    });

    await csvWriter.writeRecords([item]);
  }
}

export default Items;
