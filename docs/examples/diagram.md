---
title: Diagram
description: Diagram example.
---

To help users understand complex systems, I usually create visualizations using tools like Mermaid JS, draw.io, Lucidchart, or even Figma for more varied visualizations (as needed). The following diagram is just a small example of my work.

```mermaid
flowchart LR
  a([Start]) --> b[/Input number/]
  b -->  c{If number % 2 == 0}
  c --Yes--> d[/Display Even Number/]
  c --No--> e[/Display Odd Number/]
  d --> f([End])
  e --> f
```
