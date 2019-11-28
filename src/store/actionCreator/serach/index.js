import axios from "axios";


export const upMoviesAndCinemasList = (data,val) => ({
    type:"UP_MOVIES_AND_CINEMAS_LIST",
    payload:{
        data,
        val
    }
})
export const upSearchMoviesList = (data,val) => ({
    type:"UP_SEARCH_MOVIES_LIST",
    payload:{
        data,
        val
    }
})
export const upSearchCinemasList = (data,val) => ({
    type:"UP_SEARCH_CINEMAS_LIST",
    payload:{
        data,
        val
    }
})
export const upCinema = (data) => ({
    type:"UP_CINEMA",
    payload:{
        data,
    }
})
export const changeMovies = () => ({
    type:"CHANGE_MOVIE",
    payload:{

    }
})

export const upMovieId = (id) => ({
    type:"CHANGE_MOVIE_ID",
    payload:{
        id
    }
})



export default {
    getMoviesAndCinemas(){
        return async (dispatch)=>{
            const val = this.input.value
            const {data} = await axios.get("/ajax/search?kw="+val+"&cityId=1&stype=-1");
            dispatch(upMoviesAndCinemasList(data,val))
        };
    },
    getSearchMoviesList(val,offset=20){
        return async (dispatch)=>{
            const {data} = await axios.get("/searchlist/movies?keyword="+val+"&ci=1&offset="+offset+"&limit=20");
            dispatch(upSearchMoviesList(data,offset))
        };
    },
    getSearchCinemasList(val,offset=20){
        return async (dispatch)=>{
            const {data} = await axios.get("/searchlist/cinemas?keyword="+val+"&ci=1&offset="+offset+"&limit=20");
            dispatch(upSearchCinemasList(data,offset))
        };
    },
    getCinema(id){
        return async (dispatch)=>{
            const {data} = await axios.get("/ajax/cinemaDetail?cinemaId="+id);
            dispatch(upCinema(data))
        };
    },
    changeMovie(){
        return async (dispatch)=>{
            dispatch(changeMovies())
        };
    },
    changeMovieId(id){
        return async (dispatch)=>{
            dispatch(upMovieId(id))            
        };
    }
}