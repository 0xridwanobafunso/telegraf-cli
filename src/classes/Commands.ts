import arg from 'arg'

import { Console } from './Console'
import { Helpers } from './Helpers'

/**
 * @class Commands
 * @description
 */
export class Commands {
  /**
   * @method new
   * @description
   * @param parsed
   * @returns {Promise<void>}
   */
  static async yes(): Promise<void> {
    // random bot name
    let botName = Helpers.randomBotName()

    // print message
    Console.generatingMsg(botName)

    // run command (--yes) tasks
    await Helpers.runTasks(
      {
        template: 'Simple',
        server: 'Express',
        language: 'JavaScript',
        git: true,
        dependencies: true,
      },
      botName
    )

    // print message
    Console.generatedMsg(botName, true, true)
  }

  /**
   * @method new
   * @description
   * @param parsed
   * @returns {Promise<void>}
   */
  static async new(parsed: arg.Result<any>): Promise<void> {
    // print message
    Console.generatingMsg(parsed['--new'])

    // questions to prompt
    const { template, server, language, git, dependencies } =
      await Helpers.promptsForNewCMD()

    // run command (--new) tasks
    await Helpers.runTasks(
      {
        template,
        server,
        language,
        git,
        dependencies,
      },
      parsed['--new']
    )

    // print message
    Console.generatedMsg(parsed['--new'], git, dependencies)
  }

  /**
   * @method cmd
   * @description
   * @returns {Promise<void>}
   */
  static async cmd(parsed: arg.Result<any>): Promise<void> {
    // print message
    Console.creatingCommandMsg(parsed['--create:command'])

    // generate command files
    await Helpers.generateCommandFiles(parsed['--create:command'])

    // pring message
    Console.commandGeneratedMsg(parsed['--create:command'])
  }

  /**
   * @method version
   * @description
   * @returns {void}
   */
  static version(): void {
    // print message
    Console.versionMsg()
  }

  /**
   * @method help
   * @description
   * @returns {void}
   */
  static help(): void {
    // print message
    Console.helpMsg()
  }

  /**
   * @method update
   * @description
   * @returns {Promise<void>}
   */
  static async update(): Promise<void> {
    // print message
    Console.updatingMsg()

    // questions to prompt
    const runUpdate = await Helpers.promptsForUpdateCMD()

    // update here
    if (runUpdate) {
    }
  }
}
