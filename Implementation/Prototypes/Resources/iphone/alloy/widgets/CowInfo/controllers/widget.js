function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "CowInfo/" + s : s.substring(0, index) + "/CowInfo/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function showDetails(e) {
        selectedRow = e.index;
        dialog.show();
    }
    new (require("alloy/widget"))("CowInfo");
    this.__widgetId = "CowInfo";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId5 = {};
    var __alloyId8 = [];
    var __alloyId9 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId8.push(__alloyId9);
    var __alloyId10 = {
        type: "Ti.UI.Label",
        bindId: "info",
        properties: {
            color: "black",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "60dp",
            top: 0,
            bindId: "info"
        }
    };
    __alloyId8.push(__alloyId10);
    var __alloyId11 = {
        type: "Ti.UI.Label",
        bindId: "es_info",
        properties: {
            color: "gray",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "60dp",
            top: "25dp",
            bindId: "es_info"
        }
    };
    __alloyId8.push(__alloyId11);
    var __alloyId7 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId8
    };
    __alloyId5["template"] = __alloyId7;
    var __alloyId14 = [];
    $.__views.__alloyId15 = {
        info: {
            text: "Aval VG88"
        },
        es_info: {
            text: "geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV"
        },
        pic: {
            image: "/images/cow.png"
        },
        properties: {
            id: "__alloyId15"
        }
    };
    __alloyId14.push($.__views.__alloyId15);
    $.__views.__alloyId16 = {
        info: {
            text: "Laron P"
        },
        es_info: {
            text: "geb.: 05.04.2008 · Züchter: Mts Reurslag-Boezewink, Laren, Niederlande · Besitzer: ZBH"
        },
        pic: {
            image: "/images/cow01.png"
        },
        properties: {
            id: "__alloyId16"
        }
    };
    __alloyId14.push($.__views.__alloyId16);
    $.__views.__alloyId12 = Ti.UI.createListSection({
        headerTitle: "Kühe",
        id: "__alloyId12"
    });
    $.__views.__alloyId12.items = __alloyId14;
    var __alloyId17 = [];
    __alloyId17.push($.__views.__alloyId12);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId17,
        templates: __alloyId5,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.listView && $.addTopLevelView($.__views.listView);
    showDetails ? $.__views.listView.addEventListener("click", showDetails) : __defers["$.__views.listView!click!showDetails"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.listView!click!showDetails"] && $.__views.listView.addEventListener("click", showDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;