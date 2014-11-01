var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            cowId: "text",
            cowName: "text",
            id: "text",
            name: "text"
        },
        adapter: {
            collection_name: "contactMod"
        }
    }
};

model = Alloy.M("favotieMod", exports.definition, []);

collection = Alloy.C("favotieMod", exports.definition, model);

exports.Model = model;

exports.Collection = collection;