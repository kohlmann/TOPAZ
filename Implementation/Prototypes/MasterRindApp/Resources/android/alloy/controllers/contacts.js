function Controller() {
    function __alloyId43(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId43.opts || {};
        var models = __alloyId42.models;
        var len = models.length;
        var __alloyId39 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId40 = models[i];
            __alloyId40.__transform = {};
            var __alloyId41 = {
                info: {
                    text: "undefined" != typeof __alloyId40.__transform["ID"] ? __alloyId40.__transform["ID"] : __alloyId40.get("ID")
                }
            };
            __alloyId39.push(__alloyId41);
        }
        opts.animation ? $.__views.__alloyId38.setItems(__alloyId39, opts.animation) : $.__views.__alloyId38.setItems(__alloyId39);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contacts";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("cowsMod");
    $.__views.contacts = Ti.UI.createWindow({
        id: "contacts"
    });
    $.__views.contacts && $.addTopLevelView($.__views.contacts);
    var __alloyId32 = {};
    var __alloyId34 = [];
    var __alloyId35 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            bindId: "pic"
        }
    };
    __alloyId34.push(__alloyId35);
    var __alloyId36 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            bindId: "info"
        }
    };
    __alloyId34.push(__alloyId36);
    var __alloyId37 = {
        type: "Ti.UI.Label",
        bindId: "es_info",
        properties: {
            bindId: "es_info"
        }
    };
    __alloyId34.push(__alloyId37);
    var __alloyId33 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId34
    };
    __alloyId32["template"] = __alloyId33;
    $.__views.__alloyId38 = Ti.UI.createListSection({
        id: "__alloyId38"
    });
    var __alloyId42 = Alloy.Collections["Alloy.Collections.cowCol"] || Alloy.Collections.cowCol;
    __alloyId42.on("fetch destroy change add remove reset", __alloyId43);
    var __alloyId44 = [];
    __alloyId44.push($.__views.__alloyId38);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId44,
        templates: __alloyId32,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.contacts.add($.__views.listView);
    exports.destroy = function() {
        __alloyId42.off("fetch destroy change add remove reset", __alloyId43);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;