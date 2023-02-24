import { Arguments } from './Arguments'
import { Console } from './Console'
import { Commands } from './Commands'

/**
 * @class CLI
 * @description
 *
 * @author
 */
export class CLI {
  /**
   * @method start
   * @description
   * @param args
   * @returns {Promise<void>}
   */
  static async start(args: string[]): Promise<void> {
    //----------------------------------------------------------------
    //------------------- TELEGRAF-CLI MSG  --------------------------
    //----------------------------------------------------------------

    // print message
    Console.aboutMsg()

    //----------------------------------------------------------------
    //------------------- PARSE ARGUMENTS  ---------------------------
    //----------------------------------------------------------------

    // parse arguments
    let parsed = Arguments.parser(args)

    //----------------------------------------------------------------
    //----------------- EXECUTE COMMANDS  ----------------------------
    //----------------------------------------------------------------

    // 1. execute command: --yes
    if (parsed['--yes']) await Commands.yes()

    // 1. execute command: --new
    if (parsed['--new']) await Commands.new(parsed)

    // 2. execute command: --create:command
    if (parsed['--create:command']) await Commands.cmd(parsed)

    // 3. execute command: --version
    if (parsed['--version']) Commands.version()

    // 4. execute command: --help
    if (parsed['--help']) Commands.help()

    // 5. execute command: --update
    if (parsed['--update']) await Commands.update()

    // print message
    Console.doneMsg()
  }
}
