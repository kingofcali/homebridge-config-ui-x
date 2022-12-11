const baseHref = window.location.pathname.split('/')[1] === 'homebridge' ? '/homebridge' : '';

export const environment = {
  serverTarget: require('../../../package.json').version,
  production: true,
  socket: `${baseHref}`,
  api: {
    base: `${baseHref}/api`,
    socket: `${(window.location.protocol) === 'http:' ? 'ws://' : 'wss://'}${window.location.host}`,
<<<<<<< HEAD
    origin: window.location.origin,
  },
  jwt: {
    tokenKey: 'access_token',
    allowedDomains: [document.location.host],
    disallowedRoutes: [`${window.location.protocol}//${document.location.host}/api/auth/login`],
=======
    socketPath: `${baseHref}/socket.io`,
  },
  jwt: {
    tokenKey: 'access_token',
    whitelistedDomains: [document.location.host],
    blacklistedRoutes: [`${document.location.host}${baseHref}/api/auth/login`],
>>>>>>> url-stub-support
  },
  apiHttpOptions: {},
  owm: {
    appid: 'fec67b55f7f74deaa28df89ba6a60821',
  },
};
