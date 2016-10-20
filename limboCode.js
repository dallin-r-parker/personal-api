getFamilyGender: function(req, res, next) {
  var genderType = req.params.genderType;
  var filterFamGender = user.family.filter(function(value) {
    if(genderType  === value.gender){
      return value;
    }
  })
  res.status(200).json(filterFamGender)
  next();
}


getOcc: function(req, res, next){ //search by ?order=asc
  if(req.query.order === 'asc'){
    res.json(user.occupations.sort())
  }
  else if(req.query.order === 'desc') {
    res.json(user.occupations.sort().reverse())
  } else {
    res.json(user.occupations);
  }
},
