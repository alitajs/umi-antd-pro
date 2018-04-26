import React from "react";
import { connect } from "dva";
import { Link } from "dva/router";
import { Checkbox, Alert, Icon } from "antd";
import Login from "components/Login";
import styles from "./Login.less";

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
const LoginPage = ({ login, submitting, dispatch }) => {
  const { type, autoLogin } = login;
  const onTabChange = type => {
    dispatch({
      type: "login/save",
      payload: {
        type: type
      }
    });
  };

  const handleSubmit = (err, values) => {
    if (!err) {
      dispatch({
        type: "login/login",
        payload: {
          ...values,
          type
        }
      });
    }
  };

  const changeAutoLogin = e => {
    dispatch({
      type: "login/save",
      payload: {
        autoLogin: e.target.checked
      }
    });
  };

  const renderMessage = content => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={content}
        type="error"
        showIcon
      />
    );
  };

  return (
    <div className={styles.main}>
      <Login
        defaultActiveKey={type}
        onTabChange={onTabChange}
        onSubmit={handleSubmit}
      >
        <Tab key="account" tab="账户密码登录">
          {login.status === "error" &&
            login.type === "account" &&
            !login.submitting &&
            renderMessage("账户或密码错误（admin/888888）")}
          <UserName name="userName" placeholder="admin/user" />
          <Password name="password" placeholder="888888/123456" />
        </Tab>
        <Tab key="mobile" tab="手机号登录">
          {login.status === "error" &&
            login.type === "mobile" &&
            !login.submitting &&
            renderMessage("验证码错误")}
          <Mobile name="mobile" />
          <Captcha name="captcha" />
        </Tab>
        <div>
          <Checkbox checked={autoLogin} onChange={changeAutoLogin}>
            自动登录
          </Checkbox>
          <a style={{ float: "right" }} href="">
            忘记密码
          </a>
        </div>
        <Submit loading={submitting}>登录</Submit>
        <div className={styles.other}>
          其他登录方式
          <Icon className={styles.icon} type="alipay-circle" />
          <Icon className={styles.icon} type="taobao-circle" />
          <Icon className={styles.icon} type="weibo-circle" />
          <Link className={styles.register} to="/user/register">
            注册账户
          </Link>
        </div>
      </Login>
    </div>
  );
};
export default connect(({ login, loading }) => ({
  login,
  submitting: loading.effects["login/login"]
}))(LoginPage);
