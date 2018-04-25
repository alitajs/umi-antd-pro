import Breadcrumbs from './Breadcrumbs';
// import BlankLayout from './BlankLayout';
// import BasicLayout from './BasicLayout';
// import PageHeaderLayout from './PageHeaderLayout';
// import UserLayout from './UserLayout';
import { config } from "utils";
const {  openPages } = config;
export default ({ children ,location}) => {
  let { pathname } = location;
  pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (openPages && openPages.includes(pathname)) {
    return (
      <div style={{height:'100%'}}>
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
