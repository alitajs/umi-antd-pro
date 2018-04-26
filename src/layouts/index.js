import BasicLayout from './BasicLayout';
import { config } from "utils";
import { getRouterData } from 'common/router';
const {  openPages } = config;
export default (props) => {
  const { children ,location} = props;
  const routerData = getRouterData({});
  const newProps = {
    ...props,
    routerData:routerData
  }
  let { pathname } = location;
  pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (openPages && openPages.includes(pathname)) {
    return (
      <div style={{height:'100%'}}>
        {children}
      </div>
    );
  }
  return (<BasicLayout {...newProps}/>
  );
}
