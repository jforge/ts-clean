#!/usr/bin/env node
import meow from 'meow';
import * as chalk from 'chalk';
import { cleanJs } from './index';

const PWD = process.cwd();

const cli = meow(`
    ${chalk.bold('Description')}
      $ A tool for cleaning up JavaScript files compiled from TypeScript
    ${chalk.bold('Usage')}
      $ ts-clean -d <source>
    ${chalk.bold('Options')}
      -d, --dir               directory(default pwd)
      -e, --etx               extension(default .js,.js.map,.jsx,.jsx.map)
      -v, --version           version
  `,  {
    importMeta: import .meta,
    flags: {
      dir: {
        type: 'string',
        alias: 'd',
        default: PWD
      },
      ext: {
        type: 'string',
        alias: 'e',
        default: '.js,.js.map,.jsx,.jsx.map'
      }
    },
    description: false
    }
);

const dirArr = cli.flags.dir.split(',');
const extArr = cli.flags.ext.split(',');

dirArr.map((item: string) => {
  cleanJs(item, extArr);
});
