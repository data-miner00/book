---
title: Generics in Go
subtitle: How is generics in Go looks like and the differences with others
topic: Programming
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - go
  - programming
  - tutorial
updatedAt: 2022-03-28T13:33:30.485Z
createdAt: 2022-03-27T13:33:30.485Z
---

Go is a language that is notorious for its lack of Generics, a rudimentary programming feature that is widely adopted in other famous languages all this while, until the release of Go version 18 that has finally shipped along with Generics into the codebase.

## Updating Go

First thing that you will need to do is to update your Go version to **at least 18** if you haven't already by running the Go install command from an elevated command line such as the Powershell on Windows.

[Chocolatey](https://chocolatey.org/), a package manager for Windows are used for both the installation and update for Go.

```
# Install
choco install golang -y

# Update
choco upgrade golang -y
```

For WSL users, you may install the latest version by running the following command.

```
go install golang.org/dl/go1.18@latest
```

Alternatively, you may consider using [Go version manager (GVM)](https://github.com/moovweb/gvm) for managing different Go versions in the Linux system as it is very easy to use and has a striking resemblence on how the [Node version manager (NVM)](https://github.com/nvm-sh/nvm) operates.

The updating guides for Linux can also be found here on the [instruction gist](https://gist.github.com/nikhita/432436d570b89cab172dcf2894465753) by Nikhita.

## Generics syntax

Typically generics in other programming languages are denoted by angel brackets such as `<T>` where `T` is the generic type but it's a bit different here in Go.

```go
func genericFunc[gen any](myGen gen) {
    fmt.Println("My generic variable: ", myGen)
}
```

The above function takes in a custom type called `gen` that can be of any type that Go supports.

```go
func genericFunc[gen int64 | float32](myGen gen) {
    fmt.Println("My generic variable: ", myGen)
}
```

The above function takes in a custom type called `gen` that can either be `int64` or `float32` only. This pretty much resembles the union type in Typescript.

## Grouping types

If we would like to implement a generic function that takes in a multitude of types but not `any`, we can group them into a union type by using interface.

```go
type Integer interface {
    int8 | int16 | int32 | int64
}
```

We will now be able to use all the types in the function.

```go
func genericFunc[gen Integer](myGen gen) {
    fmt.Println("My generic variable: ", myGen)
}
```

There you have it, generics in Go. Not quite the same way that we used to in other languages, but it is how it is.
