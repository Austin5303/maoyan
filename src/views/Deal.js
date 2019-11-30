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
import { NoticeBar, WhiteSpace } from 'antd-mobile';
import { Modal, Button,  } from 'antd-mobile';

class Deal extends React.Component {
    constructor(){
        super();
        this.state = {
            foods:[],
            ref:"buynum",
        }
    }
    render() {
        const alert = Modal.alert;


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
        }
        
        return(
            
            <div className="deal">
                
                <div className="App-header nav-header">确认订单</div>
                <WhiteSpace size="lg" style={{height:"0"}}/>
                 <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    谁他妈买小米啊！菠菜！菠菜贱卖！菠菜贱卖！！窝窝头，一块钱四个！！谁他妈买小米啊！妈妈我想吃烤山药，两个够吗！够了妈妈真好！谁他妈买小米啊！
                </NoticeBar>
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

                <div className="bottom" style={{position:"fixed",width:"100%",bottom:"0",background:"#fff"}}>
                    <div className="xiaoji" style={{height:"50px"}}>
                        <span style={{display:"inline-block",float:"left",fontSize:"16px",color:"#86C92F",margin:"14px"}}>随时可退</span>
                        <span style={{display:"inline-block",float:"right",fontSize:"16px",color:"#000",margin:"5px",paddingRight:"30px"}}>小计 <span>￥</span><span style={{fontSize:"30px",color:"#E54847"}}>{count?count:this.props.location.state.price}</span></span>
                    </div>
                    {/* <div >
                        <div style={{float:"left",width:"100%",textAlign:"center",background:"#FF9900",padding:"10px 0",fontSize:"20px",color:"#fff",borderRadius:"5px"}} >确认支付</div>
                    </div> */}
                    

                    {/* <WhiteSpace /> */}
                    <div style={{padding:"10px"}}>
                         <Button  style={{width:"100%",textAlign:"center",background:"#FF9900",fontSize:"20px",color:"#fff",borderRadius:"5px"}}
                    onClick={() =>
                        alert('请支付', "共计"+(count?count:this.props.location.state.price)+"元", [
                        { text: '取消', onPress: () => {} },
                        { text: '去付款', onPress: () => this.props.history.push({pathname:"/paydeal",state:{price:count?count:this.props.location.state.price}})},
                        ])
                    }
                    >
                    确认支付
                    </Button>
                    </div>
                   
                </div>
                
            </div>
        )
        
    }
    componentDidMount(){
        const {title} = this.props.location.state;
        const arr = title.split("+");
        this.setState({
            foods:arr
        });
    }
    componentWillUnmount(){
        this.props.changeBuyNum()
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
