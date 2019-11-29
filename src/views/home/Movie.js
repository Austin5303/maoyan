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
                <div className="App-header">猫眼电影</div>
                <nav className="topbar">
                    <div className={"white-bg topbar-bg"}>
                        <div className={"city-entry"}>
                            <Link to="city" className={"city-name"}>{localStorage.cityName ? localStorage.cityName : "定位"}</Link>
                            <i className={"city-entry-arrow"}></i>
                        </div>
                        <div className={"switch-hot"}>
                            <NavLink className={"App-link"} exact activeClassName={"App-active"} to={"/movie"}>正在热映</NavLink>
                            <NavLink className={"App-link"} activeClassName={"App-active"} to={"/movie/coming"}>即将上映</NavLink>
                        </div>
                        <Link to="searchall" className={"search-entry search-icon"}></Link>
                    </div>
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