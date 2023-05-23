

const development = {
    name:"development",
    asset_path:'./assets',
    session_cookie_key:'blahsomething',
    db:'codeial_development',
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'abhishekalwaysfire@gmail.com',
            pass: 'ceqdzerntmbbcebo'
        }
    },
    google_client_id: "465232748461-etl4u9lt1clmm5dhd0b51bdrr7iq8ukc.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret_key:'codeial'

    
}


const production = {
    name:"production"
}


module.exports=development;