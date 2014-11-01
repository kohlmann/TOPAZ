var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            country: "text",
            id: "text",
            info: "text",
            name: "text",
            number: "text",
            street: "text",
            town: "text",
            zipCode: "text"
        },
        adapter: {
            collection_name: "contactMod"
        }
    }
};

model = Alloy.M("contactMod", exports.definition, []);

collection = Alloy.C("contactMod", exports.definition, model);

exports.Model = model;

exports.Collection = collection;