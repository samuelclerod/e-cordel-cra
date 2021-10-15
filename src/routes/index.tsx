import { Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import { Dragons } from "../pages/Dragons";
// import { DragonDetails } from "../pages/DragonDetails";

import { Route } from "./Route";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/Home" exact component={Home} isPrivate /> */}
    </Switch>
  </BrowserRouter>
);
