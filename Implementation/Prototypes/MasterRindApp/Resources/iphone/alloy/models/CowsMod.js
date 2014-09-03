var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "text",
            name: "text",
            image: "image",
            info: "text"
        },
        adapter: {
            collection_name: "cowsMod"
        }
    }
};

model = Alloy.M("cowsMod", exports.definition, []);

collection = Alloy.C("cowsMod", exports.definition, model);

exports.Model = model;

exports.Collection = collection;