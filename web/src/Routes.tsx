import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Bye from "./pages/Bye";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes: React.FC = () => {
  // const { data, loading } = useHelloQuery();
  // if (loading || !data) {
  //   return <div>Loading...</div>;
  // }

  // return <div>{data.hello}</div>;

  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/bye">Bye</Link>
        </header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/bye" component={Bye}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
