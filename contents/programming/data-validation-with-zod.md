---
title: Data Validation with Zod
subtitle: A short list of data validations that Zod are capable to do
topic: Programming
displayTopic: Programming
directory: programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - data validation
  - typescript
updatedAt: 2023-01-12T15:27:38.762Z
createdAt: 2023-01-12T15:27:38.762Z
---

Zod is a TypeScript library for input validation. TypeScript has done a profound job on ensuring type safety for JavaScript development at compile time. Zod complements TypeScript by providing runtime validation that extends beyond a regular type checks.

## Basic Usage

The sample below tries to parse the `user` object against the Zod object schema `UserSchema`. If the validation is successful, it will return the object itself otherwise it will throw an Error.

```ts
import { z } from 'zod'

const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
})

const user = { id: 1, username: 0, email: 'abcd' }

console.log(UserSchema.parse(user))
```

### Infer Schema

Zod's schema can be also used for type inference, which is extremely handy.

```ts
const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
})

type User = z.infer<typeof UserSchema>

const user: User = {
  id: 123,
  username: 'Jason',
  email: 'json@gmail.com',
}

console.log(UserSchema.parse(user)) // exactly the `user` object
```

## Safe Parse

Instead of throwing an error when the validation fails, it wraps the result into an object with a `success` property that indicates the state of validation. The `error` property can only be accessed when the validation fails whereas the `data` property is only made available when the validation passes.

```ts
const result = UserSchema.parse(user)

if (!result.success) {
  console.log(result.error)
} else {
  console.log(result.data as User)
}
```

## Primitive Types

The basic primitive type includes `z.object`, `z.string`, `z.number`, `z.date` and `z.boolean`.

```ts
const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
  birthday: z.date(),
  isProgrammer: z.boolean(),
})
```

## Special Types

The additional types that deals with falsy values in JavaScript.

```ts
z.object({
  undefined_type: z.undefined(),
  null_type: z.null(),
  void_type: z.void(),
  any_type: z.any(),
  unknown_type: z.unknown(), // can be used the same with `any`
  never_type: z.never(), // never have this 'key' in the object else it will fail
})
```

## Modifiers

The additional logic that chains after the type definition to modify or refine the requirements of the field.

```ts
z.object({
  optional: z.string().optional(),
  nullable: z.string().nullable(), // can be 'null', which different from optional
  nullish: z.string().nullish(), // can be 'null' or 'undefined'
  default: z.string().default('hello'),
  randomNum: z.number().default(Math.random),
})
```

### String Modifiers

```ts
const UserSchema = z.object({
  username: z.string().min(3).max(10), // length of character
  email: z.string().email(),
  url: z.string().url(),
})
```

> More on string modifiers [here](https://zod.dev/?id=strings).

### Number Modifiers

```ts
const UserSchema = z.object({
  age: z.number().gt(0),
})
```

> More on number modifiers [here](https://zod.dev/?id=numbers).

## Literal

Like literally.

```ts
z.literal('sashimi')
z.literal(true)
```

> More on literal [here](https://zod.dev/?id=literals).

## List of variants

With Zod Enum, its basically converts into TypeScript union type.

```ts
z.enum(['Programming', 'Guitar'])
```

When the array is declared somewhere outside the `z.enum` clause, it needs to have an additional `as const` keyword appended to the array.

```ts
const hobbies = ['Programming', 'Guitar'] as const
z.enum(hobbies) // no issue
console.log(hobbies[0])
```

This way Zod can make sure that the value does not change throughout the application to make precise validations.

Besides Zod Enum, native TypeScript Enum can also be supported with `z.nativeEnum`.

```ts
enum Hobbies {
  Programming,
  Guitar,
}

z.nativeEnum(Hobbies)

const ppl = {
  hobbies: Hobbies.Programming,
}
```

## Object Type

To get the shape for the schema, use the `shape` property and it will tell which field is present and their corresponding data types.

```ts
UserSchema.shape
```

The partial modifier is useful for multistep form by making each field within the schema optional.

```ts
UserSchema.partial().parse(user)
```

Similar to RxJS's `pluck`, `pick` selects the specified key-value pairs from a larger object.

```ts
UserSchema.pick({ username: true }).parse(user)
```

To omit certain elements, use the `omit` method. The method signature is identical to `pick`.

```ts
UserSchema.omit({ username: true }).parse(user)
```

Deep partials allows the comparison for objects nested in another object as Zod only perform shallow checks by default.

```ts
UserSchema.deepPartial().parse(user)
```

Extend allows the original schema to be extended with additional fields into a new schema.

```ts
UserSchema.extend({ name: z.string() }).parse(user)
```

Merge an already existing schema with another schema together into a new schema.

```ts
UserSchema.merge(UserSchema2).parse(user)
```

## Non-existing Key

By default, Zod omits all the Key value pairs that are not defined in the schema. For example, if you have this object,

```ts
const UserSchema = z.object({
  username: z.string().min(5).max(15),
})

const user = {
  username: 'Jason', // defined in schema
  address: '41777 South Bound, West Virginia', // not defined in schema
}
```

The resulting object after parse will not have the `address` property.

```ts
console.log(UserSchema.parse(user))
```

To allow any of the undocumented fields to gets into the final output, use `passthrough`.

```ts
const UserSchema = z
  .object({
    username: z.string().min(5).max(15),
  })
  .passthrough()
```

Otherwise, `strict` mode will throw error if there is any provided key that does not exist within the original schema.

```ts
const UserSchema = z
  .object({
    username: z.string().min(5).max(15),
  })
  .strict()
```

## Array Type

Array type can be declared with `z.array` and passing the type of value that it will hold.

```ts
z.array(z.string())
```

To make sure the array contain at least one value, use `nonempty` modifier.

```ts
z.array(z.string()).nonempty()
```

> More on array [here](https://zod.dev/?id=arrays).

## Tuple

To declare a tuple type, pass in an array of Zod type declarations into `z.tuple` method. The type declarations can be chained with modifiers just fine.

```ts
z.tuple([z.number(), z.number(), z.number().gt(4).int()])
```

To declare a tuple with undefinite length, `rest` can be used to indicate the type of the elements that are not mentioned in the declarations for the rest of params.

```ts
z.tuple([z.string(), z.date()]).rest(z.number())
```

## Unions

Basically union type in TypeScript.

```ts
z.union([z.string(), z.number()]) // id
z.string().or(z.number()) // same
```

Discriminated union - The type of one field depends on the output of the previous defined field.

```ts
const UserSchema = z.object({
  id: z.discriminatedUnion('status', [
    z.object({ status: z.literal('success'), data: z.string() }),
    z.object({ status: z.literal('failed'), data: z.instanceof(Error) }),
  ]),
})
```

## Record

The key-value pair validation for an object. The example below only validate the 'key' of the object that must be of type string.

```ts
const UserMap = z.record(z.string()) // keys only

const usermp = {
  abc: 'abc',
  def: 'def',
}
```

It is possible to validate both key and value pair of the object by providing two Zod type to the `z.record` method.

```ts
const UserMap = z.record(z.string(), z.number()) // keys and values
```

## Map

This is highly resembling the `record` type above, but tailored to the actual JavaScript `Map` type itself.

```ts
const UserMap = z.map(z.string(), z.object({ name: z.string() }))

const users = new Map([
  ['id-jogn', { name: 'Jphn' }],
  ['id-kye', { name: 'Kyle' }],
])
```

## Set

```ts
const UserMap = z.set(z.number())

const a = new Set([1, 1, 1, 2])

console.log(UserMap.parse(a)) // [1, 2]
```

## Promise

```ts
const PromiseSchema = z.promise(z.string())

const p = Promise.resolve('ahaha') // 2 step validation

console.log(PromiseSchema.parse(p))
```

## Refine

Gives low level access such as manipulating the error message that will be displayed when validation failed.

```ts
const brandEmail = z
  .string()
  .email()
  .refine((val) => val.endsWith('@email.com'), {
    message: 'Email must be end with @email.com',
  })

const email = 'email.com'
console.log(brandEmail.parse(email))
```

> There is also a method called `superRefine` with gives very low level access for customization.

## Errors

Error messages can be customized by providing it as a second argument into the targeted clause.

```ts
z.string().min(3, 'min length must be three')
```

Besides that, there is a validation error package provided by Zod that translates all the complicated error messages into a more human readable manner.

```
npm i zod-validation-error
```

```ts
import { fromZodError } from 'zod-validation-error'

if (!results.success) {
  console.log(fromZodError(results.error))
}
```

## Reference

- [Learn Zod In 30 Minutes](https://www.youtube.com/watch?v=L6BE-U3oy80)
- [Zod](https://zod.dev/?id=table-of-contents)
