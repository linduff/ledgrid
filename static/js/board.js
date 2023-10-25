var socket = io();

var row = Math.floor(Math.random() * 20);
var col = Math.floor(Math.random() * 20);
var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

document.getElementById(row + '-' + col).style.backgroundColor = randomColor

socket.on('connect', function() {
    socket.emit('connection');
});

socket.on('newButtonPress', function(data) {
    switch(data) {
        case 'U':
            if(row > 0) {
                document.getElementById(row + '-' + col).style.backgroundColor = '#fff'
                row--;
                document.getElementById(row + '-' + col).style.backgroundColor = randomColor
            }
            break;
        case 'D':
            if(row < 19) {
                document.getElementById(row + '-' + col).style.backgroundColor = '#fff'
                row++;
                document.getElementById(row + '-' + col).style.backgroundColor = randomColor
            }
            break;
        case 'L':
            if(col > 0) {
                document.getElementById(row + '-' + col).style.backgroundColor = '#fff'
                col--;
                document.getElementById(row + '-' + col).style.backgroundColor = randomColor
            }
            break;
        case 'R':
            if(col < 19) {
                document.getElementById(row + '-' + col).style.backgroundColor = '#fff'
                col++;
                document.getElementById(row + '-' + col).style.backgroundColor = randomColor
            }
            break;
        case 'M':
            randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.getElementById(row + '-' + col).style.backgroundColor = randomColor
            break;
        
    }
});

function runLights() {
    for(row in Range(20)) {
        for(col in Range(20)) {
            setTimeout(function() {
                document.getElementById(row + '-' + col).style.backgroundColor = '#FF0000'
            }, 500);

        }
    }
}

runLights();