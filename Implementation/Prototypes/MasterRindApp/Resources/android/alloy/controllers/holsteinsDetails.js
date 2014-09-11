function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId988(e) {
        if (e && e.fromAdapter) return;
        __alloyId988.opts || {};
        var models = __alloyId987.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId880 = models[i];
            __alloyId880.__transform = {};
            var __alloyId986 = Ti.UI.createTableViewSection({
                headerTitle: "Details"
            });
            rows.push(__alloyId986);
            var __alloyId883 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId883);
            var __alloyId884 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId880.__transform["image"] ? __alloyId880.__transform["image"] : __alloyId880.get("image")
            });
            __alloyId883.add(__alloyId884);
            var __alloyId886 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            __alloyId986.add(__alloyId886);
            var __alloyId887 = Ti.UI.createLabel({
                text: "Empire	- 823060"
            });
            __alloyId886.add(__alloyId887);
            var __alloyId888 = Ti.UI.createLabel({
                text: "Epic  x Legend  x Shottle"
            });
            __alloyId886.add(__alloyId888);
            var __alloyId889 = Ti.UI.createLabel({
                text: "0 Tö. | CVF BLF BYF | aAa: 312546"
            });
            __alloyId886.add(__alloyId889);
            var __alloyId890 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId890);
            var __alloyId891 = Ti.UI.createLabel({
                text: "gRZG"
            });
            __alloyId890.add(__alloyId891);
            var __alloyId892 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["gRZG"] ? __alloyId880.__transform["gRZG"] : __alloyId880.get("gRZG")
            });
            __alloyId890.add(__alloyId892);
            var __alloyId894 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId894);
            var __alloyId895 = Ti.UI.createLabel({
                text: "gRZM"
            });
            __alloyId894.add(__alloyId895);
            var __alloyId896 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["gRZM"] ? __alloyId880.__transform["gRZM"] : __alloyId880.get("gRZM")
            });
            __alloyId894.add(__alloyId896);
            var __alloyId898 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId898);
            var __alloyId899 = Ti.UI.createLabel({
                text: "gRZE"
            });
            __alloyId898.add(__alloyId899);
            var __alloyId900 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["gRZE"] ? __alloyId880.__transform["gRZE"] : __alloyId880.get("gRZE")
            });
            __alloyId898.add(__alloyId900);
            var __alloyId902 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId902);
            var __alloyId903 = Ti.UI.createLabel({
                text: "gRZR"
            });
            __alloyId902.add(__alloyId903);
            var __alloyId904 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["gRZR"] ? __alloyId880.__transform["gRZR"] : __alloyId880.get("gRZR")
            });
            __alloyId902.add(__alloyId904);
            var __alloyId906 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId906);
            var __alloyId907 = Ti.UI.createLabel({
                text: "gRZS"
            });
            __alloyId906.add(__alloyId907);
            var __alloyId908 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["gRZS"] ? __alloyId880.__transform["gRZS"] : __alloyId880.get("gRZS")
            });
            __alloyId906.add(__alloyId908);
            var __alloyId910 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId910);
            var __alloyId911 = Ti.UI.createLabel({
                text: "gRZKd"
            });
            __alloyId910.add(__alloyId911);
            var __alloyId912 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["gRZkd"] ? __alloyId880.__transform["gRZkd"] : __alloyId880.get("gRZkd")
            });
            __alloyId910.add(__alloyId912);
            var __alloyId913 = Ti.UI.createTableViewRow({
                title: "Milchzuchtwert"
            });
            __alloyId986.add(__alloyId913);
            var __alloyId914 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId986.add(__alloyId914);
            var __alloyId915 = Ti.UI.createLabel({
                text: "Milch kg\n +1.632"
            });
            __alloyId914.add(__alloyId915);
            var __alloyId916 = Ti.UI.createLabel({
                text: "Fett %\n-0,11"
            });
            __alloyId914.add(__alloyId916);
            var __alloyId917 = Ti.UI.createLabel({
                text: "Fett kg\n+55"
            });
            __alloyId914.add(__alloyId917);
            var __alloyId918 = Ti.UI.createLabel({
                text: "Eiweiß %\n-0,07"
            });
            __alloyId914.add(__alloyId918);
            var __alloyId919 = Ti.UI.createLabel({
                text: "Eiweiß kg\n+48"
            });
            __alloyId914.add(__alloyId919);
            var __alloyId920 = Ti.UI.createTableViewRow({
                title: "Exterier"
            });
            __alloyId986.add(__alloyId920);
            var __alloyId922 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId986.add(__alloyId922);
            var __alloyId923 = Ti.UI.createLabel({
                text: "Milchtyp\n 114"
            });
            __alloyId922.add(__alloyId923);
            var __alloyId924 = Ti.UI.createLabel({
                text: "Körper\n118"
            });
            __alloyId922.add(__alloyId924);
            var __alloyId925 = Ti.UI.createLabel({
                text: "Fundament\n125"
            });
            __alloyId922.add(__alloyId925);
            var __alloyId926 = Ti.UI.createLabel({
                text: "Euter\n132"
            });
            __alloyId922.add(__alloyId926);
            var __alloyId927 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId927);
            var __alloyId928 = Ti.UI.createLabel({
                text: "Standardisierte Zuchtwerte"
            });
            __alloyId927.add(__alloyId928);
            var __alloyId929 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId929);
            var __alloyId930 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["Größe"] ? __alloyId880.__transform["Größe"] : __alloyId880.get("Größe")
            });
            __alloyId929.add(__alloyId930);
            var __alloyId931 = Ti.UI.createLabel({
                width: "119"
            });
            __alloyId929.add(__alloyId931);
            var __alloyId932 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["size"] ? __alloyId880.__transform["size"] : __alloyId880.get("size")
            });
            __alloyId929.add(__alloyId932);
            var __alloyId933 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId933);
            var __alloyId934 = Ti.UI.createLabel({
                text: "Milchcharakter"
            });
            __alloyId933.add(__alloyId934);
            var __alloyId935 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["milkDairy"] ? __alloyId880.__transform["milkDairy"] : __alloyId880.get("milkDairy")
            });
            __alloyId933.add(__alloyId935);
            var __alloyId936 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId936);
            var __alloyId937 = Ti.UI.createLabel({
                text: "Körpertiefe"
            });
            __alloyId936.add(__alloyId937);
            var __alloyId938 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["bodyDepth"] ? __alloyId880.__transform["bodyDepth"] : __alloyId880.get("bodyDepth")
            });
            __alloyId936.add(__alloyId938);
            var __alloyId939 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId939);
            var __alloyId940 = Ti.UI.createLabel({
                text: "Stärke"
            });
            __alloyId939.add(__alloyId940);
            var __alloyId941 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["strength"] ? __alloyId880.__transform["strength"] : __alloyId880.get("strength")
            });
            __alloyId939.add(__alloyId941);
            var __alloyId942 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId942);
            var __alloyId943 = Ti.UI.createLabel({
                text: "Beckenneigung"
            });
            __alloyId942.add(__alloyId943);
            var __alloyId944 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["beckTilt"] ? __alloyId880.__transform["beckTilt"] : __alloyId880.get("beckTilt")
            });
            __alloyId942.add(__alloyId944);
            var __alloyId945 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId945);
            var __alloyId946 = Ti.UI.createLabel({
                text: "Beckenbreite"
            });
            __alloyId945.add(__alloyId946);
            var __alloyId947 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["beckWide"] ? __alloyId880.__transform["beckWide"] : __alloyId880.get("beckWide")
            });
            __alloyId945.add(__alloyId947);
            var __alloyId948 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId948);
            var __alloyId949 = Ti.UI.createLabel({
                text: "Hi.Beinwinkelung"
            });
            __alloyId948.add(__alloyId949);
            var __alloyId950 = Ti.UI.createLabel({
                text: "sdfsdaf"
            });
            __alloyId948.add(__alloyId950);
            var __alloyId951 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId951);
            var __alloyId952 = Ti.UI.createLabel({
                text: "Klauenwinkel"
            });
            __alloyId951.add(__alloyId952);
            var __alloyId953 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["stealAngle"] ? __alloyId880.__transform["stealAngle"] : __alloyId880.get("stealAngle")
            });
            __alloyId951.add(__alloyId953);
            var __alloyId954 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId954);
            var __alloyId955 = Ti.UI.createLabel({
                text: "Sprunggelenk"
            });
            __alloyId954.add(__alloyId955);
            var __alloyId956 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["hock"] ? __alloyId880.__transform["hock"] : __alloyId880.get("hock")
            });
            __alloyId954.add(__alloyId956);
            var __alloyId957 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId957);
            var __alloyId958 = Ti.UI.createLabel({
                text: "Hi.Beinstellung"
            });
            __alloyId957.add(__alloyId958);
            var __alloyId959 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["backLegsPosition"] ? __alloyId880.__transform["backLegsPosition"] : __alloyId880.get("backLegsPosition")
            });
            __alloyId957.add(__alloyId959);
            var __alloyId960 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId960);
            var __alloyId961 = Ti.UI.createLabel({
                text: "Bewegung"
            });
            __alloyId960.add(__alloyId961);
            var __alloyId962 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["movement"] ? __alloyId880.__transform["movement"] : __alloyId880.get("movement")
            });
            __alloyId960.add(__alloyId962);
            var __alloyId963 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId963);
            var __alloyId964 = Ti.UI.createLabel({
                text: "Hintereuterhöhe"
            });
            __alloyId963.add(__alloyId964);
            var __alloyId965 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["behindUdderHeight"] ? __alloyId880.__transform["behindUdderHeight"] : __alloyId880.get("behindUdderHeight")
            });
            __alloyId963.add(__alloyId965);
            var __alloyId966 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId966);
            var __alloyId967 = Ti.UI.createLabel({
                text: "Zentralband"
            });
            __alloyId966.add(__alloyId967);
            var __alloyId968 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["centralBelt"] ? __alloyId880.__transform["centralBelt"] : __alloyId880.get("centralBelt")
            });
            __alloyId966.add(__alloyId968);
            var __alloyId969 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId969);
            var __alloyId970 = Ti.UI.createLabel({
                text: "Strichplaz. vorne"
            });
            __alloyId969.add(__alloyId970);
            var __alloyId971 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["directionOfGrowthFront"] ? __alloyId880.__transform["directionOfGrowthFront"] : __alloyId880.get("directionOfGrowthFront")
            });
            __alloyId969.add(__alloyId971);
            var __alloyId972 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId972);
            var __alloyId973 = Ti.UI.createLabel({
                text: "Strichplaz. hinten"
            });
            __alloyId972.add(__alloyId973);
            var __alloyId974 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["directionOfGrowthBack"] ? __alloyId880.__transform["directionOfGrowthBack"] : __alloyId880.get("directionOfGrowthBack")
            });
            __alloyId972.add(__alloyId974);
            var __alloyId975 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId975);
            var __alloyId976 = Ti.UI.createLabel({
                text: "Vordereuteraufhängung"
            });
            __alloyId975.add(__alloyId976);
            var __alloyId977 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["foreUdderSuspension"] ? __alloyId880.__transform["foreUdderSuspension"] : __alloyId880.get("foreUdderSuspension")
            });
            __alloyId975.add(__alloyId977);
            var __alloyId978 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId978);
            var __alloyId979 = Ti.UI.createLabel({
                text: "Eutertiefe"
            });
            __alloyId978.add(__alloyId979);
            var __alloyId980 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["udderDepth"] ? __alloyId880.__transform["udderDepth"] : __alloyId880.get("udderDepth")
            });
            __alloyId978.add(__alloyId980);
            var __alloyId981 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId981);
            var __alloyId982 = Ti.UI.createLabel({
                text: "Strichlänge"
            });
            __alloyId981.add(__alloyId982);
            var __alloyId983 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId880.__transform["directionOfGrowthLength"] ? __alloyId880.__transform["directionOfGrowthLength"] : __alloyId880.get("directionOfGrowthLength")
            });
            __alloyId981.add(__alloyId983);
            var __alloyId985 = Ti.UI.createTableViewRow({});
            __alloyId986.add(__alloyId985);
        }
        $.__views.cowDetail.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "holsteinsDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowsMod");
    $.__views.holsteinsDetails = Ti.UI.createWindow({
        id: "holsteinsDetails"
    });
    $.__views.holsteinsDetails && $.addTopLevelView($.__views.holsteinsDetails);
    $.__views.cowDetail = Ti.UI.createTableView({
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.holsteinsDetails.add($.__views.cowDetail);
    var __alloyId987 = Alloy.Collections["Alloy.Collections.holsteinsCol"] || Alloy.Collections.holsteinsCol;
    __alloyId987.on("fetch destroy change add remove reset", __alloyId988);
    exports.destroy = function() {
        __alloyId987.off("fetch destroy change add remove reset", __alloyId988);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;