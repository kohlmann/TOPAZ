function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId43(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId43.opts || {};
        var models = __alloyId42.models;
        var len = models.length;
        var __alloyId39 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId40 = models[i];
            __alloyId40.__transform = {};
            var __alloyId41 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId40.__transform["id"] ? __alloyId40.__transform["id"] : __alloyId40.get("id"),
                    searchableText: "undefined" != typeof __alloyId40.__transform["name"] ? __alloyId40.__transform["name"] : __alloyId40.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId40.__transform["name"] ? __alloyId40.__transform["name"] : __alloyId40.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId40.__transform["aAa"] ? __alloyId40.__transform["aAa"] : __alloyId40.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId40.__transform["gRZG"] ? __alloyId40.__transform["gRZG"] : __alloyId40.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId40.__transform["father"] ? __alloyId40.__transform["father"] : __alloyId40.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId40.__transform["ff"] ? __alloyId40.__transform["ff"] : __alloyId40.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId40.__transform["fff"] ? __alloyId40.__transform["fff"] : __alloyId40.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId40.__transform["image"] ? __alloyId40.__transform["image"] : __alloyId40.get("image")
                }
            };
            __alloyId39.push(__alloyId41);
        }
        opts.animation ? $.__views.__alloyId38.setItems(__alloyId39, opts.animation) : $.__views.__alloyId38.setItems(__alloyId39);
    }
    function __alloyId61(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId61.opts || {};
        var models = __alloyId60.models;
        var len = models.length;
        var __alloyId57 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId58 = models[i];
            __alloyId58.__transform = {};
            var __alloyId59 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId58.__transform["id"] ? __alloyId58.__transform["id"] : __alloyId58.get("id"),
                    searchableText: "undefined" != typeof __alloyId58.__transform["name"] ? __alloyId58.__transform["name"] : __alloyId58.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId58.__transform["name"] ? __alloyId58.__transform["name"] : __alloyId58.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId58.__transform["aAa"] ? __alloyId58.__transform["aAa"] : __alloyId58.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId58.__transform["gRZG"] ? __alloyId58.__transform["gRZG"] : __alloyId58.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId58.__transform["father"] ? __alloyId58.__transform["father"] : __alloyId58.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId58.__transform["ff"] ? __alloyId58.__transform["ff"] : __alloyId58.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId58.__transform["fff"] ? __alloyId58.__transform["fff"] : __alloyId58.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId58.__transform["image"] ? __alloyId58.__transform["image"] : __alloyId58.get("image")
                }
            };
            __alloyId57.push(__alloyId59);
        }
        opts.animation ? $.__views.__alloyId56.setItems(__alloyId57, opts.animation) : $.__views.__alloyId56.setItems(__alloyId57);
    }
    function __alloyId79(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId79.opts || {};
        var models = __alloyId78.models;
        var len = models.length;
        var __alloyId75 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId76 = models[i];
            __alloyId76.__transform = {};
            var __alloyId77 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId76.__transform["id"] ? __alloyId76.__transform["id"] : __alloyId76.get("id"),
                    searchableText: "undefined" != typeof __alloyId76.__transform["name"] ? __alloyId76.__transform["name"] : __alloyId76.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId76.__transform["name"] ? __alloyId76.__transform["name"] : __alloyId76.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId76.__transform["aAa"] ? __alloyId76.__transform["aAa"] : __alloyId76.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId76.__transform["gRZG"] ? __alloyId76.__transform["gRZG"] : __alloyId76.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId76.__transform["father"] ? __alloyId76.__transform["father"] : __alloyId76.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId76.__transform["ff"] ? __alloyId76.__transform["ff"] : __alloyId76.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId76.__transform["fff"] ? __alloyId76.__transform["fff"] : __alloyId76.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId76.__transform["image"] ? __alloyId76.__transform["image"] : __alloyId76.get("image")
                }
            };
            __alloyId75.push(__alloyId77);
        }
        opts.animation ? $.__views.__alloyId74.setItems(__alloyId75, opts.animation) : $.__views.__alloyId74.setItems(__alloyId75);
    }
    function __alloyId97(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId97.opts || {};
        var models = __alloyId96.models;
        var len = models.length;
        var __alloyId93 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId94 = models[i];
            __alloyId94.__transform = {};
            var __alloyId95 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId94.__transform["id"] ? __alloyId94.__transform["id"] : __alloyId94.get("id"),
                    searchableText: "undefined" != typeof __alloyId94.__transform["name"] ? __alloyId94.__transform["name"] : __alloyId94.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId94.__transform["name"] ? __alloyId94.__transform["name"] : __alloyId94.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId94.__transform["aAa"] ? __alloyId94.__transform["aAa"] : __alloyId94.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId94.__transform["gRZG"] ? __alloyId94.__transform["gRZG"] : __alloyId94.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId94.__transform["father"] ? __alloyId94.__transform["father"] : __alloyId94.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId94.__transform["ff"] ? __alloyId94.__transform["ff"] : __alloyId94.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId94.__transform["fff"] ? __alloyId94.__transform["fff"] : __alloyId94.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId94.__transform["image"] ? __alloyId94.__transform["image"] : __alloyId94.get("image")
                }
            };
            __alloyId93.push(__alloyId95);
        }
        opts.animation ? $.__views.__alloyId92.setItems(__alloyId93, opts.animation) : $.__views.__alloyId92.setItems(__alloyId93);
    }
    function init() {
        masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
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
    this.__controllerPath = "blackColored";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("cowsMod");
    var __alloyId27 = [];
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    var __alloyId28 = {};
    var __alloyId30 = [];
    var __alloyId31 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId30.push(__alloyId31);
    var __alloyId32 = {
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
    __alloyId30.push(__alloyId32);
    var __alloyId33 = {
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
    __alloyId30.push(__alloyId33);
    var __alloyId34 = {
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
    __alloyId30.push(__alloyId34);
    var __alloyId35 = {
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
    __alloyId30.push(__alloyId35);
    var __alloyId36 = {
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
    __alloyId30.push(__alloyId36);
    var __alloyId37 = {
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
    __alloyId30.push(__alloyId37);
    var __alloyId29 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId30
    };
    __alloyId28["template"] = __alloyId29;
    $.__views.__alloyId38 = Ti.UI.createListSection({
        id: "__alloyId38"
    });
    var __alloyId42 = Alloy.Collections["Alloy.Collections.allCowsCol"] || Alloy.Collections.allCowsCol;
    __alloyId42.on("fetch destroy change add remove reset", __alloyId43);
    var __alloyId44 = [];
    __alloyId44.push($.__views.__alloyId38);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId44,
        templates: __alloyId28,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.win.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.allCowsTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.win,
        id: "allCowsTab"
    });
    __alloyId27.push($.__views.allCowsTab);
    $.__views.__alloyId45 = Ti.UI.createWindow({
        id: "__alloyId45"
    });
    var __alloyId46 = {};
    var __alloyId48 = [];
    var __alloyId49 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId48.push(__alloyId49);
    var __alloyId50 = {
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
    __alloyId48.push(__alloyId50);
    var __alloyId51 = {
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
    __alloyId48.push(__alloyId51);
    var __alloyId52 = {
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
    __alloyId48.push(__alloyId52);
    var __alloyId53 = {
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
    __alloyId48.push(__alloyId53);
    var __alloyId54 = {
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
    __alloyId48.push(__alloyId54);
    var __alloyId55 = {
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
    __alloyId48.push(__alloyId55);
    var __alloyId47 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId48
    };
    __alloyId46["template"] = __alloyId47;
    $.__views.__alloyId56 = Ti.UI.createListSection({
        id: "__alloyId56"
    });
    var __alloyId60 = Alloy.Collections["Alloy.Collections.genomicsCol"] || Alloy.Collections.genomicsCol;
    __alloyId60.on("fetch destroy change add remove reset", __alloyId61);
    var __alloyId62 = [];
    __alloyId62.push($.__views.__alloyId56);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId62,
        templates: __alloyId46,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId45.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.genomicsTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Genomics",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId45,
        id: "genomicsTab"
    });
    __alloyId27.push($.__views.genomicsTab);
    $.__views.__alloyId63 = Ti.UI.createWindow({
        id: "__alloyId63"
    });
    var __alloyId64 = {};
    var __alloyId66 = [];
    var __alloyId67 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId66.push(__alloyId67);
    var __alloyId68 = {
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
    __alloyId66.push(__alloyId68);
    var __alloyId69 = {
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
    __alloyId66.push(__alloyId69);
    var __alloyId70 = {
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
    __alloyId66.push(__alloyId70);
    var __alloyId71 = {
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
    __alloyId66.push(__alloyId71);
    var __alloyId72 = {
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
    __alloyId66.push(__alloyId72);
    var __alloyId73 = {
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
    __alloyId66.push(__alloyId73);
    var __alloyId65 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId66
    };
    __alloyId64["template"] = __alloyId65;
    $.__views.__alloyId74 = Ti.UI.createListSection({
        id: "__alloyId74"
    });
    var __alloyId78 = Alloy.Collections["Alloy.Collections.daughterTestedCol"] || Alloy.Collections.daughterTestedCol;
    __alloyId78.on("fetch destroy change add remove reset", __alloyId79);
    var __alloyId80 = [];
    __alloyId80.push($.__views.__alloyId74);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId80,
        templates: __alloyId64,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId63.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.daughterTestedTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Geprüfte",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId63,
        id: "daughterTestedTab"
    });
    __alloyId27.push($.__views.daughterTestedTab);
    $.__views.__alloyId81 = Ti.UI.createWindow({
        id: "__alloyId81"
    });
    var __alloyId82 = {};
    var __alloyId84 = [];
    var __alloyId85 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId84.push(__alloyId85);
    var __alloyId86 = {
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
    __alloyId84.push(__alloyId86);
    var __alloyId87 = {
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
    __alloyId84.push(__alloyId87);
    var __alloyId88 = {
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
    __alloyId84.push(__alloyId88);
    var __alloyId89 = {
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
    __alloyId84.push(__alloyId89);
    var __alloyId90 = {
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
    __alloyId84.push(__alloyId90);
    var __alloyId91 = {
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
    __alloyId84.push(__alloyId91);
    var __alloyId83 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId84
    };
    __alloyId82["template"] = __alloyId83;
    $.__views.__alloyId92 = Ti.UI.createListSection({
        id: "__alloyId92"
    });
    var __alloyId96 = Alloy.Collections["Alloy.Collections.hornlessCol"] || Alloy.Collections.hornlessCol;
    __alloyId96.on("fetch destroy change add remove reset", __alloyId97);
    var __alloyId98 = [];
    __alloyId98.push($.__views.__alloyId92);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId98,
        templates: __alloyId82,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId81.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.hornlessTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Hornlose",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId81,
        id: "hornlessTab"
    });
    __alloyId27.push($.__views.hornlessTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId27,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId42.off("fetch destroy change add remove reset", __alloyId43);
        __alloyId60.off("fetch destroy change add remove reset", __alloyId61);
        __alloyId78.off("fetch destroy change add remove reset", __alloyId79);
        __alloyId96.off("fetch destroy change add remove reset", __alloyId97);
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
            cows = masterRindFacade.getBlackColored().allCows();
            break;

          case 1:
            cows = masterRindFacade.getBlackColored().genomics();
            break;

          case 2:
            cows = masterRindFacade.getBlackColored().daughterTested();
            break;

          case 3:
            cows = masterRindFacade.getBlackColored().hornless();
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