import axios from 'axios'
import actionType from "../../actionType/movie";
export const upMoviesList = data => ({
    type: actionType.GET_MOVIE_ON,
    payload: data
})
export const upMoviesListMore = movieListMore => ({
    type: actionType.GET_MOVIE_ON_MORE,
    payload: {
        movieListMore
    }
})
export const upMovieDetail = detailMovie => ({
    type: actionType.GET_MOVIE_DETAIL,
    payload: {
        detailMovie
    }
})
export const upCinemaList = data => ({
    type: actionType.GET_CINEMES,
    payload: data
})
export default {
    getlist() {
        return async (dis) => {
            const data = await axios.get("/ajax/comingList?ci=10&token=i8NHLDuUTbeTxDHVPhY88YVf_9UAAAAAgQkAAEe4evmd_yz1vM4Bt7U1mqDI8p8AET5-syChVJLV-s7i5gl_yvg1F-j-1zaVHs7Qiw&limit=10"
            )
            dis({
                type: "UP_COMIMGLIST",
                payload:
                {
                    cominglist: data.data.coming,
                    morecominglistId: data.data.movieIds
                }

            })
        }
    },
    getexpected() {
        return async (dis) => {
            const data2 = await axios.get("/ajax/mostExpected", {
                params: {
                    ci: localStorage.cityId ? localStorage.cityId : 1,
                    limit: 10
                }
            })
            dis({
                type: "UP_EXPECTED",
                payload: data2.data.coming
            })
        }
    },
    getmorecominglist(movieIds) {
        return async (dis) => {
            const data = await axios.get("/ajax/moreComingList", {
                params: {
                    ci: localStorage.cityId ? localStorage.cityId : 1,
                    limit: 12,
                    movieIds: movieIds.join(",")
                }
            })
            console.log(data.data.coming)
            dis({
                type: "UPMORELIST",
                payload: data.data.coming
            })

        }
    },
    /*************************郭义杰*******************************/
    getMovie() {
        return async (dispatch) => {
            const { data } = await axios.get("/ajax/movieOnInfoList");
            dispatch(upMoviesList(data))
        };
    },
    getMovieMore(movieIds) {
        return async (dispatch) => {
            const { data } = await axios.get("/ajax/moreComingList?token=", {
                params: {
                    movieIds: movieIds.join(",")
                }
                // paramsSerializer: params => {
                //     return Qs.stringify(params, {indices: false })
                // }
            });
            dispatch(upMoviesListMore(data.coming))
        };
    },
    getMovieDetail(movieId) {
        return async (dispatch) => {
            const { data } = await axios.get("/ajax/detailmovie?", {
                params: {
                    movieId
                }
            });
            dispatch(upMovieDetail(data.detailMovie))
        };
    },
    getCinemaList(offset = 0, id, tab) {
        console.log(tab);

        return async (dispatch) => {
            const forceUpdate = Date.now()
            const { data } = await axios.post("/ajax/movie?forceUpdate=" + forceUpdate, {
                movieId: id / 1,
                day: tab,
                offset,
                limit: 20,
                districtId: -1,
                lineId: -1,
                hallType: -1,
                brandId: -1,
                serviceId: -1,
                areaId: -1,
                stationId: -1,
                updateShowDay: true,
                reqId: 1574843774321,
                cityId: 1,
            });
            dispatch(upCinemaList(data))
        };
    }
}