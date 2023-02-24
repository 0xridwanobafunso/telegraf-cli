/**
 * @function channel
 * @description
 * @param {*} ctx
 */
exports.channel = async (ctx) => {
  if (Object.keys(ctx.update).includes('channel_post')) {
    // channed id
    // let { id } = ctx.update.message.chat

    await ctx.reply(
      "[Channel] Hey there. I'm Tunde, a bot made with Telegraf and Telegraf-CLI"
    )
  }
}

/**
 * @function group
 * @description
 * @param {*} ctx
 */
exports.group = async (ctx) => {
  if (ctx.update.message.chat.type == 'group')
    await ctx.reply(
      "[Group] Hey there. I'm Tunde, a bot made with Telegraf and Telegraf-CLI"
    )
}

/**
 * @function user
 * @description
 * @param {*} ctx
 */
exports.user = async (ctx) => {
  if (ctx.update.message.chat.type == 'private')
    await ctx.reply(
      "[Private/DM] Hey there. I'm Tunde, a bot made with Telegraf and Telegraf-CLI"
    )
}
