const hosts: { [key: string]: string } = {
    '404-1': 'http://192.168.13.50:9030'
};

const getServerOrigin = (): string => {
  const host = process.env.ENV_HOST;

  if (!host) {
      console.error('Host is not defined. It needs set up environment name as ENV_HOST param.');
      process.exit(1);
  }

  const origin = hosts[host];

  if (!origin) {
    console.error(`App doesn't know ${host} host. Add it to config.ts`);
    process.exit(1);
  }

  return `${origin}/backend/rest`;
};

const getClientOrigin = (): string => `${document.location.origin}/api`;

export {
  getServerOrigin,
  getClientOrigin,
};
