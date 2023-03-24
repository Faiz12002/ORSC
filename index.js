/*GENERAL INFO 
> EMBED COLOR: 036a71
> EMBED COLORLESS COLOR: 36393F
> ORSC logo link : "https://i.imgur.com/LrovLmn.png"
*/

// BASE IMPORTS AND CONFIGURATIONS =======
import { config } from "dotenv";
import { channelLink, Client, EmbedBuilder, Events, GatewayIntentBits, InteractionCollector, Message, ReactionCollector, Routes, SlashCommandBuilder } from "discord.js"; 
import { REST } from '@discordjs/rest'
config();
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessages]});
const BOT_TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.ID;
// END OF BASE IMPORTS AND CONFIGURATIONS ====================

//LOGIN =================
client.login(BOT_TOKEN);
client.on('ready', () => {
    console.log(`[${client.user.id}]:${client.user.tag} logged in successfully!`);
    });
// END OF LOGIN =======================


//EMBEDS ====
const spaceEmbed = new EmbedBuilder().setColor('36393F').setDescription(
    `
    
    ⏬

    `
)
const welcomeEmbed = new EmbedBuilder().setDescription(
    `Greetings to all members of the OSRC Community server!

    We're glad you've joined us on our discord server.`
).setColor('036a71').setThumbnail('https://i.imgur.com/LrovLmn.png')
const rulesImgEmbed = new EmbedBuilder().setColor('036a71').setImage('https://i.imgur.com/D5ooPSI.png');
const rulesEmbed = new EmbedBuilder().setColor('36393F').setDescription(
    `➡️ As a Discord server you should follow Discord's [Terms of Service](https://discord.com/terms) and [Guidlines](https://discord.com/guidelines)
    
    ➡ Avoid any form of personal attacks, harassment or sharing personal information of others. Be respectful towards everyone.
    
    ➡️ Do not share or request any materials that may be illegal, violate terms of service or considered offensive.
    
    ➡️ Any NSFW content is not allowed to be shared on the server.
    
    ➡️ Discussions on politics and religion are not allowed.
    
    ☑️  Just be cool and share with us your passions`
).setFooter({text:'ORSC', iconURL:'https://i.imgur.com/LrovLmn.png'})
const socialsEmbed = new EmbedBuilder().setColor('036a71').setImage('https://i.imgur.com/4bwPpg2.png');
const mailEmbed = new EmbedBuilder().setDescription(
    `Contact us: crorsclub@gmail.com
    > NOTE: *This is not ORSC core server*
    `
).setColor('036a71').setFooter({text:'ORSC', iconURL:'https://i.imgur.com/LrovLmn.png'})

//END OF EMBEDS =====

// MESSAGE CREATE EVENT ====
client.on('messageCreate', msg => {
    if (msg.content === 'show') {
        client.channels.cache.get('1052009826307280998').send(
            {
                embeds:[welcomeEmbed, spaceEmbed, rulesImgEmbed, rulesEmbed, spaceEmbed,socialsEmbed],
                components: [
                    {
                        type:1,
                        components:[
                            {
                                type:2,
                                label:'YouTube',
                                style:5,
                                url:'https://www.youtube.com/@OperationsResearchSocietyClub',
                                emoji: {
                                    name:'ytb',
                                    id:'1068986449749360711',
                                },                                
                            },
                            {
                                type:2,
                                label:'Instagram',
                                style:5,
                                url:'https://www.instagram.com/orsocietyclub/',
                                emoji: {
                                    name:'ig',
                                    id:'1068985760931397693',
                                },                                
                            },
                            {
                                type:2,
                                label:'Facebook',
                                style:5,
                                url:'https://www.facebook.com/orsocietyclub',
                                emoji: {
                                    name:'fb',
                                    id:'1068985507897426010',
                                },                                
                            },
                            {
                                type:2,
                                label:'LinkedIn',
                                style:5,
                                url:'https://www.linkedin.com/company/orsocietyclub/',
                                emoji: {
                                    name:'lIn',
                                    id:'1068986398385909902',
                                },                                
                            },
                            {
                                type:2,
                                label:'TikTok',
                                style:5,
                                url:'https://www.tiktok.com/@opertions_research',
                                emoji: {
                                    name:'tktk',
                                    id:'1068985907883020288',
                                },                                
                            },
                        ]
                    }
                    ],
                    
            });

    }
    else if (msg.content === 'show1') {
        client.channels.cache.get('1052009826307280998').send(
            {
                embeds:[spaceEmbed,mailEmbed],
            }
        )
    }

})
//END OF MESSAGE CREATE EVENT ========

// COMMANDS LIST
const commands = [];
// END OF COMMANDS LIST ============

//DECLARING REST API FOR COMMANDS
const rest = new REST({version:'10'}).setToken(BOT_TOKEN);
console.log('Started refreshing application (/) commands.');
rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
console.log('Successfully reloaded application (/) commands.');
// END OF DECLARING REST API FOR COMMANDS =========== 
