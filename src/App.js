import React from 'react';
import './App.css';
import {
  Route,
  Switch
} from 'react-router-dom'
import Login from "./views/Login"
import Home from "./views/Home"
import Shows from "./views/Shows"
import SearchAll from "./views/SearchAll"
import SearchCinemas from "./views/SearchCinemas"
import MovieSearchList from "./views/MovieSearchList"
import CinemaSearchList from "./views/CinemaSearchList"
import City from "./views/City"
import Cinema from './views/Cimena'
import Asgard from './views/Asgard'
import Seats from './views/Seats';
import Deal from "./views/Deal"
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path={"/cinema/movie/:id"} component={Cinema}></Route>
          <Route path={"/searchlist/movies"} component={MovieSearchList}></Route>
          <Route path={"/shows/:id"} component={Shows}></Route>
          <Route path={"/searchlist/cinemas"} component={CinemaSearchList}></Route>
          <Route path={"/login"} component={Login}></Route>
          <Route path={"/searchall"} component={SearchAll}></Route>
          <Route path={"/searchcinemas"} component={SearchCinemas}></Route>
          <Route path={"/city"} component={City}></Route>
          <Route path={"/asgard/:movieid"} component={Asgard}></Route>
          <Route path={"/seats"} component={Seats}></Route>
          <Route path={"/deal"} component={Deal}></Route>
          <Route path={"/"} component={Home}></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
