# Getting Started with Telegraf-CLI

This project was bootstrapped with [Telegraf-CLI](https://github.com/0xridwanobafunso/telegraf-cli)

Telegraf-CLI is a command-line interface tool designed to simplify the development process for developers who are working with the Telegraf library. The Telegraf library is a popular framework for building Telegram bots, and Telegraf-CLI provides developers with a streamlined way to generate boilerplate code for their projects and to generate bot commands.

## Installation

```
$ npm i
```

## Configuration

1. For development - Create `dev.env` file and paste the content inside `example.dev.env` into it.
2. For production - Create `prod.env` file and paste the content inside `example.prod.env` into it.

Open `dev.env` and `prod.env` and update your environments variables.

### Development Config

```
# get your bot token from t.me/BotFather

# telegram bot token
BOT_TOKEN=564772652652:GGSUSUygDISBE_qJ0xY6rwty7PJYPAQZPcD0U
```

### Production Config

```
# get your bot token from t.me/BotFather (same as development token)

# telegram bot token
BOT_TOKEN=564772652652:GGSUSUygDISBE_qJ0xY6rwty7PJYPAQZPcD0U

# server
WEBHOOK=https://mybot-domain.com
PORT=5000
```

## Available Scripts

In the project directory, you can run:

### Development

```
$ npm run dev:bot
```

### Production

```
$ npm run prod:bot
```

## Learn More

You can learn more in the [Telegraf-CLI](https://ridwanobafunso.xyz/oss/telegraf-cli/docs) documentation.

To learn Telegraf, check out the [Telegraf](https://telegraf.js.org/) documentation.

## License

### MIT License

Copyright (c) 2020 obafunsoadebayo17@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
