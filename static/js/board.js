var socket = io();
var input = document.getElementById('c_input')

socket.on('connect', function() {
    socket.emit('connection');
});

socket.on('newButtonPress', function(data) {
    input.innerText = data
})