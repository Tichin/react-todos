import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("productiv app", function () {


  it("renders without crashing", function () {
    render(<TodoApp initialTodos={[
      {
        id: 1,
        title: "Code!",
        description: "Write some code",
        priority: 2,
      }
  ]}/>);
  });

  it("it can submit form data", function () {
    const { queryByText, getByLabelText, debug, container } = render(<TodoApp initialTodos={[
      {
        id: 1,
        title: "Code!",
        description: "Write some code",
        priority: 2,
      }
  ]}/>);

  debug(container);

    expect(queryByText("make dinner")).not.toBeInTheDocument();

    const titleInput = getByLabelText("Title:");
    const descriptionInput = getByLabelText("Description:");
    const priorityInput = getByLabelText("Priority:");
    const submitBtn = queryByText("Gø!");

    fireEvent.change(titleInput, { target: { value: 'make dinner' } });
    fireEvent.change(descriptionInput, { target: { value: 'make big dinner' } });
    fireEvent.change(priorityInput, { target: { value: '3' } });
    fireEvent.click(submitBtn);

   expect(queryByText("make dinner")).toBeInTheDocument();

  });



  // it("contains expected title", function () {
  //   const result = render(<App />);
  //   expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  // });

  // it("rendered quotes app", function () {
  //   const result = render(<App />);
  //   expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  // });
});