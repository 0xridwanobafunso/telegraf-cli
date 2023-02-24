// import commands
const { start } = require('./src/commands/start')

/**
 * @description
 *
 * @param {*} bot
 * @returns {void}
 */
exports.registerCommands = (bot) => {
  // register commands
  start(bot)
}
