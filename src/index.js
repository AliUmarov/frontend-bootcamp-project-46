import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';

const calculation = (file1, file2) => {
  const result = [];

  const keysOfFile1 = _.keys(file1);
  const keysOfFile2 = _.keys(file2);
  const allKeys = _.sortBy(_.union(keysOfFile1, keysOfFile2));

  allKeys.forEach((el) => {
    if (_.has(file1, el) && !_.has(file2, el)) {
      result.push(`- ${el}: ${file1[el]}`);
    }
    if (_.has(file1, el) && _.has(file2, el)) {
      if (file1[el] === file2[el]) {
        result.push(`  ${el}: ${file1[el]}`);
      }
      if (file1[el] !== file2[el]) {
        result.push(`- ${el}: ${file1[el]}`);
        result.push(`+ ${el}: ${file2[el]}`);
      }
    }
    if (!_.has(file1, el) && _.has(file2, el)) {
      result.push(`+ ${el}: ${file2[el]}`);
    }
  });

  return `{\n${result.join('\n')}\n}`;
};

export default (file1, file2) => {
  const data1 = JSON.parse(readFileSync(path.resolve(file1), 'utf-8'));
  const data2 = JSON.parse(readFileSync(path.resolve(file2), 'utf-8'));
  return calculation(data1, data2);
};
