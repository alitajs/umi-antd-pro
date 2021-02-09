// https://umijs.org/config/
import os from 'os';
import webpackPlugin from './plugin.config';
import defaultSettings from '../src/defaultSettings';
import pagesRoues from '../src/pages/_routes.json';

const { pwa, primaryColor } = defaultSettings;
// preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION, TEST } = process.env;

export default {
  history: { type: 'hash' },
  plugins: ['@alitajs/routes', '@alitajs/router', '@alitajs/tabs-layout', '@alitajs/plugin-theme'],
  tabsLayout: [/./],
  authorize: [
    {
      guard: ['@/pages/Auth'],
      include: /\//,
      exclude: /\/user/i,
    },
  ],
  antd: {
    dark: false,
  },
  dva: {
    hmr: true,
  },
  locale: {},
  routesExtend: {
    update(routes) {
      return [...pagesRoues, ...routes];
    },
  },
  dynamicImport: {},
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  targets: {
    ie: 11,
  },
  // 路由配置
  // routes: pageRoutes,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  dynamicTheme: {
    type: 'antd',
    // varFile: path.join(__dirname, '../src/default.less'),
    themeVariables: ['@primary-color'],
  },
  // proxy: {
  //   '/server/api/': {
  //     target: 'https://preview.pro.ant.design/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/server': '' },
  //   },
  // },
  // cssLoader: {
  //   modules: true,
  //   getLocalIdent: (context, localIdentName, localName) => {
  //     if (
  //       context.resourcePath.includes('node_modules') ||
  //       context.resourcePath.includes('ant.design.pro.less') ||
  //       context.resourcePath.includes('global.less')
  //     ) {
  //       return localName;
  //     }
  //     const match = context.resourcePath.match(/src(.*)/);
  //     if (match && match[1]) {
  //       const antdProPath = match[1].replace('.less', '');
  //       const arr = slash(antdProPath)
  //         .split('/')
  //         .map(a => a.replace(/([A-Z])/g, '-$1'))
  //         .map(a => a.toLowerCase());
  //       return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
  //     }
  //     return localName;
  //   },
  // },
  ignoreMomentLocale: true,
  chainWebpack: webpackPlugin,
};
