function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId251(e) {
        if (e && e.fromAdapter) return;
        __alloyId251.opts || {};
        var models = __alloyId250.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId143 = models[i];
            __alloyId143.__transform = {};
            var __alloyId249 = Ti.UI.createTableViewSection({
                headerTitle: "Details"
            });
            rows.push(__alloyId249);
            var __alloyId146 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId146);
            var __alloyId147 = Ti.UI.createImageView({
                width: Titanium.UI.FILL,
                image: "undefined" != typeof __alloyId143.__transform["image"] ? __alloyId143.__transform["image"] : __alloyId143.get("image")
            });
            __alloyId146.add(__alloyId147);
            var __alloyId149 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            __alloyId249.add(__alloyId149);
            var __alloyId150 = Ti.UI.createLabel({
                color: "black",
                left: "10",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "Empire	- 823060"
            });
            __alloyId149.add(__alloyId150);
            var __alloyId151 = Ti.UI.createLabel({
                color: "black",
                left: "10",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "Epic  x Legend  x Shottle"
            });
            __alloyId149.add(__alloyId151);
            var __alloyId152 = Ti.UI.createLabel({
                color: "black",
                left: "10",
                font: {
                    fontSize: "18dp"
                },
                text: "0 Tö. | CVF BLF BYF | aAa: 312546"
            });
            __alloyId149.add(__alloyId152);
            var __alloyId153 = Ti.UI.createTableViewRow({
                backgroundColor: "#04638b"
            });
            __alloyId249.add(__alloyId153);
            var __alloyId154 = Ti.UI.createLabel({
                color: "white",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "gRZG"
            });
            __alloyId153.add(__alloyId154);
            var __alloyId155 = Ti.UI.createLabel({
                color: "white",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["gRZG"] ? __alloyId143.__transform["gRZG"] : __alloyId143.get("gRZG")
            });
            __alloyId153.add(__alloyId155);
            var __alloyId157 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId157);
            var __alloyId158 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZM"
            });
            __alloyId157.add(__alloyId158);
            var __alloyId159 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["gRZM"] ? __alloyId143.__transform["gRZM"] : __alloyId143.get("gRZM")
            });
            __alloyId157.add(__alloyId159);
            var __alloyId161 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId161);
            var __alloyId162 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZE"
            });
            __alloyId161.add(__alloyId162);
            var __alloyId163 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["gRZE"] ? __alloyId143.__transform["gRZE"] : __alloyId143.get("gRZE")
            });
            __alloyId161.add(__alloyId163);
            var __alloyId165 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId165);
            var __alloyId166 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZR"
            });
            __alloyId165.add(__alloyId166);
            var __alloyId167 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["gRZR"] ? __alloyId143.__transform["gRZR"] : __alloyId143.get("gRZR")
            });
            __alloyId165.add(__alloyId167);
            var __alloyId169 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId169);
            var __alloyId170 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZS"
            });
            __alloyId169.add(__alloyId170);
            var __alloyId171 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["gRZS"] ? __alloyId143.__transform["gRZS"] : __alloyId143.get("gRZS")
            });
            __alloyId169.add(__alloyId171);
            var __alloyId173 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId173);
            var __alloyId174 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZKd"
            });
            __alloyId173.add(__alloyId174);
            var __alloyId175 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["gRZkd"] ? __alloyId143.__transform["gRZkd"] : __alloyId143.get("gRZkd")
            });
            __alloyId173.add(__alloyId175);
            var __alloyId176 = Ti.UI.createTableViewRow({
                backgroundColor: "#da4e07",
                color: "white",
                font: {
                    fontSize: "18dp"
                },
                title: "Milchzuchtwert"
            });
            __alloyId249.add(__alloyId176);
            var __alloyId177 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId249.add(__alloyId177);
            var __alloyId178 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Milch kg\n +1.632"
            });
            __alloyId177.add(__alloyId178);
            var __alloyId179 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Fett %\n-0,11"
            });
            __alloyId177.add(__alloyId179);
            var __alloyId180 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Fett kg\n+55"
            });
            __alloyId177.add(__alloyId180);
            var __alloyId181 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Eiweiß %\n-0,07"
            });
            __alloyId177.add(__alloyId181);
            var __alloyId182 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Eiweiß kg\n+48"
            });
            __alloyId177.add(__alloyId182);
            var __alloyId183 = Ti.UI.createTableViewRow({
                backgroundColor: "#da4e07",
                color: "white",
                font: {
                    fontSize: "18dp"
                },
                title: "Exterier"
            });
            __alloyId249.add(__alloyId183);
            var __alloyId185 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId249.add(__alloyId185);
            var __alloyId186 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZE,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Milchtyp\n 114"
            });
            __alloyId185.add(__alloyId186);
            var __alloyId187 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZE,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Körper\n118"
            });
            __alloyId185.add(__alloyId187);
            var __alloyId188 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZE,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Fundament\n125"
            });
            __alloyId185.add(__alloyId188);
            var __alloyId189 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZE,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Euter\n132"
            });
            __alloyId185.add(__alloyId189);
            var __alloyId190 = Ti.UI.createTableViewRow({
                backgroundColor: "#04638b",
                color: "white",
                font: {
                    fontSize: "14dp"
                }
            });
            __alloyId249.add(__alloyId190);
            var __alloyId191 = Ti.UI.createLabel({
                color: "white",
                left: "10",
                font: {
                    fontSize: "14dp"
                },
                text: "Standardisierte Zuchtwerte"
            });
            __alloyId190.add(__alloyId191);
            var __alloyId192 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId192);
            var __alloyId193 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["Größe"] ? __alloyId143.__transform["Größe"] : __alloyId143.get("Größe")
            });
            __alloyId192.add(__alloyId193);
            var __alloyId194 = Ti.UI.createLabel({
                width: "119"
            });
            __alloyId192.add(__alloyId194);
            var __alloyId195 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["size"] ? __alloyId143.__transform["size"] : __alloyId143.get("size")
            });
            __alloyId192.add(__alloyId195);
            var __alloyId196 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId249.add(__alloyId196);
            var __alloyId197 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Milchcharakter"
            });
            __alloyId196.add(__alloyId197);
            var __alloyId198 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["milkDairy"] ? __alloyId143.__transform["milkDairy"] : __alloyId143.get("milkDairy")
            });
            __alloyId196.add(__alloyId198);
            var __alloyId199 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId199);
            var __alloyId200 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Körpertiefe"
            });
            __alloyId199.add(__alloyId200);
            var __alloyId201 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["bodyDepth"] ? __alloyId143.__transform["bodyDepth"] : __alloyId143.get("bodyDepth")
            });
            __alloyId199.add(__alloyId201);
            var __alloyId202 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId249.add(__alloyId202);
            var __alloyId203 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Stärke"
            });
            __alloyId202.add(__alloyId203);
            var __alloyId204 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["strength"] ? __alloyId143.__transform["strength"] : __alloyId143.get("strength")
            });
            __alloyId202.add(__alloyId204);
            var __alloyId205 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId205);
            var __alloyId206 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Beckenneigung"
            });
            __alloyId205.add(__alloyId206);
            var __alloyId207 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["beckTilt"] ? __alloyId143.__transform["beckTilt"] : __alloyId143.get("beckTilt")
            });
            __alloyId205.add(__alloyId207);
            var __alloyId208 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId249.add(__alloyId208);
            var __alloyId209 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Beckenbreite"
            });
            __alloyId208.add(__alloyId209);
            var __alloyId210 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["beckWide"] ? __alloyId143.__transform["beckWide"] : __alloyId143.get("beckWide")
            });
            __alloyId208.add(__alloyId210);
            var __alloyId211 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId211);
            var __alloyId212 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Hi.Beinwinkelung"
            });
            __alloyId211.add(__alloyId212);
            var __alloyId213 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "sdfsdaf"
            });
            __alloyId211.add(__alloyId213);
            var __alloyId214 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId249.add(__alloyId214);
            var __alloyId215 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Klauenwinkel"
            });
            __alloyId214.add(__alloyId215);
            var __alloyId216 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["stealAngle"] ? __alloyId143.__transform["stealAngle"] : __alloyId143.get("stealAngle")
            });
            __alloyId214.add(__alloyId216);
            var __alloyId217 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId217);
            var __alloyId218 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Sprunggelenk"
            });
            __alloyId217.add(__alloyId218);
            var __alloyId219 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["hock"] ? __alloyId143.__transform["hock"] : __alloyId143.get("hock")
            });
            __alloyId217.add(__alloyId219);
            var __alloyId220 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId249.add(__alloyId220);
            var __alloyId221 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Hi.Beinstellung"
            });
            __alloyId220.add(__alloyId221);
            var __alloyId222 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["backLegsPosition"] ? __alloyId143.__transform["backLegsPosition"] : __alloyId143.get("backLegsPosition")
            });
            __alloyId220.add(__alloyId222);
            var __alloyId223 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId223);
            var __alloyId224 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Bewegung"
            });
            __alloyId223.add(__alloyId224);
            var __alloyId225 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["movement"] ? __alloyId143.__transform["movement"] : __alloyId143.get("movement")
            });
            __alloyId223.add(__alloyId225);
            var __alloyId226 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId249.add(__alloyId226);
            var __alloyId227 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Hintereuterhöhe"
            });
            __alloyId226.add(__alloyId227);
            var __alloyId228 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["behindUdderHeight"] ? __alloyId143.__transform["behindUdderHeight"] : __alloyId143.get("behindUdderHeight")
            });
            __alloyId226.add(__alloyId228);
            var __alloyId229 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId229);
            var __alloyId230 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Zentralband"
            });
            __alloyId229.add(__alloyId230);
            var __alloyId231 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["centralBelt"] ? __alloyId143.__transform["centralBelt"] : __alloyId143.get("centralBelt")
            });
            __alloyId229.add(__alloyId231);
            var __alloyId232 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId249.add(__alloyId232);
            var __alloyId233 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Strichplaz. vorne"
            });
            __alloyId232.add(__alloyId233);
            var __alloyId234 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["directionOfGrowthFront"] ? __alloyId143.__transform["directionOfGrowthFront"] : __alloyId143.get("directionOfGrowthFront")
            });
            __alloyId232.add(__alloyId234);
            var __alloyId235 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId235);
            var __alloyId236 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Strichplaz. hinten"
            });
            __alloyId235.add(__alloyId236);
            var __alloyId237 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["directionOfGrowthBack"] ? __alloyId143.__transform["directionOfGrowthBack"] : __alloyId143.get("directionOfGrowthBack")
            });
            __alloyId235.add(__alloyId237);
            var __alloyId238 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId249.add(__alloyId238);
            var __alloyId239 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Vordereuteraufhängung"
            });
            __alloyId238.add(__alloyId239);
            var __alloyId240 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["foreUdderSuspension"] ? __alloyId143.__transform["foreUdderSuspension"] : __alloyId143.get("foreUdderSuspension")
            });
            __alloyId238.add(__alloyId240);
            var __alloyId241 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId241);
            var __alloyId242 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Eutertiefe"
            });
            __alloyId241.add(__alloyId242);
            var __alloyId243 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["udderDepth"] ? __alloyId143.__transform["udderDepth"] : __alloyId143.get("udderDepth")
            });
            __alloyId241.add(__alloyId243);
            var __alloyId244 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId249.add(__alloyId244);
            var __alloyId245 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Strichlänge"
            });
            __alloyId244.add(__alloyId245);
            var __alloyId246 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId143.__transform["directionOfGrowthLength"] ? __alloyId143.__transform["directionOfGrowthLength"] : __alloyId143.get("directionOfGrowthLength")
            });
            __alloyId244.add(__alloyId246);
            var __alloyId248 = Ti.UI.createTableViewRow({});
            __alloyId249.add(__alloyId248);
        }
        $.__views.cowDetail.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cowDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowsMod");
    $.__views.cowDetails = Ti.UI.createWindow({
        id: "cowDetails"
    });
    $.__views.cowDetails && $.addTopLevelView($.__views.cowDetails);
    $.__views.cowDetail = Ti.UI.createTableView({
        backgroundColor: "white",
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.cowDetails.add($.__views.cowDetail);
    var __alloyId250 = Alloy.Collections["Alloy.Collections.cowDetailsCol"] || Alloy.Collections.cowDetailsCol;
    __alloyId250.on("fetch destroy change add remove reset", __alloyId251);
    exports.destroy = function() {
        __alloyId250.off("fetch destroy change add remove reset", __alloyId251);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;