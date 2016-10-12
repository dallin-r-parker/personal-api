//============ dependencies
var express = require('express');
var bodyParser = require('body-parser')
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

//============ intialization of server
var app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);


//============ end points
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupation);
app.get('/occupations/latest', mainCtrl.getOccLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:hobbyType', mainCtrl.getHobbiesType);
// app.get('/family', mainCtrl.getFamily);
app.get('/family/:genderType', mainCtrl.getFamilyGender);


//============listen
var port = 3030;
app.listen(port, function() {
  console.log('You\'re listening on port: ' + port);
})
// NOTE: Req = Request: coming from the browser is a Request
// NOTE: Res = Response: sending things back
// NOTE: PUT: UPDATE CONTENT
// NOTE: GET: REQUEST INFORMATION
// NOTE: POST: ADD NEW INFORMATION -- body can only be used on POST


                // NODE SIDE
// HACK: body: --> app.use(bodyParser.json())
                        //  req.body

// HACK: param: req.params
// HACK: app.get('url/api/movies')
        //    req.query.whatever is afer? on url
        // example: url/api/movies?title=christmas year=2001

                // ANGULAR SIDE
  // HACK: body
// $http({
//       data: {body}
// })

// HACK: query
//'url.api/movies?title='
