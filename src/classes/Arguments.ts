import arg from 'arg'

/**
 * @class Arguments
 * @description
 */
export class Arguments {
  static parser(_rawArgs: string[]) {
    const parsed = arg(
      {
        // types
        '--yes': Boolean,
        '--new': String,
        '--create:command': String,
        '--version': Boolean,
        '--help': Boolean,
        '--update': Boolean,

        // aliases
        '-y': '--yes',
        '-n': '--new',
        '-c': '--create:command',
        '-v': '--version',
        '-h': '--help',
        '-u': '--update',
      },
      {
        // slice away the first two elements
        argv: _rawArgs.slice(2),
      }
    )

    return parsed
  }
}
