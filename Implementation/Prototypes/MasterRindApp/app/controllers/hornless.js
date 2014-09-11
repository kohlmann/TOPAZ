require('TOPAZ/masterrind/datatypes/Cow');
require('TOPAZ/masterrind/impl/MasterRindFacade');

/**
 * Fehler: app stürzt ab, wenn die Liste das zweite Mal angeklickt wird
 * Ursache: unbekannt
 * Lösung: unbekannt
 */

var cows;
var masterRindFacade;

function init() {
	//masterrind
	//load
	masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadCowsFromDB();
}

$.tabGroup.addEventListener('focus', function(e) {
	init();
	console.log("----------------------------");
	console.log(e.index);

	switch(e.index) {
		case 0:
			{
				cows = masterRindFacade.getHornless().allCows();
			}
			break;
		case 1:
			{
				cows = masterRindFacade.getHornless().blackColored();
			}
			break;
		case 2:
			{
				cows = masterRindFacade.getHornless().genomics();
			}
			break;
		case 3:
			{
				cows = masterRindFacade.getHornless().homozygous();
			}
			break;
		case 4:
			{
				cows = masterRindFacade.getHornless().redColored();
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
