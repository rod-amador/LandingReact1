import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing1 from "./Landing1";
import Landing2 from "./Landing2";

const Routes = ()=> (
    <Switch>
        <Route exact path= "/"                    component={Landing1}/>
        <Route exact path= "/beneficios"          component={Landing2}/>
        
    
    </Switch>
);


export default Routes