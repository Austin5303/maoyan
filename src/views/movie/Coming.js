import React from "react"
import actioncreator from '../../store/actionCreator/movie/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import switchdata from '../../fileters/switchdata'
function mapStateToProps(state) {
    return {
        expected: state.comingreducer.expected,
        cominglist: state.comingreducer.cominglist,
        morecominglistId: state.comingreducer.morecominglistId
    }
}
class Coming extends React.Component {
    render() {
        return (
            <div ref="getWidth">
                <div>
                    <p style={{
                        textAlign: "left",
                        marginTop: "5px",
                        fontSize: "13px",
                        marginLeft: "5px",
                        color: "#333",
                        fontFamily: 'PingFangSC-Regular,Hiragino Sans GB,sans-serif'
                    }}> 近期最受期待</p>
                    <div style={{
                        overflowX: "auto",
                        display: "flex",
                        overflowY: "hidden"
                    }}>
                        {
                            this.props.expected.map(v => (
                                <div key={v.id} style={{
                                    position: "relative"
                                }}>
                                    <a

                                        href="http://www.alipay.com"
                                        style={{ display: 'block', width: '85px', height: "115px", margin: "12px" }}
                                    >
                                        <img
                                            src={v.img.replace("/w.h/", "/170.230/")}
                                            alt=""
                                            style={{ width: '85px', height: "115px", verticalAlign: 'top' }}
                                        />
                                    </a>
                                    <p style={{
                                        position: 'absolute',
                                        bottom: '45px',
                                        left: "16px",
                                        color: '#faaf00',
                                        fontSize: '12px',
                                        fontWeight: 900,
                                        background: "black"
                                    }}>{v.wish + "人想看"}</p>
                                    <p style={{
                                        width: "85px",
                                        marginLeft: "10px",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap"
                                    }}>{v.nm}</p>
                                    <p style={{
                                        marginTop: "4px",
                                        fontSize: '12px',
                                        color: "#999"
                                    }}>{v.comingTitle.substring(0, v.comingTitle.indexOf("日") + 1)}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="coming-coming-list">
                    {
                        switchdata.switchcomingdata(this.props.cominglist).map(v => (
                            <div key={v.rt}>
                                <p className="coming-group-date">{v.detail[0].comingTitle}</p>
                                {
                                    v.detail.map(x => (
                                        <div className="coming-item" key={x.id}>
                                            <div className="coming-main-block">
                                                <div className="coming-avatar" sort-flag="">
                                                    <div className="coming-default-img-bg">
                                                        <img src={x.img.replace("/w.h/", "/128.182/")} style={{
                                                            width: "64px", height: "90px"
                                                        }} alt="" />
                                                    </div>
                                                </div>
                                                <div className="coming-mb-outline-b content-wrapper" style={{
                                                    borderBottom: '1px #e0dddd solid',
                                                    width: '291px'
                                                }}>
                                                    <div className="coming-column coming-content"
                                                        style={{
                                                            textIndent: "7px"
                                                        }}
                                                    >
                                                        <div className="coming-box-flex coming-movie-title">
                                                            <div className="coming-title coming-line-ellipsis ">{x.nm}</div>
                                                            <span className="coming-pre-show"></span>
                                                        </div>
                                                        <div className="coming-detail coming-column">
                                                            <div className="coming-wantsee coming-line-ellipsis">
                                                                <span className="coming-person">{x.wish}</span>
                                                                <span className="coming-p-suffix">人想看</span>
                                                            </div>
                                                            <div className="coming-actor coming-line-ellipsis">主演: {x.star}</div>
                                                            <div className="coming-actor coming-line-ellipsis" style={{ paddingBottom: "5px" }}>{x.showInfo ? x.showInfo : x.rt + "上映"}</div>
                                                        </div>
                                                    </div>
                                                    <div className="coming-button-block">
                                                        <div className="coming-btn coming-pre"><span className="coming-fix" data-bid="dp_wx_home_movie_btn">预售</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div style={{
                    height: "34px"
                }}></div>
            </div>
        );
    }
    componentDidMount() {
        this.props.getlist();
        this.props.getexpected();
        this.getmore()
        console.log(this.props)
    }
    getmore() {
        const _this = this
        function fn() {
            var timer = null;
            return function () {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    let length = _this.props.cominglist.length
                    _this.props.getmorecominglist(_this.props.morecominglistId.slice(length, length + 12))
                }, 100)
            }
        }
        const fnn = fn();

        window.onscroll = cc
        function cc() {
            if (this.document.documentElement.scrollTop >= _this.refs.getWidth.offsetHeight - document.documentElement.clientHeight) {
                fnn()
            }
        }
    }
    componentWillUnmount() {
        window.onscroll = null
    }
}


export default connect(mapStateToProps, dispatch => bindActionCreators(actioncreator, dispatch))(Coming)