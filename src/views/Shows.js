import React from 'react';
import {
    bindActionCreators
} from "redux";
// import {
//     Link,
//   } from 'react-router-dom'
import searchActionCreator from '../store/actionCreator/serach/index'
import {
    connect
} from "react-redux"
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';
import Tools from "../fileters/index"
import {
    Tabs
} from "antd-mobile"
class Shows extends React.Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            title:"",
            date:'',
        }
    }
    render() {
        const tabs = []
        if(this.props.cinema.showData.movies){
            for(var i=0;i<this.props.cinema.showData.movies.length;i++){
                if(!this.state.activeIndex){
                    this.state.activeIndex=0
                }
                if(this.state.activeIndex===i){
                    // console.log(this.props.cinema.showData.movies[i].nm);
                    this.props.cinema.showData.movies[i].shows.map(v=>{
                        // console.log(v.dateShow);
                        tabs.push({
                            title:v.dateShow,
                        })
                    })
                }
            }
        }
        return (
            <div>
                {
                    this.props.cinema ? <div className="shows">
                        <div className="App-header nav-header">{this.props.cinema.cinemaData.nm}</div>
                        <div className="body">
                            <div className="body-wrap"><div className="cinema-wrap"><div className="cinema-block">
                                <div className="cinema-info">
                                    <div className="title line-ellipsis">{this.props.cinema.cinemaData.nm}</div>
                                    <div className="location line-ellipsis">{this.props.cinema.cinemaData.addr}</div>
                                    <a className="location-icon" href={"https://3gimg.qq.com/lightmap/v1/marker/index.html?marker=coord%3A"+this.props.cinema.cinemaData.lat+"%2C"+this.props.cinema.cinemaData.lng+"%3Btitle%3A"+this.props.cinema.cinemaData.addr+"%3Baddr%3A"+this.props.cinema.cinemaData.nm+"&%24"}><img src="data:image/png;base64,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" /></a>
                                </div>
                                <div><div>
                                    <div className="cinema-nav swiper-container swiper-container-horizontal swiper-container-android">
                                        {/* <div className="post-bg" style={{
                                            backgroundImage:"url("+v.img+")"
                                        }}></div> */}
                                        {
                                            this.props.cinema.showData.movies ? this.props.cinema.showData.movies.map((v, i) => (
                                                (this.state.activeIndex ? this.state.activeIndex : 0) === i ?
                                                    <div key={v.id} className="post-bg" style={{
                                                        backgroundImage: "url(" + Tools.pic(v.img) + ")"
                                                    }}></div>
                                                    : ''
                                            )) : ''

                                        }
                                        <div className="post-bg-filter"></div>
                                        <div className="swiper-wrapper">
                                            {
                                                this.props.cinema.showData.movies ? this.props.cinema.showData.movies.map(v => (
                                                    <div className="swiper-slide" key={v.id} onClick={() => this.props.changeMovieId(v.id)}>
                                                        <div className="post">
                                                            <img src={Tools.pic(v.img)}></img>
                                                        </div>
                                                    </div>
                                                )) : ""
                                            }
                                        </div>
                                    </div>

                                    {
                                        this.props.cinema.showData.movies ? this.props.cinema.showData.movies.map((v, i) => (
                                            (this.state.activeIndex ? this.state.activeIndex : 0) === i ?
                                                <div className="movie-info" key={v.id}>
                                                    <div className="movie-title line-ellipsis" >
                                                        <span className="title">{v.nm} </span>
                                                        <span className="grade">
                                                            {
                                                                v.sc === "0.0" ? <span>{v.wish}<span className="small">人想看</span></span> : <span>{v.sc}<span className="small">分</span></span>
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="movie-desc line-ellipsis">{v.desc}</div>
                                                </div>
                                                : ''
                                        )) : ''

                                    }
                                    {/* {
                                          this.props.cinema.showData.movies?(this.props.movieid?this.props.movieid:this.props.cinema.showData.movies[0].id):'加载中'
                                        } */}

                                </div></div>
                            </div></div>
                            <div className="k" >
                            <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />} tabBarPosition='top' prerenderingSiblingsNumber={5} onTabClick={(tab) => {
                                    // this.props.getCinemaList(0, this.props.match.params.id, tab.title)
                                    this.setState({
                                        title:tab.title
                                    })
                                    // console.log(this.state.title);
                                }
                                } tabBarActiveTextColor="#f03d37" tabBarUnderlineStyle={{
                                    backgroundColor: "#f03d37",
                                    border: "1px solid #f03d37"
                                }}>
                                <div className="listwrap">{

                                    this.props.cinema.showData.movies ? this.props.cinema.showData.movies.map((v, i) => (
                                        (this.state.activeIndex ? this.state.activeIndex : 0) === i ?
                                            <div  key={v.id}>
                                                {
                                                v.shows.map((v,i)=>(
                                                    this.state.title?(this.state.title=== v.dateShow?
                                                        <div key={i}>{
                                                            v.plist.map((v,i)=>(
                                                                <div className="item-outer mb-line-b" key={i}>
                                                                    <div className="item box-flex">
                                                                        <div className="time-block">
                                                                            <div className="begin">{v.tm}</div>
                                                                            <div className="end"></div>
                                                                        </div>
                                                                        <div className="info-block">
                                                                            <div className="lan">{v.lang}{v.tp}</div>
                                                                            <div className="hall">{v.th}</div>
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="sellPr">
                                                                                <span className="d">¥</span>
                                                                                {/* <span dangerouslySetInnerHTML={{__html:v.sellPr}}> */}
                                                                                <span>
                                                                                    <span className="sellPr">{v.vipPrice/1+3} </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="vipPrice">
                                                                                <span className="icon">{v.vipPriceName}</span>
                                                                                <span className="num">¥{v.vipPrice}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="button-block">
                                                                            <div className="button" >购票</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }</div>:'') :i===0?v.plist.map((v,i)=>(
                                                            <div className="item-outer mb-line-b" key={i}>
                                                                    <div className="item box-flex">
                                                                        <div className="time-block">
                                                                            <div className="begin">{v.tm}</div>
                                                                            <div className="end"></div>
                                                                        </div>
                                                                        <div className="info-block">
                                                                            <div className="lan">{v.lang}{v.tp}</div>
                                                                            <div className="hall">{v.th}</div>
                                                                        </div>
                                                                        <div className="price">
                                                                            <div className="sellPr">
                                                                                <span className="d">¥</span>
                                                                                {/* <span dangerouslySetInnerHTML={{__html:v.sellPr}}> */}
                                                                                <span>
                                                                                    <span className="sellPr">{v.vipPrice/1+3} </span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="vipPrice">
                                                                                <span className="icon">{v.vipPriceName}</span>
                                                                                <span className="num">¥{v.vipPrice}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="button-block">
                                                                            <div className="button" >购票</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        )):''
                                                ))
                                                }
                                            </div>
                                            : ''
                                    )) : <div>加载中</div>

                                }</div>
                                    

                            </Tabs></div>
        <div className="tuan-wrap">
        <div className="gap" style={{height: "10px", backgroundColor:" #f0f0f0"}}></div>
        <div className="tuan-list">
            <div className="tuan-title mb-line-b">影院超值套餐</div>
            {
            this.props.cinema.dealList ? this.props.cinema.dealList.dealList.map((v,i) => (
                    <div className="tuan-item mb-line-b" key={i}>
                        <img src={v.imageUrl.replace("w.h", "440.0")}></img>
                        {
                            v.cardTag?<span className="hot-tag">HOT</span>:""
                        }
                        <div className="item-info">
                            <div className="title">
                              {
                                  v.recommendPersonNum===1?<span>单人</span>:(v.recommendPersonNum===2?<span>双人</span>:<span>多人</span>)
                              }  
                              {v.title}
                            </div>
                            <div className="sell-num">{v.curNumberDesc}</div>
                            <div className="price">
                                <span className="sell-price">
                                    <span>¥</span><span className="num">{v.price}</span>
                                </span>
                            </div>
                            <div className="buy-btn" onClick={()=>this.props.history.push({ pathname: "/deal", state: {price:v.price,person:v.recommendPersonNum,title:v.title,img:v.imageUrl.replace("w.h", "440.0")} })}>去购买</div>
                        </div>
                    </div>
            )) : ''

        }
        </div>
        
        
        </div>

                            </div>
                        </div>
                    </div> : "加载中"
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getCinema(this.props.match.params.id);
        var _this = this
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: "auto",
            spaceBetween: 15,
            centeredSlides: true,
            loop: false,
            observer: true,
            observerParents: true,
            slideToClickedSlide: true,
            on: {
                slideChange: function () {
                    // console.log(_this);
                    // const dateshow = _this.props.cinema.showData.movies[_this.state.activeIndex].shows[0].dateShow;
                    _this.setState({
                        activeIndex: this.activeIndex,
                        // title:dateshow
                    })
                },
            },
        });
    }



}
// 设置要使用的数据状态
function mapStateToProps(state) {
    return {
        cinema: state.search.cinema,
        movieid: state.search.movieid,
    }

}
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(Shows);
