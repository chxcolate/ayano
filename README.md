# Ayano

Ayano is a discord bot, founded by [A1shi](https://github.com/chxcolate/).  She is a general purpose bot, but she tries to go above and beyond in everything she has to do.

Ayano will be guaranteed to have these features:

- Moderation (automod, censoring, kick & ban, etc.)
- Private Voice Channels (Create a category, and a voice channel in that category, do some commands, and whenever a user joins the "lobby", they get automatically put into their own private voice channel, and can invite others into it. (also allows for roles to always join certain voice channels) )
- Fun Commands
- Custom Configuration for every server she's in.

*Ayano will most likely also get an official website.*


## Ideas:

- Use Discord.JS in combination with either a library created by us or a library from someone else to code Ayano
- Per-Server Configuration through the website
- Getting a VPS in order to host Ayano 24/7
- Getting a custom domain for Ayano's website (ayano.gg, ayano.sh, aya.no (taken, can contact owners), etc.)
- Website
  - Uses a web framework/library that delivers amazing stability, performance, and speed. (stability = not erroring out much, performance = how good it runs when loaded, speed = how fast can we download the website on a bad network)
  - Is able to use custom routing (ayano.gg/configure/:guild)
  - Uses a nice CSS Framework in order to deliver a beautiful website
  - Is a PWA
- Bot
  - Moderation
    - Automod - Allows for certain things to be automatically detected and warned/kicked/banned for (spam, raids, etc.)
    - Censoring - Allows for censoring of certain words, and configurable to either edit the original message silently, or send a response (and warn/kick/ban them either way (also configurable) ).
    - Kick & Ban: Basic Warning, Kicking, and Banning System. (Customizable)
  - Private Voice Channels
    - Easy to setup
    - Easy to create (Join a VC, you get your own private VC)
    - Can Invite other people to VC
    - Allows for certain **roles** to be able to always access private VCs.
  - Fun Commands
    - Petting (">pat @A1shi#2021" results in an embed with an image of an anime character getting pet)
    - Memes
    - Other things
    - Hugs
  - Looks **_pretty_**
  - Economy
    - Create a database (idk where) that holds the amount of "Currency" (virtual, has no meaning besides purchasing stuff like custom roles or whatever) that can either be mapped to:
      - A person in a server (money doesn't transfer between servers)
      - A person (money transfers between servers)
    - Configurable to allow the buying of certain roles or perks using this "currency".
  - Leveling
    - Permission Leveling
      - Map certain roles to different permission levels, and give each command a specific permission level in order to be used
      - Map the command's permission levels. (A moderator only command can be used by moderators & above, and a person who bought the role that has specific access to it.)
      - Map what the default permission levels for commands are (moderator is permission level 50 by default, but can be changed to 25)
      - Configurable
    - Server Leveling
      - Store a level on specific players in a database (per server) & use that level to grant perks or unlock things. (You send 2500 messages, you get level 25)
      - XP configuration
      - Configurable
      - Can change what roles you get per level
      - *Give currency when you level up?*
  - Bot Configuration
    - Configurable Prefix
    - Configurable Name (Using nicknames, will force the nickname of the bot to be the desired nickname. Default is "Ayano".)
- Github Bot
  - After a certain amount of time, if the bot grows popular, we will add a github version containing:
  - A way to communicate with the discord bot (per-server)
  - Configuration using the website (again, but this time "ayano.gg/configure/github/:repoOwner/:repoName")
  - *More to come soon, will be decided if we reach close to this point.
