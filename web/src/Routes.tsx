import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/Login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
