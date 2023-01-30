const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err)
        {
            console.log(`error ${err}`); //interpolation of backtick.
        }
    console.log(`server running at port ${port}`);
})