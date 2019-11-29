import React from "react"
import axios from "axios"
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 1,
        }
        this.phone = 1
    }
    render() {
        return (
            <div className="login" style={{height:"100vh",background:"white"}} >
                <header>
                    <span onClick={()=>{this.props.history.go(-1)}}>{"<"}</span>
                    <span>猫眼电影</span>
                </header>

                {
                   this.state.index/1 === 1?<div><div style={{ width: "100%", height: "40px", }} ><span style={{ fontSize: "16px", color: "black", textAlign: "right", lineHeight: "40px", float: "left", marginLeft: "20vw", color: "red" }}>输入手机号 ></span><span style={{ fontSize: "16px", color: "black", lineHeight: "40px", float: "left" }}>输入验证码 ></span><span style={{ fontSize: "16px", color: "black", lineHeight: "40px", float: "left" }}>设置密码</span></div>
                <div style={{ borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc", padding: "5px 0" }} >
                    <input type="number" ref="ph" maxLength={11} placeholder="请输入您的手机号" className="inn" style={{ width: "90vw", height: "35px", border: "none", outline: "none" }} />
                </div>
                <div className="di" ><input type="checkbox" onChange={(e) => {
                    if (e.target.checked) {
                        this.refs.btn.style.background = "#df2d2d"
                        this.refs.btn.style.color = "#efefef"
                        this.refs.btn.disabled = false;
                    } else {
                        this.refs.btn.style.background = "#eee"
                        this.refs.btn.style.color = "#777"
                        this.refs.btn.disabled = true;
                    }
                }} /><em style={{ fontStyle: "normal", marginLeft: "-20vw" }} >我已阅读并同意</em><i style={{ fontStyle: "normal", color: "#df2d2d" }} >《美团网用户协议》</i></div></div>:null
                }
                {
                    this.state.index/1 === 2?<div><div style={{ width: "100%", height: "40px", }} ><span style={{ fontSize: "16px", color: "black", textAlign: "right", lineHeight: "40px", float: "left", marginLeft: "20vw", color: "red" }}>输入手机号 ></span><span style={{ fontSize: "16px", color: "black", lineHeight: "40px", float: "left" ,color:"#df2d2d"}}>输入验证码 ></span><span style={{ fontSize: "16px", color: "black", lineHeight: "40px", float: "left" }}>设置密码</span></div>
                <div style={{ borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc", padding: "5px 0" }} >
                    <input type="number" ref="ph" maxLength={11} placeholder="请输入短信中的验证码" className="inn" style={{ width: "90vw", height: "35px", border: "none", outline: "none" }} />
                </div></div>:null
                }
                {
                    this.state.index / 1 === 3 ? <div><div style={{ width: "100%", height: "40px", }} ><span style={{ fontSize: "16px", color: "black", textAlign: "right", lineHeight: "40px", float: "left", marginLeft: "20vw", color: "red" }}>输入手机号 ></span><span style={{ fontSize: "16px", color: "black", lineHeight: "40px", float: "left", color: "#df2d2d" }}>输入验证码 ></span><span style={{ fontSize: "16px", color: "black", lineHeight: "40px", float: "left", color:"#df2d2d"}}>设置密码</span></div>
                        <div style={{ borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc", padding: "5px 0" }} >
                            <input type="number" ref="ph" maxLength={11} placeholder="请输入密码" className="inn" style={{ width: "90vw", height: "35px", border: "none", outline: "none" }} />
                        </div><div style={{ borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc", padding: "5px 0" }} >
                            <input type="number" ref="phh" maxLength={11} placeholder="请重复输入密码" className="inn" style={{ width: "90vw", height: "35px", border: "none", outline: "none" }} />
                        </div></div> : null
                }


                <input type="button" onClick={this.submit.bind(this)} value="获取验证码" ref="btn" style={{ width: "90vw", height: "40px", border: "none", borderRadius: "2px", fontSize: "20px", color: "white", marginLeft: "-5vw", marginTop: "3vw" ,}} />
                <div>
                    <p style={{ marginTop: "20px", fontSize: "14px", }}>© 猫眼电影 客服电话：<i style={{ color: "#df2d2d", fontStyle: "normal" }}>400-670-5335</i></p>
                </div>
            </div>
        )
    }
    submit() {
        if (this.state.index / 1 === 1){
                this.phone = this.refs.ph.value
            if (this.refs.ph.value.length !== 11) {
            alert("请输入有效手机号")
            } else {
                axios.get("http://127.0.0.1/rCode", {
                    params: {
                        phone: this.refs.ph.value
                    }
                }).then(({
                    data
                }) => {
                    console.log(data)
                    if(data.ok/1 === 1){
                        this.setState({
                            index:2
                        })
                    }else{
                        alert(data.msg)
                    }
                })
            }
    }
    if(this.state.index / 1 === 2){
        if (this.refs.ph.value.length !== 6){
            alert("请输入正确的验证码")
        }else{
            axios.get("http://127.0.0.1/cCode",{
                params:{
                    phone:this.phone,
                    code: this.refs.ph.value
                }
            }).then(({data})=>{
                if(data.ok/1 === 1){
                    this.setState({
                        index:3
                    })
                }else{
                    alert("验证码错误")
                }
            })
        }
    }
    if(this.state.index / 1 === 3){
        if (this.refs.ph.value !== this.refs.phh.value){
            alert("两次密码不一致，请重新输入")
        }else{
            axios.get("http://127.0.0.1/pPassword",{
                params:{
                    phone:this.phone,
                    password: this.refs.ph.value
                }
            }).then(({data})=>{
                if(data.ok/1 === 1){
                    alert("注册成功，请登录")
                    this.props.history.push("/login")
                }
            })
        }
        
    }

    }
    componentDidMount() {
        if(this.state.index/1 === 1){
            this.refs.btn.disabled = true;
        }
    }
    componentDidUpdate(){
        if(this.state.index/1 === 2){
            this.refs.btn.value = "提交验证码"
            this.refs.btn.style.background = "#df2d2d"
        }
        if (this.state.index / 1 === 3){
            this.refs.btn.value = "提交密码"
            this.refs.btn.style.background = "#df2d2d"
        }
    }
}
export default Login