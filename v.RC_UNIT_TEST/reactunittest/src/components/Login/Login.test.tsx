import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

describe("Login component test", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Login />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("renders correctly initial document", () => {
    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(3); // emaill, password & remember-me checkbox
    expect(inputs[0].type).toBe('text');
    expect(inputs[1].type).toBe('password');
    expect(inputs[2].type).toBe('checkbox');

    const btns = container.querySelectorAll('button');
    expect(btns).toHaveLength(1);
    expect(btns[0].type).toBe('submit');
  });
  it("renders correctly initial document with attributes", () => {
    const form = container.querySelector("Form");
    expect(form).toBeInTheDocument(); // emaill, password & remember-me checkbox
    // expect(form['loginform_email']).
    // expect(form['loginform_password']).toBeInTheDocument();
    // expect(form['loginform_remember']).toBeInTheDocument();

    // const btns = container.querySelectorAll('button');
    // expect(btns).toHaveLength(1);
    // expect(btns[0].type).toBe('submit');
  });
});
