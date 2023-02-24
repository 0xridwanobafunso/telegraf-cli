# Telegraf-CLI

![Telegraf CLI](https://github.com/0xridwanobafunso/telegraf-cli/blob/main/tcli-logo.png?raw=true 'Telegraf CLI')

## Introduction

Telegraf-CLI is a command-line interface tool designed to simplify the development process for developers who are working with the Telegraf library. The Telegraf library is a popular framework for building Telegram bots, and Telegraf-CLI provides developers with a streamlined way to generate boilerplate code for their projects and to generate bot commands.

With Telegraf-CLI, developers can save time and effort by automating the creation of basic project structures and boilerplate code. This means they can focus more on the development of their Telegram bots, rather than spending time setting up their development environment.

## Features

1. Generate Basic Project Structures
2. JavaScript Template/Boilerplate (**TypeScript** coming soon)
3. Work out of box with different Node.js server (**Express, Koa, Fastify**)
4. Development and Production Ready
5. More Coming...

## Installation

```bash
# through npm
$ npm i telegraf-cli
```

```bash
# through yarn
$ yarn add telegraf-cli
```

## Usage

Telegraf CLI can be used using `telegraf-cli` longhand or `tcli` shorthand.

```bash
$ telegraf-cli [command]
$ tcli [command]
```

### Available Commands

```bash
-y, --yes                   Create new telegraf template (default)
-n, --new [name]            Create new telegraf template
-c, --create:command [name] Create new telegraf bot command
-v, --version               Output the version number
-h, --help                  Output usage information
-u, --update                Update telegraf-cli version
```

### Example Usage

#### Example 1

```bash
# bootstrap project using the default template/boilerplate
$ tcli --yes

        ######## ######## ##       ########  ######   ########     ###    ########          ######  ##       ####
           ##    ##       ##       ##       ##    ##  ##     ##   ## ##   ##               ##    ## ##        ##
           ##    ##       ##       ##       ##        ##     ##  ##   ##  ##               ##       ##        ##
           ##    ######   ##       ######   ##   #### ########  ##     ## ######   ####### ##       ##        ##
           ##    ##       ##       ##       ##    ##  ##   ##   ######### ##               ##       ##        ##
           ##    ##       ##       ##       ##    ##  ##    ##  ##     ## ##               ##    ## ##        ##
           ##    ######## ######## ########  ######   ##     ## ##     ## ##                ######  ######## ####   v1.0.0
                                                                                                                    By Obafunso Ridwan A.

Generating Bot-f13038...
  √ #1 Generate telegraf bot project
  √ #2 Initialize a git repository
  √ #3 Install dependencies

STEP 1:  Run the following command(s)
1.  cd Bot-f13038

STEP 2:  Configure Bot-f13038 project
1.  For development - create `dev.env` file and paste the content inside `example.dev.env` into it.
2.  For production -  create `prod.env`` file and paste the content inside `example.prod.env` into it.
Open `dev.env` and `prod.env` and update your environments variables.

STEP 3:  Start Telegraf bot
1.  For development - npm run dev:bot
2.  For production -  npm run prod:bot

DONE
```

#### Example 2

```bash
# bootstrap project using one's preferred choice
$ tcli --new PizzaBot


        ######## ######## ##       ########  ######   ########     ###    ########          ######  ##       ####
           ##    ##       ##       ##       ##    ##  ##     ##   ## ##   ##               ##    ## ##        ##
           ##    ##       ##       ##       ##        ##     ##  ##   ##  ##               ##       ##        ##
           ##    ######   ##       ######   ##   #### ########  ##     ## ######   ####### ##       ##        ##
           ##    ##       ##       ##       ##    ##  ##   ##   ######### ##               ##       ##        ##
           ##    ##       ##       ##       ##    ##  ##    ##  ##     ## ##               ##    ## ##        ##
           ##    ######## ######## ########  ######   ##     ## ##     ## ##                ######  ######## ####   v1.0.0
                                                                                                                    By Obafunso Ridwan A.

Generating PizzaBot...
? Please choose which telegraf template to use? Simple
? Please choose which Node.js server to use? None
? Please choose which language to use? JavaScript
? Initialize a git repository? No
? Install dependencies? No
  √ #1 Generate telegraf bot project

STEP 1:  Run the following command(s)
1.  cd PizzaBot
2.  git init
3.  npm i

STEP 2:  Configure PizzaBot project
1.  For development - create `dev.env` file and paste the content inside `example.dev.env` into it.
2.  For production -  create `prod.env`` file and paste the content inside `example.prod.env` into it.
Open `dev.env` and `prod.env` and update your environments variables.

STEP 3:  Start Telegraf bot
1.  For development - npm run dev:bot
2.  For production -  npm run prod:bot

DONE
```

#### Example 3

```bash
# create bot command
$ tcli --create:command orderPizza

        ######## ######## ##       ########  ######   ########     ###    ########          ######  ##       ####
           ##    ##       ##       ##       ##    ##  ##     ##   ## ##   ##               ##    ## ##        ##
           ##    ##       ##       ##       ##        ##     ##  ##   ##  ##               ##       ##        ##
           ##    ######   ##       ######   ##   #### ########  ##     ## ######   ####### ##       ##        ##
           ##    ##       ##       ##       ##    ##  ##   ##   ######### ##               ##       ##        ##
           ##    ##       ##       ##       ##    ##  ##    ##  ##     ## ##               ##    ## ##        ##
           ##    ######## ######## ########  ######   ##     ## ##     ## ##                ######  ######## ####   v1.0.0
                                                                                                                    By Obafunso Ridwan A.

Creating orderPizza command...

[INFO] Command orderPizza successfully generated.

DONE
```

## Configurations

### Configure Telegraf-CLI Project

1.  For development - create `dev.env` file and paste the content inside `example.dev.env` into it.
2.  For production - create ` prod.env`` file and paste the content inside  `example.prod.env`into it.
Open`dev.env`and`prod.env` and update your environments variables.

## Start Bot

### Start Telegraf CLI bot

```bash
# for development
npm run dev:bot

# for production
npm run prod:bot
```

## Register Commands

To register a new command created using `tcli --create:command`, open `registerCommands.js` and register it as below.

```js
// assuming the new command is orderPizza
// import the new command
const { orderPizza } = require('./src/commands/orderPizza')

/**
 * @description
 *
 * @param {*} bot
 * @returns {void}
 */
exports.registerCommands = (bot) => {
  // register commands
  start(bot)

  // register the new command here
  orderPizza(bot)
}
```

## Contributors

Many thanks to all our contributors.

1. [Obafunso Ridwan Adebayo](https://github.com/0xridwanobafunso)

To contribute to this project, please check [CONTRIBUTING.md](https://github.com/0xridwanobafunso/telegraf-cli/blob/main/CONTRIBUTING.md).

## Changelog

- v1.0.0 Commit all source codes, release and published to NPM using GitHub Action.

## Versioning

I use [SemVer](https://semver.org/) for versioning.

## License

### MIT License

Copyright (c) 2020 obafunsoadebayo17@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
