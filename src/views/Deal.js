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
    render() {
        return(
            <div className="deal">
                
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.state.price)

    }
}
// 设置要使用的数据状态
function mapStateToProps(state) {
    return {
        
    }

}
export default connect(mapStateToProps, dispatch => bindActionCreators(searchActionCreator, dispatch))(Deal);
