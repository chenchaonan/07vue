# vue-fruit

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
### api接口
```
1.获取首页信息
url:'/api/hot' 'get'
2.注册
url:'/api/user/signup'  'post'
注册成功的信息放在{code:0,success:'用户注册成功'}
注册失败的信息放在{code:1,error:'用户名重复'}
3.登录
url：'/api/user/signin'  'post'
登录成功的信息返回 {code:0,success:'登录成功',user} user为登录成功的用户信息
登录失败的信息返回 {code:1,success:'登录失败'}
 4.退出
 url:'/api/user/signout' 'get'
 退出成功的信息返回 {code:0,success:'退出成功'}
```
