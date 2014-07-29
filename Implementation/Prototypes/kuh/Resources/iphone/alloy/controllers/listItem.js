function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listItem";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.listItem = {
        properties: {
            height: Ti.UI.SIZE,
            backgroundColor: "#FFF",
            searchableText: "undefined" != typeof $model.__transform["headAndSubheadline"] ? $model.__transform["headAndSubheadline"] : $model.get("headAndSubheadline"),
            id: "listItem"
        },
        template: "undefined" != typeof $model.__transform["requiredTemplate"] ? $model.__transform["requiredTemplate"] : $model.get("requiredTemplate"),
        leftALImage: {
            image: "undefined" != typeof $model.__transform["pical"] ? $model.__transform["pical"] : $model.get("pical")
        },
        headline: {
            text: "undefined" != typeof $model.__transform["headline"] ? $model.__transform["headline"] : $model.get("headline")
        },
        subheadline: {
            text: "undefined" != typeof $model.__transform["subheadline"] ? $model.__transform["subheadline"] : $model.get("subheadline")
        },
        rasse: {
            text: "undefined" != typeof $model.__transform["Rasse"] ? $model.__transform["Rasse"] : $model.get("Rasse")
        },
        itemId: {
            text: "undefined" != typeof $model.__transform["alloy_id"] ? $model.__transform["alloy_id"] : $model.get("alloy_id")
        }
    };
    $.__views.listItem && $.addTopLevelView($.__views.listItem);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $model && ($.listItem.model = $model.toJSON());
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;