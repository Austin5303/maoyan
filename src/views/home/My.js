import React from "react"
class My extends React.Component{
    render(){
        return (
            <div>
                <div className="App-header">我的</div>
                <div className={"my-center"}>
                    <div className={"header"}>
                        <img src="https://img.meituan.net/avatar/549f088231671e47caa28b1041abcfc212930.jpg"></img>
                    </div>
                    <div className={"container"}>
                        <div className={"group"}>
                            <div className="mb-outline-tb">
                                <div className="orders">
                                    <div className={"title"}>我的订单</div>
                                    <div className={"mb-outline-b title-line"}></div>
                                    <div className={"list list-two"}>
                                        <div className={"order-item movie"}>
                                            <a href="">
                                                <p>电影</p>
                                            </a>
                                        </div>
                                        <div className={"order-item store"}>
                                        <   a href="">
                                                <p>商城</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"group"}>
                            <div className="mb-outline-tb">
                                <div className={"coupon item mb-line-b"}>
                                    <a>
                                        <span>在线观影</span>
                                    </a>
                                </div>
                            </div>
                            <div className="mb-outline-tb">
                                <div className={"coupon item mb-line-b"}>
                                    <a>
                                        <span>优惠券</span>
                                    </a>
                                </div>
                            </div>
                            <div className="mb-outline-tb">
                                <div className={"membercard item mb-line-b"}>
                                    <a>
                                        <span>折扣卡</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default My