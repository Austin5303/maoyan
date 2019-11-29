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
class Deal extends React.Component {
    constructor(){
        super();
        this.state = {
            foods:[]
        }
    }
    render() {
        return(
            <div className="deal">
                <div className="App-header nav-header">确认订单</div>
                <div className="body-wrapper">
                    <section className="deal-info">
                        <header>
                            <div className="deal-info-image  deal-info-image-middle">
                                <img src={this.props.location.state.img} alt='' style={{height:"100px",width:"100px"}}/>
                            </div>
                            <div>
                                <h1>
                                    {
                                        this.props.location.state.person===1?<span className="hot-tag">单人</span>:(this.props.location.state.person===2?<span className="hot-tag">双人</span>:<span className="hot-tag">多人</span>)
                                    }  
                                    {this.props.location.state.title}
                                </h1>
                                <div className="text-info">
                                    <p>有效期：2016.02.06-2019.12.28</p><p>可用时间：10:00-22:30</p>
                                </div>
                                <p className="price">{this.props.location.state.price}元</p>
                            </div>
                        </header>
                    </section>
                </div>
                {
                    this.state.foods?<div>{this.state.foods[0]}</div>:''
                }
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.state)
        const {title} = this.props.location.state;
        const arr = title.split("+");
        this.setState({
            foods:arr
        })

    }
}
// 设置要使用的数据状态
function mapStateToProps(state) {
    return {
        
    }

}
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(Deal);
