---
title: A Simple Example
order: 0
---

A simple ZenUML DSL starts with a root `method`, such as `Controller.getBook(id)`. 
It means we are invoking a action on or sending a message the participant 'Controller'.

Line 1: By default, the starting participant is omitted. In this example, we use `@Starter(Browser)`
to specify a starting participant named 'Browser'.

Line 2: This a comment line. Currently, we only support one line per statement. A `comment` starts with `//`.

Line 3: In this line, we let the method call return a `Book`. You can also try `Book b = ...`.

Line 4: This is the next step in the flow. Note the `{}` which means a nesting relationship. Or in another
way, you can say the logic inside `{}` is the implementation of method `Controller.getBook()`.
