from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/get')
def get():
    return render_template('jquery-get.html')


@app.route('/get-snippet')
def get_snippet():
    return render_template('snippet.html', row_text="This is printed here with Jinja")


if __name__ == '__main__':
    app.run()
