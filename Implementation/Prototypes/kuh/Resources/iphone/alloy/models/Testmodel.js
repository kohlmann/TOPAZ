exports.definition = {
    config: {
        columns: {
            feld1: "string",
            feld2: "bigint"
        },
        adapter: {
            type: "sql",
            collection_name: "testmodel"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("testmodel", exports.definition, []);

collection = Alloy.C("testmodel", exports.definition, model);

exports.Model = model;

exports.Collection = collection;