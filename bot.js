const { translate } = require('@vitalets/google-translate-api');
const {Telegraf}  = require('telegraf')


const bot = new Telegraf('6779803321:AAF1MSCqv5wUyn0ZxTVjp3FTBv0eYoDHkC8')

bot.start(ctx=>ctx.reply("Tarjima botimizga hush kelibsiz !!!"))

bot.on('text', async (ctx)=>{
    try {
        
        const textMessage = ctx.message.text;

        const {text} = await translate(textMessage, {from:"uz", to:"eng"})

        await ctx.reply(text)

    } catch (error) {
        await ctx.reply(JSON.stringify(error))
    }
})
bot.launch()