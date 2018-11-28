import BasicLayout from "./BasicLayout";
import UserLayout from "./UserLayout";
import config from "@/utils/config";
const { openPages } = config;
export default props => {
  const { location } = props;
  let { pathname } = location;
  pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  
  if (openPages && openPages.includes(pathname)) {
    return <UserLayout {...props} />;
  }
  return (
      <BasicLayout {...props} />
  );
};
