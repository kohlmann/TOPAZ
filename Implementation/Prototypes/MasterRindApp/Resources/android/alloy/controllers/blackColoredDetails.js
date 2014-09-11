function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId207(e) {
        if (e && e.fromAdapter) return;
        __alloyId207.opts || {};
        var models = __alloyId206.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId99 = models[i];
            __alloyId99.__transform = {};
            var __alloyId205 = Ti.UI.createTableViewSection({
                headerTitle: "Details"
            });
            rows.push(__alloyId205);
            var __alloyId102 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId102);
            var __alloyId103 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId99.__transform["image"] ? __alloyId99.__transform["image"] : __alloyId99.get("image")
            });
            __alloyId102.add(__alloyId103);
            var __alloyId105 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            __alloyId205.add(__alloyId105);
            var __alloyId106 = Ti.UI.createLabel({
                text: "Empire	- 823060"
            });
            __alloyId105.add(__alloyId106);
            var __alloyId107 = Ti.UI.createLabel({
                text: "Epic  x Legend  x Shottle"
            });
            __alloyId105.add(__alloyId107);
            var __alloyId108 = Ti.UI.createLabel({
                text: "0 Tö. | CVF BLF BYF | aAa: 312546"
            });
            __alloyId105.add(__alloyId108);
            var __alloyId109 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId109);
            var __alloyId110 = Ti.UI.createLabel({
                text: "gRZG"
            });
            __alloyId109.add(__alloyId110);
            var __alloyId111 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["gRZG"] ? __alloyId99.__transform["gRZG"] : __alloyId99.get("gRZG")
            });
            __alloyId109.add(__alloyId111);
            var __alloyId113 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId113);
            var __alloyId114 = Ti.UI.createLabel({
                text: "gRZM"
            });
            __alloyId113.add(__alloyId114);
            var __alloyId115 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["gRZM"] ? __alloyId99.__transform["gRZM"] : __alloyId99.get("gRZM")
            });
            __alloyId113.add(__alloyId115);
            var __alloyId117 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId117);
            var __alloyId118 = Ti.UI.createLabel({
                text: "gRZE"
            });
            __alloyId117.add(__alloyId118);
            var __alloyId119 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["gRZE"] ? __alloyId99.__transform["gRZE"] : __alloyId99.get("gRZE")
            });
            __alloyId117.add(__alloyId119);
            var __alloyId121 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId121);
            var __alloyId122 = Ti.UI.createLabel({
                text: "gRZR"
            });
            __alloyId121.add(__alloyId122);
            var __alloyId123 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["gRZR"] ? __alloyId99.__transform["gRZR"] : __alloyId99.get("gRZR")
            });
            __alloyId121.add(__alloyId123);
            var __alloyId125 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId125);
            var __alloyId126 = Ti.UI.createLabel({
                text: "gRZS"
            });
            __alloyId125.add(__alloyId126);
            var __alloyId127 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["gRZS"] ? __alloyId99.__transform["gRZS"] : __alloyId99.get("gRZS")
            });
            __alloyId125.add(__alloyId127);
            var __alloyId129 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId129);
            var __alloyId130 = Ti.UI.createLabel({
                text: "gRZKd"
            });
            __alloyId129.add(__alloyId130);
            var __alloyId131 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["gRZkd"] ? __alloyId99.__transform["gRZkd"] : __alloyId99.get("gRZkd")
            });
            __alloyId129.add(__alloyId131);
            var __alloyId132 = Ti.UI.createTableViewRow({
                title: "Milchzuchtwert"
            });
            __alloyId205.add(__alloyId132);
            var __alloyId133 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId205.add(__alloyId133);
            var __alloyId134 = Ti.UI.createLabel({
                text: "Milch kg\n +1.632"
            });
            __alloyId133.add(__alloyId134);
            var __alloyId135 = Ti.UI.createLabel({
                text: "Fett %\n-0,11"
            });
            __alloyId133.add(__alloyId135);
            var __alloyId136 = Ti.UI.createLabel({
                text: "Fett kg\n+55"
            });
            __alloyId133.add(__alloyId136);
            var __alloyId137 = Ti.UI.createLabel({
                text: "Eiweiß %\n-0,07"
            });
            __alloyId133.add(__alloyId137);
            var __alloyId138 = Ti.UI.createLabel({
                text: "Eiweiß kg\n+48"
            });
            __alloyId133.add(__alloyId138);
            var __alloyId139 = Ti.UI.createTableViewRow({
                title: "Exterier"
            });
            __alloyId205.add(__alloyId139);
            var __alloyId141 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId205.add(__alloyId141);
            var __alloyId142 = Ti.UI.createLabel({
                text: "Milchtyp\n 114"
            });
            __alloyId141.add(__alloyId142);
            var __alloyId143 = Ti.UI.createLabel({
                text: "Körper\n118"
            });
            __alloyId141.add(__alloyId143);
            var __alloyId144 = Ti.UI.createLabel({
                text: "Fundament\n125"
            });
            __alloyId141.add(__alloyId144);
            var __alloyId145 = Ti.UI.createLabel({
                text: "Euter\n132"
            });
            __alloyId141.add(__alloyId145);
            var __alloyId146 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId146);
            var __alloyId147 = Ti.UI.createLabel({
                text: "Standardisierte Zuchtwerte"
            });
            __alloyId146.add(__alloyId147);
            var __alloyId148 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId148);
            var __alloyId149 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["Größe"] ? __alloyId99.__transform["Größe"] : __alloyId99.get("Größe")
            });
            __alloyId148.add(__alloyId149);
            var __alloyId150 = Ti.UI.createLabel({
                width: "119"
            });
            __alloyId148.add(__alloyId150);
            var __alloyId151 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["size"] ? __alloyId99.__transform["size"] : __alloyId99.get("size")
            });
            __alloyId148.add(__alloyId151);
            var __alloyId152 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId152);
            var __alloyId153 = Ti.UI.createLabel({
                text: "Milchcharakter"
            });
            __alloyId152.add(__alloyId153);
            var __alloyId154 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["milkDairy"] ? __alloyId99.__transform["milkDairy"] : __alloyId99.get("milkDairy")
            });
            __alloyId152.add(__alloyId154);
            var __alloyId155 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId155);
            var __alloyId156 = Ti.UI.createLabel({
                text: "Körpertiefe"
            });
            __alloyId155.add(__alloyId156);
            var __alloyId157 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["bodyDepth"] ? __alloyId99.__transform["bodyDepth"] : __alloyId99.get("bodyDepth")
            });
            __alloyId155.add(__alloyId157);
            var __alloyId158 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId158);
            var __alloyId159 = Ti.UI.createLabel({
                text: "Stärke"
            });
            __alloyId158.add(__alloyId159);
            var __alloyId160 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["strength"] ? __alloyId99.__transform["strength"] : __alloyId99.get("strength")
            });
            __alloyId158.add(__alloyId160);
            var __alloyId161 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId161);
            var __alloyId162 = Ti.UI.createLabel({
                text: "Beckenneigung"
            });
            __alloyId161.add(__alloyId162);
            var __alloyId163 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["beckTilt"] ? __alloyId99.__transform["beckTilt"] : __alloyId99.get("beckTilt")
            });
            __alloyId161.add(__alloyId163);
            var __alloyId164 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId164);
            var __alloyId165 = Ti.UI.createLabel({
                text: "Beckenbreite"
            });
            __alloyId164.add(__alloyId165);
            var __alloyId166 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["beckWide"] ? __alloyId99.__transform["beckWide"] : __alloyId99.get("beckWide")
            });
            __alloyId164.add(__alloyId166);
            var __alloyId167 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId167);
            var __alloyId168 = Ti.UI.createLabel({
                text: "Hi.Beinwinkelung"
            });
            __alloyId167.add(__alloyId168);
            var __alloyId169 = Ti.UI.createLabel({
                text: "sdfsdaf"
            });
            __alloyId167.add(__alloyId169);
            var __alloyId170 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId170);
            var __alloyId171 = Ti.UI.createLabel({
                text: "Klauenwinkel"
            });
            __alloyId170.add(__alloyId171);
            var __alloyId172 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["stealAngle"] ? __alloyId99.__transform["stealAngle"] : __alloyId99.get("stealAngle")
            });
            __alloyId170.add(__alloyId172);
            var __alloyId173 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId173);
            var __alloyId174 = Ti.UI.createLabel({
                text: "Sprunggelenk"
            });
            __alloyId173.add(__alloyId174);
            var __alloyId175 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["hock"] ? __alloyId99.__transform["hock"] : __alloyId99.get("hock")
            });
            __alloyId173.add(__alloyId175);
            var __alloyId176 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId176);
            var __alloyId177 = Ti.UI.createLabel({
                text: "Hi.Beinstellung"
            });
            __alloyId176.add(__alloyId177);
            var __alloyId178 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["backLegsPosition"] ? __alloyId99.__transform["backLegsPosition"] : __alloyId99.get("backLegsPosition")
            });
            __alloyId176.add(__alloyId178);
            var __alloyId179 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId179);
            var __alloyId180 = Ti.UI.createLabel({
                text: "Bewegung"
            });
            __alloyId179.add(__alloyId180);
            var __alloyId181 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["movement"] ? __alloyId99.__transform["movement"] : __alloyId99.get("movement")
            });
            __alloyId179.add(__alloyId181);
            var __alloyId182 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId182);
            var __alloyId183 = Ti.UI.createLabel({
                text: "Hintereuterhöhe"
            });
            __alloyId182.add(__alloyId183);
            var __alloyId184 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["behindUdderHeight"] ? __alloyId99.__transform["behindUdderHeight"] : __alloyId99.get("behindUdderHeight")
            });
            __alloyId182.add(__alloyId184);
            var __alloyId185 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId185);
            var __alloyId186 = Ti.UI.createLabel({
                text: "Zentralband"
            });
            __alloyId185.add(__alloyId186);
            var __alloyId187 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["centralBelt"] ? __alloyId99.__transform["centralBelt"] : __alloyId99.get("centralBelt")
            });
            __alloyId185.add(__alloyId187);
            var __alloyId188 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId188);
            var __alloyId189 = Ti.UI.createLabel({
                text: "Strichplaz. vorne"
            });
            __alloyId188.add(__alloyId189);
            var __alloyId190 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["directionOfGrowthFront"] ? __alloyId99.__transform["directionOfGrowthFront"] : __alloyId99.get("directionOfGrowthFront")
            });
            __alloyId188.add(__alloyId190);
            var __alloyId191 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId191);
            var __alloyId192 = Ti.UI.createLabel({
                text: "Strichplaz. hinten"
            });
            __alloyId191.add(__alloyId192);
            var __alloyId193 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["directionOfGrowthBack"] ? __alloyId99.__transform["directionOfGrowthBack"] : __alloyId99.get("directionOfGrowthBack")
            });
            __alloyId191.add(__alloyId193);
            var __alloyId194 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId194);
            var __alloyId195 = Ti.UI.createLabel({
                text: "Vordereuteraufhängung"
            });
            __alloyId194.add(__alloyId195);
            var __alloyId196 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["foreUdderSuspension"] ? __alloyId99.__transform["foreUdderSuspension"] : __alloyId99.get("foreUdderSuspension")
            });
            __alloyId194.add(__alloyId196);
            var __alloyId197 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId197);
            var __alloyId198 = Ti.UI.createLabel({
                text: "Eutertiefe"
            });
            __alloyId197.add(__alloyId198);
            var __alloyId199 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["udderDepth"] ? __alloyId99.__transform["udderDepth"] : __alloyId99.get("udderDepth")
            });
            __alloyId197.add(__alloyId199);
            var __alloyId200 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId200);
            var __alloyId201 = Ti.UI.createLabel({
                text: "Strichlänge"
            });
            __alloyId200.add(__alloyId201);
            var __alloyId202 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId99.__transform["directionOfGrowthLength"] ? __alloyId99.__transform["directionOfGrowthLength"] : __alloyId99.get("directionOfGrowthLength")
            });
            __alloyId200.add(__alloyId202);
            var __alloyId204 = Ti.UI.createTableViewRow({});
            __alloyId205.add(__alloyId204);
        }
        $.__views.cowDetail.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "blackColoredDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowsMod");
    $.__views.blackColoredDetails = Ti.UI.createWindow({
        id: "blackColoredDetails"
    });
    $.__views.blackColoredDetails && $.addTopLevelView($.__views.blackColoredDetails);
    $.__views.cowDetail = Ti.UI.createTableView({
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.blackColoredDetails.add($.__views.cowDetail);
    var __alloyId206 = Alloy.Collections["Alloy.Collections.blackColoredCol"] || Alloy.Collections.blackColoredCol;
    __alloyId206.on("fetch destroy change add remove reset", __alloyId207);
    exports.destroy = function() {
        __alloyId206.off("fetch destroy change add remove reset", __alloyId207);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;