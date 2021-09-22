import fs from "fs";
import csvParser from "csv-parser";
import { GeneralTypes } from "./types";

class Data {
  items: Array<GeneralTypes>;

  constructor() {
    this.items = [];
  }

  populateItems = async (filePath: string) => {
    const fileContent = fs.createReadStream(filePath);
    const pipedFileContnet = fileContent.pipe(csvParser({ separator: ";" }));

    const end = new Promise((resolve) => {
      pipedFileContnet.on("data", (data: GeneralTypes) =>
        resolve(this.items.push(data))
      );
    });

    await end;
  };
}

export default Data;
