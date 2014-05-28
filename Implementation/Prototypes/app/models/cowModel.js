/*
 * wenn die Anzahl der Columns geändert wurde, muss die
 * Tabelle aktualisiert werden. Todo eine Lösung per
 * Code finden. Jetzige Lösung ist: App deinstallieren.
 */

exports.definition = {
	config : {
		columns : {
			"id" : "text",
			"name" : "text",
			"description" : "text",
			"cowImage" : "text",
			"detailsImage" : "text",
			"relationShip" : "text",
			"breedingValue" : "text"
		},
		adapter : {
			type : "sql",
			collection_name : "cowModel"
		}
	}
};
