import React from "react";
import Header from "./components/Header";
import CandidateList from "./components/CandidateList";
import NewCandidate from "./components/NewCandidate";
import EditCandidate from "./components/EditCandidate";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div className="container">
          <Switch>
            <Route exact path="/" component={CandidateList} />
            <Route exact path="/candidates/new" component={NewCandidate} />
            <Route
              exact
              path="/candidates/edit/:id"
              component={EditCandidate}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
