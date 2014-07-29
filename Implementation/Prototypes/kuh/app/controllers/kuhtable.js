// create a variable to reference our collection
var kuhCollection = Alloy.Collections.kuehe;

// data object
var data = kuhCollection.fetch();

// model
// data to model "kuehe"
var kuehe = Alloy.createModel("kuehe", data);

// Model zur Collection zufügen
kuhCollection.add(kuehe);

// Save model to the database
// kuehe.save(kuhCollection);

// Fetch Collection items
kuehe.fetch();

function closeWindow(e) {
	$.kuhTableWindow.close();
}