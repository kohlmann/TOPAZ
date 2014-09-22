TOPAZ.namespace('TOPAZ.masterrind.impl.MasterRindSingelton');

require('TOPAZ/masterrind/impl/MasterRindFacade');

/**
 * Erstellt nur ein Instanz der MasterRindFacade.
 * 
 * grundsätzlich funktioniert, es wird nur die Liste mit 
 * der Collection nicht gefüllt.
 * 
 * nizufügen der Models zur Collection, macht alles langsam
 * mögliche Lösnug: backbone anschauen (model, collection) oder 
 * collection im singelton füllen und im controller starten
 * 
 * nachschauen wie es in titanium mit mvc genaufunktioniert
 * 
 * var b = MySingletonClass() in controllern benutzen
 *
 * @namespace TOPAZ.masterrind.impl
 * @class MasterRindSingelton
 */

TOPAZ.masterrind.impl.MasterRindSingelton = function() {
	if (arguments.callee._singletonInstance)
		return arguments.callee._singletonInstance;
	arguments.callee._singletonInstance = this;
	
	this.allCowsModels=new Array();
	this.genomicsModels=new Array();
	this.daughterTestedModels=new Array();
	this.hornlessModels=new Array();
	
	this.myConstructor = function() {
		var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
		var blackColored = masterRindFacade.getBlackColored();

		var allCows = blackColored.allCows();
		var genomics = blackColored.genomics();
		var daughterTested = blackColored.daughterTested();
		var hornless = blackColored.hornless();

		
		for ( i = 0; i < allCows.length; i++) {
			
			
			var cow = allCows[i];
			console.log(cow.getName());
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
			this.allCowsModels.push(model);
			
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
			this.genomicsModels.push(model);
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
			this.daughterTestedModels.push(model);
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
			this.hornlessModels.push(model);
		}
		console.log(Alloy.Collections.allCowsCol.length);
	};
	

};

// function MySingletonClass() {
//
//
// }
//
// var a = new MySingletonClass()
// var b = MySingletonClass()
// Print( a === b ); // prints: true