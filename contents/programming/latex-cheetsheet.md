---
title: LaTeX Cheetsheet
subtitle: The list of functions and samples on technical writing with LaTeX
topic: Programming
displayTopic: Programming
directory: programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - science
  - latex
  - cheatsheet
updatedAt: 2024-03-28T05:59:29.772Z
createdAt: 2022-10-22T03:34:20.346Z
---

LaTeX is a popular typesetting language that is used broadly in writing documentations and scientific papers. This is the basic structure of a LaTeX document.

```tex
\documentclass[a4paper, 11pt]{article}

\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}

\title{My Title}
\author{My name}
\date{October 2021}

\begin{document}
\maketitle
\tableofcontents

\section{Introduction}

\end{document}
```

## Preamble

Contains classes and packages, as well as the metadata assorted to the document.

The `\documentclass` tag allows us to specify a document style along with some optional configurations.

```tex
\documentclass[<options>]{<document style>}
```

Here is a non-exhaustive list of classes (style) built into LaTeX:

- **article**
- **book**
- **report**
- **letter**
- **slides**
- **proc** - proceedings

The `\usepackage` tag is used for specifying a library that the document needs, so that the functionalities of writing the document can be extended.

```tex
\usepackage[<options>]{<package>}
```

The commonly used packages:

- [fontenc](https://latexref.xyz/fontenc-package.html)
- [inputenc](https://latexref.xyz/inputenc-package.html)
- lipsum - Generates lorem ipsum text
- geometry
- hyperref - Generate links automatically
- mathtools
- upgreek
- graphicx

Sample use for the `geometry` package are as follows.

```tex
% specifies 1.5cm margin for all sides
\usepackage[margin=1.5cm]{geometry}

% specifies different margin for different sides
\usepackage[top=2cm, bottom=2cm, left=3cm, right=3cm]{geometry}
```

Sample use for the `hyperref` package.

```tex
\usepackage{hyperref}
\hypersetup{colorlinks=true, linkcolor=blue}
```

The title, author and date can be specified in the document as well as metadata.

```tex
\title{My Title}
\author{My name}
\date{October 2021}
```

## Content

All the contents of the document that will be yielded on the final output must be placed between the `\begin{document}` and `\end{document}` tags.

```tex
\begin{document}
% contents here
\end{document}
```

The `\maketitle` tells the compiler to show the document metadata defined earlier such as title, author and date at the beginning of the document.

The `\tableofcontents` will injects a table of contents to the place that it is being specified.

To import content from another file, say `other.tex`, we can use the `\input` tag to do just that.

```tex
\input{other.tex}
```

## Images

To handle images in the document, the `graphicx` package is required.

```tex
\usepackage{graphicx}
```

### Create Image Environment

The environment to house an image can be created by using the `\begin` and `\end` with `figure` as parameter. The image name needs to be placed within the `\includegraphics` tag for it to take effect.

The extension of the image file need not to be specified, so that the compiler can find whichever that is most suitable if there are multiple types of the same image.

```tex
\begin{figure}
	\centering
	\includegraphics{My_image.png}
	\caption{My caption}
	\label{fig:my_label}
\end{figure}
```

The image will be align to the left by default. To center it, include the `\centering` tag within the `figure` block.

The caption is the text that will be shown below the image to describe the image.

The label is specified so that it can be referred later by other parts of the document easily. Reference can be made by using the `\ref` tag.

```tex
Lorem ipsum dolor sit amet, see Fig. \ref{fig:my_label}
```

### Resizing Image

Sometimes, the image may come in larger resolution and using it directly in the document will render an oversized image.

To resize it, use the options for the `\includegraphics` tag.

```tex
\includegraphics[width=0.75\textwidth]{My_image.png}
```

The `\textwidth` indicates the width allowed to display the text on the document. There is no need to specify the height attribute though as the compiler will maintain the aspect ratio of the image.

However, we can explicitly specify the height as such.

```tex
\includegraphics[width=5cm, height=6cm]{My_image.png}
```

> Tip: Always specify the image smaller so that it is as close to the text as possible.

### Positioning Image

To tell the compiler where exactly the image needs to be places, we can add in a square brackets behind the `\begin{figure}` and specify the options.

```tex
\begin{figure}[htbp]
```

Where

- h - here
- t - top of next available page
- b - bottom of next available page
- p - page by itself

It is a good practice to put multiple positions so the compiler will fallback to the latter ones if the former ones are not suitable.

### List of Figures

The list of figures acts similarly as table of contents but for figures. It is very simple to add in.

```tex
\listoffigures
```

### Short Caption

Sometimes there might be very long captions that describes a figure. To make it simple to display in the list of figures section, it is very useful to have a shorter caption.

```tex
\caption[Short caption!]{My very bery very very long caption}
```

### Two-column Mode

A very popular mode in scientific paper, can be achieved by just heading over to the preamble section under the `\documentclass` tag and specify `twocolumn` as its option.

```tex
\documentclass[twocolumn]{article}
```

This might in turn messed up some of the existing image as the width are set for the `\textwidth`. We can easily resolve the issue with `\columnwidth`.

```tex
\includegraphics[width=0.75\columnwidth]{My_image.png}
```

## Custom Command

To create a custom command, or an alias, use the `\newcommand` tag.

```tex
\newcommand{\dg}{$^{\circ}$}
```

## Math

To use math function in LaTeX document, math package is required. The package mathtools and amsmath are mostly identical, it's just that mathtools is the newer package available but importing either one of them will do just fine.

```tex
\usepackage{mathtools}
% or
\usepackage{amsmath}
```

### Block Math

```tex
\begin{equation}
% equation here
\end{equation}
```

Use `equation*` to suppress the automated numberings of the equation generated.

Adding in a label to the equation makes it easy to be referred within the document.

```tex
\begin{equation}
 y = mx + c
 \label{eq:gradient}
\end{equation}
```

To refer to the labelled equation somewhere within the document in a paragraph, use the `\ref` command to link between them.

```tex
The equation \ref{eq:gradient} is kinda basic.
```

### Inline Math

Inline math can be specified by using opening and closing `$` symbol.

```tex
The gradient equation $y = mx + c$ is really cool.
```

### Subscript and Superscript

To use a subscript, append an underscore `_` in front of it whereas for superscript, append a caret `^` symbol before it.

```tex
H_0 = x^2 + 1
```

$$
H_0 = X^2 + 1
$$

For negative sub or superscript, they will need to be enclosed by curly brackets instead,

```tex
y = 2x^{-1}
```

$$
y = 2x^{-1}
$$

### Spacing

LaTeX ignores any spaces within an equation. However, spaces still can be added in explicitly by using the following commands.

| Command | Description   |
| ------- | ------------- |
| `\quad` | Biggest space |
| `\;`    | Big space     |
| `\:`    | Medium space  |
| `\,`    | Small space   |

### Fractions

There are two types of fraction in LaTeX. Display style and Text style. Display style is seen in the display block and the text style is used within an inline environment. LaTeX will automatically select the best style depending on the environment but we do have the option to specify them explicitly. We can use `\dfrac` for display style fraction and `\tfrac` for text style fraction.

```tex
\frac{nominator}{denominator}
% or
\dfrac{nominator}{denominator}
% or
\tfrac{nominator}{denominator}
```

$$
\dfrac{1}{2} = \tfrac{1}{2}
$$

Another clever way is to use slanted fraction. This is technically not a built in way of displaying fraction, but rather a clever maneuver with the existing behaviours.

```tex
$^1/_2$
```

$$
^1/_2
$$

### Brackets

Brackets can inserted directly from the keyboard `(` and `)`. However, we also have the option to change the display mode if the default doesn't look good.

```tex
% default
( \frac{x}{y} )

% big enclosed bracket
\left( \frac{x}{y} \right)

% mark big from nested bracket than inner ones
\big( x(y) \big)
```

$$
( \frac{x}{y} )
\left( \frac{x}{y} \right)
\big( x(y) \big)
$$

### Matrix

The elements of the matrix is separated by the ampersand `&` symbol and the rows must be ended with `\\` if there is an incoming row after that.

```tex
\begin{equation}
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
\end{equation}
```

$$
\begin{equation}
\begin{matrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
\end{equation}
$$

To include brackets around the matrix, simply use `pmatrix` instead of `matrix`. Use `bmatrix` for square brackets.

$$
\begin{equation}
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{pmatrix}
\end{equation}
$$

The matrices in LaTeX aligns to the center by default but it might look bad if we have numbers of different length. `matrix*` allows us to specify the alignment easily in the options square brackets.

```tex
\begin{matrix*}[r]
1 & -2 & 3 \\
-4 & 5 & 6 \\
7 & 8 & -9
\end{matrix*}
```

$$
\begin{matrix*}[r]
1 & -2 & 3 \\
-4 & 5 & 6 \\
7 & 8 & -9
\end{matrix*}
$$

### Alignment

To display derivation equation that aligns with the central `=` sign, the align block can be used. Inside the block, the `&=` is used instead of a regular `=` symbol and most importantly, the double backslash `\\` must be specified after an equation that still have another equation to be displayed on the next line.

```tex
\begin{align}
y &= f(x) \\
f(x) &= mx + c
\end{align}
```

$$
\begin{align}
y &= f(x) \\
f(x) &= mx + c
\end{align}
$$

For the `align` block to generate no numberings for each line of the equation, `align*` can be used instead. However, to suppress numberings only for a certain row of equation, a `\nonumber` tag can be appended after the equation and before the `\\` symbol.

```tex
\begin{align}
y &= f(x) \nonumber \\
f(x) &= mx + c
\end{align}
```

### Upright Text

All the symbols and characters in equation block is italicized. To make it upright, use `\mathrm{}`.

```tex
\begin{equation}
	y = \mathrm{m}x + c
\end{equation}
```

$$
y = \mathrm{m}x + c
$$

To use upright Greek characters, the package "upgreek" is required.

```tex
\usepackage{upgreek}
```

```tex
\mu -> \upmu
```

### Bold

To make a text bold, use `\textbf{}` and use `\mathbf{}` for math symbols.

$$
\textbf{bold}
$$

$$
\mathbf{\Lambda}\mathbf{\beta}\mathbf{\chi}
$$

## Tables

Tables also need a table environment just like math and figures. The table also takes in the `htbp` property just like image.

```tex
\begin{table}[htbp]
	\centering
	\begin{tabular}{c|c}
	% tabulating data
	\end{tabular}
	\caption[Short caption]{Caption}
	\label{tab:my_label}
\end{table}
```

The `{c|c}` after the tabular begin tag means `<number of columns><border><alignment of data>`. The alignment of data property accepts `l` for left, `c` for center and `r` for right. It is not recommended to use borders to separate the data, so a `{cc}` is highly suggested.

```tex
\begin{tabular}{|c|r|l|c|}
	Heading 1 & Heading 2 & Heading 3 & Heading 4 \\
	Data 1 & Data 2 & Data 2 & Data 2 \\
	Data 3 & Data 4 & Data 2 & Data 2 \\
	Data 5 & Data 6 & Data 2 & Data 2
\end{tabular}
```

However, managing the tables directly in LaTeX can be a hellish endeavour. It is recommended to use online tools to manage data in the tables such as [Tables Generator](https://tablesgenerator.com/).

The best practice to tables is to use horizontal rule to separate out the headings and the data, and separate out the table with the rest of the content within the document. This can be achieved with using `\hline` accordingly.

```tex
\begin{tabular}
	\hline
	Heading 1 & Heading 2 \\
	\hline
	Data 1 & Data 2 \\
	Data 3 & Data 4 \\
	Data 5 & Data 6
	\hline
\end{tabular}
```

That is not enough, the padding for the cells still needs to be specified with

```tex
\renewcommand{\arraystretch}{1.5}
```

```tex
\begin{tabular}{ p{3.5cm} p{2.2cm} p{0.25\textwidth} }
```

To include the list of tables, simply use `\listoftables` the same as with [table of contents](#content) and [figures](#list-of-figures).

## Lists

To list items in a ordered list, we can use the `enumerate` command as shown. Within the `begin` block, the individual items can be listed out with the `\item` command followed by a space and its description. `enumerate` can be replaced with `itemized` for unordered lists.

```tex
\section{Definitions of $e$}

\begin{enumerate}
\item As a \textbf{limit}:
\[e= \lim_{n\to\infty} \left(1+\frac{1}{n}\right)^n\]

\item As a \textit{sum}:
\[e= \sum_{n=0}^{\infty} \frac{1}{n!}.\]

\item As a \underline{continued fraction}:
\[e= 2+\frac{1}{1+\frac{1}{2+\frac{2}{3+\frac{3}{4+\frac{4}{5+\ddots}}}}}\]
\end{enumerate}
```

## Sample Formulas

1. Definitions of **e**

> 1.1 As a limit

$$
e= \lim_{n\to\infty} \left(1+\frac{1}{n}\right)^n
$$

> 1.2 As a sum

$$
e= \sum_{n=0}^{\infty} \frac{1}{n!}.
$$

> 1.3 As a continued fraction

$$
e= 2+\frac{1}{1+\frac{1}{2+\frac{2}{3+\frac{3}{4+\frac{4}{5+\ddots}}}}}
$$

2. Triple integral

$$
\iiint f(x,y,z)\,dxdydz
$$

3. Vector

$$
\vec{v}=<v_1, v_2, v_3>
$$

4. The real numbers, represented as $\mathbb{R}$ is so cool.

## LaTeX Logo

To use the $\LaTeX$ logo, we can just use the following tag.

```tex
\LaTeX
```

## References

- [SOS Writing](https://www.youtube.com/channel/UCnNtbHkOScqQfQuqYDPm1sg)
- [LaTeX Math Cheatsheet](https://kapeli.com/cheat_sheets/LaTeX_Math_Symbols.docset/Contents/Resources/Documents/index)
- [LaTeX Docs](https://www.latex-project.org/help/documentation/#general-documentation)
- [Overleaf](https://www.overleaf.com/)
- [Intro to LaTeX : Learn to write beautiful math equations || Part 1](https://www.youtube.com/watch?v=Jp0lPj2-DQA)
- [Intro to LaTeX **Full Tutorial** Part II (Equations, Tables, Figures, Theorems, Macros and more)](https://www.youtube.com/watch?v=-HvRvBjBAvg)
