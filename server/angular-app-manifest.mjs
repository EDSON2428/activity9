
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/EDSON2428/activity9',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/EDSON2428/activity9"
  },
  {
    "renderMode": 2,
    "route": "/EDSON2428/activity9/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 45721, hash: '619bdb0832c55a96f09be0e4857376450c100ad7b12696fd3f2e6f5f5f706fe2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 46240, hash: '91fe3f8de78fba365f7d5834af80d4b90c260811a0c962ea1c4de58887364498', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48816, hash: '3652bafd85280e2ae56900863e97b19ee72d85b9c16aad577f5b496d1dc35a3f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 47444, hash: 'd6af670695851133ab7e2d656eeeee25e87877aec546625cc09bc02f8b9ea635', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
