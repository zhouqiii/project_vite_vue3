const baseSize = 64

function setRem() {
    const width = document.documentElement.clientWidth || document.body.clientWidth
    const scale = width <= 640 ? width / 750 : 640 / 750 
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
setRem()
window.onresize = function() {
    setRem()
}