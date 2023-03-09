import { readFileSync } from 'node:fs';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const file = readFileSync('./__fixtures__/correctTest.txt', 'utf-8');

test('genDiff', () => {
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual(file.trim());
});

test('compareYaml', () => {
  expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toEqual(file.trim());
});
