---
title: TypeScript Utility Types
subtitle: Quick runthrough on how utility types in TypeScript works
topic: Programming
displayTopic: Programming
directory: programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - typescript
  - cheatsheet
updatedAt: 2023-03-15T12:52:58.230Z
createdAt: 2023-03-15T12:52:58.230Z
---

Utility types in TypeScript acts as helper types that allow us to model and create new types quickly.

## NonNullable

Removes all the nullish types from a type declaration.

```ts
type MaybeString = string | null | undefined

type NonNullableString = NonNullable<MaybeString>
// is equivalent to
type NonNullableString = string
```

## Object Types

### Required and Partial

The `Required` helper creates a new type that transform all fields of the underlying type as required, removing any optional markers (`?`) exist within the type.

`Partial` on the other hand generates a new type of identical fields but with the optional marker applied to all fields.

```ts
type User = {
  id: string
  name: string
  age?: number
}

type RequiredUser = Required<User>
// equivalent to
type RequiredUser = {
  id: string
  name: string
  age: number
}

type PartialUser = Partial<User>
// equivalent to
type PartialUser = {
  id?: string
  name?: string
  age?: number
}
```

### Omit and Pick

`Omit` ignores the fields that is specified whereas `Pick` only select the specified fields during the constuction of the new type.

```ts
type User = {
  id: string
  name: string
  age?: number
}

// Omitting one field
type OmittedUser = Omit<User, 'id'>
type OmittedUser = {
  name: string
  age?: number
}

// Omitting multiple fields
type OmittedUser2 = Omit<User, 'id' | 'name'>
type OmittedUser2 = {
  age?: number
}
```

While you may argue picking a certain set of key from a type is as good as creating an entirely new type from scratch, there are certain benefits when it comes to `Pick`. The most compelling reason to use `Pick` is its readability.

Imagine there is type named `User` as demonstrated but with whole lot more of fields. At the login page, you might need its `id` and `password` field and here is where `Pick` comes in handy.

```ts
// Picking one property
type PickedUser = Pick<User, 'id'>
type PickedUser = {
  id: string
}

// Picking multiple properties
type PickedUser2 = Pick<User, 'id' | 'name'>
type PickedUser2 = {
  id: string
  name: string
}
```

### Record

`Record` type allows us to specify the type for key and its value for an object (or dictionary).

```ts
type MyDictionary = Record<number, string>

// equivalent to

type MyDictionary = {
  [key: number]: string
}
```

### Readonly

`Readonly` marks all the field for a type with `readonly` keyword so that all the fields are immutable after creation.

```ts
type User = {
  id: string
  name: string
  age?: number
}

type ReadonlyUser = Readonly<User>
type ReadonlyUser = {
  readonly id: string
  readonly name: string
  readonly age?: number
}
```

### Mutable

There are no `Mutable` utility type in TypeScript that does the opposite of what `Readonly` does, but we can create one ourselves easily.

```ts
type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}
```

The `-readonly` basically just removes the readonly keyword from a type while iterating through their key value pairs.

```ts
type MutableUser = Mutable<ReadonlyUser>
type MutableUser = {
  id: string
  name: string
  age?: number
}
```

## Union Type Helpers

### Exclude

`Exclude` does pretty much the same thing with `Omit`, but with union types.

```ts
type Role = 'admin' | 'user' | 'anonymous'

type AnonymousRole = Exclude<Role, 'user' | 'admin'>
type AnonymousRole = 'anonymous'
```

### Extract

`Extract` is used to cherry pick a piece of type info present in a discriminated union with its key.

```ts
type RoleAttributes =
  | { role: 'admin'; orgId: string }
  | { role: 'user'; name: string }
  | { role: 'anonymous' }

type UserRole = Extract<
  RoleAttributes,
  {
    role: 'user'
  }
>
```

## Functions

These utility type are extremely useful when dealing with a library that does not have type sufficient declaration for its functions.

### ReturnType

`ReturnType` is pretty self-explanatory as it extracts the return type of a function itself.

```ts
type Func = (a: number, b: string) => string

type FuncReturnValue = ReturnType<Func>
type FuncReturnValue = string
```

### Parameters

On the flipside, `Parameters` extracts the parameters of a function type in the form of a named tuple (or array).

```ts
type FuncParams = Parameters<Func>
type FuncParams = [a: number, b: string]
```

To extract the parameters by position, simply index the individual by its index in the named tuple.

```ts
type FirstFuncParam = Parameters<Func>[0]
type FirstFuncParam = number
```

## Promises

### Promise

Defines an object of promise type.

```ts
type PromiseNumber = Promise<number>
```

### Awaited

`Awaited` on the other hand unwraps the underlying type of a `Promise` type.

```ts
type Result = Awaited<PromiseNumber>
type Result = number
```

## Reference

- [TypeScript Utility Types](https://www.w3schools.com/typescript/typescript_utility_types.php)
- [Utility Types | TypeScript](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Blazing Fast Tips: TypeScript Utility Types](https://www.youtube.com/watch?v=EU0TB_8KHpY)
