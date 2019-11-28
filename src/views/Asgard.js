import React from "react"
import { connect } from 'react-redux';
import actioncreateor from '../store/actionCreator/movie/index'
import { bindActionCreators } from 'redux'
class Asgard extends React.Component {
    render() {
        console.log(this.props.detail)
        return (
            <div>
                <div className="movie-info" style={{ backgroundColor: 'rgb(34, 49, 64)' }}>
                    <div className="movie-info-top">
                        <div className="movie-cover">
                            <a data-bid="b_aN5Ak" href="">
                                <img className="img noneBg poster" alt="电影封面图" src={this.props.detail.img ? this.props.detail.img.replace("/w.h/", "/300.414/") : ""} style={{
                                    width: "100px",
                                    height: "138px"
                                }} />
                                <img className="img noneBg poster-play" alt="" src="" />

                            </a>
                        </div>


                        <div className="movie-desc">

                            <div className="movie-desc-top">
                                <div className="movie-cn-name">{this.props.detail.nm}</div>
                                <div className="movie-en-name">Detective Chinatown 3</div>
                                <div className="movie-other-info">
                                    <div className="movie-type"><span className="movie-cat">{this.props.detail.cat}</span><span className="movie-tag"><img className="img noneBg" alt="" src="" /></span></div>
                                    <div className="actors">{this.props.detail.star}</div>
                                    <div className="movie-show-time"><span>{this.props.detail.pubDesc + "/" + this.props.detail.dur + "分钟"}</span><img className="img noneBg" alt="向右箭头" src=" " />

                                    </div>
                                </div>
                            </div>


                            <div className="btns">
                                <button data-bid="b_jzu4fxef" type="button" className="button wanted-to-watch"><span>已想看</span></button>
                                <a href="" className="link button btn-right watched" data-event="donwload3" />
                                <img className="img noneBg" alt="看过" src="" />
                                <span>看过</span>

                            </div>
                        </div>
                    </div>




                    <div className="real-time-word-of-mouth non-theater-chain-not-graded">
                        <div className="top">
                            <div className="left"><img className="img noneBg" alt="logo" src="" /><span>实时口碑</span> </div>

                            <div className="right"><span className="num">{this.props.detail.wish}</span><span>人想看</span> </div>

                        </div>
                    </div>





                    <div className="separator-line"></div>



                    <div className="brief-introduction">
                        <div className="title"><span>简介</span><div>
                            <button type="button" className="open"><span>展开</span><img className="img noneBg" alt="向下箭头" src="" /></button>
                        </div>
                        </div>
                        <div data-bid="b_y93QJ" className="content "><p id="brief-introduction-content" className="line-clamp">{this.props.detail.dra}</p>
                        </div>
                    </div>
                    <div className="videos-photos">
                        <div className="title"><span>视频剧照</span><a className="go-to-all" href=""><span>全部剧照</span></a></div>



                        <div className="videos-photos-list">
                            <ul
                                style={{
                                    overflowX: "auto",
                                    display: "flex",
                                    overflowY: "hidden"
                                }}
                            ><li className="video"><a href={this.props.videourl}><img className="img noneBg" alt="avatar" src={this.props.detail.videoImg} style={{
                                width: "144px",
                                height: "96px"
                            }} />
                                <div className="play">
                                    <div className="triangle"></div></div>
                            </a>
                                </li>
                                {
                                    this.props.detail.photos ? this.props.detail.photos.map((v, index) => (
                                        <li key={index} className="left-margin">
                                            <a href=""><img className="img noneBg" alt="avatar" src={v.replace("/w.h/", "/420.279/")} style={{
                                                width: "144px",
                                                height: "101px",
                                                padding: "10px"
                                            }} />
                                            </a>
                                        </li>
                                    )) : <div>加载中</div>

                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.movieid)
    }
}
function mapStateToProps(state) {
    return ({
        detail: state.movie.detailMovie
    })
}
export default connect(mapStateToProps, dispatch => bindActionCreators(actioncreateor, dispatch))(Asgard)