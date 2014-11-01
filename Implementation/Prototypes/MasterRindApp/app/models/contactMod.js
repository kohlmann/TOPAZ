exports.definition = {
	config : {
		columns : {

			"country" : "text",
			"id" : "text",
			"info" : "text",
			"name" : "text",
			"number" : "text",
			"street" : "text",
			"town" : "text",
			"zipCode" : "text",
		},
		adapter : {
			// type : "sql",
			collection_name : "contactMod"
		}
	}
};
