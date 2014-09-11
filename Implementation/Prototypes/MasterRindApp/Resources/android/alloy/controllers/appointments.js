function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId23(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId23.opts || {};
        var models = __alloyId22.models;
        var len = models.length;
        var __alloyId19 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId20 = models[i];
            __alloyId20.__transform = {};
            var __alloyId21 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10"
                },
                name: {
                    text: "undefined" != typeof __alloyId20.__transform["name"] ? __alloyId20.__transform["name"] : __alloyId20.get("name")
                },
                date: {
                    text: "undefined" != typeof __alloyId20.__transform["date"] ? __alloyId20.__transform["date"] : __alloyId20.get("date")
                }
            };
            __alloyId19.push(__alloyId21);
        }
        opts.animation ? $.__views.__alloyId18.setItems(__alloyId19, opts.animation) : $.__views.__alloyId18.setItems(__alloyId19);
    }
    function itemClick(e) {
        switch (e.itemId) {
          case "Bremervoerde":
            var win = Alloy.createController("bremervoerdeDetails").getView();
            break;

          case "Cloppenburg":
            var win = Alloy.createController("cloppenburgDetails").getView();
            break;

          case "Lingen":
            var win = Alloy.createController("lingenDetails").getView();
            break;

          case "Uelzen":
            var win = Alloy.createController("uelzenDetails").getView();
            break;

          case "Verden":
            var win = Alloy.createController("verdenDetails").getView();
        }
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadAppointmentsFromDB();
        win.open();
        var allShows = masterRindFacade.getShowsAndSpecials().allAppointments();
        var bremervoerde = masterRindFacade.getAuctions().bremervoerde();
        var cloppenburg = masterRindFacade.getAuctions().cloppenburg();
        var lingen = masterRindFacade.getAuctions().lingen();
        var uelzen = masterRindFacade.getAuctions().uelzen();
        var verden = masterRindFacade.getAuctions().verden();
        Alloy.Collections.allShowsCol.reset();
        Alloy.Collections.bremervoerdeCol.reset();
        Alloy.Collections.cloppenburgCol.reset();
        Alloy.Collections.lingenCol.reset();
        Alloy.Collections.uelzenCol.reset();
        Alloy.Collections.verdenCol.reset();
        for (i = 0; allShows.length > i; i++) {
            var appointment = allShows[i];
            var model = Alloy.createModel("appointmentMod", {
                date: appointment.getDate(),
                distance: appointment.getDistance(),
                id: appointment.getId(),
                name: appointment.getName()
            });
            Alloy.Collections.allShowsCol.add(model);
        }
        for (i = 0; bremervoerde.length > i; i++) {
            var appointment = bremervoerde[i];
            var model = Alloy.createModel("appointmentMod", {
                date: appointment.getDate(),
                distance: appointment.getDistance(),
                id: appointment.getId(),
                name: appointment.getName()
            });
            Alloy.Collections.bremervoerdeCol.add(model);
        }
        for (i = 0; cloppenburg.length > i; i++) {
            var appointment = cloppenburg[i];
            var model = Alloy.createModel("appointmentMod", {
                date: appointment.getDate(),
                distance: appointment.getDistance(),
                id: appointment.getId(),
                name: appointment.getName()
            });
            Alloy.Collections.cloppenburgCol.add(model);
            for (i = 0; lingen.length > i; i++) {
                var appointment = lingen[i];
                var model = Alloy.createModel("appointmentMod", {
                    date: appointment.getDate(),
                    distance: appointment.getDistance(),
                    id: appointment.getId(),
                    name: appointment.getName()
                });
                Alloy.Collections.lingenCol.add(model);
            }
            for (i = 0; uelzen.length > i; i++) {
                var appointment = uelzen[i];
                var model = Alloy.createModel("appointmentMod", {
                    date: appointment.getDate(),
                    distance: appointment.getDistance(),
                    id: appointment.getId(),
                    name: appointment.getName()
                });
                Alloy.Collections.uelzenCol.add(model);
            }
            for (i = 0; verden.length > i; i++) {
                var appointment = verden[i];
                var model = Alloy.createModel("appointmentMod", {
                    date: appointment.getDate(),
                    distance: appointment.getDistance(),
                    id: appointment.getId(),
                    name: appointment.getName()
                });
                Alloy.Collections.verdenCol.add(model);
            }
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "appointments";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("appointmentMod");
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createWindow({
        id: "__alloyId3"
    });
    var __alloyId4 = {};
    var __alloyId6 = [];
    var __alloyId7 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            color: "black",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "10dp",
            top: 0,
            bindId: "name"
        }
    };
    __alloyId6.push(__alloyId7);
    var __alloyId5 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId6
    };
    __alloyId4["template"] = __alloyId5;
    var __alloyId10 = [];
    $.__views.listItem = {
        properties: {
            width: Titanium.UI.FILL,
            height: Titanium.UI.FILL,
            left: "10",
            id: "listItem",
            itemId: "Bremervoerde"
        },
        name: {
            text: "Bremervoerde"
        }
    };
    __alloyId10.push($.__views.listItem);
    $.__views.listItem = {
        properties: {
            width: Titanium.UI.FILL,
            height: Titanium.UI.FILL,
            left: "10",
            id: "listItem",
            itemId: "Cloppenburg"
        },
        name: {
            text: "Cloppenburg"
        }
    };
    __alloyId10.push($.__views.listItem);
    $.__views.listItem = {
        properties: {
            width: Titanium.UI.FILL,
            height: Titanium.UI.FILL,
            left: "10",
            id: "listItem",
            itemId: "Lingen"
        },
        name: {
            text: "Lingen"
        }
    };
    __alloyId10.push($.__views.listItem);
    $.__views.listItem = {
        properties: {
            width: Titanium.UI.FILL,
            height: Titanium.UI.FILL,
            left: "10",
            id: "listItem",
            itemId: "Uelzen"
        },
        name: {
            text: "Uelzen"
        }
    };
    __alloyId10.push($.__views.listItem);
    $.__views.listItem = {
        properties: {
            width: Titanium.UI.FILL,
            height: Titanium.UI.FILL,
            left: "10",
            id: "listItem",
            itemId: "Verden"
        },
        name: {
            text: "Verden"
        }
    };
    __alloyId10.push($.__views.listItem);
    $.__views.__alloyId8 = Ti.UI.createListSection({
        id: "__alloyId8"
    });
    $.__views.__alloyId8.items = __alloyId10;
    var __alloyId11 = [];
    __alloyId11.push($.__views.__alloyId8);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId11,
        templates: __alloyId4,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId3.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.auctionsTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Auktionen",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId3,
        id: "auctionsTab"
    });
    __alloyId2.push($.__views.auctionsTab);
    $.__views.__alloyId12 = Ti.UI.createWindow({
        id: "__alloyId12"
    });
    var __alloyId13 = {};
    var __alloyId15 = [];
    var __alloyId16 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            color: "black",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "10dp",
            top: 0,
            bindId: "name"
        }
    };
    __alloyId15.push(__alloyId16);
    var __alloyId17 = {
        type: "Ti.UI.Label",
        bindId: "date",
        properties: {
            bindId: "date"
        }
    };
    __alloyId15.push(__alloyId17);
    var __alloyId14 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId15
    };
    __alloyId13["template"] = __alloyId14;
    $.__views.__alloyId18 = Ti.UI.createListSection({
        id: "__alloyId18"
    });
    var __alloyId22 = Alloy.Collections["Alloy.Collections.allShowsCol"] || Alloy.Collections.allShowsCol;
    __alloyId22.on("fetch destroy change add remove reset", __alloyId23);
    var __alloyId24 = [];
    __alloyId24.push($.__views.__alloyId18);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId24,
        templates: __alloyId13,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId12.add($.__views.listView);
    $.__views.showsTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Shauen&Specials",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId12,
        id: "showsTab"
    });
    __alloyId2.push($.__views.showsTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId2,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId22.off("fetch destroy change add remove reset", __alloyId23);
    };
    _.extend($, $.__views);
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;