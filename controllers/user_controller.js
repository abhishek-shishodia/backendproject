const User = require('../models/user');

module.exports.profile = function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err,user){
            if(user){
                return res.render('users',{
                    title:"user profile",
                    user: user
                    

                })
            }else{
                return res.redirect('/users/sign-in');
            }
        });
    }
    else
    {
        return res.redirect('/users/sign-in');
    }
    // res.end('<h1>user profile </h1>');
    // return res.render('users',{
    //     title: "User"
    // });
}

//rrender the sign up page
module.exports.signUp= function(req,res){
    return res.render('user_sign_up',{
        title: 'codial| signup'
    })
}

//rrender the sign in page
module.exports.signIn= function(req,res){
    return res.render('user_sign_in',{
        title: 'codial| signin'
    })
}

//get user sign up data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password)
        {
            return res.redirect('back');
        }
        
       
    User.findOne({ email: req.body.email}, function(err,user){
        if(err){ console.log('error in finding the user in signing up');return}
        if(!user){ User.create(req.body, function(err, user){
                if(err){ console.log('error in creating user while signing up');return}
            return res.redirect('/users/sign-in');
            })  
        }
        else{
            return res.redirect('back');
        }

    });
}

//get user sign in data
module.exports.createSession=function(req,res){
    //steps to authenticate
    //find the user 
    User.findOne({email: req.body.email}, function(err, user){
        if(err){ console.log('error in finding the user in signing up');return}
        //handle user found
        if(user){//user found
            //handle password which doesnt match 
            if(user.password != req.body.password){
                return res.redirect('back');}
            //handle which match the password
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');

        }
        else{//user not found
            return res.redirect('back');
        }
    })
    

    //handle password which dont match
    // handle user not found

}