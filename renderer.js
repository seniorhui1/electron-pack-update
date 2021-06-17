const { ipcRenderer } = require('electron')
var i = 0
function demo() {
    ipcRenderer.send('sign_up', 'ok')
}

//https://blog.csdn.net/mzl87/article/details/106202144

function demo2() {
    img = document.getElementById('myimage')
    if (i !== 15) {
        if (img.src.match('bulbon')) {
            img.src = 'https://www.runoob.com/images/pic_bulboff.gif'
        }
        else {
            img.src = 'https://www.runoob.com/images/pic_bulbon.gif'
        }
    }
    i++
    if (i === 15) {
        alert('Coisini Love You~')
    }
}

function demo3() {
    ipcRenderer.send('sign_in', 'ok')
}

function demo4() {
    ipcRenderer.send('sign_info', 'ok')
}

function demo5() {
    ipcRenderer.send('callback', 'ok')
}
