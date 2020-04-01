from google.cloud import datastore


datastore_client = datastore.Client()


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

answer = [0, 2, 0]

questionObject = datastore.Entity(key=datastore_client.key('question'))
question.update({
    'question': question
})

datastore_client.put(questionObject)

answerObject = datastore.Entity(key=datastore_client.key('answer'))
question.update({
    'answer': answer
})

datastore_client.put(answerObject)
