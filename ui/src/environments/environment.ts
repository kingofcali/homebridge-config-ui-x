// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const baseHref = window.location.pathname.split('/')[1] === 'homebridge' ? '/homebridge' : '';

export const environment = {
  production: false,
<<<<<<< HEAD
  serverTarget: require('../../../package.json').version,
  api: {
    base: 'http://localhost:8581/api',
    socket: 'http://localhost:8581',
    origin: 'http://localhost:8581',
  },
  jwt: {
    tokenKey: 'access_token',
    allowedDomains: ['localhost:8581'],
    disallowedRoutes: ['http://localhost:8581/api/auth/login'],
=======

  api: {
    base: `http://localhost:8080${baseHref}/api`,
    socket: `http://localhost:8080`,
    socketPath: `${baseHref}/socket.io`,
  },
  jwt: {
    tokenKey: 'access_token',
    whitelistedDomains: [`localhost:8080`],
    blacklistedRoutes: [`localhost:8080${baseHref}/api/auth/login`],
>>>>>>> url-stub-support
  },
  apiHttpOptions: {
    withCredentials: true,
  },
  owm: {
    appid: 'fec67b55f7f74deaa28df89ba6a60821',
  },
};
