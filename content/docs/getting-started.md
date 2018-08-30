---
id: getting-started
title: Getting Started
permalink: docs/getting-started.html
next: add-react-to-a-website.html
redirect_from:
  - "docs/"
  - "docs/index.html"
  - "docs/getting-started-ko-KR.html"
  - "docs/getting-started-zh-CN.html"
  - "docs/installation.html"
  - "download.html"
  - "downloads.html"
  - "docs/try-react.html"
  - "docs/tooling-integration.html"
  - "docs/package-management.html"
  - "docs/language-tooling.html"
  - "docs/environments.html"
---

This page is an overview of the ZenUML documentation and related resources.

It is under construction.

UML sequence diagram is model the flow of logic within a system. It is commonly used
for both analysis and design purpose. It is also used to analyze legacy code.

## Sequence Diagram notions
Sequence diagram is structured in a way that it represents a time-line of activities. 
Each `participant` has a column and the message exchanged between them are represented
by arrows.

### Lifeline

**Lifeline** represents an individual **participant** in the interaction.

In ZenUML, to declare a `participant`, you simply type in the name of it, such as 
`AParticipant` at the beginning.

![A Participant](../images/docs/A-Participant.png)

```js
AParticipant
```

### Execution

**Execution** represents a period in the participant's lifetime. It is the bar placed on the lifeline.

In ZenUML, an execution is automatically created when you call a method on a participant.

![Execution](../images/docs/execution.png)

```js
A.method()
```
### Alternatives

**Alternatives** represents a choice or alternatives of behaviour. At most one of the operands will be chose.
 
In ZenUML, to create an alternative fragment, you simply use your familiar keywords `if/else`.

![Alternative](../images/docs/alternatives.png)

```js
if(x) { 
  A.method() 
}
```

### Loop

**Loop** represents a repeated execution.

In ZenUML, to create a loop fragment, you can choose one of `for`, `foreach`, `forEach` and `while`.

![Loop](../images/docs/loop.png)

```js
forEach(item) { 
  Collection.Add(item) 
}
```
