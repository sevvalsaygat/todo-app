import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form />
      <List
        todos={todos}
      />
    </div>
  );
}

export default App;
