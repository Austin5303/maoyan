import React from "react"
import axios from "axios"
export default class Login extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                index:1,
            }
            this.timer = null
        }
    move(e){
        let timer
        if(e.target.getAttribute("index")/1 === 1){
            this.setState({
                index:1
            })
            clearInterval(timer)
            let a = 53
            timer = setInterval(() => {
                a-=1
                this.refs.movee.style.left = a+"%";
                if(a<=3){
                    clearInterval(timer)
                }
            }, 5);
        }else{
            this.setState({
                index:2
            })
            
            clearInterval(timer)
            let a = 3
            timer = setInterval(() => {
                a+=1
                this.refs.movee.style.left = a+"%";
                if(a>=53){
                    clearInterval(timer)
                }
            }, 5);
        }
    }

    code(e){
        let time = 60;
        this.refs.b.disabled = true;
        this.timer = setInterval(()=>{
            if(this.state.index/1 === 2){
                this.refs.b.innerHTML = time+"s";
                time-=1;
                if(time === 1){
                    clearInterval(this.timer)
                    this.refs.b.innerHTML = "获取验证码";
                    this.refs.b.disabled = false;
                }
            }else{
                clearInterval(this.timer)
            }
        },1000)
        this.refs.confineCode.disabled = false;
        axios.get("http://127.0.0.1/lcode",{
            params:{
                phone:this.refs.phoneNumber.value
            }
        }).then(({data})=>{
            console.log(data);
            if(data.ok/1 === -1){
                alert(data.msg)
            }
        })
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return (
            <div className="login" style={{background:"white",height:"100vh"}} >
                <header>
                    <span onClick={()=>this.props.history.go(-2)} >{"<"}</span>
                    <span>猫眼电影</span>
                </header>
                <div className="tap">
                    <div className="btn">
                        <span index="1" onClick={this.move.bind(this)}>美团账号登陆</span>
                        <span index="2" onClick={this.move.bind(this)}>手机验证登录</span>
                    </div>
                    <div className="heng">
                        <p ref="movee"></p>
                    </div>
                    {
                        this.state.index/1 === 1?<div className="formm">
                        <input type="text" placeholder="账户名/手机号/Email" ref="name" />
                        <hr/>
                        <input type="text" placeholder="请输入您的密码" ref="password" />
                        <hr/>
                        <p onClick={this.submit.bind(this)} >登录</p>
                    </div>:<div className="formm">
                        <input type="number" placeholder="请输入手机号" ref="phoneNumber" style={{width:"65%",float:"left",marginLeft:"20px"}} max="11" onChange={()=>{
                            if(this.refs.phoneNumber.value.length == 11){
                                this.refs.b.disabled = false
                                this.refs.b.style.color = "red";
                                this.refs.b.style.border = "1px solid red"
                            }else{
                                this.refs.b.disabled = true
                                this.refs.b.style.color = "#333";
                                this.refs.b.style.border = "none"
                            }
                                }} /><button ref="b" style={{ width: "25%", height: "30px", border: "none", padding: "5px", marginTop: "10px", borderRadius: "5px",}}  onClick={this.code.bind(this)} >获取验证码</button>
                        <input type="text" disabled={true} placeholder="请输入短信验证码" ref="confineCode" style={{borderTop:"1px solid #333"}} />
                        <hr/>
                        <p onClick={this.submit.bind(this)} >登录</p>
                    </div>
                    }
                    
                    <b style={{fontWeight:"100",width:"50%",color:"#fe8c00",float:"left"}} onClick={()=>{this.props.history.push("/register")}} >立即注册</b>
                    <b style={{fontWeight:"100",width:"50%",color:"#fe8c00",float:"right"}} >找回密码</b>
                    <p style={{marginTop:"40px",fontSize:"14px",}}>© 猫眼电影 客服电话：<i style={{color:"#df2d2d",fontStyle:"normal"}}>400-670-5335</i></p>
                </div>
                
            </div>
        )
    }
    componentDidUpdate(){
        if(this.refs.b){
            this.refs.b.disabled = true
        }
        if(this.state.index/1 === 2){
            this.refs.phoneNumber.value = "";
            this.refs.confineCode.value = ""
        }
    }
    submit(){
        if(this.state.index/1 === 1){
            axios.post("http://127.0.0.1/loginP",{
                phone: this.refs.name.value,
                password: this.refs.password.value,
            }).then(({data})=>{
                if(data.ok/1 === 1){
                    alert("登陆成功")
                    localStorage.userName = this.refs.name.value;
                    this.props.history.go(-1)
                }else{
                    alert(data.msg)
                }
            })
        }
        if(this.state.index/1 === 2){
            axios.post("http://127.0.0.1/loginC",{
                phone: this.refs.phoneNumber.value,
                code: this.refs.confineCode.value,
            }).then(({data})=>{
                if(data.ok/1 === 1){
                    alert("登陆成功")
                    localStorage.userName = this.refs.phoneNumber.value;
                    this.props.history.go(-1)
                }else{
                    alert(data.msg)
                }
            })
        }
    }
}