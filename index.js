const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLayouts);

//extract style and scripts from subpage into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use('/', require('./routes')); // to use that exported module in routes index file


//setup of view engine..
app.set('view engine', 'ejs');
app.set('views','./views');


app.listen(port, function(err){
    if(err)
        {
            console.log(`error ${err}`); //interpolation of backtick.
        }
    console.log(`server running at port ${port}`);
})