import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorized from './Authorized';
import { getRouterData } from 'common/router';

//umi只会返回render和rest
class AuthorizedRoute extends React.Component {
  render() {
    const {
      render,
      path,
      ...rest
    } = this.props;
    const routerData = getRouterData({});
    const redirectPath = '/User/Login';
    const authority = routerData[path].authority;
    return (
      <Authorized
        authority={authority}
        noMatch={
          <Route
            {...rest}
            render={() => <Redirect to={{ pathname: redirectPath }} />}
          />
        }
      >
        <Route
          {...rest}
          render={props =>render(props)}
        />
      </Authorized>
    );
  }
}

export default AuthorizedRoute;
