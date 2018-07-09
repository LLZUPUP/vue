前端工作流

- babel  js 预编译器 将js的未来，现在使用es6以前，es6以后
        可以让我们使用最新的js语法来编写，运行的代码可以根据需求编译成相应的版本
        babel 编译js 
        source_code .babelrc cli targets(运行平台)
        依赖于babel-preset(预处理集)
        babel的预处理，只是语法糖 class没有
        es5里没有的es6的语法，实现一遍，最基本的const... babel-core里面
        还有一些没有的Object.assign(),promise ，async await
        babel就会用plugins
- npm 
    npm run dev
    npm install
    项目构建的基本流程
- postcss
    前缀，css的变量
- stylus/scss/less