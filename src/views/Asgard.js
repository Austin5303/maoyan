import React from "react"
import { connect } from 'react-redux';
import actioncreateor from '../store/actionCreator/movie/index'
import { bindActionCreators } from 'redux'
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';
class Asgard extends React.Component {
    constructor() {
        super();
        this.state = {
            open:true,
            wish:true,
            watch:true
        }
    }
    render() {
        console.log(this.props.detail)
        return (
            <div className="asgard">
                {
                    this.props.detail?<div className="movie-info" style={{background:this.props.detail.backgroundColor}}>
                        <div className="movie-info-top">
                            <div className="movie-cover">
                                {
                                    this.props.detail.img?<img className="img noneBg poster" alt="电影封面图" src={this.props.detail.img.replace("w.h/", "")} />:"加载中"
                                }
                            </div>
                            <div className="movie-desc">
                                <div className="movie-desc-top">
                                    <div className="movie-cn-name">{this.props.detail.nm}</div>
                                    <div className="movie-en-name">{this.props.detail.enm}</div>
                                    <div className="movie-other-info">
                                        <div className="movie-type">
                                            {
                                                this.props.detail.cat?<span className="movie-cat">{this.props.detail.cat.replace(/,/g,"/")}</span>:''
                                            }
                                        </div>
                                        {  
                                            this.props.detail.star?<span className="actors">{this.props.detail.star.replace(/,/g,"/")}</span>:''
                                        }
                                        <div className="movie-show-time">
                                            <span>{this.props.detail.pubDesc}/{this.props.detail.episodeDur}分钟</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="btns">
                                    <button className={this.state.wish?"button":"buttonno"}  onClick={()=>this.changeWish()}>
                                        {this.state.wish?<img className="img noneBg" alt="想看" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/want-to-watch.png"/>:""}
                                        <span>{this.state.wish?"想看":"已想看"}</span>
                                    </button>
                                    <button className={this.state.watch?"button":"buttonno"}  onClick={()=>this.changeWatch()}>
                                        {this.state.watch?<img className="img noneBg" alt="看过" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star.png"/>:''}
                                        <span>{this.state.watch?"看过":"已看过"}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {
                            this.props.detail.sc!==0?
                            <div className="real-time-word-of-mouth">
                                <div className="top">
                                    <div className="left"><img className="img noneBg" alt="logo" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/logo.png"/><span>实时口碑</span></div>
                                    <div className="right"><span className="num">{this.props.detail.wish}</span><span>人想看</span><span className="num watched">{this.props.detail.watched}</span><span>人看过</span></div>
                                </div>
                                <div className="middle">
                                    <div className="left">
                                        <span className="score">{(this.props.detail.sc/1).toFixed(1)}</span>
                                        <span className="people-grade"><span>{this.props.detail.snum}</span><span>人评</span></span>
                                    </div>
                                    {
                                        this.props.detail.distributions?<div className="right">

                                        <div className="stars-percent-bar"><div className="stars"><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/></div><div className="bar"><div className="percent" style={{width: this.props.detail.distributions[0].proportion+"%"}}></div></div><div className="percent-value"><span>{(this.props.detail.distributions[0].proportion/1).toFixed(1)}</span><span>%</span></div></div>
                                        <div className="stars-percent-bar"><div className="stars"><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/></div><div className="bar"><div className="percent" style={{width: this.props.detail.distributions[1].proportion*0.6+"%"}}></div></div><div className="percent-value"><span>{(this.props.detail.distributions[1].proportion*0.6).toFixed(1)}</span><span>%</span></div></div>
                                        <div className="stars-percent-bar"><div className="stars"><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/></div><div className="bar"><div className="percent" style={{width: this.props.detail.distributions[1].proportion*0.4+"%"}}></div></div><div className="percent-value"><span>{(this.props.detail.distributions[1].proportion*0.4).toFixed(1)}</span><span>%</span></div></div>
                                        <div className="stars-percent-bar"><div className="stars"><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/></div><div className="bar"><div className="percent" style={{width: this.props.detail.distributions[2].proportion*0.4+"%"}}></div></div><div className="percent-value"><span>{(this.props.detail.distributions[2].proportion*0.4).toFixed(1)}</span><span>%</span></div></div>
                                        <div className="stars-percent-bar"><div className="stars"><img className="img noneBg" alt="star" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"/></div><div className="bar"><div className="percent" style={{width: this.props.detail.distributions[2].proportion*0.6+"%"}}></div></div><div className="percent-value"><span>{(this.props.detail.distributions[2].proportion*0.6).toFixed(1)}</span><span>%</span></div></div>
 
                                        
                                          
                                     </div>:''
                                    }
                                    
                                </div>

                            </div>:
                            <div className="real-time-word-of-mouth">
                                <div className="top">
                                    <div className="left"><img className="img noneBg" alt="logo" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/logo.png"/><span>实时口碑</span></div>
                                    <div className="right"><span className="num">{this.props.detail.wish}</span><span>人想看</span></div>
                                </div>
                            </div>
                        }
                        <div className="brief-introduction">
                            <div className="title">
                                <span>简介</span>
                                <div onClick={()=>this.changeOpen()}>
                                    {
                                        this.state.open?
                                        <button type="button" className="open" >
                                        <span>展开</span>
                                        <img className="img noneBg" alt="向下箭头" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right.png"/>
                                        </button>:
                                        <button type="button" className="close" >
                                        <span>收起</span>
                                        <img className="img noneBg" alt="向下箭头" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right.png"/>
                                        </button>
                                    }
                                    
                                </div>
                            </div>
                            <div className="content">
                                <p className={this.state.open?'line-clamp':""}>
                                    {this.props.detail.dra}
                                </p>
                            </div>
                            
                        </div>
                        <div className="swiper-container">
                            <span style={{fontSize:"15px",marginBottom:"8px",display:"inline-block"}}>剧照</span>
                            <div className="swiper-wrapper" >
                            {
                                this.props.detail.photos ? this.props.detail.photos.map((v,i) => (
                                    <div className="swiper-slide" style={{width:"140px",height:"93px"}} key={i} >
                                            <img style={{width:"140px",height:"93px"}} src={v.replace("/w.h","")}></img>
                                    </div>
                                )) : ""
                            }
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        )
    }
    changeOpen(){
        this.setState({
            open:!this.state.open
        })
    }
    changeWish(){
        this.setState({
            wish:!this.state.wish
        })
    }
    changeWatch(){
        this.setState({
            watch:!this.state.watch
        })
    }
    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.movieid);
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            centeredSlides: true,
            loop: false,
            observer: true,
            // observerParents: true,
            // slideToClickedSlide: true,
        });
    }
}
function mapStateToProps(state) {
    return ({
        detail: state.movie.detailMovie
    })
}
export default connect(mapStateToProps, dispatch => bindActionCreators(actioncreateor, dispatch))(Asgard)