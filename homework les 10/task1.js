import { Book } from "./book.js";
import { EBook } from "./ebook.js";

const b1 = new Book("Майстер і Маргарита", "М. Булгаков", 1967);
const b2 = new Book("1984", "Джордж Орвелл", 1949);
const b3 = new Book(
  "Гаррі Поттер і філософський камінь",
  "Дж. К. Ролінг",
  1997,
);

b1.printInfo();
b2.printInfo();
b3.printInfo();

const eb1 = new EBook("Clean Code", "Robert C. Martin", 2008, "PDF");
eb1.printInfo();

const eb2 = EBook.fromBook(b2, "EPUB");
eb2.printInfo();

eb1.title = "Clean Code (Updated)";
eb1.year = 2010;
eb1.fileFormat = "MOBI";
eb1.printInfo();

const all = [b1, b2, b3, eb1, eb2];
const oldest = Book.oldest(all);
console.log("Найдавніша книга:");
oldest.printInfo();
