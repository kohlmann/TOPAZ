require('TOPAZ/masterrind/impl/MasterRindFacade');
require('TOPAZ/masterrind/datatypes/Cow');
require('TOPAZ/masterrind/datatypes/Favorite');


//Fehler: Schritt zurück erst möglich, wenn die Taste dreimal gedrückt wird.
//Ursache: eventListener für AboutButton wird mehrfach im Code aufgerufen
//Lösung: EventListener nur einmal aufrufen.
$.about.addEventListener('click', function(e) {
	var win = Alloy.createController('about').getView();
	win.open();
});

/**
 * Fehler: Favorit wird mehrmals (>10) eingefügt.
 * Ursache: unbekannt
 * Lösung: unbekannt
 */
$.appointments.addEventListener('click', function(e) {
	var win = Alloy.createController('appointments').getView();
	win.open();
});

$.blackColored.addEventListener('click', function(e) {
	var win = Alloy.createController('blackColored').getView();
	win.open();


	var cows = new Array();
	var model;


	var mr_cow = new TOPAZ.masterrind.impl.MasterRindFacade();
	cows = mr_cow.loadCowsFromDB();
	
	for ( i = 0; i < cows.length; i++) {

		var cow = cows[i];
		console.log(cow.getId() + ' ' + cow.getName() + ' ' + cow.getFather());

		// model = Alloy.createModel('cowsMod', {
			// id : cow.getId(),
			// name : cow.getName(),
			// image : cow.getImage(),
			// father : cow.getFather()
		// });
		
		model = Alloy.createModel('cowsMod', {
			// a : "text",
			// aAa : "text",
			// mating : "text",
			// yearOfBirth : "text",
			// monthOfBirth : "text",
			// dayOfBirth : "text",
			// geneDefect : "text",
			// herdBookNumber : "text",
			// mmfName : "text",
			// mmff : "text",
			// mfName : "text",
			// mff : "text",
			// fmf : "text",
			// ff : "text",
			// fff : "text",
			father : cow.getFather(),
			// breeder : "text",
			image : cow.getImage(),
			name : cow.getName(),
			// race : "text",
			// id : "text",
			// gRZG : "text",
			// gRZM : "text",
			// milkKg : "text",
			// fatPercent : "text",
			// fatKg : "text",
			// proteinPercent : "text",
			// proteinKg : "text",
			// gRZE : "text",
			// milkType : "text",
			// body : "text",
			// base : "text",
			// udder : "text",
			// gRZFit : "text",
			// gRZN : "text",
			// gRZS : "text",
			// gRZD : "text",
			// gRZR : "text",
			// gRZkd : "text",
			// gRZKM : "text",
			// calfRunningDirectly : "text",
			// backLegsPosition : "text",
			// beckTilt : "text",
			// beckWide : "text",
			// behindUdderHeight : "text",
			// bodyDepth : "text",
			// centralBelt : "text",
			// dairyCharacter : "text",
			// directionOfGrowthBack : "text",
			// directionOfGrowthFront : "text",
			// DirectionOfGrowthLength : "text",
			// foreUdderSuspension : "text",
			// hock : "text",
			// movement : "text",
			// size : "text",
			// stealAngle : "text",
			// strength : "text",
			// udderDepth : "text",
			// hornless : "text",
			// genomics : "text",
			// sexed : "text",
			// freshSemen : "text"
		});

		Alloy.Collections.cowCol.add(model);

	}
});

/**
 * Fehler: Liste wird erweitert beim mehrmaligen Klicken.
 * Ursache: Alloy.Collections.cowCol muss auf leer gesetzt werden
 * Lösung: unbekant
 */
$.contacts.addEventListener('click', function(e) {
	var win = Alloy.createController('contacts').getView();
	win.open();
// 
	// var appointments = new Array();
	// var companies = new Array();
	// var contacts = new Array();
	// var cows = new Array();
	// var favorites = new Array();
	// var model;
// 
	// var mr_app = new TOPAZ.masterrind.impl.MasterRindFacade(new TOPAZ.masterrind.impl.AppointmentFactory());
	// mr_app.loadAppointmentsFromDB();
	// appointments = mr_app.getAppointments('Meeting');
	// console.log(appointments.length);
	// for ( i = 0; i < appointments.length; i++) {
		// app = appointments[i];
		// console.log(app.getName());
	// }
// 
	// var mr_fav = new TOPAZ.masterrind.impl.MasterRindFacade(new TOPAZ.masterrind.impl.FavoriteFactory());
	// mr_fav.loadFavoritesFromDB();
	// favorites = mr_fav.getFavorites('cow');
	// for ( i = 0; i < favorites.length; i++) {
		// console.log(favorites[i].getName());
	// }
// 
	// var mr_cow = new TOPAZ.masterrind.impl.MasterRindFacade(new TOPAZ.masterrind.impl.CowFactory());
	// mr_cow.loadCowsFromDB();
	// cows = mr_cow.getCows('BlackColored');
	// for ( i = 0; i < cows.length; i++) {
// 
		// cow = cows[i];
		// console.log(cow.getId() + ' ' + cow.getBase());
// 
		// model = Alloy.createModel('cowsMod', {
			// id : cow.getId()
		// });
// 
		// Alloy.Collections.cowCol.add(model);
// 
	// }

	// var mr_fav = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.FavoriteFactory());
	// console.log(mr_fav.addFavorite('cow', '23', 'Peniskopf').getName());

});

$.daughterTested.addEventListener('click', function(e) {
	var win = Alloy.createController('daughterTested').getView();
	win.open();
});

$.favorites.addEventListener('click', function(e) {
	var win = Alloy.createController('favorites').getView();
	win.open();
});

$.freshSemen.addEventListener('click', function(e) {
	var win = Alloy.createController('freshSemen').getView();
	win.open();
});

$.genomics.addEventListener('click', function(e) {
	var win = Alloy.createController('genomics').getView();
	win.open();
});

$.holsteins.addEventListener('click', function(e) {
	var win = Alloy.createController('holsteins').getView();
	win.open();
});

$.hornless.addEventListener('click', function(e) {
	var win = Alloy.createController('hornless').getView();
	win.open();
});

$.imprint.addEventListener('click', function(e) {
	var win = Alloy.createController('imprint').getView();
	win.open();
});

$.manual.addEventListener('click', function(e) {
	var win = Alloy.createController('manual').getView();
	win.open();
});

$.properties.addEventListener('click', function(e) {
	var win = Alloy.createController('properties').getView();
	win.open();
});

$.redColored.addEventListener('click', function(e) {
	var win = Alloy.createController('redColored').getView();
	win.open();
});

$.sexed.addEventListener('click', function(e) {
	var win = Alloy.createController('sexed').getView();
	win.open();
});

$.index.open();
