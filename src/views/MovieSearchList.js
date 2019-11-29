import React from 'react';
import {
    bindActionCreators
} from "redux";
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
                <div className="result result-list">
                    {
                        this.props.movies.keyword ? this.props.movieslist.map(v => (
                            <div className="cell movie" key={v.id+Date.now()} onClick={()=>this.props.history.push("/asgard/"+v.id)}>
                                <img className="poster" src={Tools.pic(v.img)} />
                                <div className="info">
                                    <div className="name-score">
                                        <p className="name">
                                            <span className="one-line">{v.nm}</span>
                                            <span className="version "></span>
                                        </p>
                                        {
                                            v.sc !== 0 ? <div className="score"><span className="num">{v.sc}</span>分</div> : (v.wish !== 0 ? <div className="wish"><span className="num">{v.wish}</span>人想看</div> : <div>暂无评分</div>)
                                        }
                                    </div>
                                    <div className="detail-section">
                                        <div className="detail-items">
                                            <p className="ename one-line">{v.enm}</p>
                                            <p className="catogary">{v.cat}</p>
                                            <p className="release">{v.rt}</p>
                                        </div>
                                        {
                                            v.showst === 1 ? <div className="buy-btn fix" >想看</div> : (v.showst === 3 ? <div className="buy-btn sale" id={v.id}>购票</div> : (v.showst === 4 ? <div className="buy-btn presale" id={v.id}>预售</div> : ""))
                                        }
                                    </div>
                                </div>
                            </div>
                        )) : ""
                    }
                    <div className="more-result" onClick={() => this.props.getSearchMoviesList(this.props.val, 20 * (pageno++))}>加载更多</div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getSearchMoviesList(this.props.val)
    }
}
// 设置要使用的数据状态
function mapStateToProps(state) {
    // console.log(state.search.cinemas.list);

    return {
        headerName: state.common.headerName,
        movies: state.search.movieslist,
        movieslist: state.search.movielist,
        val: state.search.val
    }
}
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(MovieSearchList);
