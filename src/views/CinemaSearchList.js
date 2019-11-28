import React from 'react';
import {
    bindActionCreators
} from "redux";
import {
    Link,
} from 'react-router-dom'
import searchActionCreator from '../store/actionCreator/serach/index'
import {
    connect
} from "react-redux"
import Tools from "../fileters"
let pageno = 2
class MovieSearchList extends React.Component {
    render() {
        return (
            <div className="Search">
                <div className="App-header">{this.props.headerName}</div>
                <div className="result">
                    {
                        this.props.cinemaslist ? <div className="result">
                            <div className="list">
                                {
                                    this.props.cinemaslist.map(v => (
                                        <div className="cell cinema" onClick={() => this.props.history.push("/shows/" + v.id)} id={v.id} key={v.id + Date.now()}>
                                            <div className="info">
                                                <p className="name-price">
                                                    <span className="name one-line">{v.nm}</span>
                                                    <span className="sell-price">
                                                        <span className="price">{v.sellPrice}元起</span>
                                                    </span>
                                                </p>
                                                <p className="address one-line">
                                                    {v.addr}
                                                </p>
                                                <p className="feature-tags">
                                                    {
                                                        v.deal ? "" : <span>座</span>
                                                    }
                                                    {
                                                        v.allowRefund ? <span>退</span> : ""
                                                    }
                                                    {
                                                        v.hallType ? v.hallType.map((v, i) => (
                                                            <span key={i}>{v}</span>
                                                        )) : ""
                                                    }
                                                    {
                                                        v.endorse ? <span>改签</span> : ""
                                                    }
                                                    {
                                                        v.snack ? <span className="feature" style={{
                                                            color: "#f90",
                                                            borderColor: "#f90"
                                                        }}>小吃</span> : ""
                                                    }
                                                </p>
                                            </div>
                                            <div className="distance">
                                                {v.distance}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> : ""
                    }
                    {/* <div className="more-result" onClick={()=>this.props.getSearchMoviesList(this.props.val,20*(pageno++))}>加载更多</div> */}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getSearchCinemasList(this.props.val)
    }
}
// 设置要使用的数据状态
function mapStateToProps(state) {
    // console.log(state.search.cinemaslist);
    // console.log(state.search.cinemas.list);

    return {
        headerName: state.common.headerName,
        movies: state.search.movieslist,
        cinemaslist: state.search.cinemaslist,
        val: state.search.val
    }
}
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(MovieSearchList);
