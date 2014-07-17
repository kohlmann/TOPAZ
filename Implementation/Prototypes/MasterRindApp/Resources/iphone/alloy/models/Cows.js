exports.definition = {};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("cows", exports.definition, []);

collection = Alloy.C("cows", exports.definition, model);

exports.Model = model;

exports.Collection = collection;