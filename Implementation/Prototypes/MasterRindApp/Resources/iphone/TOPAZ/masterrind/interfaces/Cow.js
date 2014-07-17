TOPAZ.namespace("TOPAZ.masterrind.interfaces.Cow");

TOPAZ.masterrind.Cow = function() {
    var m_id = "null";
    var m_base = "null";
    this.getId = function() {
        return m_id;
    };
    this.getBase = function() {
        return m_base;
    };
    this.setId = function(id) {
        m_id = id;
    };
    this.setBase = function(base) {
        m_base = base;
    };
};