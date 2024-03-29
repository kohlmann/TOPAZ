TOPAZ.namespace("TOPAZ.masterrind.datatypes.Appointment");

require("TOPAZ/masterrind/datatypes/Company");

require("TOPAZ/masterrind/datatypes/Contact");

TOPAZ.masterrind.datatypes.Appointment = function() {
    var m_id = "null";
    var m_name = "null";
    var m_date = "null";
    var m_company = "null";
    var m_contact = "null";
    var m_distance = "null";
    this.getId = function() {
        return m_id;
    };
    this.getName = function() {
        return m_name;
    };
    this.getDate = function() {
        return m_date;
    };
    this.getCompany = function() {
        return m_company;
    };
    this.getContact = function() {
        return m_contact;
    };
    this.getDistance = function() {
        return m_distance;
    };
    this.setName = function(name) {
        m_name = name;
    };
    this.setDate = function(date) {
        m_date = date;
    };
    this.setCompany = function(company) {
        m_company = company;
    };
    this.setContact = function(contact) {
        m_contact = contact;
    };
    this.setId = function(id) {
        m_id = id;
    };
    this.setDistance = function(distance) {
        m_distance = distance;
    };
};