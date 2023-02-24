const { Telegraf } = require('telegraf')
const express = require('express')
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
  // create bot and express server
  const bot = new Telegraf(process.env.BOT_TOKEN)
  const server = express()

  // create webhook
  let webhook = await bot.createWebhook({ domain: process.env.WEBHOOK })
  server.use(webhook)

  // attach webhook
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
