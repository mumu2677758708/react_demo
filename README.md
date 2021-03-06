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
- yarn add -D webpack-merge 合并webpack配置文件  报错merge不是一个函数时，调用WebpackMerge.merge成功解决
- yarn add -D file-loader style-loader css-loader  出现报错，有可能是安装包的版本问题
- npm install mini-css-extract-plugin -D 把所有样式包括css、less都打包到一个css文件 common.css中，然后再 link 进页面
- yarn add -D html-webpack-plugin@3.2.0  用于编译 Webpack 项目中的 html 类型的文件

# webpack配置
- 打包后的图片路径、名称配置
  - 在“test: /.*\.(gif|png|jpe?g|svg)$/”中“name: 'static/images/[name][hash:7].[ext]'”,
- js文件打包配置  在output里
- css文件打包配置
  - 安装mini-css-extract-plugin插件，在webpack.common.js中配置plugins，指明打包输出路径、文件名；在css、sass的rules中配置loader
- html文件打包配置 
  - 安装html-webpack-plugin插件 
  - 配置插件 new htmlWebpackPlugin({template: html文件的入口, filename: 输出文件路径配置})

# package.json中的scripts配置
- "dev": "webpack --config webpack.dev.js"
  - –config是告诉webpack通过什么配置文件打包

# babel安装
- "@babel/core": "^7.7.4",
- "@babel/preset-env": "^7.7.4",
- "@babel/preset-react": "^7.7.4", 翻译JSX 语法的插件。
- "babel-preset-es2015" 翻译es6语法的插件
- "babel-loader": "^8.0.6",
- 7版本以上，.babelrc文件配置是"presets": ["@babel/env", "@babel/react"]
- 6版本以上，.babelrc文件配置是"presets": ["env", "react", "es2015", "stage-2"],
- 注意：报babel-loader的错，是因为各版本问题
- babel-core与@babel/core的区别：自Babel 7起，Babel团队改用作用域软件包，因此您现在必须使用@babel/core而不是babel-core。但实质上，@babel/core只是babel-core的较新版本。这样做是为了更好地区分哪些软件包是官方软件包，哪些是第三方软件包.