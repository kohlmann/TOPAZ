function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId586(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId586.opts || {};
        var models = __alloyId585.models;
        var len = models.length;
        var __alloyId582 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId583 = models[i];
            __alloyId583.__transform = {};
            var __alloyId584 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId583.__transform["id"] ? __alloyId583.__transform["id"] : __alloyId583.get("id"),
                    searchableText: "undefined" != typeof __alloyId583.__transform["name"] ? __alloyId583.__transform["name"] : __alloyId583.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId583.__transform["name"] ? __alloyId583.__transform["name"] : __alloyId583.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId583.__transform["aAa"] ? __alloyId583.__transform["aAa"] : __alloyId583.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId583.__transform["gRZG"] ? __alloyId583.__transform["gRZG"] : __alloyId583.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId583.__transform["father"] ? __alloyId583.__transform["father"] : __alloyId583.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId583.__transform["ff"] ? __alloyId583.__transform["ff"] : __alloyId583.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId583.__transform["fff"] ? __alloyId583.__transform["fff"] : __alloyId583.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId583.__transform["image"] ? __alloyId583.__transform["image"] : __alloyId583.get("image")
                }
            };
            __alloyId582.push(__alloyId584);
        }
        opts.animation ? $.__views.__alloyId581.setItems(__alloyId582, opts.animation) : $.__views.__alloyId581.setItems(__alloyId582);
    }
    function __alloyId604(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId604.opts || {};
        var models = __alloyId603.models;
        var len = models.length;
        var __alloyId600 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId601 = models[i];
            __alloyId601.__transform = {};
            var __alloyId602 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId601.__transform["id"] ? __alloyId601.__transform["id"] : __alloyId601.get("id"),
                    searchableText: "undefined" != typeof __alloyId601.__transform["name"] ? __alloyId601.__transform["name"] : __alloyId601.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId601.__transform["name"] ? __alloyId601.__transform["name"] : __alloyId601.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId601.__transform["aAa"] ? __alloyId601.__transform["aAa"] : __alloyId601.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId601.__transform["gRZG"] ? __alloyId601.__transform["gRZG"] : __alloyId601.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId601.__transform["father"] ? __alloyId601.__transform["father"] : __alloyId601.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId601.__transform["ff"] ? __alloyId601.__transform["ff"] : __alloyId601.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId601.__transform["fff"] ? __alloyId601.__transform["fff"] : __alloyId601.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId601.__transform["image"] ? __alloyId601.__transform["image"] : __alloyId601.get("image")
                }
            };
            __alloyId600.push(__alloyId602);
        }
        opts.animation ? $.__views.__alloyId599.setItems(__alloyId600, opts.animation) : $.__views.__alloyId599.setItems(__alloyId600);
    }
    function __alloyId622(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId622.opts || {};
        var models = __alloyId621.models;
        var len = models.length;
        var __alloyId618 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId619 = models[i];
            __alloyId619.__transform = {};
            var __alloyId620 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId619.__transform["id"] ? __alloyId619.__transform["id"] : __alloyId619.get("id"),
                    searchableText: "undefined" != typeof __alloyId619.__transform["name"] ? __alloyId619.__transform["name"] : __alloyId619.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId619.__transform["name"] ? __alloyId619.__transform["name"] : __alloyId619.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId619.__transform["aAa"] ? __alloyId619.__transform["aAa"] : __alloyId619.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId619.__transform["gRZG"] ? __alloyId619.__transform["gRZG"] : __alloyId619.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId619.__transform["father"] ? __alloyId619.__transform["father"] : __alloyId619.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId619.__transform["ff"] ? __alloyId619.__transform["ff"] : __alloyId619.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId619.__transform["fff"] ? __alloyId619.__transform["fff"] : __alloyId619.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId619.__transform["image"] ? __alloyId619.__transform["image"] : __alloyId619.get("image")
                }
            };
            __alloyId618.push(__alloyId620);
        }
        opts.animation ? $.__views.__alloyId617.setItems(__alloyId618, opts.animation) : $.__views.__alloyId617.setItems(__alloyId618);
    }
    function __alloyId640(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId640.opts || {};
        var models = __alloyId639.models;
        var len = models.length;
        var __alloyId636 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId637 = models[i];
            __alloyId637.__transform = {};
            var __alloyId638 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId637.__transform["id"] ? __alloyId637.__transform["id"] : __alloyId637.get("id"),
                    searchableText: "undefined" != typeof __alloyId637.__transform["name"] ? __alloyId637.__transform["name"] : __alloyId637.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId637.__transform["name"] ? __alloyId637.__transform["name"] : __alloyId637.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId637.__transform["aAa"] ? __alloyId637.__transform["aAa"] : __alloyId637.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId637.__transform["gRZG"] ? __alloyId637.__transform["gRZG"] : __alloyId637.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId637.__transform["father"] ? __alloyId637.__transform["father"] : __alloyId637.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId637.__transform["ff"] ? __alloyId637.__transform["ff"] : __alloyId637.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId637.__transform["fff"] ? __alloyId637.__transform["fff"] : __alloyId637.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId637.__transform["image"] ? __alloyId637.__transform["image"] : __alloyId637.get("image")
                }
            };
            __alloyId636.push(__alloyId638);
        }
        opts.animation ? $.__views.__alloyId635.setItems(__alloyId636, opts.animation) : $.__views.__alloyId635.setItems(__alloyId636);
    }
    function __alloyId658(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId658.opts || {};
        var models = __alloyId657.models;
        var len = models.length;
        var __alloyId654 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId655 = models[i];
            __alloyId655.__transform = {};
            var __alloyId656 = {
                properties: {
                    width: Titanium.UI.FILL,
                    height: Titanium.UI.FILL,
                    left: "10",
                    itemId: "undefined" != typeof __alloyId655.__transform["id"] ? __alloyId655.__transform["id"] : __alloyId655.get("id"),
                    searchableText: "undefined" != typeof __alloyId655.__transform["name"] ? __alloyId655.__transform["name"] : __alloyId655.get("name")
                },
                name: {
                    text: "undefined" != typeof __alloyId655.__transform["name"] ? __alloyId655.__transform["name"] : __alloyId655.get("name")
                },
                aAa: {
                    text: "undefined" != typeof __alloyId655.__transform["aAa"] ? __alloyId655.__transform["aAa"] : __alloyId655.get("aAa")
                },
                gRZG: {
                    text: "undefined" != typeof __alloyId655.__transform["gRZG"] ? __alloyId655.__transform["gRZG"] : __alloyId655.get("gRZG")
                },
                father: {
                    text: "undefined" != typeof __alloyId655.__transform["father"] ? __alloyId655.__transform["father"] : __alloyId655.get("father")
                },
                ff: {
                    text: "undefined" != typeof __alloyId655.__transform["ff"] ? __alloyId655.__transform["ff"] : __alloyId655.get("ff")
                },
                fff: {
                    text: "undefined" != typeof __alloyId655.__transform["fff"] ? __alloyId655.__transform["fff"] : __alloyId655.get("fff")
                },
                pic: {
                    image: "undefined" != typeof __alloyId655.__transform["image"] ? __alloyId655.__transform["image"] : __alloyId655.get("image")
                }
            };
            __alloyId654.push(__alloyId656);
        }
        opts.animation ? $.__views.__alloyId653.setItems(__alloyId654, opts.animation) : $.__views.__alloyId653.setItems(__alloyId654);
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
    this.__controllerPath = "hornless";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("cowsMod");
    var __alloyId570 = [];
    $.__views.allCowsWin = Ti.UI.createWindow({
        id: "allCowsWin"
    });
    var __alloyId571 = {};
    var __alloyId573 = [];
    var __alloyId574 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId573.push(__alloyId574);
    var __alloyId575 = {
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
    __alloyId573.push(__alloyId575);
    var __alloyId576 = {
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
    __alloyId573.push(__alloyId576);
    var __alloyId577 = {
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
    __alloyId573.push(__alloyId577);
    var __alloyId578 = {
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
    __alloyId573.push(__alloyId578);
    var __alloyId579 = {
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
    __alloyId573.push(__alloyId579);
    var __alloyId580 = {
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
    __alloyId573.push(__alloyId580);
    var __alloyId572 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId573
    };
    __alloyId571["template"] = __alloyId572;
    $.__views.__alloyId581 = Ti.UI.createListSection({
        id: "__alloyId581"
    });
    var __alloyId585 = Alloy.Collections["Alloy.Collections.allCowsCol"] || Alloy.Collections.allCowsCol;
    __alloyId585.on("fetch destroy change add remove reset", __alloyId586);
    var __alloyId587 = [];
    __alloyId587.push($.__views.__alloyId581);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId587,
        templates: __alloyId571,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.allCowsWin.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.allCowsTab = Ti.UI.createTab({
        backgroundColor: "white",
        height: "100dp",
        title: "Alle",
        backgroundSelectedColor: "blue",
        window: $.__views.allCowsWin,
        id: "allCowsTab"
    });
    __alloyId570.push($.__views.allCowsTab);
    $.__views.__alloyId588 = Ti.UI.createWindow({
        id: "__alloyId588"
    });
    var __alloyId589 = {};
    var __alloyId591 = [];
    var __alloyId592 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId591.push(__alloyId592);
    var __alloyId593 = {
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
    __alloyId591.push(__alloyId593);
    var __alloyId594 = {
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
    __alloyId591.push(__alloyId594);
    var __alloyId595 = {
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
    __alloyId591.push(__alloyId595);
    var __alloyId596 = {
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
    __alloyId591.push(__alloyId596);
    var __alloyId597 = {
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
    __alloyId591.push(__alloyId597);
    var __alloyId598 = {
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
    __alloyId591.push(__alloyId598);
    var __alloyId590 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId591
    };
    __alloyId589["template"] = __alloyId590;
    $.__views.__alloyId599 = Ti.UI.createListSection({
        id: "__alloyId599"
    });
    var __alloyId603 = Alloy.Collections["Alloy.Collections.blackColoredCol"] || Alloy.Collections.blackColoredCol;
    __alloyId603.on("fetch destroy change add remove reset", __alloyId604);
    var __alloyId605 = [];
    __alloyId605.push($.__views.__alloyId599);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId605,
        templates: __alloyId589,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId588.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.blackColoredTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Schwarzbunt",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId588,
        id: "blackColoredTab"
    });
    __alloyId570.push($.__views.blackColoredTab);
    $.__views.__alloyId606 = Ti.UI.createWindow({
        id: "__alloyId606"
    });
    var __alloyId607 = {};
    var __alloyId609 = [];
    var __alloyId610 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId609.push(__alloyId610);
    var __alloyId611 = {
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
    __alloyId609.push(__alloyId611);
    var __alloyId612 = {
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
    __alloyId609.push(__alloyId612);
    var __alloyId613 = {
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
    __alloyId609.push(__alloyId613);
    var __alloyId614 = {
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
    __alloyId609.push(__alloyId614);
    var __alloyId615 = {
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
    __alloyId609.push(__alloyId615);
    var __alloyId616 = {
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
    __alloyId609.push(__alloyId616);
    var __alloyId608 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId609
    };
    __alloyId607["template"] = __alloyId608;
    $.__views.__alloyId617 = Ti.UI.createListSection({
        id: "__alloyId617"
    });
    var __alloyId621 = Alloy.Collections["Alloy.Collections.genomicsCol"] || Alloy.Collections.genomicsCol;
    __alloyId621.on("fetch destroy change add remove reset", __alloyId622);
    var __alloyId623 = [];
    __alloyId623.push($.__views.__alloyId617);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId623,
        templates: __alloyId607,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId606.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.genomicsTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Genomics",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId606,
        id: "genomicsTab"
    });
    __alloyId570.push($.__views.genomicsTab);
    $.__views.__alloyId624 = Ti.UI.createWindow({
        id: "__alloyId624"
    });
    var __alloyId625 = {};
    var __alloyId627 = [];
    var __alloyId628 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId627.push(__alloyId628);
    var __alloyId629 = {
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
    __alloyId627.push(__alloyId629);
    var __alloyId630 = {
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
    __alloyId627.push(__alloyId630);
    var __alloyId631 = {
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
    __alloyId627.push(__alloyId631);
    var __alloyId632 = {
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
    __alloyId627.push(__alloyId632);
    var __alloyId633 = {
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
    __alloyId627.push(__alloyId633);
    var __alloyId634 = {
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
    __alloyId627.push(__alloyId634);
    var __alloyId626 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId627
    };
    __alloyId625["template"] = __alloyId626;
    $.__views.__alloyId635 = Ti.UI.createListSection({
        id: "__alloyId635"
    });
    var __alloyId639 = Alloy.Collections["Alloy.Collections.homozygousCol"] || Alloy.Collections.homozygousCol;
    __alloyId639.on("fetch destroy change add remove reset", __alloyId640);
    var __alloyId641 = [];
    __alloyId641.push($.__views.__alloyId635);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId641,
        templates: __alloyId625,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId624.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.homozygousTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Homozygot",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId624,
        id: "homozygousTab"
    });
    __alloyId570.push($.__views.homozygousTab);
    $.__views.__alloyId642 = Ti.UI.createWindow({
        id: "__alloyId642"
    });
    var __alloyId643 = {};
    var __alloyId645 = [];
    var __alloyId646 = {
        type: "Ti.UI.ImageView",
        bindId: "pic",
        properties: {
            width: "50dp",
            height: "50dp",
            left: 0,
            bindId: "pic"
        }
    };
    __alloyId645.push(__alloyId646);
    var __alloyId647 = {
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
    __alloyId645.push(__alloyId647);
    var __alloyId648 = {
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
    __alloyId645.push(__alloyId648);
    var __alloyId649 = {
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
    __alloyId645.push(__alloyId649);
    var __alloyId650 = {
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
    __alloyId645.push(__alloyId650);
    var __alloyId651 = {
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
    __alloyId645.push(__alloyId651);
    var __alloyId652 = {
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
    __alloyId645.push(__alloyId652);
    var __alloyId644 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId645
    };
    __alloyId643["template"] = __alloyId644;
    $.__views.__alloyId653 = Ti.UI.createListSection({
        id: "__alloyId653"
    });
    var __alloyId657 = Alloy.Collections["Alloy.Collections.redColoredCol"] || Alloy.Collections.redColoredCol;
    __alloyId657.on("fetch destroy change add remove reset", __alloyId658);
    var __alloyId659 = [];
    __alloyId659.push($.__views.__alloyId653);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId659,
        templates: __alloyId643,
        id: "listView",
        defaultItemTemplate: "template"
    });
    $.__views.__alloyId642.add($.__views.listView);
    itemClick ? $.__views.listView.addEventListener("itemclick", itemClick) : __defers["$.__views.listView!itemclick!itemClick"] = true;
    $.__views.redColoredTab = Ti.UI.createTab({
        backgroundColor: "white",
        title: "Rotbunt",
        backgroundSelectedColor: "blue",
        window: $.__views.__alloyId642,
        id: "redColoredTab"
    });
    __alloyId570.push($.__views.redColoredTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "white",
        backgroundSelectedColor: "blue",
        tabs: __alloyId570,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId585.off("fetch destroy change add remove reset", __alloyId586);
        __alloyId603.off("fetch destroy change add remove reset", __alloyId604);
        __alloyId621.off("fetch destroy change add remove reset", __alloyId622);
        __alloyId639.off("fetch destroy change add remove reset", __alloyId640);
        __alloyId657.off("fetch destroy change add remove reset", __alloyId658);
    };
    _.extend($, $.__views);
    require("TOPAZ/masterrind/datatypes/Cow");
    require("TOPAZ/masterrind/impl/MasterRindFacade");
    var cows;
    var masterRindFacade;
    $.tabGroup.addEventListener("focus", function(e) {
        init();
        console.log("----------------------------");
        console.log(e.index);
        switch (e.index) {
          case 0:
            cows = masterRindFacade.getHornless().allCows();
            break;

          case 1:
            cows = masterRindFacade.getHornless().blackColored();
            break;

          case 2:
            cows = masterRindFacade.getHornless().genomics();
            break;

          case 3:
            cows = masterRindFacade.getHornless().homozygous();
            break;

          case 4:
            cows = masterRindFacade.getHornless().redColored();
        }
    });
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    __defers["$.__views.listView!itemclick!itemClick"] && $.__views.listView.addEventListener("itemclick", itemClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;