import React, { Component } from 'react';
import Redirect from 'umi/redirect';
import pathToRegexp from 'path-to-regexp';
import { connect } from 'dva';
import Authorized from '@/utils/Authorized';

class AuthComponent extends Component {
  render() {
    const { children, location, routerData, status } = this.props;
    const isLogin = status === 'ok';

    const getRouteAuthority = (pathname, routeData) => {
      const routes = routeData.slice(); // clone

      const getAuthority = (routeDatas, path) => {
        let authorities;
        routeDatas.forEach(route => {
          // check partial route
          if (pathToRegexp(`${route.path}(.*)`).test(path)) {
            if (route.authority) {
              authorities = route.authority;
            }
            // is exact route?
            if (!pathToRegexp(route.path).test(path) && route.routes) {
              authorities = getAuthority(route.routes, path);
            }
          }
        });
        return authorities;
      };

      return getAuthority(routes, pathname);
    };
    return (
      <Authorized
        authority={getRouteAuthority(location.pathname, routerData)}
        noMatch={isLogin ? <Redirect to="/exception/403" /> : <Redirect to="/user/login" />}
      >
        {children}
      </Authorized>
    );
  }
}
export default connect(({ menu: menuModel, login: loginModel }) => ({
  routerData: menuModel.routerData,
  status: loginModel.status,
}))(AuthComponent);
