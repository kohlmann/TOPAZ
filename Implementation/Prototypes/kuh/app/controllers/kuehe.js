//var transformFunction = require('/kuhlistTransform');
var transformFunction = require('/kuhlistTransform').transformFunction;

// create a variable to reference our collection
var kuhCollection = Alloy.Collections.kuehe;

// Model zur Collection zufügen
kuhCollection.add(kuehe);

// data object
// Fetch Collection items
var data = kuhCollection.fetch({
	query: 'SELECT * FROM kuehe WHERE Name IS NOT Null'
});

// model
// data to model "kuehe"
var kuehe = Alloy.createModel("kuehe", data);

// Filter 
function filterFunction(collection) {
	//console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> typeof collection.where :", typeof collection.where );
	return collection.models;
}

function clickAlle() {
	kuhCollection.fetch( {
		query: 'SELECT * FROM kuehe WHERE Name IS NOT NULL'
	});
}

function clickHolFilter() {
	kuhCollection.fetch({
		query: 'SELECT * FROM kuehe WHERE Name IS NOT NULL AND Rasse="HOL"'
	});
}

function clickRedFilter() {
	//kuhCollection.reset();
	kuhCollection.fetch({
		query: 'SELECT * FROM kuehe WHERE Name IS NOT NULL AND Rasse="RED"'
	});
}

function clickGenomicFilter() {
	kuhCollection.fetch( {
		query: 'SELECT * FROM kuehe WHERE Genomic = "G"'
	});
}

function clickToechterFilter() { 
	kuhCollection.fetch( {
		query: 'SELECT * FROM kuehe WHERE Genomic = "T"'
	});
}

function clickHornlosFilter() {
	kuhCollection.fetch( {
		query: 'SELECT * FROM kuehe WHERE Hornlos = "H"'
	});
}

function clickGesexteFilter() {
	kuhCollection.fetch( {
		query: 'SELECT * FROM kuehe WHERE gesext = "1"'
	});
}

// Sort

function clickSortName() {
	kuhCollection.setSortField("Name", "ASC");
	kuhCollection.sort();
}

function clickSortRZG() {
	kuhCollection.setSortField("gRZG", "DESC");
	kuhCollection.sort();
}

function clickSortRZM() {
	kuhCollection.setSortField("gRZM", "DESC");
	kuhCollection.sort();
}

function clickSortMilchKg() {
	kuhCollection.setSortField("MilchKg", "DESC");
	kuhCollection.sort();
}


// Save model to the database
// kuehe.save(kuhCollection);

// kuhCollection.setSortField("Name", "ASC");
kuhCollection.sort();


// show Details
function showId(e) {

		// alert(e.section.getItemAt(e.itemIndex).model);
		
		// get the clicked section
		var section = $.list.sections[e.sectionIndex];

		// get the clicked item from this section
		var item = e.section.getItemAt(e.itemIndex);
		
		var detailObj = item.model;
		//Ti.API.info(">>>>>> detailObj: ", detailObj);
		
		//var detailController = Alloy.createController('kuhdetail', {
		//	detailData : kuhCollection.get(detailObj),
		//	test : "doof!"
		//});
				
		var detailController = Alloy.createController('kuhdetail',{
			"$model": detailObj,
		});
		
		detailController.getView().open();
		
		
	
}


function closeWindow(e) {
	$.destroy();
	$.kuhWindow.close();
}

function toggleSearch(e) {
	($.searchBar.visible === true) ? $.searchBar.setVisible('false') : $.searchBar.setVisible('true');
	($.searchBar.height === Ti.UI.SIZE) ? $.searchBar.setHeight('0') : $.searchBar.setHeight(Ti.UI.SIZE);
}

$.list.addEventListener('longpress', function(e) {
	$.searchBar.setVisible('true');
});






