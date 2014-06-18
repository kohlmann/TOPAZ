exports.definition = {
    config: {
        columns: {
            id: "text",
            name: "text",
            description: "text",
            cowImage: "text",
            detailsImage: "text",
            relationShip: "text",
            breedingValue: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "cowModel"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("cowModel", exports.definition, []);

collection = Alloy.C("cowModel", exports.definition, model);

exports.Model = model;

exports.Collection = collection;