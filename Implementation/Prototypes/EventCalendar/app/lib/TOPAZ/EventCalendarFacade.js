 +TOPAZ.namespace('TOPAZ.EventCalendarFacade');
/**
 * Stellt Methoden für die Kontrollerklasse bereit. Kann als eine
 * Schnittstelle angesehen werden.
 *
 * @namespace TOPAZ
 * @class EventCalendarFacade
 */
TOPAZ.EventCalendarFacade= function() {
	this.categories=new Array();
	/**
	 * Liefert alle verfügbaren Kategorien. In der DB wird die Spalte
	 * Kategorie ausgelesen und alle doppelten Kategorien entfernt.
	 *
	 * @method getAllCategories
	 * @return {Array} categories
	 */
	this.getAllCategories= function() {
		var categorie;
		var data=categoriesCollection.fetch({
			query:"SELECT DISTINCT kategorie FROM EVENTS WHERE kategorie is NOT NULL"
		});
		var model=Alloy.createModel("EventCalendarModel",data);
		// for(){
		// model.set("numberOfEvents","5");
		// }
		//categoriesCollection.add(model);
		/*
		 * Fehler: am Ende der Collection steht ein Object vom Typ undefined
		 * Ursache: nach Aufruf von Collection.fetch() wurde Collection.add(model) aufgerufen
		 * Lösung: Collection.add(model) nicht aufrufen, fetch() füllt schon selber die Collection.
		 */
		for( i=0;i<categoriesCollection.length;i++) {
			categorie=categoriesCollection.at(i);
			this.categories.push(categorie.get("kategorie"));
		}
	};
	/**
	 * Liefert alle verfügbaren Termine zur Kategorie, die als
	 * Parameter übergeben wurde.
	 *
	 * @method getEventsForCategorie
	 * @param {String} categorieName
	 */
	this.getEventsForCategorie= function(categorieName) {
		var data=eventsCollection.fetch({
			query:"SELECT * FROM EVENTS WHERE kategorie = \'"+categorieName+"\' AND kategorie is NOT NULL"
		});
		var model=Alloy.createModel("EventCalendarModel",data);	
		
		return eventsCollection;
	};
	
	/**
	 * Liefert Anzahl der Termine zur Kategorie, die als
	 *
	 * @method getNumberOfEvents
	 */
	this.getNumberOfEvents= function() {
		
		for(i=0;i<categories.length;i++){
			getEventsForCategorie(categories[i]);
		}
		
		var numberOfEvents=eventsCollection;
		var model;
		
		for(int=0;i<eventsCollection.length;i++){
			console.log(model=eventsCollection.at(i));
			
			model.set("numberOfEvents",numberOfEvents);
			
			console.log(model.get("numberOfEvents"));
		}	
	};
	
	
	/**
	 * Liefert einen Termine passen zum Terminnamen, der als
	 * Parameter übergeben wurde.
	 *
	 * @method getEventByName
	 * @param {String} eventName
	 */
	this.getEventByName= function(eventName) {
		var data=eventCollection.fetch({
			query:"SELECT DISTINCT * FROM EVENTS WHERE name = \'"+eventName+"\' AND name is NOT NULL"
		});
		var model=Alloy.createModel("EventCalendarModel",data);
		//eventCollection.add(model);
	};
	
	/**
	 * Liefert einen Termine zur TerminId, die als
	 * Parameter übergeben wurde.
	 *
	 * @method getEventById
	 * @param {String} eventId
	 */
	this.getEventById= function(eventId) {
		var data=eventCollection.fetch({
			query:"SELECT DISTINCT * FROM EVENTS WHERE id = \'"+eventId+"\' AND id is NOT NULL"
		});
		var model=Alloy.createModel("EventCalendarModel",data);
	};
};
