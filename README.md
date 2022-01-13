> ⚠️ The image manipulation commands using the AlexFlipNote's API are no longer working. Therefore you no longer need to use the `ALEXFLIPNOTE_API_KEY` for your bot.

![Naneko Logo](https://i.pinimg.com/736x/ce/67/88/ce67883c7962f637be17f6e9e1397661--anime-art-girl-kawaii-anime-girl.jpg)

<h1 align="center"> Naneko-2.0 </h1>
<p align="center">
<a href="https://github.com/Simpleboy353/REAPER-2.0/blob/main/LICENSE.md"><img alt="GitHub License" src="https://img.shields.io/github/license/Simpleboy353/REAPER-2.0?style=for-the-badge"></a>
<a href="https://github.com/Simpleboy353/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/Simpleboy353/REAPER-2.0?style=for-the-badge"></a> 
<a href="https://github.com/Simpleboy353/REAPER-2.0/network"><img alt="GitHub Forks" src="https://img.shields.io/github/forks/Simpleboy353/REAPER-2.0?style=for-the-badge"></a>
<a href="https://infinitybot.tk/support"><img alt="Support Server" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"></a>
</p>
<h3 align="center">Ein Mehrzweck-Discord-Bot mit vielen Funktionen!</h3>

---

## Requirements
- Discord.js v13 (`npm install discord.js@latest`)
- `applications.commands` Bereich für Ihren Bot im Entwicklerportal aktiviert (für Slash-Befehle).
- NodeJS v16.6 oder höher
- Grundkenntnisse in JS oder Discord.JS

## Haben Sie Vorschläge, was hinzugefügt werden könnte?
- **Hinterlassen Sie Ihre Vorschläge dann [hier](https://github.com/Simpleboy353/REAPER-2.0/discussions/138)!**

## Welche Funktionen bietet Naneko?

<details><summary>Verfügbare Funktionen</summary>

| Features             | Availability |
| -------------------- | ------------ |
| Anti-Link            |     ✅       |
| Autorole             |     ✅       |
| Auto-Mod             |     ✅       |
| Custom Prefix        |     ✅       |
| Permanent Database   |     ✅       |
| Welcomer             |     ✅       |
| Logging              |     ✅       |
| Menu(s)              |     ✅       |
| Slash Commands       |     ✅       |
| Rep System           |     ✅       |

</details>

<details><summary>Command Categories</summary>

| Commands Category      | Availability |
| ---------------------- | ------------ |
| Configuration          |     ✅       |
| Fun                    |     ✅       |
| Image                  |     ✅       |
| Info                   |     ✅       |
| Moderation             |     ✅       |
| Music                  |     ✅       |
| NSFW                   |     ✅       |
| Utilities              |     ✅       |

</details>

## Versions and Support Info

<details><summary>Detailed Versions Info</summary>

|              REAPER Versions                           | Support Status |
| ------------------------------------------------------ | -------------- |
| v7.2.0-stable (Rep System) (Current)                   |       Available       |
| v7.1.5-stable (Button controls for music) (Current)    |       Available       |
| v7.1.0-stable (Support for Activities)                 |       Available       |
| v7.0.0-stable (Music System)                           |       Seems okay to me!       |
| v6.7.5-alpha (Better Error Logging)                    |       Discontinued       |
| v6.7.0-beta (Slash Cmds, Thread Events)                |       Discontinued       |
| v6.6.0-beta (Logging, New UI for settings)             |       Discontinued       |
| v6.5.0-stable (V13 Support Added)                      |       Discontinued       |
| v6.3.0-stable (Anti-Link Support)                      |       Discontinued       |       
| v6.1.0-stable (Error Free Version)                     |       Discontinued       |
| v5.5.0-stable (Welcomer Added)                         |       Discontinued       |
| v5.0.0-beta (Autorole Added)                           |       Discontinued       |
| v4.9.0-alpha (Custom Prefix Added)                     |       Discontinued       |
| v4.4.0-alpha (Database Support Added)                  |       Discontinued       |

</details>

- **Überprüfen Sie weiterhin den Abschnitt [Releases](https://github.com/Simpleboy353/REAPER-2.0/releases), um die neuesten Informationen zu neuen Updates, Fehlerbehebungen usw. über das Repository zu erhalten.**
- **Die obigen Informationen umfassen Versionen mit nur `Major Updates` und nicht Versionen mit `Bug Fixes`**
- **`v6.1.0-stable` ist in der Liste enthalten, da diese Version die Behebung jedes Fehlers im Repository beinhaltet.**
- **Support wird nur für `Stable`- und `Beta`-Versionen und nicht für `Alpha`-Versionen bereitgestellt.**

---

## Einstieg
#### Erstelle einer Fork:
- 1). [Klicken Sie hier, um das Repository zu forken](https://github.com/XSaitoKungX/Naneko-2.0)
- 2). Öffnen Sie Ihr Terminal und geben Sie "git clone https://github.com/XSaitoKungX/Naneko-2.0.git" ein`
#### Installieren aller erforderlichen Pakete
- `npm install`
#### Starten des Bots
- `node .` or `node index` 

---

## Konfigurationen
- **Bearbeiten Sie die Datei `config.json` und geben Sie die erforderlichen Werte ein**
```json
{
  "OWNER_ID": "YOUR_ID_HERE",
  "BOT_TOKEN": "YOUR_BOT_TOKEN",
  "tenorAPI":"ZEEELJXAFQBN",
  "DEFAULT_PREFIX":"ENTER_YOUR_PREFIX_HERE",
  "mongoPass": "ENTER_YOUR_MONGODB_URL_HERE",
  "ERROR_LOGS_CHANNEL": "ADD_ERRORLOGS_CHANNEL_ID",
  "ALEXFLIPNOTE_API_KEY": "ADD_YOUR_API_KEY_HERE",
  "YT_COOKIE": "ADD_YOUR_COOKIE_HERE",
}
```
- **Um den `ALEXFLIPNOTE_API_KEY` zu erhalten, treten Sie dem [AlexFlipNote Discord-Server](https://discord.gg/mSPFqeMnJj) bei**
- **Sehen Sie sich [dieses Video](https://youtu.be/BPqJIl34gm8) an, um zu erfahren, wie Sie das `YT_COOKIE` erhalten**
- **Sie können eine beliebige Kanal-ID für `ERROR_LOGS_CHANNEL` verwenden, aber der Bot muss auf dem Server vorhanden sein, von dem Sie die ID auswählen.**
- **Alle Fehler, denen Ihr Bot ausgesetzt ist, werden im `ERROR_LOGS_CHANNEL` . protokolliert**
- **Der `mongoPass` muss eine `URL` sein**
- **Besuchen Sie die offizielle [MongoDB-Website](https://mongodb.com), um Ihren `mongoPass` zu erhalten**
- **Sehen Sie sich dieses Video an, um zu erfahren, wie Sie Ihren "mongoPass" erhalten:**
[![MongoDb Tutorial](http://img.youtube.com/vi/pf-8KA8td88/0.jpg)](http://www.youtube.com/watch?v=pf-8KA8td88 "MongoDB Tutorial")
- **Ändern Sie die `tenorAPI` nicht, sonst funktioniert der `gif`-Befehl nicht!**


---

## Contributing
- **Bevor Sie zu diesem Repository beitragen, lesen Sie unbedingt [CONTRIBUTIONS.md](https://github.com/Simpleboy353/REAPER-2.0/blob/master/CONTRIBUTIONS.md)**
- **Treten Sie unserem [Support- und Entwicklungsserver](https://infinitybot.tk/support) bei**
- **Treten Sie unserem [Community-Server](https://dsc.gg/infinity-support) bei**
- **Lade meinen Bot zu deinem Server ein, [Hier](https://dsc.gg/naneko)**

---

## ⭐ the Repo, wenn es Ihnen gut gefallen hat!

