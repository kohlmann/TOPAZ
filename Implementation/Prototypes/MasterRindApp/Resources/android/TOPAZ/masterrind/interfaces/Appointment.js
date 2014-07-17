TOPAZ.namespace("TOPAZ.masterrind.interfaces.Appointment");

require("TOPAZ/masterrind/datatypes/Company");

require("TOPAZ/masterrind/datatypes/Contact");

TOPAZ.masterrind.interfaces.Appointment = function() {
    var m_name = "null";
    var m_date = "null";
    var m_company;
    var m_contact;
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
    this.setName = function(name) {
        m_name = name;
    };
    this.getDate = function(date) {
        m_date = date;
    };
    this.setCompany = function(company) {
        m_company = company;
    };
    this.setContact = function() {
        m_contact = contact;
    };
};