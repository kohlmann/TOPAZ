var ecf = new TOPAZ.EventCalendarFacade();
function click(e) {
	var win = Alloy.createController('event').getView();
	win.open();
	var section = $.eventsList.sections[e.sectionIndex];
	var item = section.getItemAt(e.itemIndex);
	var eventId = item.properties.itemId;

	ecf.getEventById(eventId);
	console.log(eventId);
}

var isASC = "true";
function sortByNameClick() {

	eventsCollection.setSortField('name', 'ASC');
	ecf.getEventsForCategorie(CATEGORIE_NAME);

}

function sortByDistanceClick(e) {
	eventsCollection.setSortField('datum_von', 'ASC');
	ecf.getEventsForCategorie(CATEGORIE_NAME);
}

$.events.addEventListener('close', function() {
	$.destroy();
});
