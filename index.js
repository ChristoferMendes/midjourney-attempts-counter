import { Client } from 'discord.js';
import { config } from 'dotenv';

config()

const client = new Client({ intents: ['Guilds', 'GuildMessages', 'GuildMessageReactions', 'GuildMessageTyping'] });

let count = 29;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
  const { author, nonce } = msg;
  
  const midJourneyNotFinished = nonce !== null
  const isNotAMidjourneyMessage = author.username !== 'Midjourney Bot'

  if (isNotAMidjourneyMessage || midJourneyNotFinished) return;
  count++;

  msg.channel.send(`Images generated: ${count}`)
})

client.login(process.env.BOT_TOKEN);
