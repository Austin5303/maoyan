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
class SearchAll extends React.Component {
    render() {
        return (
            <div className="Search">
                <div className="App-header">{this.props.headerName}</div>
                <div className="SearchAll-header">
                    <div className="input-wrapper">
                        <img className="search-icon" src={"http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png"} alt="" />
                        <input className="search-input" type="text" ref={input => this.input = input} placeholder="搜电影、搜影院" onChange={
                            this.props.getMoviesAndCinemas.bind(this)
                        }></input>
                        {/* <img className="del-input" style={
                             this.refs.input.value?"{display:'none'}":"{display:'block'}"
                            } src={"http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png"} alt=""></img> */}
                    </div>
                    <div className="cancel" onClick={() => this.props.history.go(-1)}>取消</div>
                </div>
                <div className="SearchAll-result" >
                    {this.props.movies.total > 0 ? <div className="result">
                        <h3>电影/电视剧/综艺</h3>
                        <div className="list">
                            {
                                this.props.movies.list.slice(0, 3).map(v => (
                                    <div className="cell movie" key={v.id}>
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
                                ))
                            }
                        </div>
                        <div className="more-result" onClick={this.tiaozhuanm.bind(this)}>查看全部{this.props.movies.total}部影视剧作品</div>
                        {/* <Link to={"/searchlist/movies"}><div className="more-result" >查看全部{this.props.movies.total}部影视剧作品</div></Link> */}
                    </div> : ""}
                    {this.props.cinemas.total > 0 ? <div className="result">
                        <div style={{ height: "20px", width: "100%", background: "rgb(245,245,245)" }}></div>
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
    tiaozhuanm() {
        this.props.changeMovie();
        this.props.history.push("/searchlist/movies")
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
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(SearchAll);
