require('TOPAZ/masterrind/MasterRind');
require('TOPAZ/masterrind/interfaces/Cow');
require('TOPAZ/masterrind/impl/BlackColored');
require('TOPAZ/masterrind/interfaces/Favorite');
require('TOPAZ/masterrind/impl/Holsteins');

var cowList = new Array();
var model;
//Fehler: Schritt zurück erst möglich, wenn die Taste dreimal gedrückt wird.
//Ursache: unbekannt
//Mögliche Lösung: unbekannt
$.about.addEventListener('click', function(e) {

	for ( i = 0; i < cowList.length; i++) {

		cow = cowList[i];
		console.log(cow.getId() + ' ' + cow.getBase());

		model = Alloy.createModel('cowsMod', {
			ID : cow.getId()
		});

		Alloy.Collections.cowCol.add(model);
	}

	var win = Alloy.createController('about').getView();
	win.open();

});

$.appointments.addEventListener('click', function(e) {
	var win = Alloy.createController('appointments').getView();
	//win.open();

	var mr = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.CowFactory());
	mr.loadCowsFromDB();
	cowList = mr.getCows('Holsteins');

	var mr_fav = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.FavoriteFactory());
	console.log(mr_fav.addFavorite('cow', '23', 'Peniskopf').getName());

	var mr_app = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.AppointmentFactory());

	console.log(mr_app.getAppointment("Auction").getName());

});

$.blackColored.addEventListener('click', function(e) {
	var win = Alloy.createController('blackColored').getView();
	win.open();
});

$.contacts.addEventListener('click', function(e) {
	var win = Alloy.createController('contacts').getView();
	win.open();

	var appointments = new Array();
	var companies = new Array();
	var contacts = new Array();
	var cows = new Array();
	var favorites = new Array();
	var model;
	// Richtlinie: listen immer im plural bennen
	// TODO muster für das Laden der Daten aus der DB überlegen.
	// Fehlerbehandlung überlegen.
	// Error: Daten werden erst angezeigt, wenn mann zwei Mal auf den Zurückbutton drückt.
	// Error: Wenn der Fehler not a function auftritt, alle Klassennamen und requires überprüfen.

	var mr_app = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.AppointmentFactory());
	mr_app.loadAppointmentsFromDB();
	appointments = mr_app.getAppointments('Meeting');
	console.log(appointments.length);
	for ( i = 0; i < appointments.length; i++) {
		app = appointments[i];
		console.log(app.getName());
	}

	var mr_fav = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.FavoriteFactory());
	mr_fav.addFavorite("12","Peniskopf","1","PeniskopfFav");
	mr_fav.loadFavoritesFromDB();
	favorites = mr_fav.getFavorites('cow');
	for ( i = 0; i < favorites.length; i++) {
	console.log(favorites[i].getName());
	}

	var mr_cow = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.CowFactory());
	mr_cow.loadCowsFromDB();
	cows = mr_cow.getCows('Holsteins');
	for ( i = 0; i < cows.length; i++) {

		cow = cows[i];
		console.log(cow.getId() + ' ' + cow.getBase());

		model = Alloy.createModel('cowsMod', {
			ID : cow.getId()
		});

		Alloy.Collections.cowCol.add(model);

	}

	// var mr_fav = new TOPAZ.masterrind.MasterRind(new TOPAZ.masterrind.FavoriteFactory());
	// console.log(mr_fav.addFavorite('cow', '23', 'Peniskopf').getName());

});

$.about.addEventListener('click', function(e) {
	var win = Alloy.createController('about').getView();
	win.open();
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

$.about.addEventListener('click', function(e) {
	var win = Alloy.createController('about').getView();
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
