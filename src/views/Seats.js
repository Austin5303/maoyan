import React from "react"
import {
    connect,
}
from "react-redux"
import {bindActionCreators} from "redux"
import actionCreator from "../store/actionCreator/movie"
class Seats extends React.Component{
    render(){
        return (
            <div>选座</div>
        )
    }
    componentDidMount(){
        this.props.getCheckSeact()
    }
}
function mapStateProps(state) {
    return state
}

export default connect(mapStateProps, dispatch => bindActionCreators(actionCreator, dispatch))(Seats)