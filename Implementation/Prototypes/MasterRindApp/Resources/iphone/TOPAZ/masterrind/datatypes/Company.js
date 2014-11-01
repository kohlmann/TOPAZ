TOPAZ.namespace("TOPAZ.masterrind.datatypes.Company");

TOPAZ.masterrind.datatypes.Company = function() {
    var m_name = "null";
    var m_description = "null";
    var m_imprint = "null";
    var m_id = "null";
    this.getId = function() {
        return m_id;
    };
    this.getName = function() {
        return m_name;
    };
    this.getDescription = function() {
        return m_description;
    };
    this.getImprint = function() {
        return m_imprint;
    };
    this.setName = function(name) {
        m_name = name;
    };
    this.setDescription = function(description) {
        m_description = description;
    };
    this.setImprint = function(imprint) {
        m_imprint = imprint;
    };
    this.setId = function(id) {
        m_id = id;
    };
};