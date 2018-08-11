BookService.get(id) {
  if (id == null) {
    Exception.throw()
  }
  BookRepository.find(id)
}