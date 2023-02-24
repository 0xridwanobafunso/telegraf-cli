const { Telegraf } = require('telegraf')
const dotenv = require('dotenv')
require('colors')

// register commands
const { registerCommands } = require('./registerCommands')

// load environment variables
dotenv.config({ path: __dirname + '/dev.env' })

/**
 * @description
 *
 * @author
 */
;(async () => {
  const bot = new Telegraf(process.env.BOT_TOKEN)

  bot.on('channel_post', (ctx, next) => {
    ctx.update.message = ctx.update.channel_post

    return next()
  })

  // register commands with Telegraf `bot`
  registerCommands(bot)

  // see issue
  // https://github.com/telegraf/telegraf/issues/1749#issuecomment-1326816944
  console.log('[DEV][Telegram] Bot started.'.green.bold)

  // launch telegram bot
  await bot.launch()

  // telegraf graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
})()

// see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode
process.on('unhandledRejection', (reason, promise) =>
  console.log(reason.message)
)
