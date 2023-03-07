#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .option('-f, --format [type]', 'output format')
  .description('CLI to some JavaScript string utilities')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => {
    console.log(genDiff(file1, file2));
  });

program.parse(process.argv);
