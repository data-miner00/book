---
title: Hosting a Minecraft Server Locally
subtitle: A thorough guide to setup a working Minecraft server locally with ngrok for free
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
updatedAt: 2023-07-15T13:17:10.163Z
createdAt: 2023-02-06T13:40:58.648Z
---

Hosting a Minecraft server can be expensive for amateur players. Free services out there _suck_ as they can lag the hell out of you whenever they please. Moreover, the saved files are not secured as you might find out that your endearing Minecraft world has been _erased_ entirely from your account, from the hard disk of the server and have no other ways to recover. All the painstaking effort, years of grinding and sanity put into it gets obliterated.

The only solution to all these ordeal is to host one yourself. This article will provide the only guidance you need to do just that and I can guarantee it won't disappoints.

## Requirements

For everything to work, there are a couple of software and tools that must be installed before hand.

### Java

The first and the most crucial component to be installed is **Java**. In brief, Java is a programming language as well as a platform that executes the applications written in the Java language. Look it up about [Java](https://www.java.com/en/download/help/whatis_java.html) if interested.

Usually, Java is installed along with the Minecraft Launcher as Minecraft Java Edition is dependent on, of course, Java. Verify that Java is installed by typing `java --version` in the command prompt and it should result as the following output.

```
java 17.0.1 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)
```

### Minecraft Server

The second item on the list is the Minecraft server. Go to the [official download page](https://www.minecraft.net/en-us/download/server) and download the required file from the download link that reads "Download minecraft_server.x.x.x.jar".

The `x.x.x` represents the **version** of Minecraft for the server. You will need to find the corresponding version of server file if you intend to host the server for older version of Minecraft.

**Rename** the file to just `server.jar` for ease of reference after it has been downloaded.

### ngrok

[ngrok](https://ngrok.com) is a simplified API-first _ingress-as-a-service_ that adds connectivity, security and observability to any apps with no code changes. ngrok allows us to create tunnel for the public to join our locally hosted Minecraft server quick, easy and most importantly, **free**.

Proceed to sign up for a free ngrok account and download the ngrok client from the dashboard. There should be a banner that contains links for the ngrok downloader for various OS. Download the version that is suitable for your operating system and _extract_ the `ngrok.exe` file from the zip file to anywhere in your computer.

## Setting up Server Directory

Next, create an empty directory anywhere on your computer that will serve as the folder that contains everything the Minecraft server as well as the Minecraft save files. Copy/move the `server.jar` file and the extracted `ngrok.exe` to the current directory.

Create a batch file named `run.bat` on the same directory and open it with any text editor. Fill in the following contents that will spin up the server when executed.

```bat[run.bat]
java -Xmx1024M -Xms1024M -jar server.jar nogui
PAUSE
```

The number `1024` indicates the RAM in Megabytes that the server is allocated from your computer. If you plan to give the server 2GB of RAM instead, simply multiply 1024 by 2 and replace the numbers.

> Caution: Running a server is quite _resource intensive_ and hence you will need to make sure you have enough RAM and a decent CPU/GPU before hosting one. If not, it certainly will impact the overall gaming experience with unbearable lags.

The server directory will now look like this, with 3 files inside it.

```[Directory Structure]
├─ ngrok.exe
├─ run.bat
└─ server.jar
```

## Host Locally

### Execute `run.bat`

Next, execute the `run.bat` file by double clicking on it. During first execution, the script will _exit_ with a log saying that it failed to load the `eula.txt`. This is expected and will get back to that in a bit.

Now, new files and folders are generated. The content should match the directory structure displayed below.

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

### Agree to EULA

Open up `eula.txt` and search for a property named `eula` and change its value from `false` to `true`. The contents should be similar to what is shown below.

```[eula.txt]
#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).
#Mon Feb 06 10:57:19 MYT 2023
eula=true
```

Save the file and close.

### Execute `run.bat` Second Time

After the change is saved, run `run.bat` again and this time the server should be up and running while generating a brand new world with a few more files within the directory as shown.

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

If the Minecraft server has been successfully started, it should display the port that it is running on. Usually is will be `25565`.

```
[11:01:11] [Server thread/INFO]: Starting Minecraft server on *:25565
```

> To enable **cracked versions** of Minecraft client to join the server, we will need to disable the authentication by disabling the `online-mode` in the `server.properties` file.

Now, the server can be joined with `localhost` as its address.

<v-img src="host-minecraft-server-from-local/localhost.png" alt="Joining localhost"></v-img>

<v-img src="host-minecraft-server-from-local/joinable-localhost.png" alt="localhost joinable"></v-img>

To stop the server, type `stop` to the server command prompt and it will save all the data and exit safely. **Make sure** to do this every time when shutting down the server or else any progress that's made on the session will be **lost**.

Here are some sample logs when shutting down the server.

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

Next, add the ngrok authentication token to the ngrok installed in the server directory. There should be a command to connect your ngrok account on the dashboard after signed in as shown below.

```
ngrok config add-authtoken <your-token-here>
```

Create a file named `run-ngrok.bat` with the following command.

```[run-ngrok.bat]
ngrok tcp --region us 25565
PAUSE
```

The command expose the port `25565` which is the local Minecraft server run on with the designated region for routing.choose one that is closest to your geographical location. Here is the list of [available regions](https://ngrok.com/docs/ngrok-agent/config#region) for reference.

Save the changes and exit the file. Execute it by double click on and it should now expose your local Minecraft server to the public. The output below shows the ngrok is up and running.

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

Copy the TCP URL in the `Forwarding` property and give it to your friends to join the adventure. Take note that the port will _change_ every time when opening a new session and will need to update whoever that will be joining that particular session.

<v-img src="host-minecraft-server-from-local/ngrok.png" alt="Joining with ngrok"></v-img>

<v-img src="host-minecraft-server-from-local/joinable-ngrok.png" alt="ngrok joinable"></v-img>

## Whitelisting

Since the server is publicly available to the entire internet, you wouldn't want some random strangers to be able to join your world to wreak havoc and ruin your day.

To do that, go to `server.properties` file and look for a field named `white-list` and set its value to `true`. After that, to whitelist a player, go to the running server command prompt and type the following to whitelist a player.

```
whitelist add <player-name>
```

A player that is not in the whitelist will be kicked immediately upon joining.

## Closing

This article walks through how to set up a self-hosted server and made it accessible to the public via ngrok. It is important to **set a whitelist** to prevent any unsolicited intruder from entering the server.

## Reference

- [How To Make A Minecraft Server For 1.19.3 - No Port Forwarding or Hamachi](https://www.youtube.com/watch?v=m-1hfPSKKKw)
