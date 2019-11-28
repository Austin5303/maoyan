import React, { Component } from "react"
import {
    withRouter
} from "react-router-dom"
class GuardRouter extends Component {
    UNSAFE_componentWillMount() {
        if (this.props.location.pathname === "/my") {
            if (!localStorage.userName) {
                this.props.history.push({
                    pathname: "/login",
                    state: { goUrl: this.props.location.pathname }
                })
            }
        }
    }
    render() {
        return (
            <this.props.component></this.props.component>
        )
    }
}
export default withRouter(GuardRouter)