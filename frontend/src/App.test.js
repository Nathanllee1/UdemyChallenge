import React from 'react';
import App from './App';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

//Import components to test
import Question from './question';
import Results from './results';


//Setup
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("Renders question series correctly after fetch", async () => {
  const fakeQuestions = [{"question" : "Why", "answers" : ['1', '2', '3']}, {"question": "Where", "answers" : ['1', '2', '3']}]

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeQuestions)
    })
  )

  await act(async () => {
    render(<App />, container)
  })
  expect(container).toMatchSnapshot()
}),

it("Check results render the right results", () => {
  act(() => {
    render(<Results answerObject={[1, 1], [0, 1]} questions={[{"question":"?1", "answers":["Yes", "No"]}, {"question":"?2", "answers":["Perhaps", "Maybe"]}]}/>, container);
  });

  expect(container).toMatchSnapshot()
}),

it("Check question object displaying right amount of questions", () => {
  act(() => {
    render(<Question question={{"question":"?1", "answers":["Yes", "No"]}} questionNumber={1} />, container)
  });
  expect(container).toMatchSnapshot()
})
