const { channel, group, user } = require('../actions/start')

exports.start = (bot) => {
  return bot.command('start', async (ctx) => {
    // channel action
    await channel(ctx)

    // group action
    await group(ctx)

    // user action
    await user(ctx)
  })
}
