---
title: Creating a Wasm app with Rust
subtitle: Step by step guide on bootstraping a Wasm template with Rust
topic: Web Development
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - rust
  - programming
  - wasm
---

In this article, we will be creating WASM project with Rust from scratch.

## Prerequisites

Make sure that Rust and Cargo is installed. Cargo comes along with Rust installer.

```
rustc --version
```

If you can see the output something along the lines of `rustc 1.56.0 (09c42c458 2021-10-18)`, then Rust is installed in your machine and there would be no surprise if Cargo is installed as well. Run

```
cargo --version
```

and you will get something like `cargo 1.56.0 (4ed5d137b 2021-10-04)`.

Make sure you have NPM installed as well.

```
npm --version
```

After all of the tools are ready, we can proceed to creating the WASM project.

## Using WASM template

To create a WASM project, first run the `cargo generate` command to clone the project template

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template.git --name <your-app-name>
```

and replace `<your-app-name>` with your project name. Below are the sample output after running the command.

```
 Unable to load config file: C:\Users\User\.cargo\cargo-generate.toml
 Generating template ...
[ 1/12]   Done: .appveyor.yml
[ 2/12]   Done: .gitignore
[ 3/12]   Done: .travis.yml
[ 4/12]   Done: Cargo.toml
[ 5/12]   Done: LICENSE_APACHE
[ 6/12]   Done: LICENSE_MIT
[ 7/12]   Done: README.md
[ 8/12]   Done: src\lib.rs
[ 9/12]   Done: src\utils.rs
[10/12]   Done: src
[11/12]   Done: tests\web.rs
[12/12]   Done: tests
 Moving generated files into: `D:\<your-path-to-folder>\<your-app-name>`...
 Done! New project created D:\<your-path-to-folder>\<your-app-name>
```

Next, change directory into your project and open with VSCode (or any other text-editors) by

```
cd your-project-name && code-insiders .
```

## Using WASM build tool

After that, install `wasm-pack` at this [official site](https://rustwasm.github.io/wasm-pack/installer/) for the binary installer. This is a command line tool that helps to compile Rust code to web assembly.

After choosing your operating system (in this case Windows), proceed to install it in your machine. It should be a quick process.

Optionally, run

```
wasm-pack --version
```

to check for installed version. In my case it is `wasm-pack 0.10.2`.

Subsequently, run

```
wasm-pack build
```

to build the project into a binary package and the following build output should be same as below

```
[INFO]: Checking for the Wasm target...
info: downloading component 'rust-std' for 'wasm32-unknown-unknown'
info: installing component 'rust-std' for 'wasm32-unknown-unknown'
[INFO]: Compiling to Wasm...
   Compiling proc-macro2 v1.0.36
   Compiling unicode-xid v0.2.2
   Compiling syn v1.0.86
   Compiling wasm-bindgen-shared v0.2.79
   Compiling log v0.4.14
   Compiling cfg-if v1.0.0
   Compiling lazy_static v1.4.0
   Compiling bumpalo v3.9.1
   Compiling wasm-bindgen v0.2.79
   Compiling quote v1.0.15
   Compiling wasm-bindgen-backend v0.2.79
   Compiling wasm-bindgen-macro-support v0.2.79
   Compiling wasm-bindgen-macro v0.2.79
   Compiling console_error_panic_hook v0.1.7
   Compiling snake-game v0.1.0 (D:\Workspace\tutorials\snake-game)
warning: function is never used: `set_panic_hook`
 --> src\utils.rs:1:8
  |
1 | pub fn set_panic_hook() {
  |        ^^^^^^^^^^^^^^
  |
  = note: `#[warn(dead_code)]` on by default

warning: `your-app-name` (lib) generated 1 warning
    Finished release [optimized] target(s) in 6.40s
[INFO]: Installing wasm-bindgen...
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: Optional fields missing from Cargo.toml: 'description', 'repository', and 'license'. These are not necessary, but recommended
[INFO]: :-) Done in 15.13s
[INFO]: :-) Your wasm pkg is ready to publish at D:\your-path-to-folder\your-app-name\pkg.
```

## Creating web project

After that, we need to initiate a web project **inside** the WASM project directory by running

```
npm init wasm-app www
```

and a minimal output should be generated as follows:

```
npx: installed 1 in 4.31s
🦀 Rust + 🕸 Wasm = ❤
```

Next, we need to install to client-side dependencies inside the `www` folder. Make sure that you change directory into the `www` folders first and run

```
npm i
```

and your packages should be installed successfully.

```
npm i
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 588 packages from 362 contributors in 32.375s

18 packages are looking for funding
  run `npm fund` for details
```

After the installation inside the `www` directory has been completed, go to `package.json` and add the following block to it.

```json
"dependencies": {
	"your-project": "file:../pkg"
}
```

You can name `your-project` whatever you want, just bear in mind that this name needs to match the import statement used inside the codes.

The `file:../pkg` essentially tells the package manager to get the dependencies locally using the file system, in this case it is referring to a folder named `pkg` in the parent directory, which is the WASM project itself.

Moving on, got to `index.js` and **change the import statement** to reference your package with the name defined in the `package.json` early on and run

```
npm start
```

and go to [http://localhost:8080](http://localhost:8080) on your browser and you will see an alert popping up.

There you have it, a basic barebone structure of a Rust-WASM project ready to kick-off.

## Reference

This guide was originally referenced from Rodion Chachura, creator of increaser.org on [Skillshare](https://www.skillshare.com/classes/Snake-Game-With-Rust-JavaScript-and-WebAssembly).

More resources to read on:

1. [Rust WASM official docs](https://rustwasm.github.io/docs/book/game-of-life/hello-world.html)
2. [Rust-WASM template on Github](https://github.com/rustwasm/wasm-pack-template)
3. [Rust WASM unofficial docs](https://rustwasm.github.io/wasm-pack/book/)
4. [Build a Webassembly App with Rust](https://thenewstack.io/build-a-webassembly-app-with-rust/)
5. [WebAssembly/Rust Tutorial: Pitch-perfect Audio Processing](https://www.toptal.com/webassembly/webassembly-rust-tutorial-web-audio)
6. [Yew.rs](https://yew.rs/)
