
export default {
  basePath: 'https://github.com/EDSON2428/activity9',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
