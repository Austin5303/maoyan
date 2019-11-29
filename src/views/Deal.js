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
            foods:[],
            ref:"buynum"
        }
    }
    render() {
        const {value, onIncreaseClick,onDecreaseClick,count} = this.props,
        btnStyle = {
            width: '30px',
            height: '30px',
            color: '#E54847',
            backgroundColor: '#fff',
            border: '2px solid #E54847',
            borderRadius: '5px',
            cursor: 'pointer',
            
        },
        disbtnStyle = {
            width: '30px',
            height: '30px',
            color: '#000',
            backgroundColor: '#fff',
            border: '2px solid #000',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        textStyle = {
            fontSize: '20px',
            fontStyle:"normal",
            width:"30px",
            display:"inline-block",
            textAlign:"center"
        };
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
                <p className="border" style={{height:"10px"}}></p>
                <div className="detail top-border">
                    <h1>套餐详情</h1>
                    {
                        this.state.foods.map((v,i)=>(
                            <p className="food" key={i}>{v}</p>
                        ))
                    }
                </div>
                <p className="border " style={{height:"10px"}}></p>
                <div className="detail num">
                    <h1>数量<i className="button">
               
                        <button style={value!==1?btnStyle:disbtnStyle}  type="button" onClick={()=>onIncreaseClick(this.props.location.state.price)}>-</button>
                        <span style={textStyle}>{value}</span>   
                        <button style={btnStyle} type="button" onClick={()=>onDecreaseClick(this.props.location.state.price)}>+</button>


                    </i></h1>
                    
                </div>
                <p className="border" style={{height:"10px"}}></p>
                <div className="detail">
                    <h1>提示信息</h1>
                    <p className="food" >使用时间：请在影城卖品部营业时间兑换。</p>
                </div>
                <p className="border" style={{height:"10px"}}></p>
                <div className="detail">
                    <p style={{fontSize:"16px",textAlign:"left",margin:"5px",color:"#333",}}>手机号:{localStorage.userName}</p>
                </div>

                <div className="bottom" style={{position:"fixed",width:"100%",bottom:"0",background:"#fff",padding:"10px"}}>
                    <div className="xiaoji" style={{}}>
                        <span>随时可退</span>
                        <span>小计 <b>￥</b>{count?count:this.props.location.state.price}</span>
                    </div>
                </div>
                <button onClick={()=>this.props.history.go(-1)}>111</button>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.state)
        const {title} = this.props.location.state;
        const arr = title.split("+");
        this.setState({
            foods:arr
        });
    }
    componentWillMount(){

    }
}
// 设置要使用的数据状态
function mapStateToProps(state) {
    return {
        value: state.search.count,
        count:state.search.xiaoji
    }

}
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(Deal);
