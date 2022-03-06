import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Upload from "./pages/Upload/Upload";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <PageHeader />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/video/:videoID"
            render={(routerProps) => {
              return <HomePage {...routerProps} />;
            }}
          />
          <Route path="/upload" exact component={Upload} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
