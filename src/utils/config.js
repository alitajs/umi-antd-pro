const isDEV = true;
module.exports = {
  name: '风控管理系统',
  prefix: 'risk04101425',
  openPages: ['/User','/User/Login','/User/Register','/User/RegisterResult'],
  serverUrl:isDEV?'':'http://localhost:3000'
}
