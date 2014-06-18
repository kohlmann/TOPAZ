function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "CowInfo/" + s : s.substring(0, index) + "/CowInfo/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0002,
    key: "icon",
    style: {
        width: "50dp",
        height: "50dp",
        left: 0
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "title",
    style: {
        color: "black",
        font: {
            fontFamily: "Arial",
            fontSize: "20dp",
            fontWeight: "bold"
        },
        left: "60dp",
        top: 0
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "subtitle",
    style: {
        color: "gray",
        font: {
            fontFamily: "Arial",
            fontSize: "14dp"
        },
        left: "60dp",
        top: "25dp"
    }
} ];