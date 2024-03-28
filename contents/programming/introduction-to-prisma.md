---
title: Introduction to Prisma
subtitle: What is Prisma and how it can help us to focus on the actual data but not database
topic: Programming
displayTopic: Programming
directory: programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - prisma
  - orm
  - sql
updatedAt: 2022-11-08T13:03:05.084Z
createdAt: 2022-10-15T12:01:41.858Z
---

Prisma is an ORM layer for Node.js and Typescript. While Prisma is mainly used for relational databases, no-SQL database such as MongoDb can still be used through extra configurations.

There are 3 components that comes under the Prisma umbrella:

- **Prisma Client**: A generated, type-safe query builder for Node.js and TypeScript.
- **Prisma Migrate**: The migration system for the supported databases.
- **Prisma Studio**: GUI tool to view and edit data inside the database.

## Text Editor

First of all, the text editor that is highly recommended for most of the coding endeavours is of course [Visual Studio Code](https://code.visualstudio.com/). It has the [Prisma extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) in which we can install to provide syntax highlighting, autoformatting and more. It also empowers the development by providing useful code autocompletion that makes the development fast and enjoyable.

## Project Initialization

To begin, we will need to create an empty Node.js project.

```
npm init -y
```

Next, we install Prisma and although optional, it is a good idea to install Typescript as well because Prisma is written on top of it. Second thought, who uses Javascript nowadays lol.

```
npm install -D prisma typescript ts-node @types/node nodemon
```

After the dependencies are installed, we can now proceed to initialize Prisma inside the project by running the command below.

```
npx prisma init
```

There is a file named `schema.prisma` that has been added inside the `prisma` folder alongside with the run output as follows:

```
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

Congratulations, Prisma has been initialized successfully and is ready to rock and roll.

## Prisma Schema

Here is how it should look like inside the `schema.prisma` file.

```prisma[schema.prisma]
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

We can configure _three_ things inside this schema file:

- **Data source**: Specifies the connection string for the database (via environment variable)
- **Generator**: Specifies the client that you wanted to generate
- **Data model**: All the models and relationships used in the application

### Generator

The content inside `generator client` specifies the client that will be used to read our custom schema and turn them into a safely typed variables that can be hinted by the intellisense in Visual Studio Code. It is also the client that will be used within our application.

By default, the provider used is `prisma-client-js` and there are no other types of client available at the time of writing. Read more about [generator](https://www.prisma.io/docs/concepts/components/prisma-schema/generators).

### Data Source

The `datasource db` specifies the database and the connection that we want to use with Prisma. PostgreSQL comes by default if no database is provided during the initialization. The `env` function gets the secret named `DATABASE_URL` in the `.env` file. `DATABASE_URL` is a connection string to the database.

The general format for a connection string for PostgreSQL is as follows

```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```

> Make sure to **replace the value** for `DATABASE_URL` in the `.env` file for your connection string to the database.

### Models

Models is the data structure that describes an entity that we want to store in a database. It can be defined with the `model` keyword in Prisma.

```[schema.prisma]
model User {
	id Int @id @default(autoincrement())
	name String
}
```

Prisma requires every model to have some form of identifier that acts as a primary key to uniquely identifies each of the entries in the databse.

As we can see, the fields within a Prisma model follows the sequence of name, data types and attributes.

```
model User {
	<name> <datatype> @<attributes>
}
```

The `@id` attribute tells Prisma that the field is a primary key and `@default()` is specifying a default value upon object creation. The `autoincrement()` function increments the id value by 1 on each subsequent entries. `uuid()` is also common for initializing an index field. We will cover more on attributes later.

### Data Types

There are a number of data types in Prisma. The data types here is a generalization of the different data types provided by different databases. For example, the `String` here maps to a `text` data type in PostgreSQL but `nvarchar(1000)` in SQL Server. Read more about [scalar types](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types).

- `Int`: The integer type
- `String`: Type that handles all sorts of texts
- `Boolean`: True or False
- `BigInt`: Very huge integers
- `Float`: Simple floating points
- `Decimal`: Precise floating points
- `DateTime`: Timestamp
- `Json`: JSON format, not supported by every databases
- `Bytes`: The data in raw byte format, to store large blobs
- `Unsupported("")`: Types that are unsupported, only used when converting to prisma from other db

### Type Modifiers

Type modifiers is to modify the behaviour of a field. There are only 2 modifiers in Prisma and they are very easy to understand.

- The nullable modifier `?`: Marks a field as nullable
- The array modifier `[]`: Indicates that the field can be referenced to multiple ocurences.

### Relationships

There are 4 types of relationships that database entities can have, namely one-to-one, one-to-many, many-to-one and many-to-many.

- **One-to-many**: For a `User` to have multiple `Post` , we can define the schema as follows

```[schema.prisma]
model User {
	id Int
	name String
	posts Post[]
}

model Post {
	id Int
	title String
	author User @relation(fields: [authorId], references: [id])
	authorId Int
}
```

- **2x One-to-many**: `User` can have multiple reference to the `Post`s. They might have a `writtenPosts` and a `favouritePosts`. Disambiguating multiple one-to-many relationships

```[schema.prisma]
model User {
	id Int
	name String
	writtenPosts Post[] @relation("WrittenPosts")
	favouritePosts Post[] @relation("FavoritePosts")
}

model Post {
	id Int
	title String
	author User @relation("WrittenPosts", fields: [authorId], references: [id])
	authorId Int
	favoritedBy User? @relation("FavoritePosts", fields: [favoritedById], references: [id])
	favoritedById Int?
}
```

- **Many-to-many**: One `Post` can have multiple `Category` and one `Category` can have multiple `Post`

```[schema.prisma]
model Post {
	id Int
	title String
	categories Category[]
}

model Category {
	id Int
	name String
	posts Post[]
}
```

- **One-to-one**: One `User` have one set of `UserPreference`

```[schema.prisma]
model User {
	id Int
	name String
	preference UserPreference?
}

model UserPreference {
	id Int
	emailUpdates Boolean
	user User @relation(fields: [userId], references:[id])
	userId Int @unique
}
```

Since it is a one-to-one relationship, we will need to mark the `userId` field as `@unique` because it doesn't make sense if it is not unique, right?

### Attributes

Attributes modify the behavior of fields or model blocks. Attributes starts with an alias sign `@` or `@@`.

_**Field Level Attributes**_

- `@id`: Specifies that the field is an identifier.
- `@default()`: Specifies the default value for that field.
- `@default(autoincrement())`: Incrementally updates a integer field by one.
- `@default(uuid())`: Automatically generates a uniquely identifiable string.
- `@default(now())`: Pairs with a `DateTime` field that adds the timestamp upon creation.
- `@relation()`: Specifies the relationships between the field with and another model
- `@unique`: Specifies the field as unique so that attempted entry that has the same value
- `@updatedAt`: Pairs with a `DateTime` field that will automatically updates the field to the latest timestamp upon modification.

_**Block Level Attributes**_

The attributes that apply for the entire model instead of a single field.

- `@@unique([])`: Provides a unique constraint for the composite fields

```[schema.prisma]
model User {
	id Int
	name String
	age Int

	@@unique([name, age])
}
```

- `@@index([])`: Creates an index field for specified fields, helps with sorting and performance.

```[schema.prisma]
model User {
	id Int
	name String
	age Int

	@@unique([name, age])
	@@index([email])
}
```

- `@@id([])`: Creates a composite ID with fields specified.

```[schema.prisma]
model User {
	// no more id field
	name String
	age Int

	@@id([name, age])
}
```

- `@@map([])`: Creates a mapping of the current model to the actual name in the database.

```[schema.prisma]
model User {
	id Int
	name String
	age Int

	@@map("my_users")
}
```

### Enum

Just a regular enum that we are familiar with. It represents _a fixed set_ of value, or variants that a field can take.

```[schema.prisma]
enum Role {
	SUPERUSER,
	BASIC,
	READER
}
```

After that, we can use it inside the `model` as a data type easily.

```[schema.prisma]
model User {
	id Int
	name String
	role Role @default(BASIC)
}
```

## Prisma Client

Prisma client is not just any ordinary client that we have came across. It needs to be recreated every time when there is modifications made to the schema file so that it can generate the custom types we defined in the schema that enables the autocompletion feature in VSCode.

After the schemas is settled down, we can proceed to generate the client with

```
npx prisma generate
```

> This command should be executed everytime we made some changes in the `schema.prisma` file.

This should install the Prisma client if it is not yet installed and inject the custom models inside the schema into the client.

```[package.json]
"dependencies": {
    "@prisma/client": "^4.4.0"
}
```

### Create

Create an `index.ts` file directly on the root and populate with the following contents.

```ts[index.ts]
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      // populating data fields
      age: 17,
      name: 'Elrond',
      email: 'elrond@wix.com',
    },
  })
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect())
```

The code above will just create a `User` object inside the database. To add logs, we can provide the arguments to the `PrismaClient`

```ts
new PrismaClient({
  log: ['query', 'error', 'info', 'warn'],
})
```

### Nested Create

Lets say we have a custom model `UserPreference` inside the `User` schema.

```[schema.prisma]
model User {
	id Int
	name String
	preference UserPreference
}
```

To instantiate the `User` entity altogether with the `UserPreference` model with the client, we can do as follows

```ts[index.ts]
await prisma.user.create({
  data: {
    // ... other fields of data
    preference: {
      create: {
        // ... data for `UserPreference`
      },
    },
  },
})
```

The `create` function returns the data of the object that is being created. By default, it does not return the nested items that is created. To include that as well, we need to use the `include` object and set the object to be included to `true`.

```ts[index.ts]
await prisma.user.create({
  data: {
    // ... other fields of data
    preference: {
      create: {
        // ... data for `UserPreference`
      },
    },
  },
  include: {
    preference: true,
  },
})
```

To get only a portion of the data, we can use `select` object and specify the field that we want to `true`.

```ts[index.ts]
await prisma.user.create({
  data: {
    // ... other fields of data
    preference: {
      create: {
        // ... data for `UserPreference`
      },
    },
  },
  select: {
    name: true,
  },
})
```

Select also works with nested objects very well. We can select the nested object and target the fields that we only want to be returned like in GraphQL.

```ts[index.ts]
await prisma.user.create({
  data: {
    // ... other fields of data
    preference: {
      create: {
        // ... data for `UserPreference`
      },
    },
  },
  select: {
    name: true,
    preference: {
      select: {
        // field: true
      },
    },
  },
})
```

> Note: `select` and `include` cannot be used together. It's only one or the other.

### Create Many

Initialize many instance instead of one at a time.

```ts[index.ts]
await prisma.user.createMany([
  // array of user...
])
```

> Note: Inside `createMany`, cannot user the `select`.

### Find Unique

Find the instance of object via the fields that marks as `unique`. For example, given we have the following model, we can use the `findUnique` to find the object via the `email` or `ssn` field.

```[schema.prisma]
model User {
	id Int
	name String
	email String @unique
	ssn String @unique
}
```

```ts[index.ts]
const user = await prisma.user.findUnique({
  where: {
    email: 'abc@email.com',
  },
  // select? include? is allowed here
})
```

When a block level unique constraints is specified across multiple fields, Prisma will define a reference with underscore seperating between the field name as a variable.

For example,

```[schema.prisma]
model User {
	id Int
	name String
	age Int

	@@unique([name, age])
}
```

Will produce `name_age` as a variable that can be used in the query.

```ts[index.ts]
await prisma.user.findUnique({
  where: {
    name_age: {
      name: 'Ken',
      age: 27,
    },
  },
})
```

### Find First

The issue with `findUnique` is that we cannot just query base on either `name` or `age`. If we do intend to search for result that only matches one of the field, we can use `findFirst` instead.

```ts[index.ts]
await prisma.user.findFirst({
  where: {
    name: 'Hailey',
  },
})
```

### Find Many

Find many as its name suggested, returns multiple results if the search criteria is fulfilled in an array.

```ts[index.ts]
await prisma.user.findMany({
  where: {
    age: 12,
  },
})
```

Using a `distinct` search query returns the first record after filtering by distinct on the fields provided.

```ts[index.ts]
await prisma.user.findMany({
  where: {
    name: 'Jack',
  },
  distinct: ['name', 'age'],
})
```

For pagination purposes, we can use the `take` object inside the search query. Providing the `skip` parameter skips the number of records specified first before running the `take`.

```ts[index.ts]
await prisma.user.findMany({
  where: {
    name: 'Jack',
  },
  take: 2,
  skip: 1,
})
```

We can also order the search result by the field that we want to order.

```ts[index.ts]
await prisma.user.findMany({
  where: {
    name: 'Jack',
  },
  orderBy: {
    age: 'asc',
  },
})
```

### Advanced Filtering

The `where` clause allows us to do many things.

```json
{
  "name": { "equals": "" },
  "name": { "not": "" },
  "name": { "in": ["Nick", "Josh"] },
  "name": { "notIn": ["Nick", "Josh"] },
  "age": { "lt": 20 },
  "age": { "gt": 20 },
  "age": { "gte": 20 },
  "age": { "lte": 20 },
  "email": { "contains": "@test.com" },
  "email": { "endsWith": "@gmail.com" },
  "email": { "startsWith": "hi" }
}
```

To chain multiple query parameters, we can use `AND`, `OR` and `NOT` to chain all the query together.

```ts[index.ts]
await prisma.user.findMany({
  where: {
    AND: [{ name: { equals: 'Sam' } }, { age: { gte: 20 } }],
  },
})
```

### Relationship Filtering

We can also search for a parent object based on the children object. The `every` can be substituted with `none` and `some`.

```ts[index.ts]
await prisma.user.findMany({
  where: {
    // nested objects
    writtenPosts: {
      every: {
        title: 'test',
      },
    },
  },
})
```

We can query every post that has an author with an age of 20 by the following:

```ts[index.ts]
await prisma.post.findMany({
  where: {
    author: {
      id: {
        age: 20,
      },
    },
  },
})
```

### Update

Queries the data and replace them with an updated version of it. Another version that updates all found records is `updateMany()`.

```ts[index.ts]
await prisma.user.update({
  where: {
    email: 'Test@test.com',
  },
  data: {
    email: 'Deck@test.com',
  },
})
```

Prisma has some interesting features when it comes to updating integer values. We can update the value by using math operations such as `increment`, `decrement`, `multiply` and `divide`.

```ts[index.ts]
await prisma.user.update({
  where: {
    email: 'Test@test.com',
  },
  data: {
    age: {
      increment: 1,
    },
  },
})
```

> Note: `update*` must be queried against a unique field.

### Connect

Connect allows us to link an **existing object** to a parent object.

```ts[index.ts]
await prisma.user.update({
  where: {
    id: 123,
  },
  data: {
    userPreference: {
      connect: {
        // assuming already have a userPreference obj with the id
        id: 'abc123',
      },
    },
  },
})
```

We can use `disconnect` to remove existing reference to that object as well.

```ts[index.ts]
await prisma.user.update({
  where: {
    id: 123,
  },
  data: {
    userPreference: {
      disconnect: true,
    },
  },
})
```

### Delete

Removing the data with `delete` and `deleteMany`.

```ts[index.ts]
await prisma.user.delete({
  where: {
    id: 123,
  },
})
```

> If we pass nothing to the `deleteMany` function, it will just purge the entire table.
