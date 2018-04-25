import Breadcrumbs from './Breadcrumbs';
// import BlankLayout from './BlankLayout';
// import BasicLayout from './BasicLayout';
// import PageHeaderLayout from './PageHeaderLayout';
// import UserLayout from './UserLayout';
import { config } from "utils";
const { loginPages, openPages } = config;
export default ({ children ,location}) => {
  let { pathname } = location;
  pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (openPages && openPages.includes(pathname)) {
    return (
      <div>
        没有Layout
        {children}
      </div>
    );
  }else if (loginPages && loginPages.includes(pathname)) {
    return (
      <div>
        登录页
        {children}
      </div>
    );
  }
  return (
    <div>
      <div>Header (layouts/index.js)</div>
      <hr/>
      <Breadcrumbs />
      <hr/>
      {
        children
      }
      <hr/>
      <div>Footer (layouts/index.js)</div>
    </div>
  );
}
