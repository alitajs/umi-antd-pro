import antdServer from "antd-pro-server";
import mockjs from "mockjs";
import { getRule, postRule } from "./mock/rule";

//支持扩展
//支持从mock文件夹引入
//支持mockjs
const proxy = {
  "GET /api/test": [
    {
      code: "success",
      message: "成功"
    }
  ],
  "GET /api/test/rule": getRule,
  "GET /api/test/tags": mockjs.mock({
    "list|100": [{ name: "@city", "value|1-100": 150, "type|0-2": 1 }]
  })
};
export default { ...proxy, ...antdServer };
