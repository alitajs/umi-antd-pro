import React from "react";
import { Route, Redirect } from "react-router-dom";
import {getAuthority} from "utils/authority";

//umi只会返回render和rest
class AuthorizedRoute extends React.Component {
  render() {
    const redirectPath = "/User/Login";
    const authority = getAuthority();
    if(authority){
        return (<Route {...this.props} />)
    }else{
      return (<Redirect to={{ pathname: redirectPath }} />)
    }
  }
}

export default AuthorizedRoute;
