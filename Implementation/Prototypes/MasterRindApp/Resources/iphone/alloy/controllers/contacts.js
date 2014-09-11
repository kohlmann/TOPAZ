function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId50(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId50.opts || {};
        var models = __alloyId49.models;
        var len = models.length;
        var __alloyId46 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId47 = models[i];
            __alloyId47.__transform = {};
            var __alloyId48 = {
                info: {
                    text: "undefined" != typeof __alloyId47.__transform["id"] ? __alloyId47.__transform["id"] : __alloyId47.get("id")
                }
            };
            __alloyId46.push(__alloyId48);
        }
        opts.animation ? $.__views.__alloyId45.setItems(__alloyId46, opts.animation) : $.__views.__alloyId45.setItems(__alloyId46);
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
    var __alloyId39 = {};
    var __alloyId41 = [];
    var __alloyId42 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            bindId: "pic"
        }
    };
    __alloyId41.push(__alloyId42);
    var __alloyId43 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            bindId: "info"
        }
    };
    __alloyId41.push(__alloyId43);
    var __alloyId44 = {
        type: "Ti.UI.Label",
        bindId: "es_info",
        properties: {
            bindId: "es_info"
        }
    };
    __alloyId41.push(__alloyId44);
    var __alloyId40 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId41
    };
    __alloyId39["template"] = __alloyId40;
    $.__views.__alloyId45 = Ti.UI.createListSection({
        id: "__alloyId45"
    });
    var __alloyId49 = Alloy.Collections["Alloy.Collections.cowCol"] || Alloy.Collections.cowCol;
    __alloyId49.on("fetch destroy change add remove reset", __alloyId50);
    var __alloyId51 = [];
    __alloyId51.push($.__views.__alloyId45);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId51,
        templates: __alloyId39,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.contacts.add($.__views.listView);
    exports.destroy = function() {
        __alloyId49.off("fetch destroy change add remove reset", __alloyId50);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;