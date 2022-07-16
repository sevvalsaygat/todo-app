import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  return (
    <div>
      <Form
        todos={todos}
        setTodos={setTodos}
      />
      <List
        todos={todos}
      />
    </div>
  );
}

export default App;
