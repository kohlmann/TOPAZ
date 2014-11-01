function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId271(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId271.opts || {};
        var models = __alloyId270.models;
        var len = models.length;
        var __alloyId267 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId268 = models[i];
            __alloyId268.__transform = {};
            var __alloyId269 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId268.__transform["id"] ? __alloyId268.__transform["id"] : __alloyId268.get("id"),
                    searchableText: "undefined" != typeof __alloyId268.__transform["name"] ? __alloyId268.__transform["name"] : __alloyId268.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId268.__transform["name"] ? __alloyId268.__transform["name"] : __alloyId268.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId268.__transform["aAa"] ? __alloyId268.__transform["aAa"] : __alloyId268.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId268.__transform["gRZG"] ? __alloyId268.__transform["gRZG"] : __alloyId268.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId268.__transform["father"] ? __alloyId268.__transform["father"] : __alloyId268.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId268.__transform["ff"] ? __alloyId268.__transform["ff"] : __alloyId268.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId268.__transform["fff"] ? __alloyId268.__transform["fff"] : __alloyId268.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId268.__transform["image"] ? __alloyId268.__transform["image"] : __alloyId268.get("image")
                }
            };
            __alloyId267.push(__alloyId269);
        }
        opts.animation ? $.__views.__alloyId266.setItems(__alloyId267, opts.animation) : $.__views.__alloyId266.setItems(__alloyId267);
    }
    function __alloyId289(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId289.opts || {};
        var models = __alloyId288.models;
        var len = models.length;
        var __alloyId285 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId286 = models[i];
            __alloyId286.__transform = {};
            var __alloyId287 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId286.__transform["id"] ? __alloyId286.__transform["id"] : __alloyId286.get("id"),
                    searchableText: "undefined" != typeof __alloyId286.__transform["name"] ? __alloyId286.__transform["name"] : __alloyId286.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId286.__transform["name"] ? __alloyId286.__transform["name"] : __alloyId286.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId286.__transform["aAa"] ? __alloyId286.__transform["aAa"] : __alloyId286.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId286.__transform["gRZG"] ? __alloyId286.__transform["gRZG"] : __alloyId286.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId286.__transform["father"] ? __alloyId286.__transform["father"] : __alloyId286.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId286.__transform["ff"] ? __alloyId286.__transform["ff"] : __alloyId286.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId286.__transform["fff"] ? __alloyId286.__transform["fff"] : __alloyId286.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId286.__transform["image"] ? __alloyId286.__transform["image"] : __alloyId286.get("image")
                }
            };
            __alloyId285.push(__alloyId287);
        }
        opts.animation ? $.__views.__alloyId284.setItems(__alloyId285, opts.animation) : $.__views.__alloyId284.setItems(__alloyId285);
    }
    function __alloyId307(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId307.opts || {};
        var models = __alloyId306.models;
        var len = models.length;
        var __alloyId303 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId304 = models[i];
            __alloyId304.__transform = {};
            var __alloyId305 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId304.__transform["id"] ? __alloyId304.__transform["id"] : __alloyId304.get("id"),
                    searchableText: "undefined" != typeof __alloyId304.__transform["name"] ? __alloyId304.__transform["name"] : __alloyId304.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId304.__transform["name"] ? __alloyId304.__transform["name"] : __alloyId304.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId304.__transform["aAa"] ? __alloyId304.__transform["aAa"] : __alloyId304.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId304.__transform["gRZG"] ? __alloyId304.__transform["gRZG"] : __alloyId304.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId304.__transform["father"] ? __alloyId304.__transform["father"] : __alloyId304.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId304.__transform["ff"] ? __alloyId304.__transform["ff"] : __alloyId304.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId304.__transform["fff"] ? __alloyId304.__transform["fff"] : __alloyId304.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId304.__transform["image"] ? __alloyId304.__transform["image"] : __alloyId304.get("image")
                }
            };
            __alloyId303.push(__alloyId305);
        }
        opts.animation ? $.__views.__alloyId302.setItems(__alloyId303, opts.animation) : $.__views.__alloyId302.setItems(__alloyId303);
    }
    function __alloyId325(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId325.opts || {};
        var models = __alloyId324.models;
        var len = models.length;
        var __alloyId321 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId322 = models[i];
            __alloyId322.__transform = {};
            var __alloyId323 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId322.__transform["id"] ? __alloyId322.__transform["id"] : __alloyId322.get("id"),
                    searchableText: "undefined" != typeof __alloyId322.__transform["name"] ? __alloyId322.__transform["name"] : __alloyId322.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId322.__transform["name"] ? __alloyId322.__transform["name"] : __alloyId322.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId322.__transform["aAa"] ? __alloyId322.__transform["aAa"] : __alloyId322.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId322.__transform["gRZG"] ? __alloyId322.__transform["gRZG"] : __alloyId322.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId322.__transform["father"] ? __alloyId322.__transform["father"] : __alloyId322.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId322.__transform["ff"] ? __alloyId322.__transform["ff"] : __alloyId322.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId322.__transform["fff"] ? __alloyId322.__transform["fff"] : __alloyId322.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId322.__transform["image"] ? __alloyId322.__transform["image"] : __alloyId322.get("image")
                }
            };
            __alloyId321.push(__alloyId323);
        }
        opts.animation ? $.__views.__alloyId320.setItems(__alloyId321, opts.animation) : $.__views.__alloyId320.setItems(__alloyId321);
    }
    function init() {
        masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
    }
    function itemClick(e) {
        var win = Alloy.createController("cowDetails").getView();
        win.open();
        var section = $.listView.sections[e.sectionIndex];
        section.getItemAt(e.itemIndex);
        for (i = 0; cows.length > i; i++) {
            var cow = cows[i];
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
    this.__controllerPath = "daughterTested";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("cowsMod");
    var __alloyId254 = [];
    $.__views.__alloyId255 = Ti.UI.createWindow({
        id: "__alloyId255"
    });
    var __alloyId256 = {};
    var __alloyId258 = [];
    var __alloyId259 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId258.push(__alloyId259);
    var __alloyId260 = {
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
    __alloyId258.push(__alloyId260);
    var __alloyId261 = {
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
    __alloyId258.push(__alloyId261);
    var __alloyId262 = {
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
    __alloyId258.push(__alloyId262);
    var __alloyId263 = {
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
    __alloyId258.push(__alloyId263);
    var __alloyId264 = {
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
    __alloyId258.push(__alloyId264);
    var __alloyId265 = {
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
    __alloyId258.push(__alloyId265);
    var __alloyId257 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId258
    };
    __alloyId256["template"] = __alloyId257;
    $.__views.__alloyId266 = Ti.UI.createListSection({
        id: "__alloyId266"
    });
    var __alloyId270 = Alloy.Collections["Alloy.Collections.allCowsCol"] || Alloy.Collections.allCowsCol;
    __alloyId270.on("fetch destroy change add remove reset", __alloyId271);
    var __alloyId272 = [];
    __alloyId272.push($.__views.__alloyId266);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId272,
        templates: __alloyId256,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId255.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.allCowsTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId255,
        id: "allCowsTab"
    });
    __alloyId254.push($.__views.allCowsTab);
    $.__views.__alloyId273 = Ti.UI.createWindow({
        id: "__alloyId273"
    });
    var __alloyId274 = {};
    var __alloyId276 = [];
    var __alloyId277 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId276.push(__alloyId277);
    var __alloyId278 = {
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
    __alloyId276.push(__alloyId278);
    var __alloyId279 = {
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
    __alloyId276.push(__alloyId279);
    var __alloyId280 = {
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
    __alloyId276.push(__alloyId280);
    var __alloyId281 = {
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
    __alloyId276.push(__alloyId281);
    var __alloyId282 = {
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
    __alloyId276.push(__alloyId282);
    var __alloyId283 = {
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
    __alloyId276.push(__alloyId283);
    var __alloyId275 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId276
    };
    __alloyId274["template"] = __alloyId275;
    $.__views.__alloyId284 = Ti.UI.createListSection({
        id: "__alloyId284"
    });
    var __alloyId288 = Alloy.Collections["Alloy.Collections.blackColoredCol"] || Alloy.Collections.blackColoredCol;
    __alloyId288.on("fetch destroy change add remove reset", __alloyId289);
    var __alloyId290 = [];
    __alloyId290.push($.__views.__alloyId284);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId290,
        templates: __alloyId274,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId273.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.blackColoredTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Schwarzbunt",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId273,
        id: "blackColoredTab"
    });
    __alloyId254.push($.__views.blackColoredTab);
    $.__views.__alloyId291 = Ti.UI.createWindow({
        id: "__alloyId291"
    });
    var __alloyId292 = {};
    var __alloyId294 = [];
    var __alloyId295 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId294.push(__alloyId295);
    var __alloyId296 = {
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
    __alloyId294.push(__alloyId296);
    var __alloyId297 = {
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
    __alloyId294.push(__alloyId297);
    var __alloyId298 = {
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
    __alloyId294.push(__alloyId298);
    var __alloyId299 = {
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
    __alloyId294.push(__alloyId299);
    var __alloyId300 = {
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
    __alloyId294.push(__alloyId300);
    var __alloyId301 = {
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
    __alloyId294.push(__alloyId301);
    var __alloyId293 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId294
    };
    __alloyId292["template"] = __alloyId293;
    $.__views.__alloyId302 = Ti.UI.createListSection({
        id: "__alloyId302"
    });
    var __alloyId306 = Alloy.Collections["Alloy.Collections.hornlessCol"] || Alloy.Collections.hornlessCol;
    __alloyId306.on("fetch destroy change add remove reset", __alloyId307);
    var __alloyId308 = [];
    __alloyId308.push($.__views.__alloyId302);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId308,
        templates: __alloyId292,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId291.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.hornlessTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Hornlose",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId291,
        id: "hornlessTab"
    });
    __alloyId254.push($.__views.hornlessTab);
    $.__views.__alloyId309 = Ti.UI.createWindow({
        id: "__alloyId309"
    });
    var __alloyId310 = {};
    var __alloyId312 = [];
    var __alloyId313 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId312.push(__alloyId313);
    var __alloyId314 = {
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
    __alloyId312.push(__alloyId314);
    var __alloyId315 = {
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
    __alloyId312.push(__alloyId315);
    var __alloyId316 = {
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
    __alloyId312.push(__alloyId316);
    var __alloyId317 = {
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
    __alloyId312.push(__alloyId317);
    var __alloyId318 = {
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
    __alloyId312.push(__alloyId318);
    var __alloyId319 = {
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
    __alloyId312.push(__alloyId319);
    var __alloyId311 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId312
    };
    __alloyId310["template"] = __alloyId311;
    $.__views.__alloyId320 = Ti.UI.createListSection({
        id: "__alloyId320"
    });
    var __alloyId324 = Alloy.Collections["Alloy.Collections.redColoredCol"] || Alloy.Collections.redColoredCol;
    __alloyId324.on("fetch destroy change add remove reset", __alloyId325);
    var __alloyId326 = [];
    __alloyId326.push($.__views.__alloyId320);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId326,
        templates: __alloyId310,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId309.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.redColoredTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Rotbunt",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId309,
        id: "redColoredTab"
    });
    __alloyId254.push($.__views.redColoredTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId254,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId270.off("fetch destroy change add remove reset", __alloyId271);
        __alloyId288.off("fetch destroy change add remove reset", __alloyId289);
        __alloyId306.off("fetch destroy change add remove reset", __alloyId307);
        __alloyId324.off("fetch destroy change add remove reset", __alloyId325);
    };
    _.extend($, $.__views);
    require("TOPAZ/masterrind/datatypes/Cow");
    require("TOPAZ/masterrind/impl/MasterRindFacade");
    var cows;
    var masterRindFacade;
    $.tabGroup.addEventListener("focus", function(e) {
        init();
        switch (e.index) {
          case 0:
            cows = masterRindFacade.getDaughterTested().allCows();
            break;

          case 1:
            cows = masterRindFacade.getDaughterTested().blackColored();
            break;

          case 2:
            cows = masterRindFacade.getDaughterTested().hornless();
            break;

          case 3:
            cows = masterRindFacade.getDaughterTested().redColored();
        }
    });
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;