require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1205641356714844170')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/watch?v=36QOSLuD-oU&list=RD36QOSLuD-oU&start_radio=1`)
        .setDetails(`𝟑𝐃 𝐎𝐛𝐛 𝐀𝐧𝐭𝐢𝐛𝐚𝐧`)
        .setName(`𝟑𝐃 𝐎𝐛𝐛 𝐀𝐧𝐭𝐢𝐛𝐚𝐧`)
        .setState(`| 𝐏𝐚𝐧𝐞𝐥 𝐆𝐚𝐧𝐠 𝐗 𝐂𝐡𝐞𝐚𝐭`)
        .setParty({
            max: 777,
            current: 777,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:external/NhPE3TX5JYdqITIE0uzQ_SC5Lgm8WPJFqWu2Y2LxziA/https/i.pinimg.com/originals/7d/45/ac/7d45ac5a62778a9ace74140a72832c65.gif`)
        .setAssetsLargeText(`𝐘𝟏𝟐`)
        .setAssetsSmallImage(`mp:external/DK34QEU56g3unxTpfXMALh5x86tjupEnAkHs--OpTGU/https/i.pinimg.com/originals/2d/05/f9/2d05f954e1d20bad79c4e50ea61df2c6.gif`)
        .setAssetsSmallText(`𝐊𝐈𝐍𝐆`)
        .addButton(`Gang X Cheat`, `https://discord.gg/x2rQbydGbW`)
        .addButton(`Gang X Cheat`, `https://discord.gg/x2rQbydGbW`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);