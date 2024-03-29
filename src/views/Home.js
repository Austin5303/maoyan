import React from "react";
import {
    NavLink,
    Route,
    Switch,
    Redirect
} from "react-router-dom"
import Movie from "../views/home/Movie"
import Cinema from "../views/home/Cinema"
import My from "../views/home/My"
import GuardRouter from "../router/GuardRouter"
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="App-header">猫眼电影</div>

                <Route path={"/movie"} render={() => <GuardRouter component={Movie}></GuardRouter>} ></Route>
                <Route path={"/cinema"} render={() => <GuardRouter component={Cinema}></GuardRouter>}></Route>
                <Route path={"/my"} render={() => <GuardRouter component={My}></GuardRouter>}></Route>
                <nav className="App-footer">
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/movie"}>电影</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/cinema"}>影院</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/my"}>我的</NavLink>
                </nav>
                <Switch>
                    <Redirect path="/" to={"/movie"}></Redirect>
                </Switch>
            </div>

        )
    }
}