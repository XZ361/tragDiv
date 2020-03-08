var div1 = document.createElement('div')
div1.className = 'trag'
document.body.appendChild(div1)

var isTrag = false
var lastX
var lastY
div1.onmousedown = function(e) {
    isTrag = true
    lastX = e.clientX
    lastY = e.clientY

}
document.onmousemove = function(e) {
    if (isTrag === true) {
        var dirtX = e.clientX - lastX
        var dirtY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        div1.style.top = top + dirtY + 'px'
        div1.style.left = left + dirtX + 'px'
        lastY = e.clientY
        lastX = e.clientX
    }

}
document.onmouseup = function(e) {
    isTrag = false
}