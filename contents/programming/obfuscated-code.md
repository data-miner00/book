---
title: Obfuscated code
subtitle: Explanation and step by step guide to obfuscating codes
topic: Programming
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - programming
  - guide
directory: programming
updatedAt: 2021-10-22T13:33:30.485Z
createdAt: 2021-10-13T13:33:30.485Z
---

In software development, obfuscation is the **_deliberate act_** of creating source or machine code that is **_difficult for humans to understand_**. Like obfuscation in natural language, it may use needlessly roundabout expressions to compose statements.

## Advantages

- Faster loading time (minification)
- Reduced memory usage
- Protection for trade secrets
- Prevention of circumvention
- Prevention of virus detection

## Obfuscating step-by-step

This is just an extremely brief summary of the steps that most of the parts are still incomprehensible for me till this day. For more detailed walkthroughs, check out the [reference](#reference) section below.

### Full program code

```c
#include <time.h>
#include <stdio.h>

int main(void)
{
	time_t t;
	struct tm* tm;

	t = time(NULL); /* Get current time in seconds */
	tm = localtime(&t); /* Transform a timestamp to broken-down time */

	switch(tm->tm_hour) /* Choose action from the hour value */
	{
		case 4: case 5: case 6: case 7:
		case 8: case 9: case 10: case 11:
			printf("Good morning!\n");
			break;
		case 12: case 13: case 14:
			printf("Good day!\n");
			break;
		case 15: case 16: case 17:
			printf("Good afternoon!\n");
			break;
		case 18: case 19: case 20: case 21:
			printf("Good evening!\n");
			break;
		default:
			printf("Good night!\n");
			break;
	}
	return 0;
}
```

### Refactor the code

- remove switch case and put it into array (like a table)

```c
#include <time.h>
#include <stdio.h>

int main(void)
{
	static const char* const words[] = {"morning", "day", "afternoon", "evening", "night"};
	static const int per_hour[24] = {4,4,4,4, 0,0,0,0,0,0,0,0, 1,1,1, 2,2,2, 3,3,3,3, 4,4};
	time_t t;
	struct tm* tm;
	int greeting_index;

	t = time(NULL); /* Get current time in seconds */
	tm = localtime(&t); /* Transform a timestamp to broken-down time */

	greeting_index = per_hour[ tm->tm_hour ];
	printf("Good %s!\n", words[ greeting_index ]);
	return 0;
}
```

### More refactoring (??)

```c
#include <time.h>
#include <stdio.h>

int main(void)
{
	static const char* const words[] = {"morning", "day", "afternoon", "evening", "night"};
	static const int per_hour[24] = {4,4,4,4, 0,0,0,0,0,0,0,0, 1,1,1, 2,2,2, 3,3,3,3, 4,4};

	time_t t = time(NULL); /* Get current time in seconds */
	struct tm* tm = localtime(&t); /* Transform a timestamp to broken-down time */

	int greeting_index = per_hour[ tm->tm_hour ];
	return printf("Good %s!\n", words[ greeting_index ]);
}
```

### Using weird ways to achieve same outcome

```c
#include <time.h>

int main()
{
	char* w = "AAAA########+++///9999AA Good %s!\n\0morning\0day\0afternoon\0evening\0night";

	time_t t = time(0); /* Get current time in seconds */

	return printf(w+25, w + w[ localtime(&t)->tm_hour ]);
}

```

### Remove white spaces

```c
#include <time.h>
char* w = "AAAA########+++///9999AA Good %s!\n\0morning\0day\0afternoon\0evening\0night";
int main(){time_t t=time(0); return printf(w+25, w + w[ localtime(&t)->tm_hour ]);}
```

## Reference

Adapted from [Youtube](https://www.youtube.com/watch?v=rwOI1biZeD8)
