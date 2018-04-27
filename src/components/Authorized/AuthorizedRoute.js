import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorized from './Authorized';
//umi只会返回render和rest
class AuthorizedRoute extends React.Component {
  render() {
    const {
      // component: Component,
      render,
      // authority,
      // redirectPath,
      ...rest
    } = this.props;
    console.log("sadsas");
    return (
      <Authorized
        authority={'admin'}
        noMatch={
          <Route
            {...rest}
            // render={() => <Redirect to={{ pathname: redirectPath }} />}
            render={() => <Redirect to={{ pathname: '/User/Login' }} />}
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
