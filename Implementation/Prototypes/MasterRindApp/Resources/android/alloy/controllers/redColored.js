function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId693(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId693.opts || {};
        var models = __alloyId692.models;
        var len = models.length;
        var __alloyId689 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId690 = models[i];
            __alloyId690.__transform = {};
            var __alloyId691 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId690.__transform["id"] ? __alloyId690.__transform["id"] : __alloyId690.get("id"),
                    searchableText: "undefined" != typeof __alloyId690.__transform["name"] ? __alloyId690.__transform["name"] : __alloyId690.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId690.__transform["name"] ? __alloyId690.__transform["name"] : __alloyId690.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId690.__transform["aAa"] ? __alloyId690.__transform["aAa"] : __alloyId690.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId690.__transform["gRZG"] ? __alloyId690.__transform["gRZG"] : __alloyId690.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId690.__transform["father"] ? __alloyId690.__transform["father"] : __alloyId690.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId690.__transform["ff"] ? __alloyId690.__transform["ff"] : __alloyId690.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId690.__transform["fff"] ? __alloyId690.__transform["fff"] : __alloyId690.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId690.__transform["image"] ? __alloyId690.__transform["image"] : __alloyId690.get("image")
                }
            };
            __alloyId689.push(__alloyId691);
        }
        opts.animation ? $.__views.__alloyId688.setItems(__alloyId689, opts.animation) : $.__views.__alloyId688.setItems(__alloyId689);
    }
    function __alloyId711(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId711.opts || {};
        var models = __alloyId710.models;
        var len = models.length;
        var __alloyId707 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId708 = models[i];
            __alloyId708.__transform = {};
            var __alloyId709 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId708.__transform["id"] ? __alloyId708.__transform["id"] : __alloyId708.get("id"),
                    searchableText: "undefined" != typeof __alloyId708.__transform["name"] ? __alloyId708.__transform["name"] : __alloyId708.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId708.__transform["name"] ? __alloyId708.__transform["name"] : __alloyId708.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId708.__transform["aAa"] ? __alloyId708.__transform["aAa"] : __alloyId708.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId708.__transform["gRZG"] ? __alloyId708.__transform["gRZG"] : __alloyId708.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId708.__transform["father"] ? __alloyId708.__transform["father"] : __alloyId708.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId708.__transform["ff"] ? __alloyId708.__transform["ff"] : __alloyId708.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId708.__transform["fff"] ? __alloyId708.__transform["fff"] : __alloyId708.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId708.__transform["image"] ? __alloyId708.__transform["image"] : __alloyId708.get("image")
                }
            };
            __alloyId707.push(__alloyId709);
        }
        opts.animation ? $.__views.__alloyId706.setItems(__alloyId707, opts.animation) : $.__views.__alloyId706.setItems(__alloyId707);
    }
    function __alloyId729(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId729.opts || {};
        var models = __alloyId728.models;
        var len = models.length;
        var __alloyId725 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId726 = models[i];
            __alloyId726.__transform = {};
            var __alloyId727 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId726.__transform["id"] ? __alloyId726.__transform["id"] : __alloyId726.get("id"),
                    searchableText: "undefined" != typeof __alloyId726.__transform["name"] ? __alloyId726.__transform["name"] : __alloyId726.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId726.__transform["name"] ? __alloyId726.__transform["name"] : __alloyId726.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId726.__transform["aAa"] ? __alloyId726.__transform["aAa"] : __alloyId726.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId726.__transform["gRZG"] ? __alloyId726.__transform["gRZG"] : __alloyId726.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId726.__transform["father"] ? __alloyId726.__transform["father"] : __alloyId726.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId726.__transform["ff"] ? __alloyId726.__transform["ff"] : __alloyId726.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId726.__transform["fff"] ? __alloyId726.__transform["fff"] : __alloyId726.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId726.__transform["image"] ? __alloyId726.__transform["image"] : __alloyId726.get("image")
                }
            };
            __alloyId725.push(__alloyId727);
        }
        opts.animation ? $.__views.__alloyId724.setItems(__alloyId725, opts.animation) : $.__views.__alloyId724.setItems(__alloyId725);
    }
    function __alloyId747(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId747.opts || {};
        var models = __alloyId746.models;
        var len = models.length;
        var __alloyId743 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId744 = models[i];
            __alloyId744.__transform = {};
            var __alloyId745 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId744.__transform["id"] ? __alloyId744.__transform["id"] : __alloyId744.get("id"),
                    searchableText: "undefined" != typeof __alloyId744.__transform["name"] ? __alloyId744.__transform["name"] : __alloyId744.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId744.__transform["name"] ? __alloyId744.__transform["name"] : __alloyId744.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId744.__transform["aAa"] ? __alloyId744.__transform["aAa"] : __alloyId744.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId744.__transform["gRZG"] ? __alloyId744.__transform["gRZG"] : __alloyId744.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId744.__transform["father"] ? __alloyId744.__transform["father"] : __alloyId744.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId744.__transform["ff"] ? __alloyId744.__transform["ff"] : __alloyId744.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId744.__transform["fff"] ? __alloyId744.__transform["fff"] : __alloyId744.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId744.__transform["image"] ? __alloyId744.__transform["image"] : __alloyId744.get("image")
                }
            };
            __alloyId743.push(__alloyId745);
        }
        opts.animation ? $.__views.__alloyId742.setItems(__alloyId743, opts.animation) : $.__views.__alloyId742.setItems(__alloyId743);
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
    this.__controllerPath = "redColored";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("cowsMod");
    var __alloyId676 = [];
    $.__views.__alloyId677 = Ti.UI.createWindow({
        id: "__alloyId677"
    });
    var __alloyId678 = {};
    var __alloyId680 = [];
    var __alloyId681 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId680.push(__alloyId681);
    var __alloyId682 = {
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
    __alloyId680.push(__alloyId682);
    var __alloyId683 = {
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
    __alloyId680.push(__alloyId683);
    var __alloyId684 = {
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
    __alloyId680.push(__alloyId684);
    var __alloyId685 = {
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
    __alloyId680.push(__alloyId685);
    var __alloyId686 = {
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
    __alloyId680.push(__alloyId686);
    var __alloyId687 = {
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
    __alloyId680.push(__alloyId687);
    var __alloyId679 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId680
    };
    __alloyId678["template"] = __alloyId679;
    $.__views.__alloyId688 = Ti.UI.createListSection({
        id: "__alloyId688"
    });
    var __alloyId692 = Alloy.Collections["Alloy.Collections.allCowsCol"] || Alloy.Collections.allCowsCol;
    __alloyId692.on("fetch destroy change add remove reset", __alloyId693);
    var __alloyId694 = [];
    __alloyId694.push($.__views.__alloyId688);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId694,
        templates: __alloyId678,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId677.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.allCowsTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId677,
        id: "allCowsTab"
    });
    __alloyId676.push($.__views.allCowsTab);
    $.__views.__alloyId695 = Ti.UI.createWindow({
        id: "__alloyId695"
    });
    var __alloyId696 = {};
    var __alloyId698 = [];
    var __alloyId699 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId698.push(__alloyId699);
    var __alloyId700 = {
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
    __alloyId698.push(__alloyId700);
    var __alloyId701 = {
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
    __alloyId698.push(__alloyId701);
    var __alloyId702 = {
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
    __alloyId698.push(__alloyId702);
    var __alloyId703 = {
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
    __alloyId698.push(__alloyId703);
    var __alloyId704 = {
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
    __alloyId698.push(__alloyId704);
    var __alloyId705 = {
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
    __alloyId698.push(__alloyId705);
    var __alloyId697 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId698
    };
    __alloyId696["template"] = __alloyId697;
    $.__views.__alloyId706 = Ti.UI.createListSection({
        id: "__alloyId706"
    });
    var __alloyId710 = Alloy.Collections["Alloy.Collections.genomicsCol"] || Alloy.Collections.genomicsCol;
    __alloyId710.on("fetch destroy change add remove reset", __alloyId711);
    var __alloyId712 = [];
    __alloyId712.push($.__views.__alloyId706);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId712,
        templates: __alloyId696,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId695.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.genomicsTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Genomics",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId695,
        id: "genomicsTab"
    });
    __alloyId676.push($.__views.genomicsTab);
    $.__views.__alloyId713 = Ti.UI.createWindow({
        id: "__alloyId713"
    });
    var __alloyId714 = {};
    var __alloyId716 = [];
    var __alloyId717 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId716.push(__alloyId717);
    var __alloyId718 = {
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
    __alloyId716.push(__alloyId718);
    var __alloyId719 = {
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
    __alloyId716.push(__alloyId719);
    var __alloyId720 = {
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
    __alloyId716.push(__alloyId720);
    var __alloyId721 = {
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
    __alloyId716.push(__alloyId721);
    var __alloyId722 = {
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
    __alloyId716.push(__alloyId722);
    var __alloyId723 = {
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
    __alloyId716.push(__alloyId723);
    var __alloyId715 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId716
    };
    __alloyId714["template"] = __alloyId715;
    $.__views.__alloyId724 = Ti.UI.createListSection({
        id: "__alloyId724"
    });
    var __alloyId728 = Alloy.Collections["Alloy.Collections.daughterTestedCol"] || Alloy.Collections.daughterTestedCol;
    __alloyId728.on("fetch destroy change add remove reset", __alloyId729);
    var __alloyId730 = [];
    __alloyId730.push($.__views.__alloyId724);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId730,
        templates: __alloyId714,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId713.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.daughterTestedTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Geprüfte",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId713,
        id: "daughterTestedTab"
    });
    __alloyId676.push($.__views.daughterTestedTab);
    $.__views.__alloyId731 = Ti.UI.createWindow({
        id: "__alloyId731"
    });
    var __alloyId732 = {};
    var __alloyId734 = [];
    var __alloyId735 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId734.push(__alloyId735);
    var __alloyId736 = {
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
    __alloyId734.push(__alloyId736);
    var __alloyId737 = {
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
    __alloyId734.push(__alloyId737);
    var __alloyId738 = {
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
    __alloyId734.push(__alloyId738);
    var __alloyId739 = {
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
    __alloyId734.push(__alloyId739);
    var __alloyId740 = {
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
    __alloyId734.push(__alloyId740);
    var __alloyId741 = {
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
    __alloyId734.push(__alloyId741);
    var __alloyId733 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId734
    };
    __alloyId732["template"] = __alloyId733;
    $.__views.__alloyId742 = Ti.UI.createListSection({
        id: "__alloyId742"
    });
    var __alloyId746 = Alloy.Collections["Alloy.Collections.hornlessCol"] || Alloy.Collections.hornlessCol;
    __alloyId746.on("fetch destroy change add remove reset", __alloyId747);
    var __alloyId748 = [];
    __alloyId748.push($.__views.__alloyId742);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId748,
        templates: __alloyId732,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId731.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.hornlessTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Hornlose",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId731,
        id: "hornlessTab"
    });
    __alloyId676.push($.__views.hornlessTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId676,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId692.off("fetch destroy change add remove reset", __alloyId693);
        __alloyId710.off("fetch destroy change add remove reset", __alloyId711);
        __alloyId728.off("fetch destroy change add remove reset", __alloyId729);
        __alloyId746.off("fetch destroy change add remove reset", __alloyId747);
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
            cows = masterRindFacade.getRedColored().allCows();
            break;

          case 1:
            cows = masterRindFacade.getRedColored().genomics();
            break;

          case 2:
            cows = masterRindFacade.getRedColored().daughterTested();
            break;

          case 3:
            cows = masterRindFacade.getRedColored().hornless();
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