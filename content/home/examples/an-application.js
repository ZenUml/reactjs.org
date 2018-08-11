@Starter(BookService)
Book = BookRepository.find(id) {
  exec = new SqlExecutor()
  exec:SqlExecutor.queryById(id)
}