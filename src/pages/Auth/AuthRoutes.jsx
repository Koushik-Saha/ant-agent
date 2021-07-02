import React from "react"
import { Switch } from "react-router-dom"
import Login from "./Login";
// import { RouteWithLayout, RouteWithOutAuthLayout } from "components"
// import { AuthLayout } from "../../layout"
// import Login from "./Login"


const AuthRoutes = () => {
    return (
        <Switch>
            {/*<RouteWithOutAuthLayout*/}
            {/*    component={Login}*/}
            {/*    layout={AuthLayout}*/}
            {/*    path="/auth/login"*/}
            {/*/>*/}
            <Login />
        </Switch>
    );
}
export default AuthRoutes