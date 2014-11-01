function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cowDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.model = Alloy.createModel("cowModel");
    $.__views.cowDetails = Ti.UI.createWindow({
        id: "cowDetails"
    });
    $.__views.cowDetails && $.addTopLevelView($.__views.cowDetails);
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewSection({
        headerTitle: "Details",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.cow = Ti.UI.createImageView({
        width: Titanium.UI.FILL,
        id: "cow",
        image: "/images/cow.png"
    });
    $.__views.__alloyId2.add($.__views.cow);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        layout: "vertical",
        id: "__alloyId3"
    });
    $.__views.__alloyId1.add($.__views.__alloyId3);
    $.__views.lb0 = Ti.UI.createLabel({
        color: "black",
        left: "10",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        id: "lb0",
        text: "Empire	- 823060"
    });
    $.__views.__alloyId3.add($.__views.lb0);
    $.__views.lb1 = Ti.UI.createLabel({
        color: "black",
        left: "10",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        id: "lb1",
        text: "Epic  x Legend  x Shottle"
    });
    $.__views.__alloyId3.add($.__views.lb1);
    $.__views.lb2 = Ti.UI.createLabel({
        color: "black",
        left: "10",
        font: {
            fontSize: "18dp"
        },
        id: "lb2",
        text: "0 Tö. | CVF BLF BYF | aAa: 312546"
    });
    $.__views.__alloyId3.add($.__views.lb2);
    $.__views.tr0 = Ti.UI.createTableViewRow({
        backgroundColor: "#04638b",
        id: "tr0"
    });
    $.__views.__alloyId1.add($.__views.tr0);
    $.__views.lb3 = Ti.UI.createLabel({
        color: "white",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb3",
        text: "gRZG"
    });
    $.__views.tr0.add($.__views.lb3);
    $.__views.lb4 = Ti.UI.createLabel({
        color: "white",
        right: "100",
        font: {
            fontSize: "18dp"
        },
        id: "lb4",
        text: "142"
    });
    $.__views.tr0.add($.__views.lb4);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        id: "__alloyId4"
    });
    $.__views.__alloyId1.add($.__views.__alloyId4);
    $.__views.lb5 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        id: "lb5",
        text: "gRZM"
    });
    $.__views.__alloyId4.add($.__views.lb5);
    $.__views.lb6 = Ti.UI.createLabel({
        color: "black",
        right: "100",
        font: {
            fontSize: "18dp"
        },
        id: "lb6",
        text: "124"
    });
    $.__views.__alloyId4.add($.__views.lb6);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        id: "__alloyId5"
    });
    $.__views.__alloyId1.add($.__views.__alloyId5);
    $.__views.lb7 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        id: "lb7",
        text: "gRZE"
    });
    $.__views.__alloyId5.add($.__views.lb7);
    $.__views.lb8 = Ti.UI.createLabel({
        color: "black",
        right: "100",
        font: {
            fontSize: "18dp"
        },
        id: "lb8",
        text: "138"
    });
    $.__views.__alloyId5.add($.__views.lb8);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        id: "__alloyId6"
    });
    $.__views.__alloyId1.add($.__views.__alloyId6);
    $.__views.lb9 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        id: "lb9",
        text: "gRZR"
    });
    $.__views.__alloyId6.add($.__views.lb9);
    $.__views.lb10 = Ti.UI.createLabel({
        color: "black",
        right: "100",
        font: {
            fontSize: "18dp"
        },
        id: "lb10",
        text: "104"
    });
    $.__views.__alloyId6.add($.__views.lb10);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        id: "__alloyId7"
    });
    $.__views.__alloyId1.add($.__views.__alloyId7);
    $.__views.lb11 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        id: "lb11",
        text: "gRZS"
    });
    $.__views.__alloyId7.add($.__views.lb11);
    $.__views.lb12 = Ti.UI.createLabel({
        color: "black",
        right: "100",
        font: {
            fontSize: "18dp"
        },
        id: "lb12",
        text: "116"
    });
    $.__views.__alloyId7.add($.__views.lb12);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        id: "__alloyId8"
    });
    $.__views.__alloyId1.add($.__views.__alloyId8);
    $.__views.lb13 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        id: "lb13",
        text: "gRZKd"
    });
    $.__views.__alloyId8.add($.__views.lb13);
    $.__views.lb14 = Ti.UI.createLabel({
        color: "black",
        right: "100",
        font: {
            fontSize: "18dp"
        },
        id: "lb14",
        text: "107"
    });
    $.__views.__alloyId8.add($.__views.lb14);
    $.__views.tr1 = Ti.UI.createTableViewRow({
        backgroundColor: "#da4e07",
        color: "white",
        font: {
            fontSize: "18dp"
        },
        id: "tr1",
        title: "Milchzuchtwert"
    });
    $.__views.__alloyId1.add($.__views.tr1);
    $.__views.tr22 = Ti.UI.createTableViewRow({
        id: "tr22",
        layout: "horizontal"
    });
    $.__views.__alloyId1.add($.__views.tr22);
    $.__views.lb15 = Ti.UI.createLabel({
        width: Alloy.CFG.gRZM,
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb15",
        text: "Milch kg\n +1.632"
    });
    $.__views.tr22.add($.__views.lb15);
    $.__views.lb16 = Ti.UI.createLabel({
        width: Alloy.CFG.gRZM,
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb16",
        text: "Fett %\n-0,11"
    });
    $.__views.tr22.add($.__views.lb16);
    $.__views.lb17 = Ti.UI.createLabel({
        width: Alloy.CFG.gRZM,
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb17",
        text: "Fett kg\n+55"
    });
    $.__views.tr22.add($.__views.lb17);
    $.__views.lb18 = Ti.UI.createLabel({
        width: Alloy.CFG.gRZM,
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb18",
        text: "Eiweiß %\n-0,07"
    });
    $.__views.tr22.add($.__views.lb18);
    $.__views.lb19 = Ti.UI.createLabel({
        width: Alloy.CFG.gRZM,
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb19",
        text: "Eiweiß kg\n+48"
    });
    $.__views.tr22.add($.__views.lb19);
    $.__views.tr2 = Ti.UI.createTableViewRow({
        backgroundColor: "#da4e07",
        color: "white",
        font: {
            fontSize: "18dp"
        },
        id: "tr2",
        title: "Exterier"
    });
    $.__views.__alloyId1.add($.__views.tr2);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        id: "__alloyId9"
    });
    $.__views.__alloyId1.add($.__views.__alloyId9);
    $.__views.lb20 = Ti.UI.createLabel({
        width: Alloy.CFG.gRZE,
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb20",
        text: "Milchtyp\n 114"
    });
    $.__views.__alloyId9.add($.__views.lb20);
    $.__views.lb21 = Ti.UI.createLabel({
        width: Alloy.CFG.gRZE,
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb21",
        text: "Körper\n118"
    });
    $.__views.__alloyId9.add($.__views.lb21);
    $.__views.lb22 = Ti.UI.createLabel({
        width: Alloy.CFG.gRZE,
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb22",
        text: "Fundament\n125"
    });
    $.__views.__alloyId9.add($.__views.lb22);
    $.__views.lb23 = Ti.UI.createLabel({
        width: Alloy.CFG.gRZE,
        color: "black",
        left: "20",
        font: {
            fontSize: "18dp"
        },
        id: "lb23",
        text: "Euter\n132"
    });
    $.__views.__alloyId9.add($.__views.lb23);
    $.__views.tr3 = Ti.UI.createTableViewRow({
        backgroundColor: "#04638b",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        id: "tr3"
    });
    $.__views.__alloyId1.add($.__views.tr3);
    $.__views.lb24 = Ti.UI.createLabel({
        color: "white",
        left: "10",
        font: {
            fontSize: "14dp"
        },
        id: "lb24",
        text: "Standardisierte Zuchtwerte"
    });
    $.__views.tr3.add($.__views.lb24);
    $.__views.tr4 = Ti.UI.createTableViewRow({
        id: "tr4"
    });
    $.__views.__alloyId1.add($.__views.tr4);
    $.__views.lb25 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb25",
        text: "Größe"
    });
    $.__views.tr4.add($.__views.lb25);
    $.__views.lb61 = Ti.UI.createLabel({
        id: "lb61",
        width: "119"
    });
    $.__views.tr4.add($.__views.lb61);
    $.__views.lb26 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb26",
        text: "119 groß"
    });
    $.__views.tr4.add($.__views.lb26);
    $.__views.tr5 = Ti.UI.createTableViewRow({
        backgroundColor: "#c5d9ec",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        title: "20",
        id: "tr5"
    });
    $.__views.__alloyId1.add($.__views.tr5);
    $.__views.lb27 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb27",
        text: "Milchcharakter"
    });
    $.__views.tr5.add($.__views.lb27);
    $.__views.lb28 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb28",
        text: "112 edel"
    });
    $.__views.tr5.add($.__views.lb28);
    $.__views.tr6 = Ti.UI.createTableViewRow({
        id: "tr6"
    });
    $.__views.__alloyId1.add($.__views.tr6);
    $.__views.lb29 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb29",
        text: "Körpertiefe"
    });
    $.__views.tr6.add($.__views.lb29);
    $.__views.lb30 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb30",
        text: "107 viel"
    });
    $.__views.tr6.add($.__views.lb30);
    $.__views.tr7 = Ti.UI.createTableViewRow({
        backgroundColor: "#c5d9ec",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        title: "20",
        id: "tr7"
    });
    $.__views.__alloyId1.add($.__views.tr7);
    $.__views.lb31 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb31",
        text: "Stärke"
    });
    $.__views.tr7.add($.__views.lb31);
    $.__views.lb32 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb32",
        text: "110 stark"
    });
    $.__views.tr7.add($.__views.lb32);
    $.__views.tr8 = Ti.UI.createTableViewRow({
        id: "tr8"
    });
    $.__views.__alloyId1.add($.__views.tr8);
    $.__views.lb33 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb33",
        text: "Beckenneigung"
    });
    $.__views.tr8.add($.__views.lb33);
    $.__views.lb34 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb34",
        text: "98 abfallend"
    });
    $.__views.tr8.add($.__views.lb34);
    $.__views.tr9 = Ti.UI.createTableViewRow({
        backgroundColor: "#c5d9ec",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        title: "20",
        id: "tr9"
    });
    $.__views.__alloyId1.add($.__views.tr9);
    $.__views.lb35 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb35",
        text: "Beckenbreite"
    });
    $.__views.tr9.add($.__views.lb35);
    $.__views.lb36 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb36",
        text: "104 breit"
    });
    $.__views.tr9.add($.__views.lb36);
    $.__views.tr10 = Ti.UI.createTableViewRow({
        id: "tr10"
    });
    $.__views.__alloyId1.add($.__views.tr10);
    $.__views.lb37 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb37",
        text: "Hi.Beinwinkelung"
    });
    $.__views.tr10.add($.__views.lb37);
    $.__views.lb38 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb38",
        text: "96 gewinkelt"
    });
    $.__views.tr10.add($.__views.lb38);
    $.__views.tr11 = Ti.UI.createTableViewRow({
        backgroundColor: "#c5d9ec",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        title: "20",
        id: "tr11"
    });
    $.__views.__alloyId1.add($.__views.tr11);
    $.__views.lb39 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb39",
        text: "Klauen"
    });
    $.__views.tr11.add($.__views.lb39);
    $.__views.lb40 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb40",
        text: "128 hoch"
    });
    $.__views.tr11.add($.__views.lb40);
    $.__views.tr12 = Ti.UI.createTableViewRow({
        id: "tr12"
    });
    $.__views.__alloyId1.add($.__views.tr12);
    $.__views.lb41 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb41",
        text: "Sprunggelenk"
    });
    $.__views.tr12.add($.__views.lb41);
    $.__views.lb42 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb42",
        text: "128 hoch"
    });
    $.__views.tr12.add($.__views.lb42);
    $.__views.tr13 = Ti.UI.createTableViewRow({
        backgroundColor: "#c5d9ec",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        title: "20",
        id: "tr13"
    });
    $.__views.__alloyId1.add($.__views.tr13);
    $.__views.lb43 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb43",
        text: "Hi.Beinstellung"
    });
    $.__views.tr13.add($.__views.lb43);
    $.__views.lb44 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb44",
        text: "115 parallel"
    });
    $.__views.tr13.add($.__views.lb44);
    $.__views.tr14 = Ti.UI.createTableViewRow({
        id: "tr14"
    });
    $.__views.__alloyId1.add($.__views.tr14);
    $.__views.lb45 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb45",
        text: "Bewegung"
    });
    $.__views.tr14.add($.__views.lb45);
    $.__views.lb46 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb46",
        text: "121 gut"
    });
    $.__views.tr14.add($.__views.lb46);
    $.__views.tr15 = Ti.UI.createTableViewRow({
        backgroundColor: "#c5d9ec",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        title: "20",
        id: "tr15"
    });
    $.__views.__alloyId1.add($.__views.tr15);
    $.__views.lb47 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb47",
        text: "Hintereuter"
    });
    $.__views.tr15.add($.__views.lb47);
    $.__views.lb48 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb48",
        text: "123 hoch"
    });
    $.__views.tr15.add($.__views.lb48);
    $.__views.tr16 = Ti.UI.createTableViewRow({
        id: "tr16"
    });
    $.__views.__alloyId1.add($.__views.tr16);
    $.__views.lb49 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb49",
        text: "Zentralband"
    });
    $.__views.tr16.add($.__views.lb49);
    $.__views.lb50 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb50",
        text: "112 stark"
    });
    $.__views.tr16.add($.__views.lb50);
    $.__views.tr17 = Ti.UI.createTableViewRow({
        backgroundColor: "#c5d9ec",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        title: "20",
        id: "tr17"
    });
    $.__views.__alloyId1.add($.__views.tr17);
    $.__views.lb51 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb51",
        text: "Strichplaz. vorne"
    });
    $.__views.tr17.add($.__views.lb51);
    $.__views.lb52 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb52",
        text: "119 innen"
    });
    $.__views.tr17.add($.__views.lb52);
    $.__views.tr18 = Ti.UI.createTableViewRow({
        id: "tr18"
    });
    $.__views.__alloyId1.add($.__views.tr18);
    $.__views.lb53 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb53",
        text: "Strichplaz. hinten"
    });
    $.__views.tr18.add($.__views.lb53);
    $.__views.lb54 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb54",
        text: "106 innen"
    });
    $.__views.tr18.add($.__views.lb54);
    $.__views.tr19 = Ti.UI.createTableViewRow({
        backgroundColor: "#c5d9ec",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        title: "20",
        id: "tr19"
    });
    $.__views.__alloyId1.add($.__views.tr19);
    $.__views.lb55 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb55",
        text: "Vordereuter"
    });
    $.__views.tr19.add($.__views.lb55);
    $.__views.lb56 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb56",
        text: "122 fest"
    });
    $.__views.tr19.add($.__views.lb56);
    $.__views.tr20 = Ti.UI.createTableViewRow({
        id: "tr20"
    });
    $.__views.__alloyId1.add($.__views.tr20);
    $.__views.lb57 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb57",
        text: "Eutertiefe"
    });
    $.__views.tr20.add($.__views.lb57);
    $.__views.lb58 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb58",
        text: "124 hoch"
    });
    $.__views.tr20.add($.__views.lb58);
    $.__views.tr21 = Ti.UI.createTableViewRow({
        backgroundColor: "#c5d9ec",
        color: "white",
        font: {
            fontSize: "14dp"
        },
        title: "20",
        id: "tr21"
    });
    $.__views.__alloyId1.add($.__views.tr21);
    $.__views.lb59 = Ti.UI.createLabel({
        color: "black",
        left: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb59",
        text: "Strichlänge"
    });
    $.__views.tr21.add($.__views.lb59);
    $.__views.lb60 = Ti.UI.createLabel({
        color: "black",
        right: "20",
        font: {
            fontSize: "14dp"
        },
        id: "lb60",
        text: "92 lang"
    });
    $.__views.tr21.add($.__views.lb60);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        id: "__alloyId10"
    });
    $.__views.__alloyId1.add($.__views.__alloyId10);
    $.__views.cowDetail = Ti.UI.createTableView({
        backgroundColor: "white",
        data: __alloyId0,
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.cowDetails.add($.__views.cowDetail);
    itemclick ? $.__views.cowDetail.addEventListener("click", itemclick) : __defers["$.__views.cowDetail!click!itemclick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.cowDetail!click!itemclick"] && $.__views.cowDetail.addEventListener("click", itemclick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;