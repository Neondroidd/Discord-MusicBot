module.exports = {
  Admins: ["902155150620262472", "216512231679066114"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/ugwAf7TSS8", //Support Server Link
  Token:
    process.env.Token ||
    "ODk0MjExMjkwMTgzMTEwNzA2.YVmtKQ.BSjrwUD-ngSfY054dpHxHw5KmFY", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "894211290183110706", //Discord Client ID
  ClientSecret:
    process.env.Discord_ClientSecret || "f9AsAsoBYI0WZKAa85I0JGxzAL84JGYO", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Miku is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website:
    process.env.Website || "https://Sayu-bot-music-discord.neonddroid.repl.co", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: "https://Sayu-bot-music-discord.neonddroid.repl.co", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "main", //- Used for indentifier. You can set this to whatever you want.
    host: "lavalink.oops.wtf", //- The host name or IP of the lavalink server.
    port: 2000, // The port that lavalink is listening to. This must be a number!
    pass: "www.freelavalink.ga", //- The password of the lavalink server.
    secure: false, // Set this to true if the lavalink uses SSL. if not set it to false.
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID:
      process.env.Spotify_ClientID || "70e3e3c6e24e47af81970e42b2215e18", //Spotify Client ID
    ClientSecret:
      process.env.Spotify_ClientSecret || "bfa9a2cc9094492f9e95b193fe2fd0f6", //Spotify Client Secret
  },
};
