const express = require('express')
const app = express()
const db = require("./modules/db")
const bodyParser = require("body-parser")

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

app.use(bodyParser.json())

// 注册 获取短信验证码
app.get("/rCode", (req, res) => {
    db.findOne("user",{phone:req.query.phone}).then(data=>{
        if(!data){
            const code = Math.floor(Math.random() * 1000000)
            db.insertOne("user", {
                phone: req.query.phone,
                code,
            }).then(data => {
                res.json({
                    ok: 1,
                    code,
                })
            })
        }else{
            res.json({
                ok:-1,
                msg:"您已注册，请登录"
            })
        }
    })
})
// 确认验证码
app.get("/cCode",(req,res)=>{
    const {code,phone} = req.query;
    db.findOne("user",{phone:req.query.phone}).then(data=>{
        // console.log(data)
        if(data.code == code){
            res.json({
                ok:1
            })
        }else{
            res.json({
                ok:-1
            })
        }
    })
})
//  注册 密码
app.get("/pPassword",(req,res)=>{
    // console.log(req.query)
    db.updateOne("user",{phone:req.query.phone},{$set:{password:req.query.password}}).then((data)=>{
        if(data){
            res.json({
                ok:1,
            })
        }else{
            res.json({
                ok:-1
            })
        }
    })
})
//  密码登录 
app.post("/loginP", (req, res) => {
    console.log(req.body)
    db.findOne("user",{
        phone:req.body.phone
    }).then(data=>{
        console.log(data)
        if(data){
            if(data.password == req.body.password){
                res.json({
                    ok: 1,
                })
            }else{
                res.json({
                    ok:-1,
                    msg:"密码错误，请重新输入"
                })
            }
        }else{
            res.json({
                ok:-1,
                msg:"账户不存在"
            })
        }
    })
})
//  获取登录验证码
app.get("/lcode", (req, res) => {
    db.findOne("user",{phone:req.query.phone}).then(data=>{
            if(data){
                const code = Math.floor(Math.random() * 1000000)
                db.updateOne("user", {phone:req.query.phone},{
                    $set:{
                        code:code,
                    }
                }).then(data => {
                    res.json({
                        ok: 1,
                        code,
                    })
                })
            }else{
                res.json({
                    ok:1,
                    msg:"账户不存在，请先注册"
                })
            }
            
    })
})
//  短信验证码登录  
app.post("/loginC", (req, res) => {
    console.log(req.body)
    db.findOne("user",{
        phone:req.body.phone
    }).then(data=>{
        console.log(data)
        if(data){
            if(data.code == req.body.code){
                res.json({
                    ok: 1,
                })
            }else{
                res.json({
                    ok:-1,
                    msg:"验证码错误，请重新输入"
                })
            }
        }else{
            res.json({
                ok:-1,
                msg:"账户不存在"
            })
        }
    })
})

app.listen(80, () => {
    console.log("success")
})