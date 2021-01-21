const environments = new Map()
  .set('404-1', 'http://192.168.13.50:9030');

export const getApiOrigin = (): string => {
  const env = process.env.ENV_ORIGIN;
  const origin = environments.get(env);

  if (!origin) {
    console.error('Environment is not defined. It needs set environment name as param.');
    process.exit(1);
  }

  return origin;
};
