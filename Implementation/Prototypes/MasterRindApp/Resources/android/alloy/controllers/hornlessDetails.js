function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId971(e) {
        if (e && e.fromAdapter) return;
        __alloyId971.opts || {};
        var models = __alloyId970.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId863 = models[i];
            __alloyId863.__transform = {};
            var __alloyId969 = Ti.UI.createTableViewSection({
                headerTitle: "Details"
            });
            rows.push(__alloyId969);
            var __alloyId866 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId866);
            var __alloyId867 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId863.__transform["image"] ? __alloyId863.__transform["image"] : __alloyId863.get("image")
            });
            __alloyId866.add(__alloyId867);
            var __alloyId869 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            __alloyId969.add(__alloyId869);
            var __alloyId870 = Ti.UI.createLabel({
                text: "Empire	- 823060"
            });
            __alloyId869.add(__alloyId870);
            var __alloyId871 = Ti.UI.createLabel({
                text: "Epic  x Legend  x Shottle"
            });
            __alloyId869.add(__alloyId871);
            var __alloyId872 = Ti.UI.createLabel({
                text: "0 Tö. | CVF BLF BYF | aAa: 312546"
            });
            __alloyId869.add(__alloyId872);
            var __alloyId873 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId873);
            var __alloyId874 = Ti.UI.createLabel({
                text: "gRZG"
            });
            __alloyId873.add(__alloyId874);
            var __alloyId875 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["gRZG"] ? __alloyId863.__transform["gRZG"] : __alloyId863.get("gRZG")
            });
            __alloyId873.add(__alloyId875);
            var __alloyId877 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId877);
            var __alloyId878 = Ti.UI.createLabel({
                text: "gRZM"
            });
            __alloyId877.add(__alloyId878);
            var __alloyId879 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["gRZM"] ? __alloyId863.__transform["gRZM"] : __alloyId863.get("gRZM")
            });
            __alloyId877.add(__alloyId879);
            var __alloyId881 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId881);
            var __alloyId882 = Ti.UI.createLabel({
                text: "gRZE"
            });
            __alloyId881.add(__alloyId882);
            var __alloyId883 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["gRZE"] ? __alloyId863.__transform["gRZE"] : __alloyId863.get("gRZE")
            });
            __alloyId881.add(__alloyId883);
            var __alloyId885 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId885);
            var __alloyId886 = Ti.UI.createLabel({
                text: "gRZR"
            });
            __alloyId885.add(__alloyId886);
            var __alloyId887 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["gRZR"] ? __alloyId863.__transform["gRZR"] : __alloyId863.get("gRZR")
            });
            __alloyId885.add(__alloyId887);
            var __alloyId889 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId889);
            var __alloyId890 = Ti.UI.createLabel({
                text: "gRZS"
            });
            __alloyId889.add(__alloyId890);
            var __alloyId891 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["gRZS"] ? __alloyId863.__transform["gRZS"] : __alloyId863.get("gRZS")
            });
            __alloyId889.add(__alloyId891);
            var __alloyId893 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId893);
            var __alloyId894 = Ti.UI.createLabel({
                text: "gRZKd"
            });
            __alloyId893.add(__alloyId894);
            var __alloyId895 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["gRZkd"] ? __alloyId863.__transform["gRZkd"] : __alloyId863.get("gRZkd")
            });
            __alloyId893.add(__alloyId895);
            var __alloyId896 = Ti.UI.createTableViewRow({
                title: "Milchzuchtwert"
            });
            __alloyId969.add(__alloyId896);
            var __alloyId897 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId969.add(__alloyId897);
            var __alloyId898 = Ti.UI.createLabel({
                text: "Milch kg\n +1.632"
            });
            __alloyId897.add(__alloyId898);
            var __alloyId899 = Ti.UI.createLabel({
                text: "Fett %\n-0,11"
            });
            __alloyId897.add(__alloyId899);
            var __alloyId900 = Ti.UI.createLabel({
                text: "Fett kg\n+55"
            });
            __alloyId897.add(__alloyId900);
            var __alloyId901 = Ti.UI.createLabel({
                text: "Eiweiß %\n-0,07"
            });
            __alloyId897.add(__alloyId901);
            var __alloyId902 = Ti.UI.createLabel({
                text: "Eiweiß kg\n+48"
            });
            __alloyId897.add(__alloyId902);
            var __alloyId903 = Ti.UI.createTableViewRow({
                title: "Exterier"
            });
            __alloyId969.add(__alloyId903);
            var __alloyId905 = Ti.UI.createTableViewRow({
                layout: "horizontal"
            });
            __alloyId969.add(__alloyId905);
            var __alloyId906 = Ti.UI.createLabel({
                text: "Milchtyp\n 114"
            });
            __alloyId905.add(__alloyId906);
            var __alloyId907 = Ti.UI.createLabel({
                text: "Körper\n118"
            });
            __alloyId905.add(__alloyId907);
            var __alloyId908 = Ti.UI.createLabel({
                text: "Fundament\n125"
            });
            __alloyId905.add(__alloyId908);
            var __alloyId909 = Ti.UI.createLabel({
                text: "Euter\n132"
            });
            __alloyId905.add(__alloyId909);
            var __alloyId910 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId910);
            var __alloyId911 = Ti.UI.createLabel({
                text: "Standardisierte Zuchtwerte"
            });
            __alloyId910.add(__alloyId911);
            var __alloyId912 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId912);
            var __alloyId913 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["Größe"] ? __alloyId863.__transform["Größe"] : __alloyId863.get("Größe")
            });
            __alloyId912.add(__alloyId913);
            var __alloyId914 = Ti.UI.createLabel({
                width: "119"
            });
            __alloyId912.add(__alloyId914);
            var __alloyId915 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["size"] ? __alloyId863.__transform["size"] : __alloyId863.get("size")
            });
            __alloyId912.add(__alloyId915);
            var __alloyId916 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId916);
            var __alloyId917 = Ti.UI.createLabel({
                text: "Milchcharakter"
            });
            __alloyId916.add(__alloyId917);
            var __alloyId918 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["milkDairy"] ? __alloyId863.__transform["milkDairy"] : __alloyId863.get("milkDairy")
            });
            __alloyId916.add(__alloyId918);
            var __alloyId919 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId919);
            var __alloyId920 = Ti.UI.createLabel({
                text: "Körpertiefe"
            });
            __alloyId919.add(__alloyId920);
            var __alloyId921 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["bodyDepth"] ? __alloyId863.__transform["bodyDepth"] : __alloyId863.get("bodyDepth")
            });
            __alloyId919.add(__alloyId921);
            var __alloyId922 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId922);
            var __alloyId923 = Ti.UI.createLabel({
                text: "Stärke"
            });
            __alloyId922.add(__alloyId923);
            var __alloyId924 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["strength"] ? __alloyId863.__transform["strength"] : __alloyId863.get("strength")
            });
            __alloyId922.add(__alloyId924);
            var __alloyId925 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId925);
            var __alloyId926 = Ti.UI.createLabel({
                text: "Beckenneigung"
            });
            __alloyId925.add(__alloyId926);
            var __alloyId927 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["beckTilt"] ? __alloyId863.__transform["beckTilt"] : __alloyId863.get("beckTilt")
            });
            __alloyId925.add(__alloyId927);
            var __alloyId928 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId928);
            var __alloyId929 = Ti.UI.createLabel({
                text: "Beckenbreite"
            });
            __alloyId928.add(__alloyId929);
            var __alloyId930 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["beckWide"] ? __alloyId863.__transform["beckWide"] : __alloyId863.get("beckWide")
            });
            __alloyId928.add(__alloyId930);
            var __alloyId931 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId931);
            var __alloyId932 = Ti.UI.createLabel({
                text: "Hi.Beinwinkelung"
            });
            __alloyId931.add(__alloyId932);
            var __alloyId933 = Ti.UI.createLabel({
                text: "sdfsdaf"
            });
            __alloyId931.add(__alloyId933);
            var __alloyId934 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId934);
            var __alloyId935 = Ti.UI.createLabel({
                text: "Klauenwinkel"
            });
            __alloyId934.add(__alloyId935);
            var __alloyId936 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["stealAngle"] ? __alloyId863.__transform["stealAngle"] : __alloyId863.get("stealAngle")
            });
            __alloyId934.add(__alloyId936);
            var __alloyId937 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId937);
            var __alloyId938 = Ti.UI.createLabel({
                text: "Sprunggelenk"
            });
            __alloyId937.add(__alloyId938);
            var __alloyId939 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["hock"] ? __alloyId863.__transform["hock"] : __alloyId863.get("hock")
            });
            __alloyId937.add(__alloyId939);
            var __alloyId940 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId940);
            var __alloyId941 = Ti.UI.createLabel({
                text: "Hi.Beinstellung"
            });
            __alloyId940.add(__alloyId941);
            var __alloyId942 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["backLegsPosition"] ? __alloyId863.__transform["backLegsPosition"] : __alloyId863.get("backLegsPosition")
            });
            __alloyId940.add(__alloyId942);
            var __alloyId943 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId943);
            var __alloyId944 = Ti.UI.createLabel({
                text: "Bewegung"
            });
            __alloyId943.add(__alloyId944);
            var __alloyId945 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["movement"] ? __alloyId863.__transform["movement"] : __alloyId863.get("movement")
            });
            __alloyId943.add(__alloyId945);
            var __alloyId946 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId946);
            var __alloyId947 = Ti.UI.createLabel({
                text: "Hintereuterhöhe"
            });
            __alloyId946.add(__alloyId947);
            var __alloyId948 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["behindUdderHeight"] ? __alloyId863.__transform["behindUdderHeight"] : __alloyId863.get("behindUdderHeight")
            });
            __alloyId946.add(__alloyId948);
            var __alloyId949 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId949);
            var __alloyId950 = Ti.UI.createLabel({
                text: "Zentralband"
            });
            __alloyId949.add(__alloyId950);
            var __alloyId951 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["centralBelt"] ? __alloyId863.__transform["centralBelt"] : __alloyId863.get("centralBelt")
            });
            __alloyId949.add(__alloyId951);
            var __alloyId952 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId952);
            var __alloyId953 = Ti.UI.createLabel({
                text: "Strichplaz. vorne"
            });
            __alloyId952.add(__alloyId953);
            var __alloyId954 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["directionOfGrowthFront"] ? __alloyId863.__transform["directionOfGrowthFront"] : __alloyId863.get("directionOfGrowthFront")
            });
            __alloyId952.add(__alloyId954);
            var __alloyId955 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId955);
            var __alloyId956 = Ti.UI.createLabel({
                text: "Strichplaz. hinten"
            });
            __alloyId955.add(__alloyId956);
            var __alloyId957 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["directionOfGrowthBack"] ? __alloyId863.__transform["directionOfGrowthBack"] : __alloyId863.get("directionOfGrowthBack")
            });
            __alloyId955.add(__alloyId957);
            var __alloyId958 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId958);
            var __alloyId959 = Ti.UI.createLabel({
                text: "Vordereuteraufhängung"
            });
            __alloyId958.add(__alloyId959);
            var __alloyId960 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["foreUdderSuspension"] ? __alloyId863.__transform["foreUdderSuspension"] : __alloyId863.get("foreUdderSuspension")
            });
            __alloyId958.add(__alloyId960);
            var __alloyId961 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId961);
            var __alloyId962 = Ti.UI.createLabel({
                text: "Eutertiefe"
            });
            __alloyId961.add(__alloyId962);
            var __alloyId963 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["udderDepth"] ? __alloyId863.__transform["udderDepth"] : __alloyId863.get("udderDepth")
            });
            __alloyId961.add(__alloyId963);
            var __alloyId964 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId964);
            var __alloyId965 = Ti.UI.createLabel({
                text: "Strichlänge"
            });
            __alloyId964.add(__alloyId965);
            var __alloyId966 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId863.__transform["directionOfGrowthLength"] ? __alloyId863.__transform["directionOfGrowthLength"] : __alloyId863.get("directionOfGrowthLength")
            });
            __alloyId964.add(__alloyId966);
            var __alloyId968 = Ti.UI.createTableViewRow({});
            __alloyId969.add(__alloyId968);
        }
        $.__views.cowDetail.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hornlessDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.model = Alloy.createModel("cowsMod");
    $.__views.hornlessDetails = Ti.UI.createWindow({
        id: "hornlessDetails"
    });
    $.__views.hornlessDetails && $.addTopLevelView($.__views.hornlessDetails);
    $.__views.cowDetail = Ti.UI.createTableView({
        id: "cowDetail",
        defaultItemTemplate: "template"
    });
    $.__views.hornlessDetails.add($.__views.cowDetail);
    var __alloyId970 = Alloy.Collections["Alloy.Collections.hornlessCol"] || Alloy.Collections.hornlessCol;
    __alloyId970.on("fetch destroy change add remove reset", __alloyId971);
    exports.destroy = function() {
        __alloyId970.off("fetch destroy change add remove reset", __alloyId971);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;