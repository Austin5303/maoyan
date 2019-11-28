import React from "react"
import {
    connect
} from "react-redux"
import { Link}
from "react-router-dom"
import { StickyContainer, Sticky } from 'react-sticky';
import {
    bindActionCreators
} from "redux"
import {
    Tabs
} from "antd-mobile"
import actionCreator from "../store/actionCreator/movie"
import Tools from "../fileters/index"

function renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} page={3}/></div>}
    </Sticky>);
}

class Cimema extends React.Component {
    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '43px', width: "115px", backgroundColor: '#fff' }}>
            <p>{tab.date}</p>
        </div>)
    componentWillMount() {
        window.onscroll = null
    }
    render() {

        // const tabs=this.props.movie.dates
        // const tabs = [
        //     { title: '1st Tab' },
        //     { title: '2nd Tab' },
        //     { title: '3rd Tab' },
        //     { title: '4th Tab' },
        //     { title: '5th Tab' },
        //     { title: '6th Tab' },
        //     { title: '7th Tab' },
        //     { title: '8th Tab' },
        //     { title: '9th Tab' },
        //   ];
        const tabs = []
        this.props.movie.dates.map(v => {
            return tabs.push({
                title:Tools.date(v.date),
                date: v.date
            })
        }
        )
        // console.log(tabs);

        // tabs=[
        //     {title:this.props.movie.dates[0].date}
        // ]

        return (
            <div className={"cinemamovie"} ref={"getWidth"}>
                <header className={"navbar"}>
                    {/* <div className={"nav-wrap-left"}>
                        <a className={"back"} href="#" onClick={()=>this.props.history.go(-1)}>
                            <i className={"icon-back"}></i>
                        </a>
                    </div> */}
                    <h1 className={"nav-header"}>{this.props.movie.detailMovie.nm}</h1>
                </header>

                <div className="content">
                    <div className={"movie-detail"}>
                        <div className={"movie-filter"}></div>
                        <div className={"poster-bg"} style={{
                            backgroundImage: "url(" + (this.props.movie.detailMovie.img ? this.props.movie.detailMovie.img.replace("w.h", "71.100") : null) + ")"
                        }}></div>
                        <div className="detail box-flex">
                            <div className="poster">
                                <img src={this.props.movie.detailMovie.img ? this.props.movie.detailMovie.img.replace("w.h", "148.208") : null} alt=""></img>
                            </div>
                            <div className={"content flex"}>
                                <div className={"title middle line-ellipsis"}>{this.props.movie.detailMovie.nm}</div>
                                <div className={"title-en-name line-ellipsis"}>{this.props.movie.detailMovie.enm}</div>
                                <div className={"score"}>{this.props.movie.detailMovie.sc ? this.props.movie.detailMovie.sc.toFixed(1) : null}
                                    <span className={"snum"}>({this.props.movie.detailMovie.snum ? (this.props.movie.detailMovie.snum / 10000).toFixed(1) : null})万人评</span>
                                </div>
                                <div className="type line-ellipsis">
                                    <span>{this.props.movie.detailMovie.cat}</span>
                                </div>
                                <div className={"src line-ellipsis"}>
                                    {this.props.movie.detailMovie.fra}{this.props.movie.detailMovie.episodeDur}
                                </div>
                                <div className={"pubDesc line-ellipsis"}> {this.props.movie.detailMovie.pubDesc}</div>
                            </div>
                        </div>
                    </div>
                </div>
                


                


                <StickyContainer>
                <Tabs tabs={tabs} renderTabBar={renderTabBar} tabBarPosition='top' prerenderingSiblingsNumber={5} onTabClick={(tab) => {
                    this.props.getCinemaList(0, this.props.match.params.id, tab.date)
                }
                } tabBarActiveTextColor="#f03d37" tabBarUnderlineStyle={{
                    backgroundColor: "#f03d37",
                    border: "1px solid #f03d37"
                }}>
                    {/* {this.renderContent} */}
                    <div className={"cinema-list cinema"}>
                        <div className={"list-wrap"}>
                            {/* {
                       console.log(this.props.movie.cinemas)
                       
                    } */}
                            {
                                this.props.movie.cinemas.map(v => (
                                    <div className={"item mb-line-b"} key={v.id}>
                                        <Link to={"/shows/"+v.id}>
                                        <div className={"title-block box-flex middle"}>
                                            <div className={"title line-ellipsis"}>
                                                <span>{v.nm}</span>
                                                <span className={"price-block"}>
                                                    <span className={"price"}>{v.sellPrice}</span>
                                                    <span className={"q"}>元起</span>
                                                </span>
                                            </div>
                                            <div className={"location-block box-flex"}>
                                                <div className={"flex line-ellipsis"}>{v.addr}</div>
                                                <div className={"distance"}>{v.distance}</div>
                                            </div>
                                            <div className={"label-block"}>{v.tag.allowRefund ? <div className={"allowRefund"}>退</div> : null}{v.tag.sell ? <div className={"sell"}>改签</div> : null} {v.tag.snack ? <div className={"snack"}>小吃</div> : null}{v.tag.endorse ? <div className={"endorse"}>折扣卡</div> : null}{v.tag.hallType ? v.tag.hallType.map((v, i) => (<div key={i} className={"hallType"}>{v}</div>)) : null}
                                            </div>
                                            <div className={"discount-block"}>
                                                <div className={"discount-label normal card"}>
                                                    <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="} alt=""></img>
                                                </div>
                                                <div className={"discount-label-text"}>{v.promotion.cardPromotionTag}</div>
                                            </div>
                                        </div>
                                        <div className={"min-show-block  disabled  J-fload"}>
                                            <span>返场场次:</span>
                                            <span className={"time-line"}>{v.showTimes}</span>
                                        </div>
                                        </Link>
                                    </div>
                                   
                                ))
                            }
                        </div>
                    </div>
                </Tabs>
                </StickyContainer>
            </div>
        )
    }
    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id);
        this.props.getCinemaList(0, this.props.match.params.id,"2019-11-29")


        //         const _this = this
        //         let offset= 0;                
        //         function fn(){         
        //             var timer = null;
        //             return function (){
        //                 if(timer){
        //                     clearTimeout(timer)
        //                 }
        //                 timer = setTimeout(()=>{
        //                 offset+=20
        //                 _this.props.getCinemaList.call(_this,offset)
        //                 },2000) 
        //             }
        //         }
        //         const fnn = fn();
        //         window.onscroll=sc;
        //         function sc(){
        //                 if(this.document.documentElement.scrollTop>=_this.refs.getWidth.offsetHeight-document.documentElement.clientHeight){
        //                         fnn()
        //                 }
        //         }


    }
    // componentWillReceiveProps(){
    //     this.props.getCinemaList(0, this.props.match.params.id,this.props.movie.detailMovie.rt)
    // }
}
function mapStateProps(state) {
    return state
}

export default connect(mapStateProps, dispatch => bindActionCreators(actionCreator, dispatch))(Cimema)