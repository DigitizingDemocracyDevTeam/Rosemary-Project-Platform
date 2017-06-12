from flask import Flask, render_template, request, url_for
import sqlite3 as sql

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        try:
            name = request.form['name']
            occupation = request.form['occupation']
            race = request.form['race']
            location = location.form['location']
            with sql.connect("RosemaryProject.db") as conn:
                cur = conn.cursor()
                cur.execute("INSERT INTO deomgraphics (name, occupation, race, location) as (?,?,?,?)", (name, occupation, race, location))
                conn.commit()

        except:
            conn.rollback()
            msg = "Error in insert operation"

        if request.form['submit'] == "nextPage":
            render_template("secondPage.html")

    return render_template("index.html")

@app.route("/feedback", methods=['POST', 'GET'])
def submitFeedback():
    if request.method == 'POST':
        try:
            feedback = request.form['feedback']
            additionalMaterials = request.form['additionalMaterials']
            with sql.connect("RosemaryProject.db") as conn:
                cur = conn.cursor()
                cur.execture("INSERT INTO feedback (feedback, additionalMaterials) as (?,?)", (feecback, additionalMaterials))
        except:
            conn.rollback()
            msg = "Error in insert operation"
        finally:
            return render_template("exitPage.html")

if __name__ == "__main__":
    app.run(debug=True)