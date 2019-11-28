import React from 'react';
import {
    bindActionCreators
} from "redux";
import searchActionCreator from '../store/actionCreator/serach/index'
import {
    connect
} from "react-redux"
class SearchCinemas extends React.Component {
    render() {
        return (
            <div className="Search">
                <div className="App-header">{this.props.headerName}</div>
                <div className="SearchAll-header">
                    <div className="input-wrapper">
                        <img className="search-icon" src={"http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png"} alt="" />
                        <input className="search-input" type="text" ref={input => this.input = input} placeholder="搜影院" onChange={
                            this.props.getMoviesAndCinemas.bind(this)
                        }></input>
                        {/* <img className="del-input" style={
                             this.refs.input.value?"{display:'none'}":"{display:'block'}"
                            } src={"http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png"} alt=""></img> */}
                    </div>
                    <div className="cancel" onClick={() => this.props.history.go(-1)}>取消</div>
                </div>
                <div className="SearchAll-result" >

                    {this.props.cinemas.total > 0 ? <div className="result">
                        <h3>影院</h3>
                        <div className="list">
                            {
                                this.props.cinemas.list.slice(0, 3).map(v => (
                                    <div className="cell cinema" onClick={() => this.props.history.push("/shows/" + v.id)} id={v.id} key={v.id}>
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
                        <div className="more-result" onClick={this.tiaozhuanc.bind(this)}>查看全部{this.props.cinemas.total}家电影院</div>
                    </div> : ""}
                </div>

            </div>
        );
    }
    componentDidMount() {
        // console.log(this.input.vaule);
    }
    tiaozhuanc() {
        // this.props.changeMovie();
        this.props.history.push("/searchlist/cinemas")
    }
}
// 设置要使用的数据状态
function mapStateToProps(state) {
    // console.log(state.search.movies.list);
    // console.log(state.search.cinemas.list);

    return {
        headerName: state.common.headerName,
        cinemas: state.search.cinemas,
        movies: state.search.movies,
        movie: state.search.movieslist,
    }
}
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(SearchCinemas);
