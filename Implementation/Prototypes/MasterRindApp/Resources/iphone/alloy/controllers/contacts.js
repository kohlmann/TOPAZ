function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId33(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId33.opts || {};
        var models = __alloyId32.models;
        var len = models.length;
        var __alloyId29 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId30 = models[i];
            __alloyId30.__transform = {};
            var __alloyId31 = {
                info: {
                    text: "undefined" != typeof __alloyId30.__transform["id"] ? __alloyId30.__transform["id"] : __alloyId30.get("id")
                }
            };
            __alloyId29.push(__alloyId31);
        }
        opts.animation ? $.__views.__alloyId28.setItems(__alloyId29, opts.animation) : $.__views.__alloyId28.setItems(__alloyId29);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contacts";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("cowsMod");
    $.__views.contacts = Ti.UI.createWindow({
        id: "contacts"
    });
    $.__views.contacts && $.addTopLevelView($.__views.contacts);
    var __alloyId22 = {};
    var __alloyId24 = [];
    var __alloyId25 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            bindId: "pic"
        }
    };
    __alloyId24.push(__alloyId25);
    var __alloyId26 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            bindId: "info"
        }
    };
    __alloyId24.push(__alloyId26);
    var __alloyId27 = {
        type: "Ti.UI.Label",
        bindId: "es_info",
        properties: {
            bindId: "es_info"
        }
    };
    __alloyId24.push(__alloyId27);
    var __alloyId23 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId24
    };
    __alloyId22["template"] = __alloyId23;
    $.__views.__alloyId28 = Ti.UI.createListSection({
        id: "__alloyId28"
    });
    var __alloyId32 = Alloy.Collections["Alloy.Collections.cowCol"] || Alloy.Collections.cowCol;
    __alloyId32.on("fetch destroy change add remove reset", __alloyId33);
    var __alloyId34 = [];
    __alloyId34.push($.__views.__alloyId28);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId34,
        templates: __alloyId22,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.contacts.add($.__views.listView);
    exports.destroy = function() {
        __alloyId32.off("fetch destroy change add remove reset", __alloyId33);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;