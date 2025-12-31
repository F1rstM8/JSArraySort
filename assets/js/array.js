const books = [
  {
    title: "1984",
    author: "Джордж Оруелл",
    genre: "Соціальна фантастика",
    pages: 328,
  },
  {
    title: "Колгосп тварин",
    author: "Джордж Оруелл",
    genre: "Соціальна фантастика",
    pages: 286,
  },
  {
    title: "Гаррі Поттер і філософський камінь",
    author: "Дж. К. Роулінг",
    genre: "Фентезі",
    pages: 256,
  },
  {
    title: "Гаррі Поттер і таємна кімната",
    author: "Дж. К. Роулінг",
    genre: "Фентезі",
    pages: 336,
  },
  {
    title: "Гаррі Поттер і в'язень Азкабану",
    author: "Дж. К. Роулінг",
    genre: "Фентезі",
    pages: 448,
  },
  {
    title: "Гаррі Поттер і келих вогню",
    author: "Дж. К. Роулінг",
    genre: "Фентезі",
    pages: 608,
  },
  {
    title: "Гаррі Поттер і орден Фенікса",
    author: "Дж. К. Роулінг",
    genre: "Фентезі",
    pages: 864,
  },
  {
    title: "Гаррі Поттер і Принц-півкров",
    author: "Дж. К. Роулінг",
    genre: "Фентезі",
    pages: 704,
  },
  {
    title: "Гаррі Поттер і смертельні реліквії",
    author: "Дж. К. Роулінг",
    genre: "Фентезі",
    pages: 608,
  },
  { title: "Франкенштейн", author: "Мері Шеллі", genre: "Жахи", pages: 280 },
  {
    title: "Три товариші",
    author: "Еріх Марія Ремарк",
    genre: "Роман",
    pages: 592,
  },
  {
    title: "Матильда",
    author: "Роальд Даль",
    genre: "Дитяча література",
    pages: 240,
  },
  {
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    genre: "Філософська проза",
    pages: 96,
  },
  {
    title: "Триумфальна арка",
    author: "Еріх Марія Ремарк",
    genre: "Роман",
    pages: 515,
  },
  {
    title: "Американський психопат",
    author: "Брет Істон Елліс",
    genre: "Художній роман",
    pages: 399,
  },
  {
    title: "Коротка історія часу",
    author: "Стивен Гокінг",
    genre: "Наукова література",
    pages: 256,
  },
  { title: "Заводи", author: "Тед Х'юз", genre: "Історія", pages: 672 },
  {
    title: "Смерть в Венеції",
    author: "Томас Манн",
    genre: "Психологічний роман",
    pages: 128,
  },
  {
    title: "Вікторія",
    author: "Дейв Ітонс",
    genre: "Альтернативна історія",
    pages: 592,
  },
  {
    title: "Таємниці Старого Норвегії",
    author: "Дерек Б. Міллер",
    genre: "Фентезі",
    pages: 656,
  },
  {
    title: "Дивна смерть",
    author: "Пол К. Фейр",
    genre: "Детектив",
    pages: 384,
  },
  {
    title: "Війна майбутнього",
    author: "Герберт Йенс",
    genre: "Наукова фантастика",
    pages: 384,
  },
  { title: "Думка", author: "Стівен Кінг", genre: "Жахи", pages: 432 },
  { title: "Воно", author: "Стівен Кінг", genre: "Жахи", pages: 502 },
];

console.log("--- ЗАВДАННЯ 1 ---");
const firstNovel = books.find((book) => book.genre === "Роман");
console.log("1. Перший роман:", firstNovel);

console.log("\n--- ЗАВДАННЯ 2 ---");
const lastNovelIndex = books.findLastIndex((book) => book.genre === "Роман");
console.log("2. Індекс останнього роману:", lastNovelIndex);
console.log("\n--- ЗАВДАННЯ 3 ---");
const longFantasyBooks = books.filter(
  (book) => book.genre === "Фентезі" && book.pages > 600
);
console.log("3.Фентезі 600+ сторінок:", longFantasyBooks);
console.log("\n--- ЗАВДАННЯ 4 ---");
const bookTitles = books.map((book) => book.title);
console.log("4. Назви книг:", bookTitles);
console.log("\n--- ЗАВДАННЯ 5 ---");
const getTitlesByAuthorAndGenre = (arr, authorName, genreName) => {
  return arr
    .filter((book) => book.author === authorName && book.genre === genreName)
    .map((book) => book.title);
};
const rowlingFantasy = getTitlesByAuthorAndGenre(
  books,
  "Дж. К. Роулінг",
  "Фентезі"
);
console.log("5. Книги Роулінг (фентезі):", rowlingFantasy);
console.log("\n--- ЗАВДАННЯ 6 ---");
const fantasyCount = books.filter((book) => book.genre === "Фентезі").length;
console.log("6. Кількість фентезі:", fantasyCount);
console.log("\n--- ЗАВДАННЯ 7 ---");
const mediumBooksCount = books.filter(
  (book) => book.pages >= 200 && book.pages <= 400
).length;
console.log("7. Книг від 200 до 400 сторінок:", mediumBooksCount);
console.log("\n--- ЗАВДАННЯ 8 ---");
const thinnestBook = books.toSorted((a, b) => a.pages - b.pages)[0];
console.log("8. Найтонша книга:", thinnestBook);
