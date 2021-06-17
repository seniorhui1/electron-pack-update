const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 340,
        height: 280,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('index.html')
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

ipcMain.on("sign_in", (event, message) => {
    function createWindow2() {
        const win2 = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        })
        win2.loadFile('demo2.html')
        win2.webContents.openDevTools()
    }
    app.whenReady().then(createWindow2)
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow2()
        }
    })
})

ipcMain.on('sign_up', (event, message) => {
    function createWindow3() {
        const win3 = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        })
        win3.loadFile('demo3.html')
        win3.webContents.openDevTools()
    }
    app.whenReady().then(createWindow3)
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow3()
        }
    })
})

ipcMain.on('sign_info', (event, message) => {
    function createwindow4() {
        const win4 = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        })
        win4.loadFile('demo4.html')
        win4.webContents.openDevTools()
    }
    app.whenReady().then(createwindow4)
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createwindow4()
        }
    })
})

ipcMain.on('callback', (event, message) => {
    app.whenReady().then(createWindow)
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
