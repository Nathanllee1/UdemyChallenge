from flask import Flask, render_template, jsonify, request
import json
from google.cloud import datastore

datastore_client = datastore.Client()


app = Flask(__name__, static_folder="build/static", template_folder="build")

@app.route('/')
def index():
    return (render_template('index.html'))


@app.route('/questions')
def questions():
    question = [
        {
            'question' : "Where does Nathan go to school?",
            'answers' : ['Cal Poly', 'UC San Diego', 'UC Davis']
        },
        {
            'question' : "What other language does Nathan know?",
            'answers' : ['Spanish', 'French', 'Mandarin']
        },
        {
            'question' : "Does Nathan prefer React or Angular?",
            'answers' : ['React', 'Angular']
        },
    ]


    return jsonify(question)

@app.route('/answers', methods=['POST'])
def answers():
    enteredAnswers = request.get_json()
    answerKey = answer = [0, 2, 0]
    answerFormat = []

    i = 0

    while i < len(answerKey):

        answerFormat.append([answerKey[i], enteredAnswers[i]])
        i += 1

    return jsonify(answerFormat)


if __name__ == '__main__':
    app.run(debug=False)
