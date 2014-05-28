function Controller() {
    function __alloyId20(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId20.opts || {};
        var models = __alloyId19.models;
        var len = models.length;
        var __alloyId15 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId16 = models[i];
            __alloyId16.__transform = {};
            var __alloyId18 = {
                info: {
                    text: "undefined" != typeof __alloyId16.__transform["name"] ? __alloyId16.__transform["name"] : __alloyId16.get("name")
                },
                es_info: {
                    text: "undefined" != typeof __alloyId16.__transform["description"] ? __alloyId16.__transform["description"] : __alloyId16.get("description")
                },
                pic: {
                    image: "undefined" != typeof __alloyId16.__transform["cowImage"] ? __alloyId16.__transform["cowImage"] : __alloyId16.get("cowImage")
                }
            };
            __alloyId15.push(__alloyId18);
        }
        opts.animation ? $.__views.__alloyId14.setItems(__alloyId15, opts.animation) : $.__views.__alloyId14.setItems(__alloyId15);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cowListTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("cowModel");
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1"
    });
    var __alloyId8 = {};
    var __alloyId10 = [];
    var __alloyId11 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            bindId: "pic"
        }
    };
    __alloyId10.push(__alloyId11);
    var __alloyId12 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            bindId: "info"
        }
    };
    __alloyId10.push(__alloyId12);
    var __alloyId13 = {
        type: "Ti.UI.Label",
        bindId: "es_info",
        properties: {
            bindId: "es_info"
        }
    };
    __alloyId10.push(__alloyId13);
    var __alloyId9 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId10
    };
    __alloyId8["template"] = __alloyId9;
    $.__views.__alloyId14 = Ti.UI.createListSection({
        headerTitle: "Kühe",
        id: "__alloyId14"
    });
    var __alloyId19 = Alloy.Collections["cowModel"] || cowModel;
    __alloyId19.on("fetch destroy change add remove reset", __alloyId20);
    var __alloyId21 = [];
    __alloyId21.push($.__views.__alloyId14);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId21,
        templates: __alloyId8,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.win1.add($.__views.listView);
    $.__views.cowListTab = Ti.UI.createTab({
        window: $.__views.win1,
        id: "cowListTab"
    });
    $.__views.cowListTab && $.addTopLevelView($.__views.cowListTab);
    exports.destroy = function() {
        __alloyId19.off("fetch destroy change add remove reset", __alloyId20);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;