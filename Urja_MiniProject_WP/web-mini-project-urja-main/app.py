from flask import Flask, render_template, request, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3

app = Flask(__name__)

# Connect to SQLite database
conn = sqlite3.connect('users.db', check_same_thread=False)
c = conn.cursor()

# Define database schema if not exists
c.execute('''CREATE TABLE IF NOT EXISTS users
             (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT)''')
conn.commit()

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # Retrieve user from database
    c.execute("SELECT * FROM users WHERE username=?", (username,))
    user = c.fetchone()

    if user and check_password_hash(user[2], password):
        # Authentication successful
        return redirect(url_for('dashboard'))
    else:
        # Authentication failed
        return "Invalid username or password"

@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']

    # Hash the password
    hashed_password = generate_password_hash(password)

    try:
        # Insert new user into database
        c.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_password))
        conn.commit()
        return redirect(url_for('index'))
    except sqlite3.IntegrityError:
        return "Username already exists"

@app.route('/dashboard')
def dashboard():
    return "Welcome to your dashboard!"

if __name__ == '__main__':
    app.run(debug=True)