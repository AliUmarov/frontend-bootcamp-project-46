import yaml from 'js-yaml';

const parse = (file, ext) => {
  if (ext === '.yaml' || ext === '.yml') {
    return yaml.load(file);
  }
  return JSON.parse(file);
};

export default parse;
