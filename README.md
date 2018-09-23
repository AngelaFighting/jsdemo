# 新建项目说明

1. 安装node，使用`node -v`和`npm -v`检查是否安装成功并查看版本

2. 命令行输入`npm init`，一路回车，执行成功后会在目录下生成package.json文件

3. 命令行输入`npm install bower -D`,执行成功后，在package.json会看到devDependencies里多了bower的依赖，目录下多了个node_modules文件夹

4. 命令行输入`bower init`，一路回车，执行成功后会在目录下生成bower.json文件

5. 新建个文本文件，然后重命名为`.bowerrc`，写入内容：`{"directory": "lib"}`，指定bower安装的依赖放在目录的lib文件夹下

6. 命令行输入`bower install angular vue -S`，执行成功后，在lib下会看到对应的框架库，在bower.json的dependencies中会有框架的依赖

# 项目运行

1. 安装cnpm

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

2. 安装依赖的模块

`cnpm install`
`bower install`
