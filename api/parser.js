import { parse } from 'dotenv';

const loadEnvironmentVariables = async () => {
  const dotenvConfig = parse(process.env.DOTENV_CONFIG);

  Object.assign(process.env, dotenvConfig);

  return dotenvConfig;
};

export { loadEnvironmentVariables };