function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "listboxWgt/" + s : s.substring(0, index) + "/listboxWgt/" + s.substring(index + 1);
    return path;
}

module.exports = [];