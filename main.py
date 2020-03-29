from flask import Flask, render_template

app = Flask(__name__, static_folder="build/static", template_folder="build")

@app.route('/')
def index():
    return (render_template('index.html'))


@app.route('/questions')
def questions():
    questionList = [
        {
            'question' : "Where does Nathan go to school?",
            'answers' : ['Cal Poly', 'UC San Diego', 'UC Davis']
        },
        {
            'question' : "What other language does Nathan know other than English?",
            'answers' : ['Spanish', 'Pig Latin', 'Mandarin']
        },
        {
            'question' : "Does Nathan prefer React or Angular?",
            'answers' : ['React', 'Angular']
        },

    ]

    return (questionList)

@app.route('/answers')
def answers():
    answerKey = [0, 2, 0]
    return (answerKey)


if __name__ == '__main__':
    app.run(debug=True)
