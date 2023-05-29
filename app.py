# native imports
from datetime import datetime, date

# third-party imports
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request

# local imports
from aux import dbinit

# Configure application
app = Flask(__name__)
dbinit()

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///main.db")

# root path
@app.route("/")
def index():
    submissions = db.execute('SELECT * FROM submissions ORDER BY votes DESC')
    for i in submissions:
        if i["votes"] >= 10:
            db.execute("DELETE FROM submissions WHERE id = :id", id=i['id'])
    
    return render_template('app.html', submissions = submissions)

# submissions
@app.route("/submit", methods=["POST"])
def submit():
    poem = request.form.get("poem")
    author = request.form.get("author")
    votes = 0
    created = datetime.today()

    db.execute("INSERT INTO submissions (poem, author, created, votes) VALUES (:poem, :author, :created, :votes)",
    poem = poem,
    author = author,
    votes = votes,
    created = created
    )

    return redirect("/")

# votes
@app.route("/vote/<id>/<type_>", methods=["POST"])
def votes(id, type_):
    current_submission = db.execute('SELECT * FROM submissions WHERE id = :id', id=id)
    if type_ == 'up':
        db.execute('UPDATE submissions SET votes = :votes WHERE id = :id',
        votes = current_submission[0]['votes'] + 1,
        id = id
        )
    else:
        db.execute('UPDATE submissions SET votes = :votes WHERE id = :id',
        votes = current_submission[0]['votes'] - 1,
        id = id
        )
    
    return redirect("/")

