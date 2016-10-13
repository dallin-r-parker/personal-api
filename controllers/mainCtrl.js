var user = require('../user.js')

module.exports = {

   getName: function(req, res, next) {
    res.status(200).json(user.name);
    next();
  },

  getLocation: function(req, res, next) {
      res.status(200).json(user.location);
      next();
  },

  getOccupation: function(req, res, next) {
    res.status(200).json(user.occupations[0]);
    next();
  },

  getOccLatest: function(req, res, next) {
    res.status(200).json(user.occupations[user.occupations.length - 1]);
    next();
  },

  getHobbies: function(req, res, next) {
    for(var hobby in user.hobbies){
        res.status(200).json(user.hobbies);
    }
    next();
  },

  getHobbiesType: function(req, res, next) {
    var hobbyType = req.params.hobbyType;
    var filteredHobbies = user.hobbies.filter(function(value) {
      if (hobbyType === value.type) {
        return value;
      }
    })
    res.status(200).json(filteredHobbies)
    next();
  },

  // getFamilyGender: function(req, res, next) {
  //   var genderType = req.params.genderType;
  //   var filterFamGender = user.family.filter(function(value) {
  //     if(genderType  === value.gender){
  //       return value;
  //     }
  //   })
  //   res.status(200).json(filterFamGender)
  //   next();
  // },

  // getFamily: function(req, res, next) {
  //
  //   for (var family in user) {
  //     if (req.query.gender === 'male'){
  //       res.json({gender: user.family.filter();})
  //     }
  //     res.status(200).json(user.family);
  //   }
  //   next();
  // },

  //  getRestaurants: function(req, res, next) {
  //    for (var item in restaurants) {
  //      res.status(200).json(user.restaurants)
  //    }
  //       next();
  // }








}  // <-- this is the end of exports

// NOTE: Req = Request: coming from the browser is a Request
// NOTE: Res = Response: sending things back
// NOTE: PUT: UPDATE CONTENT
// NOTE: GET: REQUEST INFORMATION
// NOTE: POST: ADD NEW INFORMATION -- body can only be used on POST
