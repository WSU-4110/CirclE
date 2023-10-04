from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)

# Database connection and configuration
conn = sqlite3.connect('database.sql')  # Change 'database.db' to your SQLite database file
cursor = conn.cursor()

# Define a route to retrieve items by category
@app.route('/items/<category>', methods=['GET'])
def get_items(category):
    try:
        # Query the database for items based on the selected category
        cursor.execute('SELECT * FROM {}Items'.format(category))
        items = cursor.fetchall()

        # Extract column names for JSON keys
        column_names = [desc[0] for desc in cursor.description]

        # Create a list of dictionaries for JSON response
        response = [dict(zip(column_names, item)) for item in items]

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
