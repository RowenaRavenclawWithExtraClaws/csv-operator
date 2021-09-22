# CSV Operator

CSV operator is a RESTFull API for doing basic operations with csv files.

## Installation and Running

Just clone the repo and run `npm install` followed by `npm start`

## Technologies used

- Node.js `15.5.1`
- TypeScript `4.4.3`
- Express `4.17.1`

## TS types

- Books `{title: string; isbn: string; author: string; description: string;}`

- Magazine `{title: string; isbn: string; author: string; publishedAt: string;}`

- GeneralType `extends Book, Magazine {}`

- Handler `(req: Request, res: Response) => void`

- Endpoint `{url: string; handler: Handler;}`

## API endpoints

### `/books-magazines`

- methods: `GET`
- responses: `{books: [], magazines: []}`
- description: retrieves all information about books and magazines

### `/all`

- methods: `GET`
- responses: `{all: []}`
- description: retrieves all information about books and magazines combined in the same array and sorted by title.

### `/books`

- methods: `GET`, `POST`
- query params: `isbn`, `author`
- responses: `{book: {}}`, `{books: []}`, `{message: "some confirmation"}`
- description: retrieves all information about books, find books by isbn, find books by author email, and add new records to the existing csv file.

### `/magazines`

- methods: `GET`, `POST`
- query params: `isbn`, `author`
- responses: `{magazine: {}}`, `{magazines: []}`, `{message: "some confirmation"}`
- description: retrieves all information about magazines, find magazines by isbn, find magazines by author email, and add new records to the existing csv file.

## Challenges

- Determining the types needed for the data.
- Some design choices like whether to use a class for storing and operating on the retrieved data.
