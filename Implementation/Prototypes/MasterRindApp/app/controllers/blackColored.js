require('TOPAZ/masterrind/datatypes/Cow');
require('TOPAZ/masterrind/impl/MasterRindFacade');
require('TOPAZ/masterrind/impl/MasterRindSingelton');

/**
 * Fehler: app stürzt ab, wenn die Liste das zweite Mal angeklickt wird
 * Ursache: unbekannt
 * Lösung: unbekannt
 */

/**
 * Fehler: Collection ist leer, wenn fetch aufgerufen wird
 * Ursache: Daten wurden nicht gespeichert
 * Lösung: save() aufrufen z.B. model.save()
 */

//TODO: close bei allen controllern einfügen
$.tabGroup.addEventListener('close', function() {
	$.destroy();
});

$.tabGroup.addEventListener('focus', function(e) {

	var masterRindSingelton = new TOPAZ.masterrind.impl.MasterRindSingelton();
	Alloy.Collections.allCowsCol.reset();
	Alloy.Collections.daughterTestedCol.reset();
	Alloy.Collections.hornlessCol.reset();
	Alloy.Collections.genomicsCol.reset();

	switch(e.index) {
		case 0:
			{
				for ( i = 0; i <= masterRindSingelton.allCowsModels.length; i++) {
					Alloy.Collections.allCowsCol.add(masterRindSingelton.allCowsModels[i]);
				}
			}
			break;
		case 1:
			{
				for ( i = 0; i <= masterRindSingelton.genomicsModels.length; i++) {
					Alloy.Collections.genomicsCol.add(masterRindSingelton.genomicsModels[i]);
				}
			}
			break;
		case 2:
			{
				for ( i = 0; i <= masterRindSingelton.daughterTestedModels.length; i++) {
					Alloy.Collections.daughterTestedCol.add(masterRindSingelton.daughterTestedModels[i]);
				}
			}
			break;
		case 3:
			{
				for ( i = 0; i <= masterRindSingelton.hornlessModels.length; i++) {
					Alloy.Collections.hornlessCol.add(masterRindSingelton.hornlessModels[i]);
				}
			}
			break;
	}

});

function itemClick(e) {
	var win = Alloy.createController('cowDetails').getView();
	win.open();

	var section = $.listView.sections[e.sectionIndex];
	var item = section.getItemAt(e.itemIndex);

	for ( i = 0; i < cows.length; i++) {

		var cow = cows[i];

		if (cow.getId() == e.itemId) {

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

			Alloy.Collections.cowDetailsCol.add(model);
		}
	}
};
