const express = require('express')
const passport = require('passport')
const session = require('express-session')

require('./auth')

const port = 3003
const app = express()

app.use(session({secret:'cat'}))
app.use(passport.initialize())
app.use(passport.session())

function isLoggin(req,res,next){
    req.user? next() : res.sendStatus(401)
}



app.get("/",(req,res)=>{
    res.send('<a href="/auth/google">Authen </a>')
    
})
app.get("/auth/google",passport.authenticate('google',{scope:['email','profile']}))
app.get("/google/callback",passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'auth/failure'
}))

app.get("/protected",(req,res)=>{
    res.send(`hello ${req.user.displayName}`)
})
app.get("/auth/failure",isLoggin,(req,res)=>{
    res.send('fail!!')
})



app.listen(port,()=>{console.log(`listen in ${port}`)})