import { Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

import { Route } from "./Route";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      {/* <Route path="/Home" exact component={Home} isPrivate /> */}
    </Switch>
  </BrowserRouter>
);
