function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId27(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId27.opts || {};
        var models = filterFunction(__alloyId26);
        var len = models.length;
        var __alloyId20 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId23 = models[i];
            __alloyId23.__transform = transformFunction(__alloyId23);
            var __alloyId25 = Alloy.createController("listItem", {
                $model: __alloyId23,
                __parentSymbol: __parentSymbol
            });
            __alloyId20.push(__alloyId25.getViewEx({
                recurse: true
            }));
        }
        opts.animation ? $.__views.__alloyId19.setItems(__alloyId20, opts.animation) : $.__views.__alloyId19.setItems(__alloyId20);
    }
    function filterFunction(collection) {
        return collection.models;
    }
    function clickAlle() {
        kuhCollection.fetch({
            query: "SELECT * FROM kuehe WHERE Name IS NOT NULL"
        });
    }
    function clickHolFilter() {
        kuhCollection.fetch({
            query: 'SELECT * FROM kuehe WHERE Name IS NOT NULL AND Rasse="HOL"'
        });
    }
    function clickRedFilter() {
        kuhCollection.fetch({
            query: 'SELECT * FROM kuehe WHERE Name IS NOT NULL AND Rasse="RED"'
        });
    }
    function clickGenomicFilter() {
        kuhCollection.fetch({
            query: 'SELECT * FROM kuehe WHERE Genomic = "G"'
        });
    }
    function clickToechterFilter() {
        kuhCollection.fetch({
            query: 'SELECT * FROM kuehe WHERE Genomic = "T"'
        });
    }
    function clickHornlosFilter() {
        kuhCollection.fetch({
            query: 'SELECT * FROM kuehe WHERE Hornlos = "H"'
        });
    }
    function clickGesexteFilter() {
        kuhCollection.fetch({
            query: 'SELECT * FROM kuehe WHERE gesext = "1"'
        });
    }
    function clickSortName() {
        kuhCollection.setSortField("Name", "ASC");
        kuhCollection.sort();
    }
    function clickSortRZG() {
        kuhCollection.setSortField("gRZG", "DESC");
        kuhCollection.sort();
    }
    function clickSortRZM() {
        kuhCollection.setSortField("gRZM", "DESC");
        kuhCollection.sort();
    }
    function clickSortMilchKg() {
        kuhCollection.setSortField("MilchKg", "DESC");
        kuhCollection.sort();
    }
    function showId(e) {
        $.list.sections[e.sectionIndex];
        var item = e.section.getItemAt(e.itemIndex);
        var detailObj = item.model;
        var detailController = Alloy.createController("kuhdetail", {
            $model: detailObj
        });
        detailController.getView().open();
    }
    function closeWindow() {
        $.destroy();
        $.kuhWindow.close();
    }
    function toggleSearch() {
        true === $.searchBar.visible ? $.searchBar.setVisible("false") : $.searchBar.setVisible("true");
        $.searchBar.height === Ti.UI.SIZE ? $.searchBar.setHeight("0") : $.searchBar.setHeight(Ti.UI.SIZE);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "kuehe";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("kuehe");
    $.__views.kuhWindow = Ti.UI.createWindow({
        id: "kuhWindow",
        layout: "vertical"
    });
    $.__views.kuhWindow && $.addTopLevelView($.__views.kuhWindow);
    $.__views.buttonview = Ti.UI.createView({
        backgroundColor: "red",
        height: "50dp",
        top: "30dp",
        id: "buttonview"
    });
    $.__views.kuhWindow.add($.__views.buttonview);
    $.__views.closeWindow = Ti.UI.createButton({
        color: "white",
        top: "10dp",
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "5dp",
        width: "20%",
        title: "X",
        id: "closeWindow"
    });
    $.__views.buttonview.add($.__views.closeWindow);
    closeWindow ? $.__views.closeWindow.addEventListener("click", closeWindow) : __defers["$.__views.closeWindow!click!closeWindow"] = true;
    $.__views.toggleSearch = Ti.UI.createButton({
        color: "white",
        top: "10dp",
        width: "20%",
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        title: "Suche",
        id: "toggleSearch"
    });
    $.__views.buttonview.add($.__views.toggleSearch);
    toggleSearch ? $.__views.toggleSearch.addEventListener("click", toggleSearch) : __defers["$.__views.toggleSearch!click!toggleSearch"] = true;
    $.__views.optionView = Ti.UI.createScrollView({
        layout: "horizontal",
        backgroundColor: "gray",
        height: "50dp",
        id: "optionView",
        showHorizontalScrollIndicator: "true",
        showVerticalScrollIndicator: "false"
    });
    $.__views.kuhWindow.add($.__views.optionView);
    $.__views.alle = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "Alle",
        id: "alle"
    });
    $.__views.optionView.add($.__views.alle);
    clickAlle ? $.__views.alle.addEventListener("click", clickAlle) : __defers["$.__views.alle!click!clickAlle"] = true;
    $.__views.sb = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "Schwarzbunte",
        id: "sb"
    });
    $.__views.optionView.add($.__views.sb);
    clickHolFilter ? $.__views.sb.addEventListener("click", clickHolFilter) : __defers["$.__views.sb!click!clickHolFilter"] = true;
    $.__views.rb = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "Rotbunte",
        id: "rb"
    });
    $.__views.optionView.add($.__views.rb);
    clickRedFilter ? $.__views.rb.addEventListener("click", clickRedFilter) : __defers["$.__views.rb!click!clickRedFilter"] = true;
    $.__views.gen = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "Genomics",
        id: "gen"
    });
    $.__views.optionView.add($.__views.gen);
    clickGenomicFilter ? $.__views.gen.addEventListener("click", clickGenomicFilter) : __defers["$.__views.gen!click!clickGenomicFilter"] = true;
    $.__views.toe = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "Töchtergeprüfte",
        id: "toe"
    });
    $.__views.optionView.add($.__views.toe);
    clickToechterFilter ? $.__views.toe.addEventListener("click", clickToechterFilter) : __defers["$.__views.toe!click!clickToechterFilter"] = true;
    $.__views.hl = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "Hornlose",
        id: "hl"
    });
    $.__views.optionView.add($.__views.hl);
    clickHornlosFilter ? $.__views.hl.addEventListener("click", clickHornlosFilter) : __defers["$.__views.hl!click!clickHornlosFilter"] = true;
    $.__views.sex = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "Gesexte",
        id: "sex"
    });
    $.__views.optionView.add($.__views.sex);
    clickGesexteFilter ? $.__views.sex.addEventListener("click", clickGesexteFilter) : __defers["$.__views.sex!click!clickGesexteFilter"] = true;
    $.__views.sortLabelView = Ti.UI.createView({
        layout: "horizontal",
        backgroundColor: "#336699",
        height: "25dp",
        id: "sortLabelView"
    });
    $.__views.kuhWindow.add($.__views.sortLabelView);
    $.__views.sortLabel = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "5dp",
        text: "Sortieren:",
        id: "sortLabel"
    });
    $.__views.sortLabelView.add($.__views.sortLabel);
    $.__views.sortView = Ti.UI.createScrollView({
        layout: "horizontal",
        backgroundColor: "#336699",
        height: "30dp",
        id: "sortView",
        showHorizontalScrollIndicator: "true",
        showVerticalScrollIndicator: "false"
    });
    $.__views.kuhWindow.add($.__views.sortView);
    $.__views.sortName = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "Name",
        id: "sortName"
    });
    $.__views.sortView.add($.__views.sortName);
    clickSortName ? $.__views.sortName.addEventListener("click", clickSortName) : __defers["$.__views.sortName!click!clickSortName"] = true;
    $.__views.sortRzg = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "RZG",
        id: "sortRzg"
    });
    $.__views.sortView.add($.__views.sortRzg);
    clickSortRZG ? $.__views.sortRzg.addEventListener("click", clickSortRZG) : __defers["$.__views.sortRzg!click!clickSortRZG"] = true;
    $.__views.sortRzm = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "RZM",
        id: "sortRzm"
    });
    $.__views.sortView.add($.__views.sortRzm);
    clickSortRZM ? $.__views.sortRzm.addEventListener("click", clickSortRZM) : __defers["$.__views.sortRzm!click!clickSortRZM"] = true;
    $.__views.sortMilchKg = Ti.UI.createButton({
        color: "white",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        left: "15dp",
        title: "Milch/Kg",
        id: "sortMilchKg"
    });
    $.__views.sortView.add($.__views.sortMilchKg);
    clickSortMilchKg ? $.__views.sortMilchKg.addEventListener("click", clickSortMilchKg) : __defers["$.__views.sortMilchKg!click!clickSortMilchKg"] = true;
    $.__views.searchBar = Ti.UI.createSearchBar({
        height: 0,
        id: "searchBar",
        barColor: "#000",
        cancel: "true",
        visible: "false"
    });
    var __alloyId16 = {};
    Alloy.createController("itemTemplate", {
        __parentSymbol: __parentSymbol,
        __itemTemplate: __alloyId16
    });
    $.__views.__alloyId19 = Ti.UI.createListSection({
        id: "__alloyId19"
    });
    var __alloyId26 = Alloy.Collections["kuehe"] || kuehe;
    __alloyId26.on("fetch destroy change add remove reset", __alloyId27);
    var __alloyId28 = [];
    __alloyId28.push($.__views.__alloyId19);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId28,
        templates: __alloyId16,
        searchView: $.__views.searchBar,
        id: "list",
        defaultItemTemplate: "requiredTemplate"
    });
    $.__views.kuhWindow.add($.__views.list);
    showId ? $.__views.list.addEventListener("itemclick", showId) : __defers["$.__views.list!itemclick!showId"] = true;
    exports.destroy = function() {
        __alloyId26.off("fetch destroy change add remove reset", __alloyId27);
    };
    _.extend($, $.__views);
    var transformFunction = require("/kuhlistTransform").transformFunction;
    var kuhCollection = Alloy.Collections.kuehe;
    kuhCollection.add(kuehe);
    var data = kuhCollection.fetch({
        query: "SELECT * FROM kuehe WHERE Name IS NOT Null"
    });
    var kuehe = Alloy.createModel("kuehe", data);
    kuhCollection.sort();
    $.list.addEventListener("longpress", function() {
        $.searchBar.setVisible("true");
    });
    __defers["$.__views.closeWindow!click!closeWindow"] && $.__views.closeWindow.addEventListener("click", closeWindow);
    __defers["$.__views.toggleSearch!click!toggleSearch"] && $.__views.toggleSearch.addEventListener("click", toggleSearch);
    __defers["$.__views.alle!click!clickAlle"] && $.__views.alle.addEventListener("click", clickAlle);
    __defers["$.__views.sb!click!clickHolFilter"] && $.__views.sb.addEventListener("click", clickHolFilter);
    __defers["$.__views.rb!click!clickRedFilter"] && $.__views.rb.addEventListener("click", clickRedFilter);
    __defers["$.__views.gen!click!clickGenomicFilter"] && $.__views.gen.addEventListener("click", clickGenomicFilter);
    __defers["$.__views.toe!click!clickToechterFilter"] && $.__views.toe.addEventListener("click", clickToechterFilter);
    __defers["$.__views.hl!click!clickHornlosFilter"] && $.__views.hl.addEventListener("click", clickHornlosFilter);
    __defers["$.__views.sex!click!clickGesexteFilter"] && $.__views.sex.addEventListener("click", clickGesexteFilter);
    __defers["$.__views.sortName!click!clickSortName"] && $.__views.sortName.addEventListener("click", clickSortName);
    __defers["$.__views.sortRzg!click!clickSortRZG"] && $.__views.sortRzg.addEventListener("click", clickSortRZG);
    __defers["$.__views.sortRzm!click!clickSortRZM"] && $.__views.sortRzm.addEventListener("click", clickSortRZM);
    __defers["$.__views.sortMilchKg!click!clickSortMilchKg"] && $.__views.sortMilchKg.addEventListener("click", clickSortMilchKg);
    __defers["$.__views.list!itemclick!showId"] && $.__views.list.addEventListener("itemclick", showId);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;