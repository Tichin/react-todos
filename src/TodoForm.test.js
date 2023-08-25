import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


describe("Todo", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoForm />);

    expect(container).toMatchSnapshot();
  });


  it("it can submit form data", function () {
    const { queryByText, getByLabelText } = render(<TodoForm />);
    const { container } = render(< Todo todo={
      {
        id: 1,
        title: "Code!",
        description: "Write some code",
        priority: 2,
      }} />);

    expect(container).not.toContainHTML(`<div><div class="Todo"><div><b>make dinner</b> <small>(priority: 1)</small>`
      + `</div><div><small>make big dinner</small></div></div></div>`);

    const titleInput = getByLabelText("Title:");
    const descriptionInput = getByLabelText("Description:");
    const priorityInput = getByLabelText("Priority:");
    const submitBtn = queryByText("Gø!");

    fireEvent.change(titleInput, { target: { value: 'make dinner' } });
    fireEvent.change(descriptionInput, { target: { value: 'make big dinner' } });
    fireEvent.change(priorityInput, { target: { value: '1' } });
    fireEvent.click(submitBtn);

    expect(container).toContainHTML(`<div><div class="Todo"><div><b>make dinner</b> <small>(priority: 1)</small>`
      + `</div><div><small>make big dinner</small></div></div></div>`);

  });



});