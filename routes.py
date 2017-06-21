from flask import Flask, render_template, request, url_for
import sqlite3 as sqllo

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template("index.html")

@app.route('/submitFirstPage', methods=['POST', 'GET'])
def submitFirstPage():
    if request.method == 'POST':
        try:
            #need to add age to the database and to this page...
            name = request.form['name']
            age = request.form['age']
            familySize = request.form['familySize']
            occupation = request.form['occupation']
            race = str(request.form.get('race'))
            location = str(request.form.get('location'))



            with sql.connect("RosemaryProject.db") as conn:
                cur = conn.cursor()
                cur.execute("INSERT INTO demographics (name, age, familySize, occupation, race, location) as (?,?,?,?,?,?)", (name, age, familySize, occupation, race, location))
                conn.commit()
            return render_template('secondPage.html')

        except:
            conn.rollback()
            msg = "Error in insert operation"

        finally:
            return render_template("secondPage.html")
            conn.close()

@app.route("/leaveSecondPage", methods=['POST', 'GET'])
def leaveSecondPage():
    if request.method == 'POST':
        try:
            return render_template("thirdPage.html")
        finally:
            return render_template("thirdPage.html")


@app.route("/submitFeedback", methods=['POST', 'GET'])
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