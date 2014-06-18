function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "CowInfo/" + s : s.substring(0, index) + "/CowInfo/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("CowInfo");
    this.__widgetId = "CowInfo";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId5 = {};
    var __alloyId7 = [];
    var __alloyId8 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId7.push(__alloyId8);
    var __alloyId9 = {
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
    __alloyId7.push(__alloyId9);
    var __alloyId10 = {
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
    __alloyId7.push(__alloyId10);
    var __alloyId6 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId7
    };
    __alloyId5["template"] = __alloyId6;
    var __alloyId13 = [];
    $.__views.listItem = {
        properties: {
            id: "listItem"
        },
        info: {
            text: "Aval VG88"
        },
        es_info: {
            text: "geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV"
        },
        pic: {
            image: "/images/cow.png"
        }
    };
    __alloyId13.push($.__views.listItem);
    $.__views.__alloyId14 = {
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
            id: "__alloyId14"
        }
    };
    __alloyId13.push($.__views.__alloyId14);
    $.__views.__alloyId11 = Ti.UI.createListSection({
        headerTitle: "Kühe",
        id: "__alloyId11"
    });
    $.__views.__alloyId11.items = __alloyId13;
    var __alloyId15 = [];
    __alloyId15.push($.__views.__alloyId11);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId15,
        templates: __alloyId5,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.listView && $.addTopLevelView($.__views.listView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.listView.addEventListener("itemclick", function() {
        console.log("----------------------test-------------------");
        $.listItem.backgroundColor = "blue";
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;