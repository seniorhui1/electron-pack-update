# electron基础

## 创建项目

​	由于electron将node.js嵌入其二进制文件中，因此运行代码的node.js版本与系统上运行的版本无关，但是需要提前安装node.js环境.

​	安装完node.js环境后，首先创建一个文件夹并初始化一个npm软件包.

```
mkdir electron_demo && cd electron_demo
npm init
```

​	在初始化的过程中，命令行将提示在配置中设置一些字段，并且有默认提示,此配置可在项目中的package.json中更改.示例参数如下:

```
{
  "name": "electron_demo", # 项目名称
  "version": "1.0.0", # 版本号
  "description": "",
  "main": "index.js", # 程序入口脚本, 必须为main脚本
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" # 程序启动项，此处为测试地洞并输出指定内容
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^13.0.1" # electron版本
  }
}
```

​	在初始化完毕之后，目录中会有node_modules文件和package.json, package-kicj.json文件存在，其中package.json为配置文件，若想启动项目，则在根目录下新建文件main.js文件作为入口脚本

​	新建示例前端文件index.html文件并编写代码，输出简单的文字，之后编写main.js文件内容.

​	为把index.html加载到应用程序窗口中，需要两个Electron模块：

 1. app模块，此模块用于控制应用程序的事件的生命周期.

 2. BrowserWindow模块，此模块用于创建和管理应用程序窗口.

    因为主进程运行node.js,可以将它们作为CommonJS模块导入文件顶部:

    ```
    const { app, BrowserWindow } = require('electron') # const声明一个只读的常量,一旦声明，常量的值即为固定值
    ```
    
    然后，添加一个示例函数加载index.html到新的BrowserWindow实例中.
    
    ```
    function createWindow () {
      const win = new BrowserWindow({
        width: 800,
        height: 600
      })
      win.loadFile('index.html')
    }
    ```
    
    接下来，调用此createWindow()函数以打开窗口。
    
    在electron中，只有在触发app模块的ready事件后才能创建浏览器窗口。此处我们使用app.whenready()API等待此事件。
    
    ```
    app.whenReady().then(() => {
      createWindow()
    })
    ```
    
    此时，已经可以成功打开一个窗口。
    
    文件代码示例:
    
    ```
    # main.js文件
    const {app, BrowserWindow} = require('electron')
    const path = require('path')
    function createWindow () {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
        })
        win.loadFile('index.html')
    }
    app.whenReady().then(() => {
        createWindow()
      })
    ```
    
    ```
    # index.html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
        <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'"> -->
        <!-- <meta http-equiv="X-Content-Security-Policy" content="default-src 'self'; script-src 'self'"> -->
        <title>Hello World!</title>
      </head>
      <body>
        <script src="renderer.js"></script>
        <h1>Hello World!</h1>
        We are using Node.js <span id="node-version"></span>,
        Chromium <span id="chrome-version"></span>,
        and Electron <span id="electron-version"></span>.
      </body>
    </html>
    ```
    
    ```
    # package.json文件
    {
      "name": "electron_demo",
      "version": "1.0.0",
      "description": "this is a demo",
      "main": "main.js",
      "scripts": {
        "start": "electron ."
      },
      "author": "Jackpot",
      "license": "ISC",
    }
    ```
    
    至此，第一个项目启动完成。
    
    
    
    ## 打包项目
    
    electron可将项目打包成.exe文件,目前主要有两种打包方式.
    
    ### 使用electron-packager打包
    
    ​		特点:操作简单，打包后的目录就是程序的运行目录，相当于已经安装过

# electron-pack-update
