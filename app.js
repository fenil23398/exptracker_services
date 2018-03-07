var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
var Notes = require('./routes/notes_router');
var userss = require('./routes/user_router'); //remember for user table userss
var categories = require('./routes/category_router');
var expenses = require('./routes/expense_router');
var spends = require('./routes/spends_router');
var loans = require('./routes/loan_router');
var scategories = require('./routes/subcategory_router');
var login = require('./routes/login_router');
var catsubcat = require('./routes/catsubcat');
var forgetPass = require('./routes/forgetPass_router');
var selectedcat = require('./routes/selectedcat_router');
var charts = require('./routes/chartdoghnut_router');
var expbycat = require('./routes/expensebycat_router');
var notedesc = require('./routes/notedesc_router');
var subcatexp = require('./routes/subcatexpjoin_router');
var linechart = require('./routes/linechart_router');
var bchart=require('./routes/barchart_router');
var charts = require('./routes/chartdoghnut_router');
var expbycat = require('./routes/expensebycat_router');
var notedesc = require('./routes/notedesc_router');
var notecolor = require('./routes/notebycolor_router');
var spendsById = require('./routes/spendsById_router');
var changePass = require('./routes/chagePassword_router');
var reminder = require('./routes/reminder_router');
var reminderId = require('./routes/ReminderId_router');
var expbycolor = require('./routes/expByColor_router');
var doughnut = require('./routes/doughnut_router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/Notes', Notes);
app.use('/userss', userss);
app.use('/categories', categories);
app.use('/expenses', expenses);
app.use('/loans', loans)
app.use('/scategories', scategories);
app.use('/login', login);
app.use('/catsubcat', catsubcat);
app.use('/forgetpass', forgetPass);
app.use('/spends', spends);
app.use('/charts', charts);
app.use('/expbycat', expbycat);
app.use('/notedesc', notedesc);
app.use('/bchart',bchart);
app.use('/subcatexp', subcatexp);
app.use('/charts', charts);
app.use('/expbycat', expbycat);
app.use('/notecolor', notecolor);
app.use('/notedesc', notedesc);
app.use('/spendsbyid', spendsById);
app.use('/chagepass', changePass);
app.use('/reminder', reminder);
app.use('/linechart',linechart);
app.use('/selectedcat', selectedcat);
app.use('/doughnut',doughnut);
app.use('/reminderid', reminderId);
app.use('/expbycolor', expbycolor);
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;