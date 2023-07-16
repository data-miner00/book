---
title: Python Interop with Julia
subtitle: A mini guide to work with Python and its ecosystems with Julia
topic: Programming
displayTopic: Programming
directory: programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - julia
  - python
  - guide
updatedAt: 2023-07-15T13:17:10.163Z
createdAt: 2023-07-15T13:17:10.163Z
---

Julia is extremely versatile when it comes to interop with other programming languages and environments such as C, Python, R and Java.

## Python Interop

### Calling Python in Julia

In Julia, Python codes can be called via the `PyCall` interface package that is readily available for install from the [general registry](https://github.com/JuliaRegistries/General).

Spin up a Julia REPL for the repository and hit `]` to switch it to Package mode and install the `PyCall` package as such.

```
(workspace) pkg> add PyCall
```

After that, import `PyCall` in any of the Julia file and the Python codes can be defined and executed by using the `py""` wrapper.

```jl
using PyCall

py"print('Hello from Python')" # Julia only allow strings to be enclosed with double quotes
```

To get its return value, just assign the Python block directly to a Julia variable.

```jl
total = py"100 + 100"

typeof(total) |> println
total |> println
```

### Working With Python Packages

To use a Python library such as those from the [PyPi repository](https://pypi.org/), the package needs to be installed to the correct Python intepreter that `PyCall` is using.

To find out where the interpreter is, run the following code in Julia to find out its exact location.

```
PyCall.python |> println
```

After that, cd into the directory (make sure Python.exe is present) and install any desired packages with the following command.

```
python -m pip install <your-package>
```

After the successful installation, it is now ready to be used within Julia codes. The package installed for demonstration here is called [`cleantext`](https://pypi.org/project/clean-text/) that is used for sanitizing strings.

To import the installed Python package, use the `pyimport` function and call its function with a dot notation as such.

```jl
py_clean = pyimport("cleantext")

py_clean.clean("h€ello") |> println
```

### Defining a Python Function

Python function can be defined within a multiline block of `py""` as shown below.

```jl
py"""
from cleantext import clean

def custom_clean(x: str):
    return clean(f'cleaned text: {x}')
"""
```

The newly defined Python function can be invoked within the same `py""` block again.

```jl
py"custom_clean"("»Yóù àré     rïght &lt;3!«") |> println
```
