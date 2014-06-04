require('cow');
require('dummyDataGenerator');

var cowModels = Alloy.Collections.cowModel,
	m_Cow = cow,
	m_Cow1 = cow,
	m_Cow2 = cow;

	
	//TODO:bessere Lösung überlegen, es wir bei jeder Viewaktualisierung immer 10 neue Items generiert.
	if(cowModels.length < 1){
		for(i=0;i<=10;i++){
			m_Cow.cowAll(i,"Aval","geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV",
			"/images/cow.png","/images/cowDetails01.png","/images/cowDetails01.png", "/images/breedingValues.png");
			dummyDataGenerator.addCow(cowModels,m_Cow);
			dummyDataGenerator.saveCows();
		}	
		
			m_Cow.cowAll(1,"Aval","geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV",
			"/images/cow.png","/images/cowDetails01.png","/images/cowDetails01.png", "/images/breedingValues.png");
			dummyDataGenerator.addCow(cowModels,m_Cow);
			dummyDataGenerator.saveCows();
						
			m_Cow1.cowAll(2,"Georg","geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV",
			"/images/cow.png","/images/cowDetails01.png","/images/cowDetails01.png", "/images/breedingValues.png");
			dummyDataGenerator.addCow(cowModels,m_Cow1);
			dummyDataGenerator.saveCows();
						
			m_Cow2.cowAll(3,"Test","geb.: 17.07.2004 · Züchter: Loelfer & Guhle GbR, Steinfurt · Besitzer: RSH, RMV",
			"/images/cow.png","/images/cowDetails01.png","/images/cowDetails01.png", "/images/breedingValues.png");
			dummyDataGenerator.addCow(cowModels,m_Cow2);
			dummyDataGenerator.saveCows();
		
	}
	else
	{
		dummyDataGenerator.loadCows();
	}

$.listView.addEventListener('itemclick', function(e){
	console.log("----------------------test-------------------");
	console.log(Titanium.Platform.displayCaps.platformWidth+"  "+Titanium.Platform.displayCaps.platformHeight);
	var section = Titanium.UI.ListSection;
	sections=$.listView.getSections();
	items=sections[0].getItems();
	console.log(items[3].itemId);
	
	var win=Alloy.createController('cowDetails').getView();
	win.open();
});

$.listView.addEventListener('swipe', function(e){
	$.searchBar.setVisible('true');
});
