import pathToRegexp from 'path-to-regexp';
import { getMenuData } from './menu';

function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach((item) => {
    if (item.children) {
      keys[item.path] = { ...item };
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = { ...item };
    }
  });
  return keys;
}

export const getRouterData = (app) => {
  const routerConfig = {
    '/': {
      name:'xiaohuOni'
    },
    '/Dashboard/Analysis': {
      name:'分析页'
    },
    '/Dashboard/Monitor': {
    },
    '/Dashboard/Workplace': {
      // component: dynamicWrapper(app, ['project', 'activities', 'chart'], () => import('../routes/Dashboard/Workplace')),
      // hideInBreadcrumb: true,
      // name: '工作台',
      // authority: 'admin',
    },
    '/Forms/BasicForm': {
    },
    '/Forms/StepForm': {
    },
    '/Forms/StepForm/Step1': {
      name: '分步表单（填写转账信息）',
    },
    '/Forms/StepForm/Step2': {
      name: '分步表单（确认转账信息）',
    },
    '/Forms/StepForm/Step3': {
      name: '分步表单（完成）',
    },
    '/Forms/AdvancedForm': {
    },
    '/List/TableList': {
    },
    '/List/BasicList': {
    },
    '/List/CardList': {
    },
    '/List': {
    },
    '/List/Search/Projects': {
    },
    '/List/Search/Applications': {
    },
    '/List/Search/Articles': {
    },
    '/Profile/BasicProfile': {
    },
    '/Profile/AdvancedProfile': {
    },
    '/Result/success': {
    },
    '/Result/Error': {
    },
    '/Exception/403': {
    },
    '/Exception/404': {
    },
    '/Exception/500': {
    },
    '/Exception/triggerException': {
    },
    '/User': {
    },
    '/User/Login': {
    },
    '/User/Register': {
    },
    '/User/RegisterResult': {
    },
    // '/user/:id': {
    //   component: dynamicWrapper(app, [], () => console.log('../routes/User/SomeComponent')),
    // },
  };
  // Get name from ./menu.js or just set it in the router data.
  const menuData = getFlatMenuData(getMenuData());

  // Route configuration data
  // eg. {name,authority ...routerConfig }
  const routerData = {};
  // The route matches the menu
  Object.keys(routerConfig).forEach((path) => {
    // Regular match item name
    // eg.  router /user/:id === /user/chen
    const pathRegexp = pathToRegexp(path);
    const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
    let menuItem = {};
    // If menuKey is not empty
    if (menuKey) {
      menuItem = menuData[menuKey];
    }
    let router = routerConfig[path];
    // If you need to configure complex parameter routing,
    // https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
    // eg . /list/:type/user/info/:id
    router = {
      ...router,
      name: router.name || menuItem.name,
      authority: router.authority || menuItem.authority,
    };
    routerData[path] = router;
  });
  // console.log("routerData");
  // console.log(routerData);
  
  return routerData;
};
