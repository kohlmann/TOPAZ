TOPAZ.namespace("TOPAZ.masterrind.AppointmentFactory");

require("TOPAZ/masterrind/interfaces/Appointment");

require("TOPAZ/masterrind/impl/Auction");

require("TOPAZ/masterrind/impl/Course");

require("TOPAZ/masterrind/impl/Exhibition");

require("TOPAZ/masterrind/impl/MeetCattle");

require("TOPAZ/masterrind/impl/Meeting");

require("TOPAZ/masterrind/impl/YoungBreeder");

TOPAZ.masterrind.AppointmentFactory = function() {
    this.create = function(type) {
        var appointment;
        "Auction" == type ? appointment = new TOPAZ.masterrind.impl.Auction() : "Course" == type ? appointment = new TOPAZ.masterrind.impl.Course() : "Exhibition" == type ? appointment = new TOPAZ.masterrind.impl.Exhibition() : "MeetCattle" == type ? appointment = new TOPAZ.masterrind.impl.MeetCattle() : "Meeting" == type ? appointment = new TOPAZ.masterrind.impl.Meeting() : "YoungBreeder" == type ? appointment = new TOPAZ.masterrind.impl.YoungBreeder() : console.log("Unbekannte Kuhart");
        return appointment;
    };
};

TOPAZ.masterrind.AppointmentFactory.prototype = new TOPAZ.masterrind.interfaces.Appointment();