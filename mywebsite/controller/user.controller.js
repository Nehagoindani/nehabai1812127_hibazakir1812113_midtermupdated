const User=require('../model/user.model')

exports.fetchloginform=( req,res,next)=>{
    res.render('login',{page:'Login',menuId:'login'})
}

exports.loginchk=(req,res)=>{
    const {username,password}=req.body;

    try{
        User.findOne({username:username, password:password},(err, user)=>{
            if(user===null){
                res.end('User does not exist')
            }else if(user.username===username && user.password===password){
                req.session.username=username;
                res.render('index',{page:'Dashboard',menuId:'index', session:req.session})                
            }else{
                res.end('Wrong credentials provided.');
            }
        })

    }catch(err){
        res.send(err)
    }
}

exports.logout=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return console.log(err)
        }else{
            console.log('Destroying session');
        }
        res.redirect('/login')
    });
}

exports.redirectLogin=(req,res,next)=>{
    if(!req.session.username){
        res.redirect('/login')
    }else{
        next()
    }
}

exports.dashboard=(req,res)=>{
    res.render('Dashboard',{page:'Dashboard', menuId:'Dashboard', session:req.session})
}