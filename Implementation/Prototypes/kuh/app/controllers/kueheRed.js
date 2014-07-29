var transformFunction = require('/kuhlistTransform').transformFunction;

var kuhCollection = Alloy.Collections.kuehe;

kuhCollection.add(kuehe);

// Fetch Collection items
var data = kuhCollection.fetch({
	query: 'SELECT * FROM kuehe WHERE Name IS NOT Null'
});

var kuehe = Alloy.createModel("kuehe", data);

// Filter Collection
function redFilter(collection) {
	return collection.where({Rasse:'RED'});
	//return collection.where({Hornlos:'H'});
	//return collection.where({A:'0'});
}


//kuhCollection.setSortField("gRZG", "DESC");
kuhCollection.sort();


function closeWindow(e) {
	$.redWindow.close();
	$.destroy();
}








