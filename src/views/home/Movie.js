import React from "react";
import {
    NavLink,
    Route,
    // Switch,
    // Redirect
} from "react-router-dom"
import On from "../movie/On"
import Coming from "../movie/Coming"
import GuardRouter from "../../router/GuardRouter"
export default class Movie extends React.Component {
    render() {
        return (
            <div>
                <nav >
                    <NavLink className={"App-link"} exact activeClassName={"App-active"} to={"/movie"}>正在热映</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/movie/coming"}>即将上映</NavLink>
                </nav>
                <Route path={"/movie/coming"} render={() => <GuardRouter component={Coming}></GuardRouter>}></Route>
                <Route path={"/movie"} exact render={() => <GuardRouter component={On}></GuardRouter>} ></Route>
            </div>
        )
    }
}