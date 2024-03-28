---
title: Installing PySpark on Windows
subtitle: A comprehensive guide on setting up PySpark to work on Windows machine locally
topic: Programming
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - python
  - spark
  - setup
directory: programming
updatedAt: 2024-03-28T05:59:29.772Z
createdAt: 2023-04-18T01:41:30.909Z
---

Getting started with PySpark in the local Windows machine can be a little bit tricky as it requires [Apache Spark](https://spark.apache.org/) to be installed first and it has quite a number of dependencies that have complicated installation steps.

For those who don't know, PySpark is a bridge for Apache Spark in Python. Apache Spark is a trailblazer in big data processing with distributed computing written in Scala and Scala is running on Java Virtual Machine (JVM). PySpark allows the interface to a JVM object directly from Python by utilizing the [Py4j library](https://www.py4j.org/).

## Setting Up Core Components

## Installing Java

The first item that needs to be installed is Java, specifically Java Development Kit (JDK) and **not** Java Runtime Environment (JRE). The link to Oracle JDK can be found [here](https://www.oracle.com/java/technologies/downloads/#java8-windows) and OpenJDK [here](https://jdk.java.net/20/). There are a wide assortment of OpenJDK vendors out there, choose any which you are comfortable with.

### Installing Apache Spark

Apache Spark can be downloaded at the [official download page](https://spark.apache.org/downloads.html). The downloaded file will be in a `tgz` compressed file that has a name similar to `spark-3.3.2-bin-hadoop3` depending on the version you downloaded. Extract the folder with the same name to a short directory such as but not limited to `C:/src` or `D:/Programs`.

> Tip: It is highly encouraged to rename the folder to a shorter name such as `spark` as it might cause errors when adding the directory to PATH later.

### Downloading Winutils.exe

Winutils is the Windows binary for [Hadoop](https://hadoop.apache.org/). Hadoop requires native API to work on Windows for some functionality such as file access with _posix-like file permissions_. Spark is independent and can run without Hadoop, and the Winutils is the only binary from Hadoop that is required for Spark to work correctly.

To download the binary, head over to [winutils GitHub](https://github.com/steveloughran/winutils) by steveloughran. There is a list of binary files used by different version of Hadoop. Locate the `winutils.exe` binary with the corresponding Hadoop version and download it.

The file will need to be discoverable by PATH. The easiest way is to move the file to the newly downloaded Spark binary directory. Otherwise, create a new directory and expose the location to PATH.

### Installing PySpark

[PySpark](https://pypi.org/project/pyspark/) is a Python library installable with [pip](https://pip.pypa.io/en/stable/). Depending whether you want to install it globally or in a virtual environment, it must be installed somewhere for PySpark to work correctly in the Python workspace.

```
pip install pyspark  # install globally

pipenv install pyspark  # or install in venv via Pipenv
```

Additionally, install Pandas and Numpy as well because PySpark have dependencies on them.

```
pip install pandas numpy
```

## Setting Environment Variables

The final step to take is to register the environment variables and paths. Open up the environment variables window and add a new variable named `SPARK_HOME` with the value of the directory of Spark.

```
SET SPARK_HOME=C:\src\spark
```

Next, create another variable named `PYSPARK_PYTHON` and assign its value as `python`. This will make sure when Apache Spark is calling Python, it will use the correct Python interpreter as in Unix systems, Apache Spark will invoke them via `python3` instead of `python`.

```
SET PYSPARK_PYTHON=python
```

After that, make sure `JAVA_HOME` exist with its value points to the actual JDK. Otherwise, create the variable and assign the path to the JDK.

```
SET JAVA_HOME=C:\Program Files\Java\jdk-17.0.1
```

### Add Paths

Lastly, add the Paths that directs to the binaries required by Spark. Locate `Path` and click edit. A list of exposed directories should show. Make sure path to JDK, Spark and Python exists. Add manually if otherwise.

```
C:\Program Files\Java\jdk-17.0.1\bin
C:\src\spark\bin
C:\Users\User\AppData\Local\Programs\Python\Python310\
```

## Verifying Setup

### Spark Shell

To verify whether Spark has been exposed to the environment, type `spark-shell` in the command line.

```
> spark-shell
```

Spark should load up with its logo as shown below.

```
Setting default log level to "WARN".
To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).
23/04/18 20:41:29 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
Spark context Web UI available at http://DESKTOP.mshome.net:4040
Spark context available as 'sc' (master = local[*], app id = local-1681821689885).
Spark session available as 'spark'.
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /___/ .__/\_,_/_/ /_/\_\   version 3.3.2
      /_/

Using Scala version 2.12.15 (Java HotSpot(TM) 64-Bit Server VM, Java 17.0.1)
Type in expressions to have them evaluated.
Type :help for more information.

scala>
```

Great, Spark is working nicely and the final step is to check whether PySpark also works as intended.

### PySpark

Create `main.py` with the contents below. Execute the file with `python main.py` and observe the execution.

```
from pyspark.sql import SparkSession

# create a SparkSession
spark = SparkSession.builder.appName("sandbox").getOrCreate()

# create a DataFrame with null values
df = spark.createDataFrame(
    [(1, None, "a"), (2, "b", None), (3, "c", "d")], ["id", "col1", "col2"]
)

# drop rows that have at least 2 non-null values
df_thresh = df.na.drop(thresh=2)

# show the results
df_thresh.show()
```

If the execution ends with the output shown below without any error, then PySpark has been setup correctly in the local machine.

```
Setting default log level to "WARN".
To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).
23/04/18 20:48:10 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
+---+----+----+
| id|col1|col2|
+---+----+----+
|  1|null|   a|
|  2|   b|null|
|  3|   c|   d|
+---+----+----+

SUCCESS: The process with PID 19900 (child process of PID 21416) has been terminated.
SUCCESS: The process with PID 21416 (child process of PID 24088) has been terminated.
SUCCESS: The process with PID 24088 (child process of PID 5140) has been terminated.
```

## Reference

- [Apache Spark Installation on Windows](https://sparkbyexamples.com/spark/apache-spark-installation-on-windows/)
- [PySpark - PyPi](https://pypi.org/project/pyspark/)
- [Hadoop vs. Spark: What's the Difference?](https://www.ibm.com/cloud/blog/hadoop-vs-spark)
