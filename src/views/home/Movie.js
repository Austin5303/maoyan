import React from "react";
import {
    NavLink,
    Route,
    Switch,
    Redirect,
    Link
} from "react-router-dom"
import On from "../movie/On"
import Coming from "../movie/Coming"
import GuardRouter from "../../router/GuardRouter"
export default class Movie extends React.Component {
    render() {
        return (
            <div>
                <nav >
                    <Link to="city">{localStorage.cityName ? localStorage.cityName : "定位"}</Link>
                    <NavLink className={"App-link"} exact activeClassName={"App-active"} to={"/movie"}>正在热映</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/movie/coming"}>即将上映</NavLink>
                    <Link to="searchall">搜索</Link>
                </nav>
                <Route path={"/movie/coming"} render={() => <GuardRouter component={Coming}></GuardRouter>}></Route>
                <Route path={"/movie"} exact render={() => <GuardRouter component={On}></GuardRouter>} ></Route>
                <Switch>
                    <Redirect path="/movie/city" to="/city"></Redirect>
                    <Redirect path="/movie/searchall" to="/searchall"></Redirect>
                </Switch>
            </div>
        )
    }
}