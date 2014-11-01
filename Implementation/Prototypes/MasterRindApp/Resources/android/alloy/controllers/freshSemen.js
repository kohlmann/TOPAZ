function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId361(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId361.opts || {};
        var models = __alloyId360.models;
        var len = models.length;
        var __alloyId357 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId358 = models[i];
            __alloyId358.__transform = {};
            var __alloyId359 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId358.__transform["id"] ? __alloyId358.__transform["id"] : __alloyId358.get("id"),
                    searchableText: "undefined" != typeof __alloyId358.__transform["name"] ? __alloyId358.__transform["name"] : __alloyId358.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId358.__transform["name"] ? __alloyId358.__transform["name"] : __alloyId358.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId358.__transform["aAa"] ? __alloyId358.__transform["aAa"] : __alloyId358.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId358.__transform["gRZG"] ? __alloyId358.__transform["gRZG"] : __alloyId358.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId358.__transform["father"] ? __alloyId358.__transform["father"] : __alloyId358.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId358.__transform["ff"] ? __alloyId358.__transform["ff"] : __alloyId358.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId358.__transform["fff"] ? __alloyId358.__transform["fff"] : __alloyId358.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId358.__transform["image"] ? __alloyId358.__transform["image"] : __alloyId358.get("image")
                }
            };
            __alloyId357.push(__alloyId359);
        }
        opts.animation ? $.__views.__alloyId356.setItems(__alloyId357, opts.animation) : $.__views.__alloyId356.setItems(__alloyId357);
    }
    function itemClick(e) {
        var section = $.listView.sections[e.sectionIndex];
        section.getItemAt(e.itemIndex);
        var win = Alloy.createController("cowDetails").getView();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        win.open();
        var allCows = masterRindFacade.getFreshSemen().allCows();
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
    this.__controllerPath = "freshSemen";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("cowsMod");
    var __alloyId344 = [];
    $.__views.__alloyId345 = Ti.UI.createWindow({
        id: "__alloyId345"
    });
    var __alloyId346 = {};
    var __alloyId348 = [];
    var __alloyId349 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId348.push(__alloyId349);
    var __alloyId350 = {
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
    __alloyId348.push(__alloyId350);
    var __alloyId351 = {
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
    __alloyId348.push(__alloyId351);
    var __alloyId352 = {
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
    __alloyId348.push(__alloyId352);
    var __alloyId353 = {
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
    __alloyId348.push(__alloyId353);
    var __alloyId354 = {
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
    __alloyId348.push(__alloyId354);
    var __alloyId355 = {
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
    __alloyId348.push(__alloyId355);
    var __alloyId347 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId348
    };
    __alloyId346["template"] = __alloyId347;
    $.__views.__alloyId356 = Ti.UI.createListSection({
        id: "__alloyId356"
    });
    var __alloyId360 = Alloy.Collections["Alloy.Collections.allCowsCol"] || Alloy.Collections.allCowsCol;
    __alloyId360.on("fetch destroy change add remove reset", __alloyId361);
    var __alloyId362 = [];
    __alloyId362.push($.__views.__alloyId356);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId362,
        templates: __alloyId346,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId345.add($.__views.listView);
    $.__views.allCowsTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId345,
        id: "allCowsTab"
    });
    __alloyId344.push($.__views.allCowsTab);
    itemClick ? $.__views.allCowsTab.addEventListener("itemclick", itemClick) : __defers["$.__views.allCowsTab!itemclick!itemClick"] = true;
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId344,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId360.off("fetch destroy change add remove reset", __alloyId361);
    };
    _.extend($, $.__views);
    require("TOPAZ/masterrind/datatypes/Cow");
    require("TOPAZ/masterrind/impl/MasterRindFacade");
    __defers["$.__views.allCowsTab!itemclick!itemClick"] && $.__views.allCowsTab.addEventListener("itemclick", itemClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;