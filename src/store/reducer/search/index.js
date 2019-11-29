import initState from "../../state/index"
export default function (state = initState, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    if (type === "UP_MOVIES_AND_CINEMAS_LIST") {
        state.movies = payload.data.movies || {}
        state.cinemas = payload.data.cinemas || {}
        state.val = payload.val || ""
    }
    if (type === "UP_SEARCH_MOVIES_LIST") {
        // console.log(payload.data.keyword,state.val);
        state.movieslist = payload.data || {}
        state.movielist = [...state.movielist, ...payload.data.movies]
    }
    if (type === "UP_SEARCH_CINEMAS_LIST") {
        // console.log(payload.data.keyword,state.val);
        // state.movieslist = payload.data || {}
        state.cinemaslist =  payload.data.cinemas
    }
    if (type === "UP_CINEMA") {
        state.cinema = payload.data
    }
    if (type === "CHANGE_MOVIE") {
        state.movielist = []
    }
    if (type === "CHANGE_MOVIE_ID") {
        state.movieid = payload.id
    }
    if(type === "UP_COUNT"){
        state.count = ++state.count
        state.xiaoji =( payload.price * state.count/1).toFixed(1)
    }
    if(type === "DOWN_COUNT"){
        if(state.count===1){
            state.count = state.count
        }else{
            state.count = --state.count    
            state.xiaoji =( payload.price * state.count/1).toFixed(1)

        }
    }



    return state
}