import inquirer from 'inquirer'
import Listr from 'listr'
import { projectInstall } from 'pkg-install'

import childProcess from 'node:child_process'
import { promisify } from 'util'

import { randomBytes } from 'crypto'
import * as fs from 'fs/promises'
import path from 'path'

import { IAnswersForNewCMD } from '../interfaces/IAnswersForNewCMD'

/**
 * @class Helpers
 * @description
 */
export class Helpers {
  /**
   * @method randomBotName
   * @returns {string}
   */
  static randomBotName(): string {
    return 'Bot-' + randomBytes(3).toString('hex')
  }

  /**
   * @method promptsForNewCMD
   * @description
   * @returns {Promise<IAnswersForNewCMD>}
   */
  static async promptsForNewCMD(): Promise<IAnswersForNewCMD> {
    // questions to prompt
    let questions = [
      {
        type: 'list',
        name: 'template',
        message: 'Please choose which telegraf template to use?',
        choices: ['Simple', 'Simple with keyboard'],
        default: 'Simple',
      },
      {
        type: 'list',
        name: 'server',
        message: 'Please choose which Node.js server to use?',
        choices: ['None', 'Express', 'Koa', 'Fastify'],
        default: 'Express',
      },
      {
        type: 'list',
        name: 'language',
        message: 'Please choose which language to use?',
        choices: ['JavaScript', 'TypeScript'],
        default: 'JavaScript',
      },
      {
        type: 'confirm',
        name: 'git',
        message: 'Initialize a git repository?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'dependencies',
        message: 'Install dependencies?',
        default: true,
      },
    ]

    const { template, server, language, git, dependencies } =
      await inquirer.prompt(questions)

    return { template, server, language, git, dependencies }
  }

  /**
   * @method promptsForUpdateCMD
   * @description
   * @returns {Promise<boolean>}
   */
  static async promptsForUpdateCMD(): Promise<boolean> {
    // questions to prompt
    let questions = [
      {
        type: 'confirm',
        name: 'update',
        message: 'Are you sure to proceed?',
        default: false,
      },
    ]

    const { update } = await inquirer.prompt(questions)

    return update
  }

  /**
   * @method mkBotDir
   * @description
   * @param template
   * @param server
   * @param language
   * @param botName
   *
   * @returns {Promise<void>}
   */
  static async mkBotDir(
    template: string,
    server: string,
    language: string,
    botName: string
  ): Promise<void> {
    // format
    let _template = template.toLowerCase().split(' ').join('-')
    let _server = server.toLowerCase()

    // template/boilerplate source folder
    let templateLocation =
      language == 'TypeScript'
        ? `../boilerplates/templates/${_template}/${_server}/ts`
        : `../boilerplates/templates/${_template}/${_server}/js`

    // make directory
    await fs.mkdir(path.join(process.cwd(), botName))

    // copy boilerplate into dest folder
    await fs.cp(
      path.join(__dirname, templateLocation),
      path.join(process.cwd(), botName),
      {
        recursive: true,
      }
    )
  }

  /**
   * @method generateCommandFiles
   * @description
   * @param commandName
   *
   * @returns {Promise<void>}
   */
  static async generateCommandFiles(commandName: string): Promise<void> {
    // read telegraf-cli.json and destructure { language }
    let { language } = JSON.parse(
      await fs.readFile(path.join(process.cwd(), '/telegraf-cli.json'), {
        encoding: 'utf8',
      })
    )

    // command name
    let _commandName = commandName.toLowerCase()

    // format if `-` was included
    if (_commandName.includes('-'))
      _commandName = _commandName.split('-').join('')

    // action boilerplate location
    let actionLocation =
      language == 'TypeScript'
        ? `../boilerplates/create-command/ts/action.txt`
        : `../boilerplates/create-command/js/action.txt`

    // command boilerplate location
    let commandLocation =
      language == 'TypeScript'
        ? `../boilerplates/create-command/ts/command.txt`
        : `../boilerplates/create-command/js/command.txt`

    // read create-command/action boilerplate
    let _action = await fs.readFile(path.join(__dirname, actionLocation), {
      encoding: 'utf8',
    })

    // read create-command/command boilerplate
    let _command = await fs.readFile(path.join(__dirname, commandLocation), {
      encoding: 'utf8',
    })

    // format
    _action = _action.replaceAll('{_cmd}', _commandName)
    _command = _command.replaceAll('{_cmd}', _commandName)

    // write action file to the working directory /src/actions
    await fs.writeFile(
      path.join(process.cwd(), '/src/actions', `${_commandName}.js`),
      _action,
      {
        encoding: 'utf8',
      }
    )

    // write command file to the working directory /src/commands
    await fs.writeFile(
      path.join(process.cwd(), '/src/commands', `${_commandName}.js`),
      _command,
      {
        encoding: 'utf8',
      }
    )
  }

  /**
   * @method initGitRepo
   * @description
   * @param botName
   * @returns {Promise<void>}
   */
  static async initGitRepo(botName: string): Promise<void> {
    let execFile = promisify(childProcess.execFile)

    // execute
    await execFile('git', ['init'], {
      cwd: path.join(process.cwd(), botName),
    })
  }

  /**
   * @method installDependencies
   * @description
   * @param botName
   * @returns {Promise<void>}
   */
  static async installDependencies(botName: string): Promise<void> {
    // execute
    await projectInstall({
      cwd: path.join(process.cwd(), botName),
    })
  }

  /**
   * @method runTasks
   * @description
   * @param options
   * @param botName
   */
  static async runTasks(
    options: IAnswersForNewCMD,
    botName: string
  ): Promise<void> {
    // tasks
    let _tasks = [
      {
        title: '#1 Generate telegraf bot project',
        task: async () =>
          await Helpers.mkBotDir(
            options.template,
            options.server,
            options.language,
            botName
          ),
      },
    ]

    if (options.git) {
      _tasks.push({
        title: '#2 Initialize a git repository',
        task: async () => await Helpers.initGitRepo(botName),
      })
    }

    if (options.dependencies) {
      _tasks.push({
        title: '#3 Install dependencies',
        task: async () => await Helpers.installDependencies(botName),
      })
    }

    // create new listr object
    const tasks = new Listr(_tasks)

    // run task
    await tasks.run()
  }

  /**
   * @method updateTelegrafCLI
   * @description
   * @returns {Promise<void>}
   */
  static async updateTelegrafCLI(): Promise<void> {
    let execFile = promisify(childProcess.execFile)

    // execute
    await execFile(
      /^win/.test(process.platform) ? 'npm.cmd' : 'npm',
      ['install', 'telegraf-cli@latest', '-g'],
      {}
    )
  }

  /**
   * @method runTasks
   * @description
   * @returns {Promise<void>}
   */
  static async runUpdateTelegrafCLITasks(): Promise<void> {
    // create new listr object
    const tasks = new Listr([
      {
        title: '#1 Run update (npm install telegraf-cli@latest -g)',
        task: async () => await Helpers.updateTelegrafCLI(),
      },
    ])

    // run task
    await tasks.run()
  }
}
