import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import New from "./pages/New";

// Switch usado para a aplicação não acessar duas rotas ao mesmo tempo

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={New} />
    </Switch>
  );
}
// as rotas também são componentes

export default Routes;
