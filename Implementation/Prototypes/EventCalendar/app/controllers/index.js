$.index.open();

//Pfad zur Datei
require('TOPAZ/EventCalendarFacade');

var ecf = new TOPAZ.EventCalendarFacade();
var categories = ecf.getAllCategories();
	//ecf.getNumberOfEvents();

function click(e) {
	var win = Alloy.createController('events').getView();
	win.open();

	var section = $.categoriesList.sections[e.sectionIndex];
	var item = section.getItemAt(e.itemIndex);
	var categorieName=item.name.text;
	CATEGORIE_NAME=categorieName;
	ecf.getEventsForCategorie(CATEGORIE_NAME);

}

// Free model-view data binding resources when this view-controller closes
$.index.addEventListener('close', function() {
	$.destroy();
});
