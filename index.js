const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// Create a bot prefix
const prefix = '!';

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // Check if the message starts with the bot's prefix, if the message author is a bot and, if the message is in the bot's DMs
 if (!message.content.startsWith(prefix) || message.author.bot || message.channel instanceof Discord.DMChannel) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  // If the message is "!avatar". command + prefix = !avatar
  if (command === 'avatar') {
    // Send the user's avatar URL
    message.channel.send(message.author.displayAvatarURL());
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('TOKEN');
