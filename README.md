# ReactDemo
一个从零开始构建的react项目架子，初次尝试

### 文件目录设定

- `config`, 打包的配置
- `src`, 主要的代码内容
  * `assets`, 静态资源
  * `components`, 公共的组件
  * `routes`, 路由的配置
  * `pages`, 主要的业务
  * `store`, 全局`redux`的数据
  * `reducers`, 匹配`action`的指令去操作改变`store`的方法
  * `actions`, 发布动作指令
  * `apis`, 所有的`api`
  * `mocks`, `mock`数据
  * `index.js`, 项目打包的主入口
- `dist`, 打包过后的目录
- `.babelrc`, `babel`的配置
- `.gitignore`, `git`需要忽略的文件
- `.npmignore`, `npm`发布时需要忽略的文件
- `README.md`, 主要的说明

### 项目的需要的包

- `dependencies`，生产环境所依赖的包，开发和生产环境都需要的包
  1. `react`
  2. `react-dom`
  3. `react-router`
  4. `redux`
  5. `react-redux`
  6. `react-router-dom`
  7. `react-router-redux`
- `devDependencies`，开发环境所依赖的包，仅仅在开发环境中需要使用
  1. `babel-loader`
  2. `css-loader`
  3. `style-loader`
  4. `less-loader`
  5. `url-loader`
  6. `html-loader`
  7. `extract-text-webpack-plugin`
  8. `webpack-dashboard`
  9. `webpack`
  10. `webpack-cli`
  11. `path`
  12. `@babel/core`
  12. `@babel/plugin-proposal-class-properties`
  13. `@babel/plugin-proposal-object-rest-spread`
  14. `babel-plugin-import`
  15. `@babel/preset-env`
  16. `@babel/preset-react`
