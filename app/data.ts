import fs from "fs";
import csvParser from "csv-parser";
import { GeneralType } from "./types";

class Data {
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
      pipedFileContnet.on("data", (data: GeneralType) =>
        resolve(this.items.push(data))
      );
    });

    await end;
  }
}

export default Data;
