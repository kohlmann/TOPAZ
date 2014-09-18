function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId382(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId382.opts || {};
        var models = __alloyId381.models;
        var len = models.length;
        var __alloyId378 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId379 = models[i];
            __alloyId379.__transform = {};
            var __alloyId380 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId379.__transform["id"] ? __alloyId379.__transform["id"] : __alloyId379.get("id"),
                    searchableText: "undefined" != typeof __alloyId379.__transform["name"] ? __alloyId379.__transform["name"] : __alloyId379.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId379.__transform["name"] ? __alloyId379.__transform["name"] : __alloyId379.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId379.__transform["aAa"] ? __alloyId379.__transform["aAa"] : __alloyId379.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId379.__transform["gRZG"] ? __alloyId379.__transform["gRZG"] : __alloyId379.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId379.__transform["father"] ? __alloyId379.__transform["father"] : __alloyId379.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId379.__transform["ff"] ? __alloyId379.__transform["ff"] : __alloyId379.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId379.__transform["fff"] ? __alloyId379.__transform["fff"] : __alloyId379.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId379.__transform["image"] ? __alloyId379.__transform["image"] : __alloyId379.get("image")
                }
            };
            __alloyId378.push(__alloyId380);
        }
        opts.animation ? $.__views.__alloyId377.setItems(__alloyId378, opts.animation) : $.__views.__alloyId377.setItems(__alloyId378);
    }
    function __alloyId400(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId400.opts || {};
        var models = __alloyId399.models;
        var len = models.length;
        var __alloyId396 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId397 = models[i];
            __alloyId397.__transform = {};
            var __alloyId398 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId397.__transform["id"] ? __alloyId397.__transform["id"] : __alloyId397.get("id"),
                    searchableText: "undefined" != typeof __alloyId397.__transform["name"] ? __alloyId397.__transform["name"] : __alloyId397.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId397.__transform["name"] ? __alloyId397.__transform["name"] : __alloyId397.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId397.__transform["aAa"] ? __alloyId397.__transform["aAa"] : __alloyId397.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId397.__transform["gRZG"] ? __alloyId397.__transform["gRZG"] : __alloyId397.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId397.__transform["father"] ? __alloyId397.__transform["father"] : __alloyId397.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId397.__transform["ff"] ? __alloyId397.__transform["ff"] : __alloyId397.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId397.__transform["fff"] ? __alloyId397.__transform["fff"] : __alloyId397.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId397.__transform["image"] ? __alloyId397.__transform["image"] : __alloyId397.get("image")
                }
            };
            __alloyId396.push(__alloyId398);
        }
        opts.animation ? $.__views.__alloyId395.setItems(__alloyId396, opts.animation) : $.__views.__alloyId395.setItems(__alloyId396);
    }
    function __alloyId418(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId418.opts || {};
        var models = __alloyId417.models;
        var len = models.length;
        var __alloyId414 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId415 = models[i];
            __alloyId415.__transform = {};
            var __alloyId416 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId415.__transform["id"] ? __alloyId415.__transform["id"] : __alloyId415.get("id"),
                    searchableText: "undefined" != typeof __alloyId415.__transform["name"] ? __alloyId415.__transform["name"] : __alloyId415.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId415.__transform["name"] ? __alloyId415.__transform["name"] : __alloyId415.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId415.__transform["aAa"] ? __alloyId415.__transform["aAa"] : __alloyId415.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId415.__transform["gRZG"] ? __alloyId415.__transform["gRZG"] : __alloyId415.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId415.__transform["father"] ? __alloyId415.__transform["father"] : __alloyId415.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId415.__transform["ff"] ? __alloyId415.__transform["ff"] : __alloyId415.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId415.__transform["fff"] ? __alloyId415.__transform["fff"] : __alloyId415.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId415.__transform["image"] ? __alloyId415.__transform["image"] : __alloyId415.get("image")
                }
            };
            __alloyId414.push(__alloyId416);
        }
        opts.animation ? $.__views.__alloyId413.setItems(__alloyId414, opts.animation) : $.__views.__alloyId413.setItems(__alloyId414);
    }
    function __alloyId436(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId436.opts || {};
        var models = __alloyId435.models;
        var len = models.length;
        var __alloyId432 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId433 = models[i];
            __alloyId433.__transform = {};
            var __alloyId434 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId433.__transform["id"] ? __alloyId433.__transform["id"] : __alloyId433.get("id"),
                    searchableText: "undefined" != typeof __alloyId433.__transform["name"] ? __alloyId433.__transform["name"] : __alloyId433.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId433.__transform["name"] ? __alloyId433.__transform["name"] : __alloyId433.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId433.__transform["aAa"] ? __alloyId433.__transform["aAa"] : __alloyId433.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId433.__transform["gRZG"] ? __alloyId433.__transform["gRZG"] : __alloyId433.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId433.__transform["father"] ? __alloyId433.__transform["father"] : __alloyId433.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId433.__transform["ff"] ? __alloyId433.__transform["ff"] : __alloyId433.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId433.__transform["fff"] ? __alloyId433.__transform["fff"] : __alloyId433.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId433.__transform["image"] ? __alloyId433.__transform["image"] : __alloyId433.get("image")
                }
            };
            __alloyId432.push(__alloyId434);
        }
        opts.animation ? $.__views.__alloyId431.setItems(__alloyId432, opts.animation) : $.__views.__alloyId431.setItems(__alloyId432);
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
    this.__controllerPath = "genomics";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("cowsMod");
    var __alloyId365 = [];
    $.__views.__alloyId366 = Ti.UI.createWindow({
        id: "__alloyId366"
    });
    var __alloyId367 = {};
    var __alloyId369 = [];
    var __alloyId370 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId369.push(__alloyId370);
    var __alloyId371 = {
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
    __alloyId369.push(__alloyId371);
    var __alloyId372 = {
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
    __alloyId369.push(__alloyId372);
    var __alloyId373 = {
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
    __alloyId369.push(__alloyId373);
    var __alloyId374 = {
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
    __alloyId369.push(__alloyId374);
    var __alloyId375 = {
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
    __alloyId369.push(__alloyId375);
    var __alloyId376 = {
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
    __alloyId369.push(__alloyId376);
    var __alloyId368 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId369
    };
    __alloyId367["template"] = __alloyId368;
    $.__views.__alloyId377 = Ti.UI.createListSection({
        id: "__alloyId377"
    });
    var __alloyId381 = Alloy.Collections["Alloy.Collections.allCowsCol"] || Alloy.Collections.allCowsCol;
    __alloyId381.on("fetch destroy change add remove reset", __alloyId382);
    var __alloyId383 = [];
    __alloyId383.push($.__views.__alloyId377);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId383,
        templates: __alloyId367,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId366.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.allCowsTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId366,
        id: "allCowsTab"
    });
    __alloyId365.push($.__views.allCowsTab);
    $.__views.__alloyId384 = Ti.UI.createWindow({
        id: "__alloyId384"
    });
    var __alloyId385 = {};
    var __alloyId387 = [];
    var __alloyId388 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId387.push(__alloyId388);
    var __alloyId389 = {
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
    __alloyId387.push(__alloyId389);
    var __alloyId390 = {
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
    __alloyId387.push(__alloyId390);
    var __alloyId391 = {
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
    __alloyId387.push(__alloyId391);
    var __alloyId392 = {
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
    __alloyId387.push(__alloyId392);
    var __alloyId393 = {
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
    __alloyId387.push(__alloyId393);
    var __alloyId394 = {
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
    __alloyId387.push(__alloyId394);
    var __alloyId386 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId387
    };
    __alloyId385["template"] = __alloyId386;
    $.__views.__alloyId395 = Ti.UI.createListSection({
        id: "__alloyId395"
    });
    var __alloyId399 = Alloy.Collections["Alloy.Collections.blackColoredCol"] || Alloy.Collections.blackColoredCol;
    __alloyId399.on("fetch destroy change add remove reset", __alloyId400);
    var __alloyId401 = [];
    __alloyId401.push($.__views.__alloyId395);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId401,
        templates: __alloyId385,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId384.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.blackColoredTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Schwarzbunt",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId384,
        id: "blackColoredTab"
    });
    __alloyId365.push($.__views.blackColoredTab);
    $.__views.__alloyId402 = Ti.UI.createWindow({
        id: "__alloyId402"
    });
    var __alloyId403 = {};
    var __alloyId405 = [];
    var __alloyId406 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId405.push(__alloyId406);
    var __alloyId407 = {
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
    __alloyId405.push(__alloyId407);
    var __alloyId408 = {
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
    __alloyId405.push(__alloyId408);
    var __alloyId409 = {
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
    __alloyId405.push(__alloyId409);
    var __alloyId410 = {
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
    __alloyId405.push(__alloyId410);
    var __alloyId411 = {
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
    __alloyId405.push(__alloyId411);
    var __alloyId412 = {
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
    __alloyId405.push(__alloyId412);
    var __alloyId404 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId405
    };
    __alloyId403["template"] = __alloyId404;
    $.__views.__alloyId413 = Ti.UI.createListSection({
        id: "__alloyId413"
    });
    var __alloyId417 = Alloy.Collections["Alloy.Collections.hornlessCol"] || Alloy.Collections.hornlessCol;
    __alloyId417.on("fetch destroy change add remove reset", __alloyId418);
    var __alloyId419 = [];
    __alloyId419.push($.__views.__alloyId413);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId419,
        templates: __alloyId403,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId402.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.hornlessTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Hornlose",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId402,
        id: "hornlessTab"
    });
    __alloyId365.push($.__views.hornlessTab);
    $.__views.__alloyId420 = Ti.UI.createWindow({
        id: "__alloyId420"
    });
    var __alloyId421 = {};
    var __alloyId423 = [];
    var __alloyId424 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId423.push(__alloyId424);
    var __alloyId425 = {
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
    __alloyId423.push(__alloyId425);
    var __alloyId426 = {
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
    __alloyId423.push(__alloyId426);
    var __alloyId427 = {
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
    __alloyId423.push(__alloyId427);
    var __alloyId428 = {
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
    __alloyId423.push(__alloyId428);
    var __alloyId429 = {
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
    __alloyId423.push(__alloyId429);
    var __alloyId430 = {
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
    __alloyId423.push(__alloyId430);
    var __alloyId422 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId423
    };
    __alloyId421["template"] = __alloyId422;
    $.__views.__alloyId431 = Ti.UI.createListSection({
        id: "__alloyId431"
    });
    var __alloyId435 = Alloy.Collections["Alloy.Collections.redColoredCol"] || Alloy.Collections.redColoredCol;
    __alloyId435.on("fetch destroy change add remove reset", __alloyId436);
    var __alloyId437 = [];
    __alloyId437.push($.__views.__alloyId431);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId437,
        templates: __alloyId421,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId420.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.redColoredTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Rotbunt",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId420,
        id: "redColoredTab"
    });
    __alloyId365.push($.__views.redColoredTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId365,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId381.off("fetch destroy change add remove reset", __alloyId382);
        __alloyId399.off("fetch destroy change add remove reset", __alloyId400);
        __alloyId417.off("fetch destroy change add remove reset", __alloyId418);
        __alloyId435.off("fetch destroy change add remove reset", __alloyId436);
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
            cows = masterRindFacade.getGenomics().allCows();
            break;

          case 1:
            cows = masterRindFacade.getGenomics().blackColored();
            break;

          case 2:
            cows = masterRindFacade.getGenomics().hornless();
            break;

          case 3:
            cows = masterRindFacade.getGenomics().redColored();
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