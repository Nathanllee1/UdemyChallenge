# UdemyChallenge
Link to project: https://udemychallenge.appspot.com

For this challenge, I created a quiz web app. The web app has the user go through several questions and has an evaluation page displaying what the user got right and wrong. 

When the application loads, I have it make a request for the questions and potential answers. After the user submits the quiz, I submit the answers to the backend where it is evaluated and displayed back in the frontend. I structured it this way so that there's no way for the user to get the answers unnless they have questions to submit. This is useful if the quiz is used in a more strict setting and cheating could be an issue. 

I focused mostly on the frontend. I had it handle almost all the logic and data flow. The frontend was responsible for displaying all the questions, collecting all the quiz answers, and submitting and displaying results. The only purpose of the backend is to serve the questions and evaluate the submitted answers.

I used React for the frontend and python Flask for the backend. It's a stack that I'm familiar with and I could get a boiler plate setup fairly quickly. In the frontend, I'm using Bootstrap only for the UI styling and FontAwesome for some symbols. I wanted to stick to vanilla HTML and CSS to keep things as simple as possible. For frontend unit testing, I'm using Jest, a library recommended by the React documentation. It's deployed on Google App Engine. I used Google App Engine because I was already familiar with it, had an easy setup for Flask applications, and had straightforward database integration. I also deployed on Google App Engine because I could have the frontend and backend in the same place which creates more cohesiveness and makes it easier to maintain.
