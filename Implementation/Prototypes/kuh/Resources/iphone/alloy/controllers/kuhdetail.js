function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function dataTransformation(_model) {
        return {
            name: _model.attributes.Name,
            headerline: _model.attributes.Name + " " + _model.attributes.Herdbuchnr + " RZG " + _model.attributes.gRZG,
            subheaderline: _model.attributes.Vater + " x " + _model.attributes.MV_Name + " x " + _model.attributes.MMV_Name,
            herdbuchnr: _model.attributes.Herdbuchnr,
            rasse: _model.attributes.Rasse,
            grzg: _model.attributes.gRZG,
            hornlos: _model.attributes.Hornlos,
            genomic: _model.attributes.Genomic,
            a: _model.attributes.A,
            gesext: _model.attributes.gesext,
            frischsperma: _model.attributes.Frischsperma,
            vatervv: "Vater: " + _model.attributes.Vater + " v. " + _model.attributes.VV,
            mvmvv: "MV: " + _model.attributes.MV_Name + " v. " + _model.attributes.MVV,
            vater: _model.attributes.Vater,
            vv: _model.attributes.VV,
            mvname: _model.attributes.MV_Name,
            mmvname: _model.attributes.MMV_Name,
            vmv: _model.attributes.VMV,
            mvv: _model.attributes.MVV,
            mmvv: _model.attributes.MMVV,
            grzm: +_model.attributes.gRZM,
            milchkg: _model.attributes.MilchKg,
            fettpr: _model.attributes.FettPr,
            fettkg: _model.attributes.FettKg,
            eiwpr: _model.attributes.EiwPr,
            eiwkg: _model.attributes.EiwKg,
            grze: +_model.attributes.gRZE,
            milchtyp: _model.attributes.Milchtyp,
            koerper: _model.attributes.Koerper,
            fundament: _model.attributes.Fundament,
            euter: _model.attributes.Euter,
            grzfit: _model.attributes.gRZFit,
            grzn: +_model.attributes.gRZN,
            grzs: +_model.attributes.gRZS,
            grzd: +_model.attributes.gRZD,
            grzr: +_model.attributes.gRZR,
            grzkd: +_model.attributes.gRZKd,
            grzkm: +_model.attributes.gRZKm,
            kalbeverlaufdirekt: _model.attributes.Kalbeverlaufdirekt,
            gendefekt: _model.attributes.Gendefekt,
            aaa: "aAa: " + _model.attributes.aAa,
            geburtstag: "geb.: " + _model.attributes.GebdatTag + "." + _model.attributes.GebdatMonat + "." + _model.attributes.GebdatJahr,
            gebdattag: _model.attributes.GebdatTag,
            gebdatmonat: _model.attributes.GebdatMonat,
            gebdatjahr: _model.attributes.GebdatJahr,
            zuechter: "Züchter: " + _model.attributes.Zuechter,
            anpaarung: _model.attributes.Anpaarung
        };
    }
    function closeDetail() {
        $.destroy();
        $.detail.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "kuhdetail";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.kuhDetail = Alloy.createModel("kuehe");
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "detail",
        layout: "vertical",
        model: "$.kuhDetail",
        dataTransform: "dataTransformation"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.buttonview = Ti.UI.createView({
        backgroundColor: "red",
        height: "50dp",
        top: "20dp",
        id: "buttonview"
    });
    $.__views.detail.add($.__views.buttonview);
    $.__views.closeWindow = Ti.UI.createButton({
        color: "white",
        top: "10dp",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        title: "Schließen",
        id: "closeWindow"
    });
    $.__views.buttonview.add($.__views.closeWindow);
    closeDetail ? $.__views.closeWindow.addEventListener("click", closeDetail) : __defers["$.__views.closeWindow!click!closeDetail"] = true;
    $.__views.scrollDetail = Ti.UI.createScrollView({
        top: "5dp",
        id: "scrollDetail",
        layout: "vertical"
    });
    $.__views.detail.add($.__views.scrollDetail);
    $.__views.header = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        backgroundColor: "#CDECFF",
        height: "70dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "5dp",
        id: "header"
    });
    $.__views.scrollDetail.add($.__views.header);
    $.__views.headerline = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        top: "5dp",
        color: "#336699",
        left: "5%",
        id: "headerline"
    });
    $.__views.header.add($.__views.headerline);
    $.__views.subheaderline = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        top: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: "#336699",
        left: "5%",
        id: "subheaderline"
    });
    $.__views.header.add($.__views.subheaderline);
    $.__views.__alloyId45 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        backgroundColor: "#CDECFF",
        height: "40dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "10dp",
        bottom: "10dp",
        id: "__alloyId45"
    });
    $.__views.scrollDetail.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        top: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: "#336699",
        left: "5%",
        text: "Zuchtwerte",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId47"
    });
    $.__views.scrollDetail.add($.__views.__alloyId47);
    $.__views.zuchtwerte0 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "5%",
        id: "zuchtwerte0"
    });
    $.__views.__alloyId47.add($.__views.zuchtwerte0);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        text: " ",
        id: "__alloyId48"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        text: " ",
        id: "__alloyId49"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        text: " ",
        id: "__alloyId50"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        text: " ",
        id: "__alloyId51"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        text: " ",
        id: "__alloyId52"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        text: " ",
        id: "__alloyId53"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        text: " ",
        id: "__alloyId54"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        text: " ",
        id: "__alloyId55"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        text: " ",
        id: "__alloyId56"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        text: " ",
        id: "__alloyId57"
    });
    $.__views.zuchtwerte0.add($.__views.__alloyId57);
    $.__views.zuchtwerte1 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "30%",
        id: "zuchtwerte1"
    });
    $.__views.__alloyId47.add($.__views.zuchtwerte1);
    $.__views.grzglbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grzglbl",
        text: "gRZG"
    });
    $.__views.zuchtwerte1.add($.__views.grzglbl);
    $.__views.grzmlbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzmlbl",
        text: "gRZM"
    });
    $.__views.zuchtwerte1.add($.__views.grzmlbl);
    $.__views.grzelbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grzelbl",
        text: "gRZE"
    });
    $.__views.zuchtwerte1.add($.__views.grzelbl);
    $.__views.grzfitlbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzfitlbl",
        text: "gRZFit"
    });
    $.__views.zuchtwerte1.add($.__views.grzfitlbl);
    $.__views.grznlbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grznlbl",
        text: "gRZN"
    });
    $.__views.zuchtwerte1.add($.__views.grznlbl);
    $.__views.grzslbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzslbl",
        text: "gRZS"
    });
    $.__views.zuchtwerte1.add($.__views.grzslbl);
    $.__views.grzkmlbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grzkmlbl",
        text: "gRZKm"
    });
    $.__views.zuchtwerte1.add($.__views.grzkmlbl);
    $.__views.grzrlbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzrlbl",
        text: "gRZR"
    });
    $.__views.zuchtwerte1.add($.__views.grzrlbl);
    $.__views.grzdlbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grzdlbl",
        text: "gRZD"
    });
    $.__views.zuchtwerte1.add($.__views.grzdlbl);
    $.__views.grzkdlbl = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzkdlbl",
        text: "gRZKd"
    });
    $.__views.zuchtwerte1.add($.__views.grzkdlbl);
    $.__views.zuchtwerte2 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "65%",
        id: "zuchtwerte2"
    });
    $.__views.__alloyId47.add($.__views.zuchtwerte2);
    $.__views.grzg = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grzg"
    });
    $.__views.zuchtwerte2.add($.__views.grzg);
    $.__views.grzm = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzm"
    });
    $.__views.zuchtwerte2.add($.__views.grzm);
    $.__views.grze = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grze"
    });
    $.__views.zuchtwerte2.add($.__views.grze);
    $.__views.grzfit = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzfit"
    });
    $.__views.zuchtwerte2.add($.__views.grzfit);
    $.__views.grzn = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grzn"
    });
    $.__views.zuchtwerte2.add($.__views.grzn);
    $.__views.grzs = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzs"
    });
    $.__views.zuchtwerte2.add($.__views.grzs);
    $.__views.grzkm = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grzkm"
    });
    $.__views.zuchtwerte2.add($.__views.grzkm);
    $.__views.grzr = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzr"
    });
    $.__views.zuchtwerte2.add($.__views.grzr);
    $.__views.grzd = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        backgroundColor: "#eeeeee",
        id: "grzd"
    });
    $.__views.zuchtwerte2.add($.__views.grzd);
    $.__views.grzkd = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        id: "grzkd"
    });
    $.__views.zuchtwerte2.add($.__views.grzkd);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        backgroundColor: "#CDECFF",
        height: "40dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "10dp",
        bottom: "10dp",
        id: "__alloyId58"
    });
    $.__views.scrollDetail.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        top: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: "#336699",
        left: "5%",
        text: "Pedigree",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.pedigree = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "pedigree"
    });
    $.__views.scrollDetail.add($.__views.pedigree);
    $.__views.vatervv = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        left: "5%",
        id: "vatervv"
    });
    $.__views.pedigree.add($.__views.vatervv);
    $.__views.mvmvv = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        left: "5%",
        id: "mvmvv"
    });
    $.__views.pedigree.add($.__views.mvmvv);
    $.__views.__alloyId60 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        backgroundColor: "#CDECFF",
        height: "40dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "10dp",
        bottom: "10dp",
        id: "__alloyId60"
    });
    $.__views.scrollDetail.add($.__views.__alloyId60);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        top: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: "#336699",
        left: "5%",
        id: "name"
    });
    $.__views.__alloyId60.add($.__views.name);
    $.__views.info = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "info"
    });
    $.__views.scrollDetail.add($.__views.info);
    $.__views.geburtstag = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        left: "5%",
        id: "geburtstag"
    });
    $.__views.info.add($.__views.geburtstag);
    $.__views.zuechter = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        left: "5%",
        id: "zuechter"
    });
    $.__views.info.add($.__views.zuechter);
    $.__views.gendefekt = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        left: "5%",
        id: "gendefekt"
    });
    $.__views.info.add($.__views.gendefekt);
    $.__views.aaa = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontFamily: "Helvetica Neue"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        left: "5%",
        id: "aaa"
    });
    $.__views.info.add($.__views.aaa);
    var __alloyId61 = function() {
        $.headerline.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["headerline"] : $.kuhDetail.get("headerline");
        $.headerline.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["headerline"] : $.kuhDetail.get("headerline");
        $.subheaderline.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["subheaderline"] : $.kuhDetail.get("subheaderline");
        $.subheaderline.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["subheaderline"] : $.kuhDetail.get("subheaderline");
        $.grzg.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzg"] : $.kuhDetail.get("grzg");
        $.grzg.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzg"] : $.kuhDetail.get("grzg");
        $.grzm.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzm"] : $.kuhDetail.get("grzm");
        $.grzm.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzm"] : $.kuhDetail.get("grzm");
        $.grze.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grze"] : $.kuhDetail.get("grze");
        $.grze.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grze"] : $.kuhDetail.get("grze");
        $.grzfit.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzfit"] : $.kuhDetail.get("grzfit");
        $.grzfit.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzfit"] : $.kuhDetail.get("grzfit");
        $.grzn.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzn"] : $.kuhDetail.get("grzn");
        $.grzn.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzn"] : $.kuhDetail.get("grzn");
        $.grzs.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzs"] : $.kuhDetail.get("grzs");
        $.grzs.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzs"] : $.kuhDetail.get("grzs");
        $.grzkm.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzkm"] : $.kuhDetail.get("grzkm");
        $.grzkm.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzkm"] : $.kuhDetail.get("grzkm");
        $.grzr.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzr"] : $.kuhDetail.get("grzr");
        $.grzr.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzr"] : $.kuhDetail.get("grzr");
        $.grzd.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzd"] : $.kuhDetail.get("grzd");
        $.grzd.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzd"] : $.kuhDetail.get("grzd");
        $.grzkd.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzkd"] : $.kuhDetail.get("grzkd");
        $.grzkd.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["grzkd"] : $.kuhDetail.get("grzkd");
        $.vatervv.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["vatervv"] : $.kuhDetail.get("vatervv");
        $.vatervv.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["vatervv"] : $.kuhDetail.get("vatervv");
        $.mvmvv.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["mvmvv"] : $.kuhDetail.get("mvmvv");
        $.mvmvv.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["mvmvv"] : $.kuhDetail.get("mvmvv");
        $.name.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["name"] : $.kuhDetail.get("name");
        $.name.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["name"] : $.kuhDetail.get("name");
        $.geburtstag.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["geburtstag"] : $.kuhDetail.get("geburtstag");
        $.geburtstag.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["geburtstag"] : $.kuhDetail.get("geburtstag");
        $.zuechter.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["zuechter"] : $.kuhDetail.get("zuechter");
        $.zuechter.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["zuechter"] : $.kuhDetail.get("zuechter");
        $.gendefekt.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["gendefekt"] : $.kuhDetail.get("gendefekt");
        $.gendefekt.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["gendefekt"] : $.kuhDetail.get("gendefekt");
        $.aaa.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["aaa"] : $.kuhDetail.get("aaa");
        $.aaa.text = _.isFunction($.kuhDetail.transform) ? $.kuhDetail.transform()["aaa"] : $.kuhDetail.get("aaa");
    };
    $.kuhDetail.on("fetch change destroy", __alloyId61);
    exports.destroy = function() {
        $.kuhDetail.off("fetch change destroy", __alloyId61);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.kuhDetail = _.extend({}, $.kuhDetail, {
        transform: function() {
            return dataTransformation(this);
        }
    });
    $.kuhDetail.set(args.$model);
    __defers["$.__views.closeWindow!click!closeDetail"] && $.__views.closeWindow.addEventListener("click", closeDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;