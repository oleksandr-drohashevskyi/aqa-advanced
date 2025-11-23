export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("title має бути непорожнім рядком");
    }
    this._title = value.trim();
  }

  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("author має бути непорожнім рядком");
    }
    this._author = value.trim();
  }

  get year() {
    return this._year;
  }
  set year(value) {
    const y = Number(value);
    const current = new Date().getFullYear();
    if (!Number.isInteger(y) || y < 1400 || y > current) {
      throw new Error(`year має бути цілим числом 1400..${current}`);
    }
    this._year = y;
  }

  printInfo() {
    console.log(
      `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}`,
    );
  }

  static oldest(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Передайте масив книг");
    }

    const list = books.filter((b) => b instanceof Book);
    if (list.length === 0) throw new Error("У масиві немає екземплярів Book");
    return list.reduce((oldest, b) => (b.year < oldest.year ? b : oldest));
  }
}
