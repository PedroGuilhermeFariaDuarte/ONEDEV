import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Pages
import Home from "../pages/Home"
import SingIn from "../pages/SignIn"
import SingUp from "../pages/SignUp"
import Wrapper from "../components/WrapperRouter"
import Profile from "../pages/Profile"

const Router: React.FC = () => {
    return <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/profile" exact={true} component={Profile} />
            <Route path="/signin" exact={true} component={SingIn} />
            <Route path="/signup" exact={true} component={SingUp} />
            <Route path="/main" exact={true} component={Wrapper} />
        </Switch>
    </BrowserRouter>
}

export default Router
