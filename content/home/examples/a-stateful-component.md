---
title: Fragments - Alt and Loop
order: 1
---

In addition to simple workflow, ZenUML can also handle `alt` and `loop` logic.
No surprising, we are using keywords that are commonly found in most of the 
programming languages.

Line 2: We use `if(condition)` for `alt` fragments. You just need to put the
conditions in `()`. A "string", a normalWord, or an expression (such as `a > 1`) 
can be considered as a condition.

`for`, `while`, `foreach` or `forEach` are all considered a looping keyword. Try
it by replacing `if` with `while`.