exports.definition = {
	config : {
		columns : {

			"a" : "text",
			"aAa" : "text",
			"mating" : "text",
			"yearOfBirth" : "text",
			"monthOfBirth" : "text",
			"dayOfBirth" : "text",
			"geneDefect" : "text",
			"herdBookNumber" : "text",
			"mmfName" : "text",
			"mmff" : "text",
			"mfName" : "text",
			"mff" : "text",
			"fmf" : "text",
			"ff" : "text",
			"fff" : "text",
			"father" : "text",
			"breeder" : "text",
			"image" : "image",
			"name" : "text",
			"race" : "text",
			"id" : "text",
			"gRZG" : "text",
			"gRZM" : "text",
			"milkKg" : "text",
			"fatPercent" : "text",
			"fatKg" : "text",
			"proteinPercent" : "text",
			"proteinKg" : "text",
			"gRZE" : "text",
			"milkType" : "text",
			"body" : "text",
			"base" : "text",
			"udder" : "text",
			"gRZFit" : "text",
			"gRZN" : "text",
			"gRZS" : "text",
			"gRZD" : "text",
			"gRZR" : "text",
			"gRZkd" : "text",
			"gRZKM" : "text",
			"calfRunningDirectly" : "text",
			"backLegsPosition" : "text",
			"beckTilt" : "text",
			"beckWide" : "text",
			"behindUdderHeight" : "text",
			"bodyDepth" : "text",
			"centralBelt" : "text",
			"dairyCharacter" : "text",
			"directionOfGrowthBack" : "text",
			"directionOfGrowthFront" : "text",
			"DirectionOfGrowthLength" : "text",
			"foreUdderSuspension" : "text",
			"hock" : "text",
			"movement" : "text",
			"size" : "text",
			"stealAngle" : "text",
			"strength" : "text",
			"udderDepth" : "text",
			"hornless" : "text",
			"genomics" : "text",
			"sexed" : "text",
			"freshSemen" : "text"
		},
		adapter : {
			//type : "sql",
			collection_name : "RSH",
			// db_file gibt an, dass products.sqlite benutzt wird um die Datenbank zu installieren
			// Pre-load the database (safe method)
			//db_file : "/RSH.sqlite",

			// db_name sagt dem model, dass es den Namen anstatt des Dateinamens verwenden soll
			// db_name required when pre-loading a db
			// should the name of your pre-loaded db
			//db_name : "RSH",
			
			//wichtig, wenn in db primerykey gesetzt ist
			// idAttribute: 'id'
		}
	}
};
