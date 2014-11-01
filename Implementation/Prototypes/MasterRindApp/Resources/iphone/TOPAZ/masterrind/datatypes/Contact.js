TOPAZ.namespace("TOPAZ.masterrind.datatypes.Contact");

TOPAZ.masterrind.datatypes.Contact = function() {
    var m_name = "null";
    var m_street = "null";
    var m_number = "null";
    var m_zipCode = "null";
    var m_town = "null";
    var m_country = "null";
    var m_id = "null";
    var m_info = "null";
    this.getId = function() {
        return m_id;
    };
    this.getName = function() {
        return m_name;
    };
    this.getStreet = function() {
        return m_street;
    };
    this.getZipCode = function() {
        return m_zipCode;
    };
    this.getTown = function() {
        return m_town;
    };
    this.getCountry = function() {
        return m_country;
    };
    this.getInfo = function() {
        return m_info;
    };
    this.getNumber = function() {
        return m_number;
    };
    this.setName = function(name) {
        m_name = name;
    };
    this.setStreet = function(street) {
        m_street = street;
    };
    this.setNumber = function(number) {
        m_number = number;
    };
    this.setZipCode = function(zipCode) {
        m_zipCode = zipCode;
    };
    this.setTown = function(town) {
        m_town = town;
    };
    this.setCountry = function(country) {
        m_country = country;
    };
    this.setId = function(id) {
        m_id = id;
    };
    this.setInfo = function(info) {
        m_info = info;
    };
};