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

it("Check results render the right results", () => {
  act(() => {
    render(<Results answerObject={[1, 1], [0, 1]} questions={[{"question":"?", "answers":["Yes", "No"]}]}/>, container);
  });
  expect(container).toMatchSnapshot()
})
