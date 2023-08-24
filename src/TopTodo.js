import React from "react";

import Todo from "./Todo";


/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  let top = todos.reduce((acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
  console.log("TOP IS ===> ", top);

  return (
    <div>
    {top && <Todo todo={top}/>}
    </div>
  );
}

export default TopTodo;