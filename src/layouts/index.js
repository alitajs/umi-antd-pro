import BasicLayout from "./BasicLayout";
import { config } from "utils";
import { getRouterData } from "common/router";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";

const { openPages } = config;
export default props => {
  const { children, location } = props;
  const routerData = getRouterData({});
  const newProps = {
    ...props,
    routerData: routerData
  };
  let { pathname } = location;
  pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (openPages && openPages.includes(pathname)) {
    return <div style={{ height: "100%" }}>{children}</div>;
  }
  return (
    <LocaleProvider locale={zh_CN}>
      <BasicLayout {...newProps} />
    </LocaleProvider>
  );
};
