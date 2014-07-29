function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId67(e) {
        if (e && e.fromAdapter) return;
        __alloyId67.opts || {};
        var models = __alloyId66.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId62 = models[i];
            __alloyId62.__transform = {};
            var __alloyId63 = Ti.UI.createTableViewRow({
                dataId: "",
                model: "undefined" != typeof __alloyId62.__transform["alloy_id"] ? __alloyId62.__transform["alloy_id"] : __alloyId62.get("alloy_id")
            });
            rows.push(__alloyId63);
            var __alloyId64 = Ti.UI.createLabel({
                top: "5dp",
                left: "10dp",
                height: "50dp",
                font: {
                    fontSize: "20dp",
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId62.__transform["Name"] ? __alloyId62.__transform["Name"] : __alloyId62.get("Name")
            });
            __alloyId63.add(__alloyId64);
            var __alloyId65 = Ti.UI.createLabel({
                top: "10dp",
                right: "10dp",
                font: {
                    fontSize: "16dp",
                    fontWeight: "normal"
                },
                text: "undefined" != typeof __alloyId62.__transform["Herdbuchnr"] ? __alloyId62.__transform["Herdbuchnr"] : __alloyId62.get("Herdbuchnr")
            });
            __alloyId63.add(__alloyId65);
        }
        $.__views.tableview.setData(rows);
    }
    function closeWindow() {
        $.kuhTableWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "kuhtable";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.kuhTableWindow = Ti.UI.createWindow({
        id: "kuhTableWindow",
        layout: "vertical"
    });
    $.__views.kuhTableWindow && $.addTopLevelView($.__views.kuhTableWindow);
    $.__views.buttonview = Ti.UI.createView({
        backgroundColor: "blue",
        height: "50dp",
        top: "20dp",
        id: "buttonview"
    });
    $.__views.kuhTableWindow.add($.__views.buttonview);
    $.__views.closeWindow = Ti.UI.createButton({
        color: "white",
        top: "7dp",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        title: "Schließen",
        id: "closeWindow"
    });
    $.__views.buttonview.add($.__views.closeWindow);
    closeWindow ? $.__views.closeWindow.addEventListener("click", closeWindow) : __defers["$.__views.closeWindow!click!closeWindow"] = true;
    $.__views.tableview = Ti.UI.createTableView({
        id: "tableview",
        layout: "vertical"
    });
    $.__views.kuhTableWindow.add($.__views.tableview);
    var __alloyId66 = Alloy.Collections["kuehe"] || kuehe;
    __alloyId66.on("fetch destroy change add remove reset", __alloyId67);
    exports.destroy = function() {
        __alloyId66.off("fetch destroy change add remove reset", __alloyId67);
    };
    _.extend($, $.__views);
    var kuhCollection = Alloy.Collections.kuehe;
    var data = kuhCollection.fetch();
    var kuehe = Alloy.createModel("kuehe", data);
    kuhCollection.add(kuehe);
    kuehe.fetch();
    __defers["$.__views.closeWindow!click!closeWindow"] && $.__views.closeWindow.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;