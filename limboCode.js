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
