from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

socketio = SocketIO(app)

rooms = {}

@app.route("/")
def board():
    return render_template('board.html')

@app.route("/controller")
def controller():
    return render_template('controller.html')

@socketio.on('connection')
def on_connect():
    print('new connection')

# Up
@socketio.on('buttonUpDown')
def handle_up_button_down():
    emit('newButtonPress', 'Up Button was down clicked', broadcast=True, include_self=False)
    print('Up Button was down clicked')

@socketio.on('buttonUpUp')
def handle_up_button_up():
    emit('newButtonPress', 'Up Button was up clicked', broadcast=True, include_self=False)
    print('Up Button was up clicked')

# Down
@socketio.on('buttonDownDown')
def handle_down_button_down():
    print('Down Button was down clicked')

@socketio.on('buttonDownUp')
def handle_down_button_up():
    print('Down Button was up clicked')

# Left
@socketio.on('buttonLeftDown')
def handle_left_button_down():
    print('Left Button was down clicked')

@socketio.on('buttonLeftUp')
def handle_left_button_up():
    print('Left Button was up clicked')

# Right
@socketio.on('buttonRightDown')
def handle_right_button_down():
    print('Right Button was down clicked')

@socketio.on('buttonRightUp')
def handle_right_button_up():
    print('Right Button was up clicked')

# Middle
@socketio.on('buttonMiddleDown')
def handle_middle_button_down():
    print('Middle Button was down clicked')

@socketio.on('buttonMiddleUp')
def handle_middle_button_up():
    print('Middle Button was up clicked')

if __name__ == '__main__':
    socketio.run(app)