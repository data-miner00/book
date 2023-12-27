---
title: Object Relationships
subtitle: Trying to comprehend the relationships of objects in terms of association, inheritance, aggregation and composition
topic: Programming
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - theory
  - object
  - modeling
directory: programming
updatedAt: 2023-11-27T14:10:03.378Z
createdAt: 2023-11-27T14:10:03.378Z
---

## Association

Association represents the relationship between two classes. There are two types of association, namely unidirectional association and bidirectional association.

| Association    | Example                                 |
| -------------- | --------------------------------------- |
| Unidirectional | Customer places an order                |
| Bidirectional  | A is married to B and B is married to A |

Besides, association can also be multiplexed in the form of **one-to-one**, **one-to-many**, **many-to-one** and **many-to-many** relationships.

<v-img src="object-relationships/association.png" alt="Diagrams showing relationships between association, aggregation and composition"></v-img>

## Aggregation

Aggregation indicates that when an object that is owned or depend by another object, it can still exist on its own even after the dependent party is dead or ceases to exist.

Examples:

- The relationship between a **car** and a **wheel**. The wheel can still serve its purpose when the car it belongs to no longer exist.
- The relationship between a **company** and an **employee**. The employee can apply for a new company when the old company goes bankrupt.

This relationship can be understood colloquially as "A **uses** B, where B can live happily without A. "

<v-img src="object-relationships/aggregation.png" alt="Diagrams showing the aggregation relationship between car and wheel"></v-img>

## Composition

In composition, it is the opposite to the aggregation. The object that is owned by others cannot live on its own.

Examples:

- The relationship between a **cup handle** and a **cup**. It is safe to say that each cup comes with different sizes, colors and materials. Hence, the cup handle is unique to a cup and will have no use outside of the cup.
- The relationship between a **company** and their **bank accounts**. The bank accounts have no use without the company and would be illegal if someone trying to access the account without legitimate authority.

In other words, composition can be understood as "A **owns** B and B has no meaning outside A. "

<v-img src="object-relationships/composition.png" alt="Diagrams showing the composition relationship between cup and cup handle"></v-img>

## Inheritance

Inheritance describes the relationship between two objects that are usually depicted as a parent and child relationship.

Example:

- The relationship between a **cat** and **animal**. The cat _is an_ animal.

_"Is a"_ is the keyword for inheritance.

<v-img src="object-relationships/inheritance.png" alt="Diagrams showing the inheritance relationship between cat and animal"></v-img>

## References

- [Association vs Aggregation vs Composition](https://www.youtube.com/watch?v=zLvOO4pm6ZI)
- [Association, Aggregation, and Composition in Object-Oriented Programming](https://algodaily.com/lessons/association-aggregation-composition-casting)
