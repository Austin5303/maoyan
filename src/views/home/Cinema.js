import React from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
class Cinema extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
        this.page = 20;
        console.log(this.props) 
    }
    componentDidMount() {
        axios.get("/ajax/cinemaList", {
            params: {
                day: "2019-11-26",
                limit: 20,
                cityId: 1
            }
        }).then(({ data }) => {
            this.setState({
                data: data,
            })
        })

        const _this = this
        function fn() {
            var timer = null;
            return function () {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    _this.page += 20
                    axios.get("/ajax/cinemaList", {
                        params: {
                            day: "2019-11-30",
                            limit: _this.page,
                            cityId: 1
                        }
                    }).then(({ data }) => {
                        _this.setState({
                            data: data
                        })
                    })
                }, 2000)
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
    render() {
        return (
            <div  ref="getWidth" style={{ width: "100vw", overflow: "hidden", marginBottom: "50px",background:"white" }}>
                <div className="App-header">影院</div>
                <div style={{background:"#f5f5f5"}} >
                    <div style={{float:"left",marginLeft:"2vw"}}>
                        <Link to="city" style={{color:"#333",lineHeight:"47px",background:"#f5f5f5"}} className={"city-name"}>{localStorage.cityName ? localStorage.cityName : "定位"}</Link>
                        <i className={"city-entry-arrow"}></i>
                    </div>
                    <div className="SearchAll-header">
                        <div className="input-wrapper">
                            <img className="search-icon" src={"http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png"} alt="" />
                            <input className="search-input" onClick={()=>this.props.history.push("/searchall")} style={{width:"30vw"}} type="text"  placeholder="搜影院"></input>
                        </div>
                    </div>
                </div>

                {
                    this.state.data.cinemas ? this.state.data.cinemas.map(v => (
                        <div key={v.id} onClick={()=>this.props.history.push("/shows/"+v.id)} style={{ textAlign: "left", fontFamily: "PingFangSC-Regular", fontSize: "14px", color: "#777", backgroundSize: "1px", padding: "13px 15px 13px 0", marginLeft: "15px", backgroundColor: "#fff", position: "relative", borderBottom: "1px solid #eeeeee", width: "100vw", overflow: "hidden" }}>
                            <p style={{ whiteSpace: "nowrap", lineHeight: "23px", fontSize: "16px", color: "#000" }}>{v.nm}<span style={{ whiteSpace: "nowrap", lineHeight: 1.5, color: "#f03d37", fontSize: "18px", }}>{v.sellPrice}<span style={{ whiteSpace: "nowrap", fontSize: "11px", color: "#f03d37", marginLeft: "3px" }}>元起</span></span></p>
                            <p style={{ lineHeight: 1.5, fontSize: "13px", color: "#666", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", float: "left", color: "#666", width: "70vw" }}>{v.addr}</p><span style={{ marginRight: "5px" }}>{v.distance}</span>
                            <div style={{ color: "#589daf", marginTop: "5px", width: "100vw", }}>

                                {v.tag.allowRefund ? <span style={{ border: "1px solid #589daf", color: "#589daf", marginRight: "5px", borderRadius: "2px", fontSize: ".6rem", padding: "0px 2px" }}>退</span> : null}
                                {v.tag.sell ? <span style={{ border: "1px solid #589daf", color: "#589daf", marginRight: "5px", borderRadius: "2px", fontSize: ".6rem", padding: "0px 2px" }}>改签</span> : null}
                                {v.tag.snack ? <span style={{ border: "1px solid #f90", color: "#f90", marginRight: "5px", borderRadius: "2px", fontSize: ".6rem", padding: "0px 2px" }}>小吃</span> : null}
                                {v.tag.endorse ? <span style={{ border: "1px solid #f90", color: "#f90", marginRight: "5px", borderRadius: "2px", fontSize: ".6rem", padding: "0px 2px" }}>折扣卡</span> : null}
                                {
                                    v.tag.hallType ? v.tag.hallType.map((v, i) => (
                                        <span key={i} style={{ border: "1px solid #589daf", color: "#589daf", marginRight: "5px", borderRadius: "2px", fontSize: ".6rem", padding: "0px 2px" }}>{v}</span>
                                    )) : null
                                }
                            </div>
                            <p style={{ fontSize: "11px", color: "#999999", marginTop: "5px" }}><span style={{ fontSize: "10px", color: "white", background: "skyblue", padding: "1px 2px", borderRadius: "2px", textAlign: "center", marginRight: "5px" }}>卡</span>开卡特惠，首单2张最高立减6元</p>
                        </div>
                    )) : null
                }
                <p>加载中…………</p>
            </div >
        )
    }
}
export default Cinema