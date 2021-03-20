from flask import Flask, render_template, Blueprint, abort
from jinja2 import TemplateNotFound
from datetime import datetime

home_page = Blueprint('home_page', __name__, template_folder='templates', static_folder='static')

@home_page.route('/', defaults = {'page': 'index'})
@home_page.route('/<page>')
def show(page):
    try:
        return render_template('%s.html' % page)
    except TemplateNotFound:
        abort(404)

app = Flask(__name__)
app.register_blueprint(home_page)

if __name__ == '__main__':
    app.debug = True
    app.run()
