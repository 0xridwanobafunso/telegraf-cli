import 'colors'

/**
 * @class Console
 * @description
 */
export class Console {
  /**
   * @method aboutMsg
   * @description
   * @returns {void}
   */
  static aboutMsg(): void {
    console.log(
      `                                               
        ######## ######## ##       ########  ######   ########     ###    ########          ######  ##       #### 
           ##    ##       ##       ##       ##    ##  ##     ##   ## ##   ##               ##    ## ##        ##  
           ##    ##       ##       ##       ##        ##     ##  ##   ##  ##               ##       ##        ##  
           ##    ######   ##       ######   ##   #### ########  ##     ## ######   ####### ##       ##        ##  
           ##    ##       ##       ##       ##    ##  ##   ##   ######### ##               ##       ##        ##  
           ##    ##       ##       ##       ##    ##  ##    ##  ##     ## ##               ##    ## ##        ##  
           ##    ######## ######## ########  ######   ##     ## ##     ## ##                ######  ######## ####   v1.0.0
                                                                                                                    By Obafunso Ridwan A.
          `.cyan
    )
  }

  /**
   * @method helpMsg
   * @description
   * @returns {void}
   */
  static helpMsg(): void {
    console.log(`
        Usage: 
          - telegraf-cli [command]
          - tcli [command]

        Commands:
          -y, --yes                   Create new telegraf template (default)
          -n, --new [name]            Create new telegraf template
          -c, --create:command [name] Create new telegraf bot command 
          -v, --version               Output the version number 
          -h, --help                  Output usage information
          -u, --update                Update telegraf-cli version
    `)
  }

  /**
   * @method versionMsg
   * @description
   * @returns {void}
   */
  static versionMsg(): void {
    console.log('Telegraf CLI v1.0.0')
  }

  /**
   * @method generatingMsg
   * @description
   * @param botName
   * @returns {void}
   */
  static generatingMsg(botName: string): void {
    console.log(`Generating ` + `${botName}`.green.bold + `...`)
  }

  /**
   * @method generatedMsg
   * @description
   * @param botName
   * @param git
   * @param dependencies
   */
  static generatedMsg(
    botName: string,
    git: boolean,
    dependencies: boolean
  ): void {
    console.log('\n%s Run the following command(s)', 'STEP 1: '.green.bold)
    console.log(`1.  cd ${botName}`.cyan.bold)
    if (!git) console.log('2.  git init'.cyan.bold)
    if (!dependencies) console.log('3.  npm i'.cyan.bold)

    console.log(`\n%s Configure ${botName} project`, 'STEP 2: '.green.bold)
    console.log(
      '1.  For development - create `dev.env` file and paste the content inside `example.dev.env` into it.'
        .cyan.bold
    )
    console.log(
      '2.  For production -  create `prod.env`` file and paste the content inside `example.prod.env` into it.'
        .cyan.bold
    )
    console.log(
      'Open `dev.env` and `prod.env` and update your environments variables.'
        .cyan.bold
    )

    console.log('\n%s Start Telegraf bot', 'STEP 3: '.green.bold)
    console.log(`1.  For development - npm run dev:bot`.cyan.bold)
    console.log(`2.  For production -  npm run prod:bot`.cyan.bold)
  }

  /**
   * @method creatingCommandMsg
   * @param commandName
   * @description
   * @returns {void}
   */
  static creatingCommandMsg(commandName: string): void {
    console.log('Creating ' + commandName.green.bold + ' command...')
  }

  /**
   * @method commandGeneratedMsg
   * @param commandName
   * @description
   * @returns {void}
   */
  static commandGeneratedMsg(commandName: string): void {
    console.log(
      '\n[INFO] Command ' + commandName.green.bold + ' successfully generated.'
    )
  }

  /**
   * @method updatingMsg
   * @description
   * @returns {void}
   */
  static updatingMsg(): void {
    console.log(`Updating Telegraf CLI...`)
  }

  /**
   * @method doneMsg
   * @description
   * @returns {void}
   */
  static doneMsg(): void {
    console.log('\nDONE'.green.bold)
  }
}
