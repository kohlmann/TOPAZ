function Controller() {
    function __alloyId28(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId28.opts || {};
        var models = __alloyId27.models;
        var len = models.length;
        var __alloyId24 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId25 = models[i];
            __alloyId25.__transform = {};
            var __alloyId26 = {
                info: {
                    text: "undefined" != typeof __alloyId25.__transform["ID"] ? __alloyId25.__transform["ID"] : __alloyId25.get("ID")
                }
            };
            __alloyId24.push(__alloyId26);
        }
        opts.animation ? $.__views.__alloyId23.setItems(__alloyId24, opts.animation) : $.__views.__alloyId23.setItems(__alloyId24);
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
    var __alloyId17 = {};
    var __alloyId19 = [];
    var __alloyId20 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            bindId: "pic"
        }
    };
    __alloyId19.push(__alloyId20);
    var __alloyId21 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            bindId: "info"
        }
    };
    __alloyId19.push(__alloyId21);
    var __alloyId22 = {
        type: "Ti.UI.Label",
        bindId: "es_info",
        properties: {
            bindId: "es_info"
        }
    };
    __alloyId19.push(__alloyId22);
    var __alloyId18 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId19
    };
    __alloyId17["template"] = __alloyId18;
    $.__views.__alloyId23 = Ti.UI.createListSection({
        id: "__alloyId23"
    });
    var __alloyId27 = Alloy.Collections["Alloy.Collections.cowCol"] || Alloy.Collections.cowCol;
    __alloyId27.on("fetch destroy change add remove reset", __alloyId28);
    var __alloyId29 = [];
    __alloyId29.push($.__views.__alloyId23);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId29,
        templates: __alloyId17,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.contacts.add($.__views.listView);
    exports.destroy = function() {
        __alloyId27.off("fetch destroy change add remove reset", __alloyId28);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;