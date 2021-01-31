const hosts = new Map()
  .set('404-1', 'http://192.168.13.50:9030');

const getServerOrigin = (): string => {
  const host = process.env.ENV_HOST;
  const origin = hosts.get(host);

  if (!origin) {
    console.error('Environment is not defined. It needs set up environment name as param.');
    process.exit(1);
  }

  return `${origin}/backend/rest`;
};

const getClientOrigin = (): string => {
    return `${document.location.origin}/api`;
};

export {
    getServerOrigin,
    getClientOrigin,
}