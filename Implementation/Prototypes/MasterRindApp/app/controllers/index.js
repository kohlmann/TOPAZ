require('TOPAZ/masterrind/impl/MasterRindFacade');
require('TOPAZ/masterrind/datatypes/Cow');
require('TOPAZ/masterrind/datatypes/Favorite');

/**
 * factorymethode für index überlegen
 */
//TODO:
//hinterbeinwinkelung überall einfügen, Milzuchtwert und Exterieur binden


var masterRindFacade;
$.about.addEventListener('click', function(e) {
	var win = Alloy.createController('about').getView();
	//win.open();
// 
	// var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	// masterRindFacade.addFavorite("10", "Test", "TEST");
	// console.log("-----Favorite eingefügt-------");
	
});

$.appointments.addEventListener('click', function(e) {
	var win = Alloy.createController('appointments').getView();
	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadAppointmentsFromDB();
	win.open();

	var allShows = masterRindFacade.getShowsAndSpecials().allAppointments();
	var bremervoerde = masterRindFacade.getAuctions().bremervoerde();
	var cloppenburg = masterRindFacade.getAuctions().cloppenburg();
	var lingen = masterRindFacade.getAuctions().lingen();
	var uelzen = masterRindFacade.getAuctions().uelzen();
	var verden = masterRindFacade.getAuctions().verden();

	Alloy.Collections.allShowsCol.reset();
	Alloy.Collections.bremervoerdeCol.reset();
	Alloy.Collections.cloppenburgCol.reset();
	Alloy.Collections.lingenCol.reset();
	Alloy.Collections.uelzenCol.reset();
	Alloy.Collections.verdenCol.reset();

	for ( i = 0; i < allShows.length; i++) {

		var appointment = allShows[i];

		var model = Alloy.createModel('appointmentMod', {
			date : appointment.getDate(),
			distance : appointment.getDistance(),
			id : appointment.getId(),
			name : appointment.getName(),
		});

		Alloy.Collections.allShowsCol.add(model);
	}

	for ( i = 0; i < bremervoerde.length; i++) {

		var appointment = bremervoerde[i];
		console.log(appointment.getDate());
		var model = Alloy.createModel('appointmentMod', {
			date : appointment.getDate(),
			distance : appointment.getDistance(),
			id : appointment.getId(),
			name : appointment.getName(),
		});

		Alloy.Collections.bremervoerdeCol.add(model);
	}

	for ( i = 0; i < cloppenburg.length; i++) {

		var appointment = cloppenburg[i];

		var model = Alloy.createModel('appointmentMod', {
			date : appointment.getDate(),
			distance : appointment.getDistance(),
			id : appointment.getId(),
			name : appointment.getName(),
		});

		Alloy.Collections.cloppenburgCol.add(model);

		for ( i = 0; i < lingen.length; i++) {

			var appointment = lingen[i];

			var model = Alloy.createModel('appointmentMod', {
				date : appointment.getDate(),
				distance : appointment.getDistance(),
				id : appointment.getId(),
				name : appointment.getName(),
			});

			Alloy.Collections.lingenCol.add(model);
		}

		for ( i = 0; i < uelzen.length; i++) {

			var appointment = uelzen[i];

			var model = Alloy.createModel('appointmentMod', {
				date : appointment.getDate(),
				distance : appointment.getDistance(),
				id : appointment.getId(),
				name : appointment.getName(),
			});

			Alloy.Collections.uelzenCol.add(model);
		}

		for ( i = 0; i < verden.length; i++) {

			var appointment = verden[i];

			var model = Alloy.createModel('appointmentMod', {
				date : appointment.getDate(),
				distance : appointment.getDistance(),
				id : appointment.getId(),
				name : appointment.getName(),
			});

			Alloy.Collections.verdenCol.add(model);
		}
	}

});

$.blackColored.addEventListener('click', function(e) {
	var win = Alloy.createController('blackColored').getView();
	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	//masterRindFacade.loadCowsFromDB();
	win.open();

	var allCows = masterRindFacade.getBlackColored().allCows();
	var genomics = masterRindFacade.getBlackColored().genomics();
	var daughterTested = masterRindFacade.getBlackColored().daughterTested();
	var hornless = masterRindFacade.getBlackColored().hornless();

	Alloy.Collections.allCowsCol.reset();
	Alloy.Collections.genomicsCol.reset(); 
	Alloy.Collections.daughterTestedCol.reset();
	Alloy.Collections.hornlessCol.reset();

	for ( i = 0; i < allCows.length; i++) {

		var cow = allCows[i];
		// console.log(cow.getId() + ' ' + cow.getName() + ' ' + cow.getFather());

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.allCowsCol.add(model);
	}

	for ( i = 0; i < genomics.length; i++) {

		var cow = genomics[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.genomicsCol.add(model);
	}

	for ( i = 0; i < daughterTested.length; i++) {

		var cow = daughterTested[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.daughterTestedCol.add(model);
	}

	for ( i = 0; i < hornless.length; i++) {

		var cow = hornless[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.hornlessCol.add(model);
	}
});

$.contacts.addEventListener('click', function(e) {
	var win = Alloy.createController('contacts').getView();
	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	var allContacts = masterRindFacade.loadContactsFromDB();
	win.open();

	//var allCows = masterRindFacade.getHolsteins().allCows();

	Alloy.Collections.animalSalesCol.reset();

	for ( i = 0; i < allContacts.length; i++) {

		var contact = allContacts[i];

		var model = Alloy.createModel('contactMod', {
			country : contact.getCountry(),
			id : contact.getId(),
			info : contact.getInfo(),
			name : contact.getName(),
			number : contact.getNumber(),
			street : contact.getStreet(),
			town : contact.getTown(),
			zipCode : contact.getZipCode(),
		});

		Alloy.Collections.animalSalesCol.add(model);
	}
});

$.daughterTested.addEventListener('click', function(e) {
	var win = Alloy.createController('daughterTested').getView();
	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadCowsFromDB();
	win.open();

	var allCows = masterRindFacade.getDaughterTested().allCows();
	var hornless = masterRindFacade.getDaughterTested().hornless();
	var redColored = masterRindFacade.getDaughterTested().redColored();
	var blackColored = masterRindFacade.getDaughterTested().blackColored();

	Alloy.Collections.allCowsCol.reset();
	Alloy.Collections.hornlessCol.reset();
	Alloy.Collections.redColoredCol.reset();
	Alloy.Collections.blackColoredCol.reset();

	for ( i = 0; i < allCows.length; i++) {

		var cow = allCows[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.allCowsCol.add(model);
	}

	for ( i = 0; i < hornless.length; i++) {

		var cow = hornless[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.hornlessCol.add(model);
	}

	for ( i = 0; i < blackColored.length; i++) {

		var cow = blackColored[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.blackColoredCol.add(model);
	}

	for ( i = 0; i < redColored.length; i++) {

		var cow = redColored[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.redColoredCol.add(model);
	}
});

$.favorites.addEventListener('click', function(e) {
	var win = Alloy.createController('favorites').getView();
	win.open();

	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadFavoritesFromDB();

	var favorites = masterRindFacade.getFavorites().allFavorites();

	Alloy.Collections.allFavoritesCol.reset();

	for ( i = 0; i < favorites.length; i++) {

		var favorite = favorites[i];
		console.log(favorite.getName());

		var model = Alloy.createModel('favoriteMod', {
			cowId : favorite.getCowId(),
			cowName : favorite.getCowName(),
			id : favorite.getId(),
			name : favorite.getName(),
		});

		Alloy.Collections.allFavoritesCol.add(model);
	}
});

$.freshSemen.addEventListener('click', function(e) {
	var win = Alloy.createController('freshSemen').getView();
	win.open();

	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadCowsFromDB();
	win.open();

	var allCows = masterRindFacade.getFreshSemen().allCows();

	Alloy.Collections.allCowsCol.reset();

	for ( i = 0; i < allCows.length; i++) {

		var cow = allCows[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.allCowsCol.add(model);
	}
});

$.genomics.addEventListener('click', function(e) {
	var win = Alloy.createController('genomics').getView();
	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadCowsFromDB();
	win.open();

	var allCows = masterRindFacade.getDaughterTested().allCows();
	var hornless = masterRindFacade.getDaughterTested().hornless();
	var redColored = masterRindFacade.getDaughterTested().redColored();
	var blackColored = masterRindFacade.getDaughterTested().blackColored();

	Alloy.Collections.allCowsCol.reset();
	Alloy.Collections.hornlessCol.reset();
	Alloy.Collections.redColoredCol.reset();
	Alloy.Collections.blackColoredCol.reset();

	for ( i = 0; i < allCows.length; i++) {

		var cow = allCows[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.allCowsCol.add(model);
	}

	for ( i = 0; i < hornless.length; i++) {

		var cow = hornless[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.hornlessCol.add(model);
	}

	for ( i = 0; i < blackColored.length; i++) {

		var cow = blackColored[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.blackColoredCol.add(model);
	}

	for ( i = 0; i < redColored.length; i++) {

		var cow = redColored[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.redColoredCol.add(model);
	}
});

$.holsteins.addEventListener('click', function(e) {
	var win = Alloy.createController('holsteins').getView();
	masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadCowsFromDB();
	win.open();

	var allCows = masterRindFacade.getHolsteins().allCows();

	Alloy.Collections.allCowsCol.reset();

	for ( i = 0; i < allCows.length; i++) {

		var cow = allCows[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.allCowsCol.add(model);
	}

});

$.hornless.addEventListener('click', function(e) {
	var win = Alloy.createController('hornless').getView();
	win.open();

	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	//masterRindFacade.loadCowsFromDB();

	var allCows = masterRindFacade.getHornless().allCows();
	var genomics = masterRindFacade.getHornless().genomics();
	var daughterTested = masterRindFacade.getHornless().daughterTested();
	var homozygous = masterRindFacade.getHornless().homozygous();
	var redColored = masterRindFacade.getHornless().redColored();
	var blackColored = masterRindFacade.getHornless().blackColored();

	Alloy.Collections.allCowsCol.reset();
	Alloy.Collections.genomicsCol.reset();
	Alloy.Collections.daughterTestedCol.reset();
	Alloy.Collections.homozygousCol.reset();
	Alloy.Collections.redColoredCol.reset();
	Alloy.Collections.blackColoredCol.reset();

	for ( i = 0; i < allCows.length; i++) {

		var cow = allCows[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.allCowsCol.add(model);
	}

	for ( i = 0; i < genomics.length; i++) {

		var cow = genomics[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.genomicsCol.add(model);
	}

	for ( i = 0; i < daughterTested.length; i++) {

		var cow = daughterTested[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.daughterTestedCol.add(model);
	}

	for ( i = 0; i < homozygous.length; i++) {

		var cow = homozygous[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.homozygousCol.add(model);
	}

	for ( i = 0; i < redColored.length; i++) {

		var cow = redColored[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.redColoredCol.add(model);
	}

	for ( i = 0; i < blackColored.length; i++) {

		var cow = blackColored[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.blackColoredCol.add(model);
	}

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
	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadCowsFromDB();
	win.open();

	var allCows = masterRindFacade.getBlackColored().allCows();
	var genomics = masterRindFacade.getBlackColored().genomics();
	var daughterTested = masterRindFacade.getBlackColored().daughterTested();
	var hornless = masterRindFacade.getBlackColored().hornless();

	Alloy.Collections.allCowsCol.reset();
	Alloy.Collections.genomicsCol.reset();
	Alloy.Collections.daughterTestedCol.reset();
	Alloy.Collections.hornlessCol.reset();

	for ( i = 0; i < allCows.length; i++) {

		var cow = allCows[i];
		// console.log(cow.getId() + ' ' + cow.getName() + ' ' + cow.getFather());

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.allCowsCol.add(model);
	}

	for ( i = 0; i < genomics.length; i++) {

		var cow = genomics[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.genomicsCol.add(model);
	}

	for ( i = 0; i < daughterTested.length; i++) {

		var cow = daughterTested[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.daughterTestedCol.add(model);
	}

	for ( i = 0; i < hornless.length; i++) {

		var cow = hornless[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.hornlessCol.add(model);
	}
});

$.sexed.addEventListener('click', function(e) {
	var win = Alloy.createController('sexed').getView();
	win.open();

	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadCowsFromDB();
	win.open();

	var allCows = masterRindFacade.getSexed().allCows();

	Alloy.Collections.allCowsCol.reset();

	for ( i = 0; i < allCows.length; i++) {

		var cow = allCows[i];

		var model = Alloy.createModel('cowsMod', {
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
			ff : "x " + cow.getFF(),
			fff : "x " + cow.getFFF(),
			father : cow.getFather(),
			breeder : cow.getBreeder(),
			image : cow.getImage(),
			name : cow.getName(),
			race : cow.getRace(),
			id : cow.getId(),
			gRZG : "RZG" + cow.getGRZG(),
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

		Alloy.Collections.allCowsCol.add(model);
	}
});

$.index.open();
