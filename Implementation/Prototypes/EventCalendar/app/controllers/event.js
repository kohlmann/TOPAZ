$.event.addEventListener('close', function() {
	$.destroy();
});
function callClick(e) {
	var the_number='0123456789';
	Ti.Platform.openURL('tel:'+the_number);
};
function routeClick(e) {
};
function saveInCalendarClick(e) {
	var defCalendar=Ti.Calendar.defaultCalendar;
	var date1=new Date(new Date().getTime()+3000),
	    date2=new Date(new Date().getTime()+900000);
	Ti.API.info('Date1 : '+date1+'Date2 : '+date2);
	var event1=defCalendar.createEvent({
		title:'Sample Event',
		notes:'This is a test event which has some values assigned to it.',
		location:'Appcelerator Inc',
		begin:date1,
		end:date2,
		availability:Ti.Calendar.AVAILABILITY_FREE,
		allDay:false,
	});
	var alert1=event1.createAlert({
		absoluteDate:new Date(new Date().getTime()-(1000*60*20))
	});
	var alert2=event1.createAlert({
		relativeOffset:-(60*15)
	});
	var allAlerts=new Array(alert1,alert2);
	event1.alerts=allAlerts;
	var newRule=event1.createRecurenceRule({
		frequency:Ti.Calendar.RECURRENCEFREQUENCY_MONTHLY,
		interval:1,
		daysOfTheWeek:[{
			dayOfWeek:1,
			week:2
		},{
			dayOfWeek:2
		}],
		end: {
			occurrenceCount:10
		}
	});
	Ti.API.info('newRule : '+newRule);
	event1.recurrenceRules=[newRule];
	Ti.API.info('Going to save event now');
	event1.save(Ti.Calendar.SPAN_THISEVENT);
	Ti.API.info('Done with saving event,\n Now trying to retreive it.');
};
function emailClick(e) {
	var emailDialog=Ti.UI.createEmailDialog();
	emailDialog.subject="Hello from Titanium";
	emailDialog.toRecipients=['foo@yahoo.com'];
	emailDialog.messageBody='<b>Appcelerator Titanium Rocks!</b>';
	//var f=Ti.Filesystem.getFile('cricket.wav');
	// emailDialog.addAttachment(f);
	emailDialog.open();
};
