import logging
import simplejson as json
from flask import Blueprint, render_template, request, abort
from app.extensions import socketio
from app.util.rpc import RPC
from app.models.MessageModel import Message

blueprint = Blueprint('home', __name__, static_folder='../static')

@blueprint.route('/')
def index():
    return render_template('app.html')

@socketio.on('connect', namespace='/mtchannel')
def on_socket_connect():
    logging.info('SocketIO client connected')

@blueprint.route('/callback', methods=['POST'])
def banano_callback():
    callback_json = request.get_json(silent=True)
    if callback_json is None:
        abort(400, 'failed to parse request json')
    elif 'hash' not in callback_json:
        abort(400, 'invalid request json')
    if 'is_send' in callback_json and callback_json['is_send']:
        rpc = RPC()
        block = rpc.retrieve_block(callback_json['hash'])
        if block is None:
            abort(400, 'block doesn\'t exist')
        else:
            block['hash'] = callback_json['hash']
        # Validate message
        is_valid, message = Message.validate_block(block)
        if not is_valid:
            abort(400, message)
        # Save message to database
        message = Message.save_block_as_message(block)
        if message is None:
            abort(500, 'server error processing message')
        # Emit message to the UI - TODO
    return ('',204)