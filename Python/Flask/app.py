from flask import Flask,request,jsonify
from db import get_connection

app = Flask(__name__)

# routing
# controller
@app.route("/students",methods = ["POST"])
def createStudent():
    data = request.json
    name = data["name"]
    email = data["email"]
    age = data["age"]

    conn = get_connection()
    cur = conn.cursor()

    query = """
    INSERT INTO students (name,email,age) values(%s,%s,%s)"""
    cur.execute(query,(name,email,age))
    conn.commit()

    studentId = cur.lastrowid
    cur.close()
    conn.close()

    return jsonify({
        "message":"student created sucessfully",
        "id":studentId
    }),201

# read
@app.route("/students",methods = ["GET"])
def getStudents():
    conn = get_connection()
    cur = conn.cursor(dictionary=True)
    cur.execute("SELECT * FROM students")
    students = cur.fetchall()

    cur.close()
    conn.close()

    return jsonify(students)

#read one
@app.route("/students/<int:id>",methods=["GET"])
def getStudent(id):
    conn = get_connection()
    cur = conn.cursor(dictionary=True)
    cur.execute("SELECT * FROM students where id = %s",(id,))
    stu = cur.fetchone()
    cur.close()
    conn.close()

    if stu is None:
        return jsonify({
            "message":"student not found"
        }),404
    return jsonify(stu)

# update
@app.route("/students/<int:id>",methods = ["PUT"])
def updateStudents(id):
    data = request.json
    name = data["name"]
    email = data["email"]
    age = data["age"]
    conn = get_connection()
    cur = conn.cursor()
    query = """UPDATE students SET name=%s,email=%s,age =%s WHERE id =%s"""
    cur.execute(query,(name,email,age,id))
    conn.commit()

    if cur.rowcount==0:
        cur.close()
        conn.close()
        return jsonify({
            "message":"Student not found",
           
        }),404
    cur.close()
    conn.close()
    return jsonify({
        "message":"Student updated sucessfully"
    })


# Delete
@app.route("/students/<int:id>", methods=["DELETE"])
def deleteStudent(id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM students where id =%s",(id,))
    conn.commit()

    if cur.rowcount==0:
        cur.close()
        conn.close()
        return jsonify({
            "message":"Student not found"
        }),404
    cur.close()
    conn.close()
    return jsonify({
        "message":"Student Removed"
    })

if __name__ =="__main__":
    app.run(debug=True)
