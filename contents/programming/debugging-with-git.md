---
title: Debugging with Git
subtitle: Understand and apply these three Git debugging techniques to inspect the codebase for issues effectively
topic: Programming
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - git
  - debugging
  - grep
  - bisect
  - note
directory: programming
updatedAt: 2023-10-27T11:12:17.718Z
createdAt: 2023-10-27T11:12:17.718Z
---

> This is an enhanced note taken from the Pluralsight course "[Git Debugging Techniques](https://app.pluralsight.com/library/courses/git-debugging-techniques/)" by [Aaron Stewart](https://app.pluralsight.com/profile/author/aaron-stewart).

Aside from the usual `git commit`, `git add` or `git merge` commands that we are accustomed to, there are actually quite a number of useful Git commands out there that can help us to debug our codebase effectively. In this article, we will be exploring 3 useful Git commands, namely Git Bisect, Git Blame and Git Grep.

## Git Bisect

A technique to narrow down the potentially bug-inducing commit from the commits history with the help of binary search. This process can be automated with just 1 or 2 lines of Git commands.

### Step 1: Initiate a debugging session

To initiate a Git Bisect session, type the following Git command into the terminal

```
git bisect start
```

### Step 2: Specify the Good and Bad commits

After that, find any of the known commit where the behaviour/bug is not introduced and any of the commit where the issue was identified. Take note of their hash (a shortened version is fine) as we will be using it to specify the good and bad commits respectively.

```
git bisect good <good-commit>
git bisect bad <bad-commit>
```

### Step 3: Inspect the codebase, repeat

After setting the good and bad commits, we can start to debug with Git Bisect by using the following commands.

For each iteration, inspect the codebase for any signs before the bug was introduced. If the bug still exists in the iteration, type `git bisect bad` to mark this commit as bad and `git bisect good` otherwise. At the end of the iteration, the issue-inducing commit would be found.

After completing the debugging session, use `git bisect reset` to checkout to the latest commit.

```
# debugging
git bisect bad
git bisect good

# exit
git bisect reset
```

### Automated Git Bisect

We can automate Git Bisect using the `git bisect run` command with a custom script or command that inspects the codebase and returns `0` for success and non-zero for failure.

To do that, we can specify the bad and good commits altogether in the `git bisect start` command.

```
git bisect start <bad-commit> <good-commit>
```

Next, specify the custom script or command to be executed with the Run command.

```
git bisect run <custom script or commands>
```

This will automate the Git Bisect process and bring us to the troublesome commit directly if it is able to find one through the execution of the script/command.

For example, let's say I am trying to find a file called `index.html` that no longer exists in the latest commit, all I need to do is get the latest commit hash as the bad commit, and randomly get the hash of a commit way back in the history that I am sure that the file exist as the good commit and uses the `ls` command in Linux (`dir` in Windows) as the command to run the automated Git Bisect.

```
git bisect run ls index.html
```

Here is the sample output of the automated Git Bisect above.

```
running dir index.html
dir: cannot access 'index.html': No such file or directory
Bisecting: 9 revisions left to test after this (roughly 3 steps)
[d054131fd6b00fbd5ea8ed8ffa64e3a8f6fb6182] Create dependabot.yml (#17)
running dir index.html
dir: cannot access 'index.html': No such file or directory
Bisecting: 4 revisions left to test after this (roughly 2 steps)
[da5816fa25c8f19134aaa0406d433ed699851dbe] Remove jshint dev dependency
running dir index.html
dir: cannot access 'index.html': No such file or directory
Bisecting: 1 revision left to test after this (roughly 1 step)
[d211368917874dc54729708ed99cdb73a32b9ba1] add config Gemfile and package
running dir index.html
index.html
Bisecting: 0 revisions left to test after this (roughly 0 steps)
[2c672974501e69612fd1d0c97a5142f02d6af8a0] rename index.html to inde.html
running dir index.html
dir: cannot access 'index.html': No such file or directory
2c672974501e69612fd1d0c97a5142f02d6af8a0 is the first bad commit
commit 2c672974501e69612fd1d0c97a5142f02d6af8a0
Author: Cynthia Rich <crichID@users.noreply.github.com>
Date:   Sat Jul 8 10:53:06 2017 -0400

    rename index.html to inde.html

 inde.html  | 458 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 index.html | 458 -------------------------------------------------------------
 2 files changed, 458 insertions(+), 458 deletions(-)
 create mode 100644 inde.html
 delete mode 100644 index.html
bisect run success
```

## Git Blame

Git Blame is used to investigate the codes within a file line-by-line. It will display the **commit hash**, **author** and **commit timestamp** for each line. If you are using VSCode, you can install the [GitLens](https://gitlens.amod.io/) extension to display Git Blame information on the file within the text editor.

To blame a file, simply provide the file name as the argument.

```
git blame <filename>
```

### Blame Part of a File

More often than not, the code that we need to inspect might consist of hundreds if not thousands of lines. Hence, if we only need to know the info for only certain parts of the file, we can provide a range of line numbers with the `-L` flag.

```
git blame -L <line-start>,<line-end> <filename>
```

Example:

```
git blame -L 67,83 index.html
```

### Git Show

Additionally, we can use `git show` to further inspect the info for a commit that we are interested in after being identified with `git blame`. It will display a code diff within the command line.

```
git show <commit>
```

```diff
@@ -75,7 +75,7 @@
         ctx     = canvas.getContext('2d'),
         ucanvas = get('upcoming'),
         uctx    = ucanvas.getContext('2d'),
-        speed   = { start: 0.6, decrement: 0.005, min: 0.1 }, // how long before piece drops by 1 row (seconds)
+        speed   = { start: 0.5, decrement: 0.005, min: 0.1 }, // how long before piece drops by 1 row (seconds)
         nx      = 10, // width of tetris court (in blocks)
         ny      = 20, // height of tetris court (in blocks)
         nu      = 5;  // width/height of upcoming preview (in blocks)
```

## Git Grep

Git Grep is similar to Grep as they are used to search text with string or Regex. The difference is that Git Grep only searches the files that are tracked by Git and is able to operate on different branches within the repository.

```
git grep <pattern/text>
```

To search for specific file types only, provide the `-- <glob-pattern>` flag as follows.

```
git grep <pattern> -- <glob-pattern>
```

The following example searches for the keyword `return` in the tracked `js` (JavaScript) files only.

```
git grep "return" -- "*.js"
```

To display the additional line numbers for matching pattern/text, provide the `-n` flag.

```
git grep -n <pattern>
```

Search with Regex is obviously supported too.

```
git grep "[0-9]pattern"
```

To search for a specific branch, provide the branch name as the second parameter.

```
git grep <pattern> <branch>
```

We can chain everything into one command as shown below. It will show lines that has the word "speed" at the "origin/feat" branch in the index.html file only and display the line numbers along the way.

```
git grep -n "speed" origin/feat -- index.html
```

## References

- [git bisect](https://git-scm.com/docs/git-bisect)
- [git blame](https://git-scm.com/docs/git-blame)
- [git grep](https://git-scm.com/docs/git-grep)
- [Git Debugging Techniques - Pluralsight](https://app.pluralsight.com/library/courses/git-debugging-techniques/)
