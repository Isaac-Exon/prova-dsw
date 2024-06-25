import React from "react";
import { Provider } from "./contexts/Contexto";
import Form from "./components/Form";
import List from "./components/List";

const App: React.FC = () => {
  return (
    <Provider>
      <div className="App">
        <Form />
        <List />
      </div>
    </Provider>
  );
};

export default App;
