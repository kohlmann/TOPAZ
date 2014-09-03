TOPAZ.namespace("TOPAZ.masterrind.datatypes.Favorite");

TOPAZ.masterrind.datatypes.Favorite = function() {
    var m_id = "null";
    var m_name = "null";
    var m_cowId = "null";
    var m_cowName = "null";
    this.getId = function() {
        return m_id;
    };
    this.getName = function() {
        return m_name;
    };
    this.getCowId = function() {
        return m_cowId;
    };
    this.getCowName = function() {
        return m_cowName;
    };
    this.setId = function(id) {
        m_id = id;
    };
    this.setName = function(name) {
        m_name = name;
    };
    this.setCowId = function(cowId) {
        m_cowId = cowId;
    };
    this.setCowName = function(cowName) {
        m_cowName = cowName;
    };
};