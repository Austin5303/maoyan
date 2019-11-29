import React, { Component } from "react"
import {
    withRouter
} from "react-router-dom"
class GuardRouter extends Component {
    UNSAFE_componentWillMount() {
        if (this.props.location.pathname === "/my"||this.props.location.pathname === "/deal") {
            if (!localStorage.userName) {
                this.props.history.push({
                    pathname: "/login",
                    state: { goUrl: this.props.location.pathname }
                })
            }else{
                this.props.history.push("/my")   
            }
        }
    }
    render() {
        return (
            <this.props.component {...this.props}></this.props.component>
        )
    }
}
export default withRouter(GuardRouter)