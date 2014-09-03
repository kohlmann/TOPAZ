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
			a : cow.getA(),
			aAa : cow.getAAA(),
			mating : cow.getMating(),
			yearOfBirth : cow.getYearOfBirth(),
			monthOfBirth : cow.getMonthOfBirth(),
			dayOfBirth : cow.getDayOfBirth(),
			geneDefect : cow.getGeneDefect(),
			herdBookNumber : cow.getHerdBookNumber(),
			mmfName : cow.getMMFName(),
			mmff : cow.getMMFF(),
			mfName : cow.getMFName(),
			mff : cow.getMFF(),
			fmf : cow.getFMF(),
			ff : cow.getFF(),
			fff : cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : cow.getGRZG(),
			gRZM : cow.getGRZM(),
			milkKg : cow.getMilkKg(),
			fatPercent : cow.getFatPercent(),
			fatKg : cow.getFatKg(),
			proteinPercent : cow.getProteinPercent(),
			proteinKg : cow.getProteinKg(),
			gRZE : cow.getGRZE(),
			milkType : cow.getMilkType(),
			body : cow.getBody(),
			base : cow.getBase(),
			udder : cow.getUdder(),
			gRZFit : cow.getGRZFit(),
			gRZN : cow.getGRZN(),
			gRZS : cow.getGRZS(),
			gRZD : cow.getGRZD(),
			gRZR : cow.getGRZR(),
			gRZkd : cow.getGRZkd(),
			gRZKM : cow.getGRZKM(),
			calfRunningDirectly : cow.getCalfRunningDirectly(),
			backLegsPosition : cow.getBackLegsPosition(),
			beckTilt : cow.getBeckTilt(),
			beckWide : cow.getBeckWide(),
			behindUdderHeight : cow.getBehindUdderHeight(),
			bodyDepth : cow.getBodyDepth(),
			centralBelt : cow.getCentralBelt(),
			dairyCharacter : cow.getDairyCharacter(),
			directionOfGrowthBack : cow.getDirectionOfGrowthBack(),
			directionOfGrowthFront : cow.getDirectionOfGrowthFront(),
			DirectionOfGrowthLength : cow.getDirectionOfGrowthLength(),
			foreUdderSuspension : cow.getForeUdderSuspension(),
			hock : cow.getHock(),
			movement : cow.getMovement(),
			size : cow.getSize(),
			stealAngle : cow.getStealAngle(),
			strength : cow.getStrength(),
			udderDepth : cow.getUdderDepth(),
			hornless : cow.getHornless(),
			genomics : cow.getGenomics(),
			sexed : cow.getSexed(),
			freshSemen : cow.getFreshSemen(),
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
