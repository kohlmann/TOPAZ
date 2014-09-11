function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId566(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId566.opts || {};
        var models = __alloyId565.models;
        var len = models.length;
        var __alloyId562 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId563 = models[i];
            __alloyId563.__transform = {};
            var __alloyId564 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId563.__transform["id"] ? __alloyId563.__transform["id"] : __alloyId563.get("id"),
                    searchableText: "undefined" != typeof __alloyId563.__transform["name"] ? __alloyId563.__transform["name"] : __alloyId563.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId563.__transform["name"] ? __alloyId563.__transform["name"] : __alloyId563.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId563.__transform["aAa"] ? __alloyId563.__transform["aAa"] : __alloyId563.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId563.__transform["gRZG"] ? __alloyId563.__transform["gRZG"] : __alloyId563.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId563.__transform["father"] ? __alloyId563.__transform["father"] : __alloyId563.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId563.__transform["ff"] ? __alloyId563.__transform["ff"] : __alloyId563.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId563.__transform["fff"] ? __alloyId563.__transform["fff"] : __alloyId563.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId563.__transform["image"] ? __alloyId563.__transform["image"] : __alloyId563.get("image")
                }
            };
            __alloyId562.push(__alloyId564);
        }
        opts.animation ? $.__views.__alloyId561.setItems(__alloyId562, opts.animation) : $.__views.__alloyId561.setItems(__alloyId562);
    }
    function itemClick(e) {
        var win = Alloy.createController("cowDetails").getView();
        win.open();
        var section = $.listView.sections[e.sectionIndex];
        section.getItemAt(e.itemIndex);
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        var allCows = masterRindFacade.getHolsteins().allCows();
        for (i = 0; allCows.length > i; i++) {
            var cow = allCows[i];
            if (cow.getId() == e.itemId) {
                var model = Alloy.createModel("cowsMod", {
                    a: cow.getA(),
                    aAa: cow.getAAA(),
                    mating: cow.getMating(),
                    yearOfBirth: cow.getYearOfBirth(),
                    monthOfBirth: cow.getMonthOfBirth(),
                    dayOfBirth: cow.getDayOfBirth(),
                    geneDefect: cow.getGeneDefect(),
                    herdBookNumber: cow.getHerdBookNumber(),
                    mmfName: cow.getMMFName(),
                    mmff: cow.getMMFF(),
                    mfName: cow.getMFName(),
                    mff: cow.getMFF(),
                    fmf: cow.getFMF(),
                    ff: cow.getFF(),
                    fff: cow.getFFF(),
                    father: cow.getFather(),
                    breeder: cow.getBreeder(),
                    image: cow.getImage(),
                    name: cow.getName(),
                    race: cow.getRace(),
                    id: cow.getId(),
                    gRZG: cow.getGRZG(),
                    gRZM: cow.getGRZM(),
                    milkKg: cow.getMilkKg(),
                    fatPercent: cow.getFatPercent(),
                    fatKg: cow.getFatKg(),
                    proteinPercent: cow.getProteinPercent(),
                    proteinKg: cow.getProteinKg(),
                    gRZE: cow.getGRZE(),
                    milkType: cow.getMilkType(),
                    body: cow.getBody(),
                    base: cow.getBase(),
                    udder: cow.getUdder(),
                    gRZFit: cow.getGRZFit(),
                    gRZN: cow.getGRZN(),
                    gRZS: cow.getGRZS(),
                    gRZD: cow.getGRZD(),
                    gRZR: cow.getGRZR(),
                    gRZkd: cow.getGRZkd(),
                    gRZKM: cow.getGRZKM(),
                    calfRunningDirectly: cow.getCalfRunningDirectly(),
                    backLegsPosition: cow.getBackLegsPosition(),
                    beckTilt: cow.getBeckTilt(),
                    beckWide: cow.getBeckWide(),
                    behindUdderHeight: cow.getBehindUdderHeight(),
                    bodyDepth: cow.getBodyDepth(),
                    centralBelt: cow.getCentralBelt(),
                    dairyCharacter: cow.getDairyCharacter(),
                    directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                    directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                    DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                    foreUdderSuspension: cow.getForeUdderSuspension(),
                    hock: cow.getHock(),
                    movement: cow.getMovement(),
                    size: cow.getSize(),
                    stealAngle: cow.getStealAngle(),
                    strength: cow.getStrength(),
                    udderDepth: cow.getUdderDepth(),
                    hornless: cow.getHornless(),
                    genomics: cow.getGenomics(),
                    sexed: cow.getSexed(),
                    freshSemen: cow.getFreshSemen()
                });
                Alloy.Collections.cowDetailsCol.add(model);
            }
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "holsteins";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("cowsMod");
    var __alloyId549 = [];
    $.__views.__alloyId550 = Ti.UI.createWindow({
        id: "__alloyId550"
    });
    var __alloyId551 = {};
    var __alloyId553 = [];
    var __alloyId554 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId553.push(__alloyId554);
    var __alloyId555 = {
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
            left: "60dp",
            top: 0,
            bindId: "name"
        }
    };
    __alloyId553.push(__alloyId555);
    var __alloyId556 = {
        type: "Ti.UI.Label",
        bindId: "aAa",
        properties: {
            color: "black",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "160dp",
            top: 0,
            bindId: "aAa"
        }
    };
    __alloyId553.push(__alloyId556);
    var __alloyId557 = {
        type: "Ti.UI.Label",
        bindId: "gRZG",
        properties: {
            color: "black",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "20dp",
                fontWeight: "bold"
            },
            left: "260dp",
            top: 0,
            bindId: "gRZG"
        }
    };
    __alloyId553.push(__alloyId557);
    var __alloyId558 = {
        type: "Ti.UI.Label",
        bindId: "father",
        properties: {
            color: "gray",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "60dp",
            top: "25dp",
            bindId: "father"
        }
    };
    __alloyId553.push(__alloyId558);
    var __alloyId559 = {
        type: "Ti.UI.Label",
        bindId: "ff",
        properties: {
            color: "gray",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "180dp",
            top: "25dp",
            bindId: "ff"
        }
    };
    __alloyId553.push(__alloyId559);
    var __alloyId560 = {
        type: "Ti.UI.Label",
        bindId: "fff",
        properties: {
            color: "gray",
            backgroundColor: "white",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "270dp",
            top: "25dp",
            bindId: "fff"
        }
    };
    __alloyId553.push(__alloyId560);
    var __alloyId552 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId553
    };
    __alloyId551["template"] = __alloyId552;
    $.__views.__alloyId561 = Ti.UI.createListSection({
        id: "__alloyId561"
    });
    var __alloyId565 = Alloy.Collections["Alloy.Collections.allCowsCol"] || Alloy.Collections.allCowsCol;
    __alloyId565.on("fetch destroy change add remove reset", __alloyId566);
    var __alloyId567 = [];
    __alloyId567.push($.__views.__alloyId561);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId567,
        templates: __alloyId551,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId550.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.allCowsTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId550,
        id: "allCowsTab"
    });
    __alloyId549.push($.__views.allCowsTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId549,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId565.off("fetch destroy change add remove reset", __alloyId566);
    };
    _.extend($, $.__views);
    require("TOPAZ/masterrind/datatypes/Cow");
    require("TOPAZ/masterrind/impl/MasterRindFacade");
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;