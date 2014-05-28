function Controller() {
    function itemclick() {
        var win = Ti.UI.createWindow();
        var scrollView = Titanium.UI.createScrollView({
            contentWidth: Ti.Platform.displayCaps.platformWidth,
            contentHeight: Ti.Platform.displayCaps.platformHeight,
            height: Ti.Platform.displayCaps.platformHeight,
            width: Ti.Platform.displayCaps.platformWidth,
            backgroundColor: "#343434",
            showVerticalScrollIndicator: true,
            showHorizontalScrollIndicator: true,
            maxZoomScale: 100,
            minZoomScale: 1
        });
        win.add(scrollView);
        var mainImage = Ti.UI.createImageView({
            height: "auto",
            width: "auto",
            image: "/images/cow.png"
        });
        mainImage.enableZoomControls = "true";
        scrollView.add(mainImage);
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cowDetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
        id: "__alloyId3"
    });
    $.__views.__alloyId1.add($.__views.__alloyId3);
    $.__views.details = Ti.UI.createImageView({
        width: Titanium.UI.FILL,
        id: "details",
        image: "/images/cowDetails01.png"
    });
    $.__views.__alloyId3.add($.__views.details);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        id: "__alloyId4"
    });
    $.__views.__alloyId1.add($.__views.__alloyId4);
    $.__views.details02 = Ti.UI.createImageView({
        width: Titanium.UI.FILL,
        id: "details02",
        image: "/images/cowDetails02.png"
    });
    $.__views.__alloyId4.add($.__views.details02);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        id: "__alloyId5"
    });
    $.__views.__alloyId1.add($.__views.__alloyId5);
    $.__views.breeding = Ti.UI.createImageView({
        width: Titanium.UI.FILL,
        id: "breeding",
        image: "/images/breedingValues.png"
    });
    $.__views.__alloyId5.add($.__views.breeding);
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