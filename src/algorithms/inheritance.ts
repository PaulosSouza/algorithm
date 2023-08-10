class Book {
  private title: string;
  private pages: number;

  constructor(title: string, pages: number) {
    this.title = title;
    this.pages = pages;
  }

  printTitle() {
    console.log(this.title);
  }

  printPages() {
    console.log(this.pages);
  }
}

class ITBook extends Book {
  private technology: string;

  constructor(title: string, pages: number, technology: string) {
    super(title, pages);

    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
  }
}

const jsBook = new ITBook(
  "Learning JS Algorithms",
  200,
  "Javascript/Typescript"
);

// jsBook.printTitle();
// jsBook.printTechnology();
