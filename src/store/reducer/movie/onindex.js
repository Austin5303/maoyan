import initState from "../../state/blackstate"
import actionType from "../../actionType/movie"
export default function (state = initState, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    if (type === actionType.GET_MOVIE_ON) {
        state.movieList = payload.movieList;
        state.movieIds = payload.movieIds;
    }
    else if (type === actionType.GET_MOVIE_ON_MORE) {
        state.movieList = [
            ...state.movieList,
            ...payload.movieListMore
        ];
    }
    else if (type === actionType.GET_MOVIE_DETAIL) {
        state.detailMovie = payload.detailMovie
    }
    else if (type === actionType.GET_CINEMES) {
        state.cinemas = payload.cinemas
        state.dates = payload.showDays.dates
    }

    return state
}