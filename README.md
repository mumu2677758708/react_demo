# 生成项目
- npx create-react-app react_demo
- cd my-app
- npm start

# 项目目录
- public 网页入口文件index.html存放位置
- node_modules 各个插件存放位置
- src
  - actions 存放react action路径
  - api 存放接口文件
  - common 存放公共文件
  - components
  - images 存放图片
  - router
    - config.js 配置路由
    - index.js  将路由与组件对应，这样在跳转到某路径时，会渲染对应的组件
  - stores 存放 react action具体执行方法
  - styles 存放样式文件
  - views
  - index.js react入口文件

# 安装插件
- yarn add react-router-dom
- yarn add swiper
- yarn add node-sass sass-loader
- yarn add webpack webpack-cli -D  自动生成一个webpack.common.js文件
- yarn add happypack -D
- yarn add -D html-webpack-plugin clean-webpack-plugin 
  - html-webpack-plugin 使用插件来生成html文件，这样就避免了html每次去手动引入js；
  - clean-webpack-plugin 使用插件来删除上次打包的结果

- yarn add -D webpack-dev-server 每次修改完文件都要重新打包才能看到效果，我们可以使用webpack-dev-server来搭建一个本地服务器来实时更新。
- yarn add -D @babel/preset-react babel-loader @babel/core
- yarn add -D webpack-merge 合并webpack配置文件
- yarn add -D file-loader style-loader css-loader
# 