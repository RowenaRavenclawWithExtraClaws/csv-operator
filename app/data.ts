import fs from "fs";
import path from "path";
import csvParser from "csv-parser";
import { Author, Book, GeneralTypes, Magazine } from "./types";

class Data {
  authors: Array<Author>;
  books: Array<Book>;
  magazines: Array<Magazine>;

  constructor() {
    this.authors = [];
    this.books = [];
    this.magazines = [];
  }

  readCSV = async (filePath: string, dataStruct: Array<GeneralTypes>) => {
    const fileContent = fs.createReadStream(filePath);
    const pipedFileContnet = fileContent.pipe(csvParser({ separator: ";" }));

    const end = new Promise((resolve) => {
      pipedFileContnet.on("data", (data: GeneralTypes) =>
        resolve(dataStruct.push(data))
      );
    });

    await end;
  };

  populateData = async () => {
    await this.readCSV(
      path.join(__dirname, "..", "files", "authors.csv"),
      this.authors
    );
    await this.readCSV(
      path.join(__dirname, "..", "files", "books.csv"),
      this.books
    );
    await this.readCSV(
      path.join(__dirname, "..", "files", "magazines.csv"),
      this.magazines
    );
  };
}

export default Data;
