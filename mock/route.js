export default {
  "/api/auth_routes": 
  // [
  //   // user
  //   {
  //     path: '/user',
  //     component: '../layouts/UserLayout',
  //     routes: [
  //       { path: '/user', redirect: '/user/login' },
  //       { path: '/user/login', component: './User/Login' },
  //       { path: '/user/register', component: './User/Register' },
  //       { path: '/user/registerresult', component: './User/RegisterResult' },
  //     ],
  //   },
    // app
    {
      path: '/',
      component: '../layouts/BasicLayout',
      Routes: ['src/pages/Authorized'],
      routes: [
        // dashboard
        { path: '/', redirect: '/dashboard/analysis' },
        {
          path: '/dashboard',
          name: 'dashboard',
          icon: 'dashboard',
          routes: [
            {
              path: '/dashboard/analysis',
              name: 'analysis',
              component: './Dashboard/Analysis',
            },
            {
              path: '/dashboard/monitor',
              name: 'monitor',
              component: './Dashboard/Monitor',
            },
            {
              path: '/dashboard/workplace',
              name: 'workplace',
              component: './Dashboard/Workplace',
            },
          ],
        },
        // forms
        {
          path: '/form',
          icon: 'form',
          name: 'form',
          routes: [
            {
              path: '/form/basicform',
              name: 'basicform',
              component: './Forms/BasicForm',
            },
            {
              path: '/form/stepform',
              name: 'stepform',
              component: './Forms/StepForm',
              hideChildrenInMenu: true,
              routes: [
                {
                  path: '/form/stepform',
                  redirect: '/form/stepform/info',
                },
                {
                  path: '/form/stepform/info',
                  name: 'info',
                  component: './Forms/StepForm/Step1',
                },
                {
                  path: '/form/stepform/confirm',
                  name: 'confirm',
                  component: './Forms/StepForm/Step2',
                },
                {
                  path: '/form/stepform/result',
                  name: 'result',
                  component: './Forms/StepForm/Step3',
                },
              ],
            },
            {
              path: '/form/advancedform',
              name: 'advancedform',
              component: './Forms/AdvancedForm',
            },
          ],
        },
        // list
        {
          path: '/list',
          icon: 'table',
          name: 'list',
          routes: [
            {
              path: '/list/tablelist',
              name: 'searchtable',
              component: './List/TableList',
            },
            {
              path: '/list/basiclist',
              name: 'basiclist',
              component: './List/BasicList',
            },
            {
              path: '/list/cardlist',
              name: 'cardlist',
              component: './List/CardList',
            },
            {
              path: '/list/search',
              name: 'searchlist',
              component: './List/List',
              routes: [
                {
                  path: '/list/search',
                  redirect: '/list/search/articles',
                },
                {
                  path: '/list/search/articles',
                  name: 'articles',
                  component: './List/Articles',
                },
                {
                  path: '/list/search/projects',
                  name: 'projects',
                  component: './List/Projects',
                },
                {
                  path: '/list/search/applications',
                  name: 'applications',
                  component: './List/Applications',
                },
              ],
            },
          ],
        },
        {
          path: '/profile',
          name: 'profile',
          icon: 'profile',
          routes: [
            // profile
            {
              path: '/profile/basicprofile',
              name: 'basic',
              component: './Profile/BasicProfile',
            },
            {
              path: '/profile/advancedprofile',
              name: 'advanced',
              component: './Profile/AdvancedProfile',
            },
          ],
        },
        {
          name: 'result',
          icon: 'check-circle-o',
          path: '/result',
          routes: [
            // result
            {
              path: '/result/success',
              name: 'success',
              component: './Result/Success',
            },
            { path: '/result/fail', name: 'fail', component: './Result/Error' },
          ],
        },
        {
          name: 'exception',
          icon: 'warning',
          path: '/exception',
          routes: [
            // exception
            {
              path: '/exception/403',
              name: 'not-permission',
              component: './Exception/403',
            },
            {
              path: '/exception/404',
              name: 'not-find',
              component: './Exception/404',
            },
            {
              path: '/exception/500',
              name: 'server-error',
              component: './Exception/500',
            },
            {
              path: '/exception/trigger',
              name: 'trigger',
              hideInMenu: true,
              component: './Exception/TriggerException',
            },
          ],
        },
        {
          name: 'account',
          icon: 'user',
          path: '/account',
          routes: [
            {
              path: '/account/center',
              name: 'center',
              component: './Account/Center/Center',
              routes: [
                {
                  path: '/account/center',
                  redirect: '/account/center/articles',
                },
                {
                  path: '/account/center/articles',
                  component: './Account/Center/Articles',
                },
                {
                  path: '/account/center/applications',
                  component: './Account/Center/Applications',
                },
                {
                  path: '/account/center/projects',
                  component: './Account/Center/Projects',
                },
              ],
            },
            {
              path: '/account/settings',
              name: 'settings',
              component: './Account/Settings/Info',
              routes: [
                {
                  path: '/account/settings',
                  redirect: '/account/settings/base',
                },
                {
                  path: '/account/settings/base',
                  component: './Account/Settings/BaseView',
                },
                {
                  path: '/account/settings/security',
                  component: './Account/Settings/SecurityView',
                },
                {
                  path: '/account/settings/binding',
                  component: './Account/Settings/BindingView',
                },
                {
                  path: '/account/settings/notification',
                  component: './Account/Settings/NotificationView',
                },
              ],
            },
          ],
        },
        {
          component: '404',
        },
      ],
    },
  // ]
};
