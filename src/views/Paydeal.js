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
import { Tabs } from 'antd-mobile';
import alipay from "../images/alipay.jpg"
import wechat from "../images/wechat.png"
const tabs2 = [
    { title: '支付宝支付', sub: '1' },
    { title: '微信支付', sub: '2' },
  ];
class Paydeal extends React.Component {
    
    render() {
        
        
        return(
            
            <div className="deal">
                
                <div className="App-header nav-header">支付</div>
                <Tabs tabs={tabs2} 
                    initialPage={0}
                    renderTab={tab => <span>{tab.title}</span>}
                    >
                    <div style={{ justifyContent: 'center', backgroundColor: '#fff' }}>
                       <p>请支付<span style={{color:"#E54847",fontSize:"20px"}}>{this.props.location.state.price}</span>元</p> 
                       <img style={{height:'100%'}} src={alipay}/>

                    </div>
                    <div  style={{ justifyContent: 'center', backgroundColor: '#fff'}}>
                        请支付<span style={{color:"#E54847",fontSize:"20px"}}>{this.props.location.state.price}</span>元
                       <img  src={wechat}/>

                    </div>
                </Tabs>
                
            </div>
        )
        
    }
    componentDidMount(){
        console.log(this.props.location.state.price);
    }
}
// 设置要使用的数据状态
function mapStateToProps(state) {
    return {
    }

}
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(Paydeal);