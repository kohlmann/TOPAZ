function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId1169(e) {
        if (e && e.fromAdapter) return;
        __alloyId1169.opts || {};
        var models = __alloyId1168.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId1061 = models[i];
            __alloyId1061.__transform = {};
            var __alloyId1167 = Ti.UI.createTableViewSection({
                headerTitle: "Details"
            });
            rows.push(__alloyId1167);
            var __alloyId1064 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1064);
            var __alloyId1065 = Ti.UI.createImageView({
                width: Titanium.UI.FILL,
                image: "undefined" != typeof __alloyId1061.__transform["image"] ? __alloyId1061.__transform["image"] : __alloyId1061.get("image")
            });
            __alloyId1064.add(__alloyId1065);
            var __alloyId1067 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            __alloyId1167.add(__alloyId1067);
            var __alloyId1068 = Ti.UI.createLabel({
                color: "black",
                left: "10",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "Empire	- 823060"
            });
            __alloyId1067.add(__alloyId1068);
            var __alloyId1069 = Ti.UI.createLabel({
                color: "black",
                left: "10",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "Epic  x Legend  x Shottle"
            });
            __alloyId1067.add(__alloyId1069);
            var __alloyId1070 = Ti.UI.createLabel({
                color: "black",
                left: "10",
                font: {
                    fontSize: "18dp"
                },
                text: "0 Tö. | CVF BLF BYF | aAa: 312546"
            });
            __alloyId1067.add(__alloyId1070);
            var __alloyId1071 = Ti.UI.createTableViewRow({
                backgroundColor: "#04638b"
            });
            __alloyId1167.add(__alloyId1071);
            var __alloyId1072 = Ti.UI.createLabel({
                color: "white",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "gRZG"
            });
            __alloyId1071.add(__alloyId1072);
            var __alloyId1073 = Ti.UI.createLabel({
                color: "white",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["gRZG"] ? __alloyId1061.__transform["gRZG"] : __alloyId1061.get("gRZG")
            });
            __alloyId1071.add(__alloyId1073);
            var __alloyId1075 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1075);
            var __alloyId1076 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZM"
            });
            __alloyId1075.add(__alloyId1076);
            var __alloyId1077 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["gRZM"] ? __alloyId1061.__transform["gRZM"] : __alloyId1061.get("gRZM")
            });
            __alloyId1075.add(__alloyId1077);
            var __alloyId1079 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1079);
            var __alloyId1080 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZE"
            });
            __alloyId1079.add(__alloyId1080);
            var __alloyId1081 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["gRZE"] ? __alloyId1061.__transform["gRZE"] : __alloyId1061.get("gRZE")
            });
            __alloyId1079.add(__alloyId1081);
            var __alloyId1083 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1083);
            var __alloyId1084 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZR"
            });
            __alloyId1083.add(__alloyId1084);
            var __alloyId1085 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["gRZR"] ? __alloyId1061.__transform["gRZR"] : __alloyId1061.get("gRZR")
            });
            __alloyId1083.add(__alloyId1085);
            var __alloyId1087 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1087);
            var __alloyId1088 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZS"
            });
            __alloyId1087.add(__alloyId1088);
            var __alloyId1089 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["gRZS"] ? __alloyId1061.__transform["gRZS"] : __alloyId1061.get("gRZS")
            });
            __alloyId1087.add(__alloyId1089);
            var __alloyId1091 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1091);
            var __alloyId1092 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                text: "gRZKd"
            });
            __alloyId1091.add(__alloyId1092);
            var __alloyId1093 = Ti.UI.createLabel({
                color: "black",
                right: "100",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["gRZkd"] ? __alloyId1061.__transform["gRZkd"] : __alloyId1061.get("gRZkd")
            });
            __alloyId1091.add(__alloyId1093);
            var __alloyId1094 = Ti.UI.createTableViewRow({
                backgroundColor: "#da4e07",
                color: "white",
                font: {
                    fontSize: "18dp"
                },
                title: "Milchzuchtwert"
            });
            __alloyId1167.add(__alloyId1094);
            var __alloyId1095 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId1167.add(__alloyId1095);
            var __alloyId1096 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Milch kg\n +1.632"
            });
            __alloyId1095.add(__alloyId1096);
            var __alloyId1097 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Fett %\n-0,11"
            });
            __alloyId1095.add(__alloyId1097);
            var __alloyId1098 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Fett kg\n+55"
            });
            __alloyId1095.add(__alloyId1098);
            var __alloyId1099 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Eiweiß %\n-0,07"
            });
            __alloyId1095.add(__alloyId1099);
            var __alloyId1100 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZM,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Eiweiß kg\n+48"
            });
            __alloyId1095.add(__alloyId1100);
            var __alloyId1101 = Ti.UI.createTableViewRow({
                backgroundColor: "#da4e07",
                color: "white",
                font: {
                    fontSize: "18dp"
                },
                title: "Exterier"
            });
            __alloyId1167.add(__alloyId1101);
            var __alloyId1103 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId1167.add(__alloyId1103);
            var __alloyId1104 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZE,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Milchtyp\n 114"
            });
            __alloyId1103.add(__alloyId1104);
            var __alloyId1105 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZE,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Körper\n118"
            });
            __alloyId1103.add(__alloyId1105);
            var __alloyId1106 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZE,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Fundament\n125"
            });
            __alloyId1103.add(__alloyId1106);
            var __alloyId1107 = Ti.UI.createLabel({
                width: Alloy.CFG.gRZE,
                color: "black",
                left: "20",
                font: {
                    fontSize: "18dp"
                },
                text: "Euter\n132"
            });
            __alloyId1103.add(__alloyId1107);
            var __alloyId1108 = Ti.UI.createTableViewRow({
                backgroundColor: "#04638b",
                color: "white",
                font: {
                    fontSize: "14dp"
                }
            });
            __alloyId1167.add(__alloyId1108);
            var __alloyId1109 = Ti.UI.createLabel({
                color: "white",
                left: "10",
                font: {
                    fontSize: "14dp"
                },
                text: "Standardisierte Zuchtwerte"
            });
            __alloyId1108.add(__alloyId1109);
            var __alloyId1110 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1110);
            var __alloyId1111 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["Größe"] ? __alloyId1061.__transform["Größe"] : __alloyId1061.get("Größe")
            });
            __alloyId1110.add(__alloyId1111);
            var __alloyId1112 = Ti.UI.createLabel({
                width: "119"
            });
            __alloyId1110.add(__alloyId1112);
            var __alloyId1113 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["size"] ? __alloyId1061.__transform["size"] : __alloyId1061.get("size")
            });
            __alloyId1110.add(__alloyId1113);
            var __alloyId1114 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId1167.add(__alloyId1114);
            var __alloyId1115 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Milchcharakter"
            });
            __alloyId1114.add(__alloyId1115);
            var __alloyId1116 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["milkDairy"] ? __alloyId1061.__transform["milkDairy"] : __alloyId1061.get("milkDairy")
            });
            __alloyId1114.add(__alloyId1116);
            var __alloyId1117 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1117);
            var __alloyId1118 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Körpertiefe"
            });
            __alloyId1117.add(__alloyId1118);
            var __alloyId1119 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["bodyDepth"] ? __alloyId1061.__transform["bodyDepth"] : __alloyId1061.get("bodyDepth")
            });
            __alloyId1117.add(__alloyId1119);
            var __alloyId1120 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId1167.add(__alloyId1120);
            var __alloyId1121 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Stärke"
            });
            __alloyId1120.add(__alloyId1121);
            var __alloyId1122 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["strength"] ? __alloyId1061.__transform["strength"] : __alloyId1061.get("strength")
            });
            __alloyId1120.add(__alloyId1122);
            var __alloyId1123 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1123);
            var __alloyId1124 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Beckenneigung"
            });
            __alloyId1123.add(__alloyId1124);
            var __alloyId1125 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["beckTilt"] ? __alloyId1061.__transform["beckTilt"] : __alloyId1061.get("beckTilt")
            });
            __alloyId1123.add(__alloyId1125);
            var __alloyId1126 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId1167.add(__alloyId1126);
            var __alloyId1127 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Beckenbreite"
            });
            __alloyId1126.add(__alloyId1127);
            var __alloyId1128 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["beckWide"] ? __alloyId1061.__transform["beckWide"] : __alloyId1061.get("beckWide")
            });
            __alloyId1126.add(__alloyId1128);
            var __alloyId1129 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1129);
            var __alloyId1130 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Hi.Beinwinkelung"
            });
            __alloyId1129.add(__alloyId1130);
            var __alloyId1131 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "sdfsdaf"
            });
            __alloyId1129.add(__alloyId1131);
            var __alloyId1132 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId1167.add(__alloyId1132);
            var __alloyId1133 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Klauenwinkel"
            });
            __alloyId1132.add(__alloyId1133);
            var __alloyId1134 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["stealAngle"] ? __alloyId1061.__transform["stealAngle"] : __alloyId1061.get("stealAngle")
            });
            __alloyId1132.add(__alloyId1134);
            var __alloyId1135 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1135);
            var __alloyId1136 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Sprunggelenk"
            });
            __alloyId1135.add(__alloyId1136);
            var __alloyId1137 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["hock"] ? __alloyId1061.__transform["hock"] : __alloyId1061.get("hock")
            });
            __alloyId1135.add(__alloyId1137);
            var __alloyId1138 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId1167.add(__alloyId1138);
            var __alloyId1139 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Hi.Beinstellung"
            });
            __alloyId1138.add(__alloyId1139);
            var __alloyId1140 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["backLegsPosition"] ? __alloyId1061.__transform["backLegsPosition"] : __alloyId1061.get("backLegsPosition")
            });
            __alloyId1138.add(__alloyId1140);
            var __alloyId1141 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1141);
            var __alloyId1142 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Bewegung"
            });
            __alloyId1141.add(__alloyId1142);
            var __alloyId1143 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["movement"] ? __alloyId1061.__transform["movement"] : __alloyId1061.get("movement")
            });
            __alloyId1141.add(__alloyId1143);
            var __alloyId1144 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId1167.add(__alloyId1144);
            var __alloyId1145 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Hintereuterhöhe"
            });
            __alloyId1144.add(__alloyId1145);
            var __alloyId1146 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["behindUdderHeight"] ? __alloyId1061.__transform["behindUdderHeight"] : __alloyId1061.get("behindUdderHeight")
            });
            __alloyId1144.add(__alloyId1146);
            var __alloyId1147 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1147);
            var __alloyId1148 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Zentralband"
            });
            __alloyId1147.add(__alloyId1148);
            var __alloyId1149 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["centralBelt"] ? __alloyId1061.__transform["centralBelt"] : __alloyId1061.get("centralBelt")
            });
            __alloyId1147.add(__alloyId1149);
            var __alloyId1150 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId1167.add(__alloyId1150);
            var __alloyId1151 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Strichplaz. vorne"
            });
            __alloyId1150.add(__alloyId1151);
            var __alloyId1152 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["directionOfGrowthFront"] ? __alloyId1061.__transform["directionOfGrowthFront"] : __alloyId1061.get("directionOfGrowthFront")
            });
            __alloyId1150.add(__alloyId1152);
            var __alloyId1153 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1153);
            var __alloyId1154 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Strichplaz. hinten"
            });
            __alloyId1153.add(__alloyId1154);
            var __alloyId1155 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["directionOfGrowthBack"] ? __alloyId1061.__transform["directionOfGrowthBack"] : __alloyId1061.get("directionOfGrowthBack")
            });
            __alloyId1153.add(__alloyId1155);
            var __alloyId1156 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId1167.add(__alloyId1156);
            var __alloyId1157 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Vordereuteraufhängung"
            });
            __alloyId1156.add(__alloyId1157);
            var __alloyId1158 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["foreUdderSuspension"] ? __alloyId1061.__transform["foreUdderSuspension"] : __alloyId1061.get("foreUdderSuspension")
            });
            __alloyId1156.add(__alloyId1158);
            var __alloyId1159 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1159);
            var __alloyId1160 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Eutertiefe"
            });
            __alloyId1159.add(__alloyId1160);
            var __alloyId1161 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["udderDepth"] ? __alloyId1061.__transform["udderDepth"] : __alloyId1061.get("udderDepth")
            });
            __alloyId1159.add(__alloyId1161);
            var __alloyId1162 = Ti.UI.createTableViewRow({
                backgroundColor: "#c5d9ec",
                color: "white",
                font: {
                    fontSize: "14dp"
                },
                title: "20"
            });
            __alloyId1167.add(__alloyId1162);
            var __alloyId1163 = Ti.UI.createLabel({
                color: "black",
                left: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "Strichlänge"
            });
            __alloyId1162.add(__alloyId1163);
            var __alloyId1164 = Ti.UI.createLabel({
                color: "black",
                right: "20",
                font: {
                    fontSize: "14dp"
                },
                text: "undefined" != typeof __alloyId1061.__transform["directionOfGrowthLength"] ? __alloyId1061.__transform["directionOfGrowthLength"] : __alloyId1061.get("directionOfGrowthLength")
            });
            __alloyId1162.add(__alloyId1164);
            var __alloyId1166 = Ti.UI.createTableViewRow({});
            __alloyId1167.add(__alloyId1166);
        }
        $.__views.cowDetail.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "redColoredDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowsMod");
    $.__views.redColoredDetails = Ti.UI.createWindow({
        id: "redColoredDetails"
    });
    $.__views.redColoredDetails && $.addTopLevelView($.__views.redColoredDetails);
    $.__views.cowDetail = Ti.UI.createTableView({
        backgroundColor: "white",
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.redColoredDetails.add($.__views.cowDetail);
    var __alloyId1168 = Alloy.Collections["Alloy.Collections.redColoredCol"] || Alloy.Collections.redColoredCol;
    __alloyId1168.on("fetch destroy change add remove reset", __alloyId1169);
    exports.destroy = function() {
        __alloyId1168.off("fetch destroy change add remove reset", __alloyId1169);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;