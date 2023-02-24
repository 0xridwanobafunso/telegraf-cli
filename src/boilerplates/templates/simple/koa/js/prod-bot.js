const { Telegraf } = require('telegraf')
const Koa = require('koa')
const { koaBody } = require('koa-body')
const dotenv = require('dotenv')
require('colors')

// register commands
const { registerCommands } = require('./registerCommands')

// load environment variables
dotenv.config({ path: __dirname + '/prod.env' })

/**
 * @description This is the entry point to our Telegraf bot
 *
 * @author `telegraf-cli`
 */
;(async () => {
  // create bot and koa server
  const bot = new Telegraf(process.env.BOT_TOKEN)
  const server = new Koa()

  // use koa request body parser
  server.use(koaBody())

  // create webhook
  const webhook = await bot.createWebhook({ domain: process.env.WEBHOOK })

  // attach webhook
  server.use((ctx, next) => webhook(ctx.req, ctx.res, next))

  bot.on('channel_post', (ctx, next) => {
    ctx.update.message = ctx.update.channel_post

    return next()
  })

  // register commands with Telegraf `bot`
  registerCommands(bot)

  // start server to listen on process.env.PORT
  server.listen(process.env.PORT, () =>
    console.log(`[PROD][Telegram] Bot started`.green.bold)
  )

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
