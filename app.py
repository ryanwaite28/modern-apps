from flask import Flask, make_response, g, request, send_from_directory
from flask import render_template, url_for, redirect, flash, jsonify
from flask import session as user_session
from werkzeug.utils import secure_filename



# --- Setup --- #

app = Flask(__name__)
app.secret_key = 'DF6Y#G1$56F)$JD8*4G!?/Eifhdsot496dfgs3TYD5$)F&*Fj/Y4DR'


# --- GET Routes --- #

@app.route('/', methods=['GET'])
def welcome():
    # user_session.clear()
    return render_template('welcome.html')
# ---






# --- Listen --- #

# print(db_session)
if __name__ == '__main__':
    app.debug = True
    app.run( host = '0.0.0.0' , port = 5000 )
