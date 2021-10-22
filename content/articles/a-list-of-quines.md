---
title: What is a quine in programming?
subtitle: Understanding quines with a petit list of examples
topic: Programming
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - quines
  - cheatsheet
---

A quine is a piece of code that upon executing will produce itself as the output. A quine is **idempotent**. The result will remain exactly the same no matter how much time you execute it.

## Gallery

Here are a collection of quines with different programming languages that I've collected through the internet.

### C

Example 1:

```c
const unsigned char data[] = { /* snip */ };
#include <stdio.h>
int main() {
  printf( "const unsigned char data[] = {" );
  for ( int i=0; i<sizeof(data); i++ ) {
      printf( " %0#4x,", data[i] );
  }
  printf( "\n};\n\n" );
  for ( int j=0; j<sizeof(data); j++) 
      putchar( data[j] );
  return 0;
}
```

Example 2:

```c
int main(void) {
  char str[]= " int main(void)\
{ char str[]= %c%s%c;\
printf(str, 0x22, str, 0x22);}";
  printf(str, 0x22, str, 0x22);}
```

Example 3:

```c
main(){char*s="main(){char*s=%c%s%c;printf(s,34,s,34);}";printf(s,34,s,34);}
```

### CoffeeScript

```coffee
s="s=%j;console.log s,s";console.log s,s
```

### Java

This is a verbose one compared to others.

```java
public class Quine
{
  public static void main(String[] args)
  {
    char q = 34;      // Quotation mark character
    String[] l = {    // Array of source code
    "public class Quine",
    "{",
    "  public static void main(String[] args)",
    "  {",
    "    char q = 34;      // Quotation mark character",
    "    String[] l = {    // Array of source code",
    "    ",
    "    };",
    "    for(int i = 0; i < 6; i++)           // Print opening code",
    "        System.out.println(l[i]);",
    "    for(int i = 0; i < l.length; i++)    // Print string array",
    "        System.out.println(l[6] + q + l[i] + q + ',');",
    "    for(int i = 7; i < l.length; i++)    // Print this code",
    "        System.out.println(l[i]);",
    "  }",
    "}",
    };
    for(int i = 0; i < 6; i++)           // Print opening code
        System.out.println(l[i]);
    for(int i = 0; i < l.length; i++)    // Print string array
        System.out.println(l[6] + q + l[i] + q + ',');
    for(int i = 7; i < l.length; i++)    // Print this code
        System.out.println(l[i]);
  }
}
```

### JavaScript

```js
s="s=%j;console.log(s,s)";console.log(s,s)

(function a(){console.log('('+a+')')})()

code='var q=unescape("%27");console.log("code="+q+code+q+";eval(code)")';eval(code)
```

### Lua

```lua
s="s=%qprint(s:format(s))"print(s:format(s))
```

### Perl

Example 1:

```perl
$s='$s=%c%s%c;printf($s,39,$s,39);';printf($s,39,$s,39);
```

Example 2:

```perl
$s=q($s=q(%s);printf($s,%s););printf($s,%s);
```

### Python

Example 1:

```py
_='_=%r;print (_%%_)';print (_%_) 
```

Example 2:

```py
s='s=%r;print(s%%s)';print(s%s)
```

Example 3:

```py
s='s=%r;print(s%%s,sep="")';print(s%s,sep="")
```

### Ruby

Example 1:

```rb
s="s=%p;printf s,s";printf s,s
```

Example 2:

```rb
s="s=%p;print s%%s";print s%s
```

Example 3:

```rb
s="s=%p;puts s%%s";puts s%s
```

Example 4:

```rb
s="s=%c%s%c;printf s,34,s,34";printf s,34,s,34
```

### Shell

```sh
s='s=\47%s\47;printf "$s" "$s"';printf "$s" "$s"
```

### Scheme

```scheme
(define x '(
  (display "(define x '(")
  (newline)
  (map (lambda (s) (write s) (newline)) x)
  (display "))")
  (newline)
  (display "(map eval x)")
  (newline)
  ))
(map eval x)
```

## Discussion

As we can see, the simplest quine are of this format, `s="s=%p;printf s,s";printf s,s` and larger quine requires more complexity and intricacy to produce.

## Reference

https://cs.lmu.edu/~ray/notes/quineprograms/
