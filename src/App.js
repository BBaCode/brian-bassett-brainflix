import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Upload from "./components/Upload/Upload";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <PageHeader />
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <Route />  this will be to change what shows up */}

            <Route path="/upload" exact component={Upload} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
