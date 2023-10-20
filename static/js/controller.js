var socket = io();
var buttonUp = document.getElementById('up')
var buttonDown = document.getElementById('down')
var buttonLeft = document.getElementById('left')
var buttonRight = document.getElementById('right')
var buttonMiddle = document.getElementById('middle')


socket.on('connect', function() {
    socket.emit('connection');
});

buttonUp.onmousedown = async function() {
    socket.emit('buttonUpDown')
}

buttonUp.onmouseup = async function() {
    socket.emit('buttonUpUp')
}

buttonDown.onmousedown = async function() {
    socket.emit('buttonDownDown')
}

buttonDown.onmouseup = async function() {
    socket.emit('buttonDownUp')
}

buttonLeft.onmousedown = async function() {
    socket.emit('buttonLeftDown')
}

buttonLeft.onmouseup = async function() {
    socket.emit('buttonLeftUp')
}

buttonRight.onmousedown = async function() {
    socket.emit('buttonRightDown')
}

buttonRight.onmouseup = async function() {
    socket.emit('buttonRightUp')
}

buttonMiddle.onmousedown = async function() {
    socket.emit('buttonMiddleDown')
}

buttonMiddle.onmouseup = async function() {
    socket.emit('buttonMiddleUp')
}