function Controller() {
    function clickLoginButton() {
        alert("Login button pressed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loginWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginWindow = Ti.UI.createWindow({
        id: "loginWindow"
    });
    $.__views.loginWindow && $.addTopLevelView($.__views.loginWindow);
    $.__views.connectionLabel = Ti.UI.createLabel({
        text: "You'll connect to:",
        id: "connectionLabel"
    });
    $.__views.loginWindow.add($.__views.connectionLabel);
    $.__views.loginButton = Ti.UI.createButton({
        title: "Login",
        id: "loginButton"
    });
    $.__views.loginWindow.add($.__views.loginButton);
    clickLoginButton ? $.__views.loginButton.addEventListener("click", clickLoginButton) : __defers["$.__views.loginButton!click!clickLoginButton"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.connectionLabel.text = "data here: " + args.data + " " + args.value;
    __defers["$.__views.loginButton!click!clickLoginButton"] && $.__views.loginButton.addEventListener("click", clickLoginButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;