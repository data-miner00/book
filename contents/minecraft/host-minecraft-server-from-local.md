---
title: Host Minecraft Server Locally to Public
subtitle: A complete guide to setup a working Minecraft server from local computer with ngrok
topic: Minecraft
displayTopic: Minecraft
directory: minecraft
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - minecraft
  - server
  - ngrok
updatedAt: 2023-02-06T13:40:58.648Z
createdAt: 2023-02-06T13:40:58.648Z
---

This is a tutorial on how to host a Minecraft server from your local computer to the internet so that your friend who lives miles away can still join the adventure together with you. The credit goes to [TheHowToGuy123](https://www.youtube.com/@TheHowToGuy123) on Youtube with his video titled "[How To Make A Minecraft Server For 1.19.3 - No Port Forwarding or Hamachi](https://www.youtube.com/watch?v=m-1hfPSKKKw)." This is a written version of the tutorial with a few personal takes and enhancement to the original content.

## Requirements

For all the things to work, there are a couple of software and tools that must be installed prior to putting the server up online.

### Java

The first and the most crucial component to be installed is **Java**. Java is a programming language as well as a runtime that serves as a platform to execute the applications written in the language itself. It contains a whole load of necessary and useful libraries that empowers software development. Read more about [Java](https://www.java.com/en/download/help/whatis_java.html).

Usually, Java is installed together with the Minecraft Launcher altogether as Minecraft Java Edition is dependent on, of course, Java. To check if the Java is installed in your computer, open up a command line to verify it.

The easiest way to open up a command line on Windows is by holding the `windows` key and hit `R` to open a `Run` window and subsequently key in `cmd` to open a command prompt.

In the command prompt, we can verify the version of Java installed.

```
C:\Users\User> java --version
```

If the command goes through and returns a version of the installed Java and its environment, then Java is already installed on your machine. Otherwise if it prints something like `'java' is not recognized`, then Java is likely not installed.

### Minecraft Server Artifact

The second item on the list is the Minecraft server artifact. This is a file that ends with a `.jar` extension that can be obtained via the [official download link](https://www.minecraft.net/en-us/download/server) that reads "Download minecraft_server.x.x.x.jar". The `x.x.x` represents the version of Minecraft for the server and in this case, we will go with the latest version of the server. You will need to find the corresponding version of server file if you intend to host your server of different versions.

After the file is downloaded, rename it to just `server.jar` for ease of reference.

### ngrok

After that, we will need to download ngrok. [ngrok](https://ngrok.com) is a simplified API-first ingress-as-a-service that adds connectivity, security and observability to any apps with no code changes. In other words, ngrok allows us to send our local Minecraft server online with just a couple of clicks, which is very handy.

Proceed to sign up for a free account if you haven't already have one. There should be a banner that contains links for the ngrok downloader for various OS. Download the version that is suitable for your operating system and extract the `ngrok.exe` file from the zip file to anywhere in your computer.

## Setting up Server Directory

Next, create an empty directory anywhere on your computer. Copy/move the `server.jar` file and the extracted `ngrok.exe` to the directory.

Create a batch file named `run.bat` on the same directory and open it with any text editor. Fill in the following contents that will spin up the server when executed.

```bat[run.bat]
java -Xmx1024M -Xms1024M -jar server.jar nogui
PAUSE
```

The number `1024` indicates the RAM in Megabytes that the server is allocated from your computer. If you plan to give the server 2 Gigs of RAM instead, simply multiply 1024 by 2 and replace the numbers.

One thing to note here is running a server is quite resource intensive and hence you will need to make sure you have enough RAM and a decent CPU/GPU before you decide to host one yourself. If not, then it will deteriorates the overall gaming experience.

The server directory will now look like this, with 3 files inside it.

```[Directory Structure]
├─ ngrok.exe
├─ run.bat
└─ server.jar
```

## Finalizing Server Directory

The next step to be taken is to execute the `run.bat` file by double clicking on it. On first run, the script will exit with a log saying that failed to load `eula.txt`. This is expected and we will fix that in a bit.

Also, there are a few files and folders generated after the execution.

```[Directory Structure]
├─ libraries/
│  └─ ...
├─ logs/
│  └─ ...
├─ versions/
│  └─ ...
├─ eula.txt
├─ ngrok.exe
├─ run.bat
├─ server.jar
└─ server.properties
```

Open up `eula.txt` and change the `eula=false` to `eula=true`.

```[eula.txt]
#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).
#Mon Feb 06 10:57:19 MYT 2023
eula=true
```

After the change is saved, run `run.bat` again and this time the server should be up and running while generating a world with a few more files within the directory as shown.

```[Directory Structure]
├─ libraries/
│  └─ ...
├─ logs/
│  └─ ...
├─ versions/
│  └─ ...
├─ world/
│  └─ ...
├─ banned-ips.json
├─ banned-players.json
├─ eula.txt
├─ ngrok.exe
├─ ops.json
├─ run.bat
├─ server.jar
├─ server.properties
├─ usercache.json
└─ whitelist.json
```

If the Minecraft server has been successfully started, it should display the port that it is running on.

```
[11:01:11] [Server thread/INFO]: Starting Minecraft server on *:25565
```

> To enable cracked versions of Minecraft client to join the server, we will need to disable the authentication by disabling the `online-mode` in the `server.properties` file.

Now, you should be able to connect to the server by having `localhost` as the server address.

<v-img src="host-minecraft-server-from-local/localhost.png" alt="Joining localhost"></v-img>

<v-img src="host-minecraft-server-from-local/joinable-localhost.png" alt="localhost joinable"></v-img>

To stop the server, type `stop` to the server command prompt and it will save all the data and exit safely.

```
[14:17:39] [Server thread/INFO]: Done (2.857s)! For help, type "help"
stop
[14:17:45] [Server thread/INFO]: Stopping the server
[14:17:45] [Server thread/INFO]: Stopping server
[14:17:45] [Server thread/INFO]: Saving players
[14:17:45] [Server thread/INFO]: Saving worlds
[14:17:46] [Server thread/INFO]: Saving chunks for level 'ServerLevel[world]'/minecraft:overworld
[14:17:47] [Server thread/INFO]: Saving chunks for level 'ServerLevel[world]'/minecraft:the_end
[14:17:47] [Server thread/INFO]: Saving chunks for level 'ServerLevel[world]'/minecraft:the_nether
[14:17:47] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved
[14:17:47] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved
[14:17:47] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved
[14:17:47] [Server thread/INFO]: ThreadedAnvilChunkStorage: All dimensions are saved
```

## Expose Server to Public

Next, add the ngrok authentication token to the ngrok installed in the server directory. There should be a command to connect your ngrok account on the dashboard after signed in.

```
ngrok config add-authtoken <your-token-here>
```

After that run the following ngrok command to expose the server to the public.

```
ngrok tcp --region us 25565
```

The command expose the port `25565` which is the local Minecraft server run on with the designated region for routing. List of available regions can be found [here](https://ngrok.com/docs/ngrok-agent/config#region), choose one that is closest to your geographical location.

The output below shows the ngrok is up and running.

```
ngrok

Add Okta or Azure to protect your ngrok dashboard with SSO: https://ngrok.com/dashSSO
Session Status                online
Account                       <your-username> (Plan: Free)
Version                       3.1.1
Region                        United States (us)
Latency                       23ms
Web Interface                 http://127.0.0.1:4040
Forwarding                    tcp://0.tcp.ap.ngrok.io:13768 -> localhost:25565
Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

What's left to do is just to copy the ngrok url and give it to your friends to join the adventure!

<v-img src="host-minecraft-server-from-local/ngrok.png" alt="Joining with ngrok"></v-img>

<v-img src="host-minecraft-server-from-local/joinable-ngrok.png" alt="ngrok joinable"></v-img>

## Whitelisting

Since the server is publicly available to the entire internet, you wouldn't want some random strangers to be able to join your world and wreak havoc and ruin your day.

To do that, go to `server.properties` file and look for a field named `white-list` and set its value to `true`. After that, to whitelist a player, go to the running server command prompt and type the following to whitelist a player.

```
whitelist add <player-name>
```

A player that is not in the whitelist will be kicked immediately upon joining.

## Closing

In this tutorial, we've walk through how to setup a server hosted on our computer and made accessible to the public via ngrok. It is important to set a whitelist to prevent any unsolicited intruder from joining the server.

## Reference

- [How To Make A Minecraft Server For 1.19.3 - No Port Forwarding or Hamachi](https://www.youtube.com/watch?v=m-1hfPSKKKw)
