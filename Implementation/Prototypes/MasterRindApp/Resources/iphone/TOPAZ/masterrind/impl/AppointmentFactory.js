TOPAZ.namespace("TOPAZ.masterrind.imp.AppointmentFactory");

require("TOPAZ/masterrind/interfaces/Appointment");

require("TOPAZ/masterrind/datatypes/Auction");

require("TOPAZ/masterrind/datatypes/Course");

require("TOPAZ/masterrind/datatypes/Exhibition");

require("TOPAZ/masterrind/datatypes/MeetCattle");

require("TOPAZ/masterrind/datatypes/Meeting");

require("TOPAZ/masterrind/datatypes/YoungBreeder");

TOPAZ.masterrind.impl.AppointmentFactory = function() {
    this.create = function(type) {
        var appointment;
        "Auction" == type ? appointment = new TOPAZ.masterrind.datatypes.Auction() : "Course" == type ? appointment = new TOPAZ.masterrind.datatypes.Course() : "Exhibition" == type ? appointment = new TOPAZ.masterrind.datatypes.Exhibition() : "MeetCattle" == type ? appointment = new TOPAZ.masterrind.datatypes.MeetCattle() : "Meeting" == type ? appointment = new TOPAZ.masterrind.datatypes.Meeting() : "YoungBreeder" == type ? appointment = new TOPAZ.masterrind.datatypes.YoungBreeder() : console.log("Unbekannte Kuhart");
        return appointment;
    };
};

TOPAZ.masterrind.impl.AppointmentFactory.prototype = new TOPAZ.masterrind.interfaces.Appointment();