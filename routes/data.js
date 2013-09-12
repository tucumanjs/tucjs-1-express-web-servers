
/*
 * GET users listing.
 */

var data = [];

exports.list = function(req, res){
  res.json(data);
};

exports.set = function (req, res) {
  data.push(req.body);
  res.json(data);
};