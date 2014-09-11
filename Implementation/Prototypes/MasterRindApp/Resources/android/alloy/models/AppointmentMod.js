var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            date: "text",
            distance: "text",
            id: "text",
            name: "text"
        },
        adapter: {
            collection_name: "appointmentMod"
        }
    }
};

model = Alloy.M("appointmentMod", exports.definition, []);

collection = Alloy.C("appointmentMod", exports.definition, model);

exports.Model = model;

exports.Collection = collection;