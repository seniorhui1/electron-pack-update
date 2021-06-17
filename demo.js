function Demo () {
    x = document.write('<img id="myimage" onclick="Three()" src="https://www.runoob.com/images/pic_bulboff.gif" width="100" height="180">')
}

function One () {
    x = document.getElementById('myimage')
    if (x.src.match('bulbon'))
    {
        x.src = 'https://www.runoob.com/images/pic_bulboff.gif'
    }
    else
    {
        x.src = 'https://www.runoob.com/images/pic_bulbon.gif'
    }
}

function Two () {
    element = document.getElementById('myimage')
    if (element.src.match('bulbon'))
    {
        alert(element.src = 'https://www.runoob.com/images/pic_bulboff.gif')
    }
    else
    {
        alert(element.src = 'https://www.runoob.com/images/pic_bulbon.gif')
    }
}

var i = 0

function Three () {
    element = document.getElementById('myimage')
    if (i === 0) {
        if (element.src.match('bulbon')) {
            element.src = 'https://www.runoob.com/images/pic_bulboff.gif'
        }
        else
        {
            element.src = 'https://www.runoob.com/images/pic_bulbon.gif'
        }
    }
    i ++
    if (i === 6) {
        alert('Coisini Love You!')
    }
}
