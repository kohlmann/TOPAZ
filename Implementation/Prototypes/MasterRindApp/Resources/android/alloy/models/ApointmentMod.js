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

model = Alloy.M("apointmentMod", exports.definition, []);

collection = Alloy.C("apointmentMod", exports.definition, model);

exports.Model = model;

exports.Collection = collection;