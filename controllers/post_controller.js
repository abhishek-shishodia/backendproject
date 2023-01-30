module.exports.post = function(req,res){
    // res.end('<h3>this is the post page </h3>');
    return res.render('post',{
        title:"post"
    });
}   
