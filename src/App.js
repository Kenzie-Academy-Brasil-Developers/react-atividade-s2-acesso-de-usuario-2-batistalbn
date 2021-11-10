import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Customer from "./pages/customer";
import Company from "./pages/company";
import { members } from "./components/members";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home members={members} />
      </Route>

      <Route exact path="/customer/:id">
        <Customer members={members} />
      </Route>
      <Route exact path="/company/:id">
        <Company members={members} />
      </Route>
    </Switch>
  );
}

export default App;
