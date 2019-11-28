import React from "react"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import {
    Link
} from "react-router-dom"
import Tools from "../../fileters"
import actionCreator from "../../store/actionCreator/movie"
class On extends React.Component {
    componentWillUnmount() {
        window.onscroll = null
    }
    render() {
        return (
            <div className={"page-wrap"} ref={"getWidth"}>
                <div className="on-tab-content">
                    {
                        // console.log(this.props.movie)
                        this.props.movie.movieList.map(v => (
                            <div key={v.id} className={"on-main-block"}>
                                <Link to={"/cinema/movie/" + v.id} >
                                    <div className={"on-avator"}>
                                        <div className={"on-img-ig"}>
                                            <img src={Tools.pic(v.img)} alt=""></img>
                                        </div>
                                    </div>
                                    <div className={"on-content-wrap"}>
                                        <div className={"on-content"}>
                                            <div className={"box-fix"}>
                                                <div className={"on-movieTitle"}>
                                                    <div className={"on-m-title"}>
                                                        {v.nm}
                                                    </div>
                                                    {Tools.version(v.version)}
                                                    {v.preShow === true ? <span className={"pre-show"}></span> : null}
                                                </div>
                                            </div>
                                            <div className={"tab-content"}>
                                                <div className={"score line-ellipsis"}>
                                                    <span className={v.sc > 0 ? "score-suffix" : "gard"}>
                                                        {
                                                            v.sc > 0 ? "观众评" : v.wish
                                                        }
                                                    </span>
                                                    <span className={v.sc > 0 ? "gard" : "score-suffix"}>
                                                        {v.sc > 0 ? v.sc : "想看"}
                                                    </span>
                                                </div>
                                                <div className={"actor line-ellipsis"}>
                                                    主演: {v.star}
                                                </div>
                                                <div className={"show-info line-ellipsis"}>
                                                    {v.showInfo}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"button-block"}>
                                            <div className={"btn-normal"} style={{
                                                backgroundColor: v.sc > 0 ? "#f03d37" : "#3c9fe6"
                                            }}>
                                                <span>
                                                    {
                                                        v.sc > 0 ? "购票" : "预售"
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                    <span onClick={this.props.getMovieMore.bind(this, this.props.movie.movieIds.slice(this.props.movie.movieList.length, this.props.movie.movieList.length + 10))} className={"loadingMore"}>加载中…………</span>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getMovie();

        const _this = this
        function fn() {
            var timer = null;
            return function () {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    let len = _this.props.movie.movieList.length;
                    _this.props.getMovieMore.call(_this, _this.props.movie.movieIds.slice(len, len + 10))
                }, 2000)
            }
        }
        const fnn = fn();
        window.onscroll = sc;
        function sc() {
            if (this.document.documentElement.scrollTop >= _this.refs.getWidth.offsetHeight - document.documentElement.clientHeight) {
                fnn()
            }
        }
    }
}
function mapStateProps(state) {
    return state
}

export default connect(mapStateProps, dispatch => bindActionCreators(actionCreator, dispatch))(On)