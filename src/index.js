const express = require('express');
const app = express();
const path = require('path');


//Settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares


// routes
app.use(require('./routes/'));


// static files
app.use(express.static(path.join(__dirname, 'public')));


//listening
app.listen(app.get('port'), () => {
	console.log("Server on port", app.get('port'));
});