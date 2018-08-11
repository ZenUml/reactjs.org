@Starter(Browser)
// GET /book/:id
Book = Controller.getBook(id) {
  BookService.get(id)
}