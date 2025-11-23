import { Book } from "./book.js";

export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("fileFormat має бути непорожнім рядком");
    }
    this._fileFormat = value.trim();
  }

  printInfo() {
    console.log(
      `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.fileFormat}`,
    );
  }

  static fromBook(book, format) {
    if (!(book instanceof Book)) {
      throw new Error("Перший аргумент має бути екземпляром Book");
    }
    return new EBook(book.title, book.author, book.year, format);
  }
}
