import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DisplayList from "./DisplayList";
import EditForm from "./EditForm";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <DisplayList />
          </Route>
          <Route path="/edit/:id" exact>
            <EditForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
