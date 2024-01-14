from flask import Flask
from flask_cors import CORS

PreviousWorks=[{
    "title":"Project 1",
    "description":"This is the first project",
    "image":"https://via.placeholder.com/150"
},
{
    "title":"Project 2",
    "description":"This is the second project",
    "image":"https://via.placeholder.com/150"
},
{
    "title":"Project 3",
    "description":"This is the third project",
    "image":"https://via.placeholder.com/150"
}]

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST', 'GET'])
def Home():
    return ({"Works":PreviousWorks})

if __name__ == '__main__':
    app.run(debug=True)