function itemClick(e) {
	switch(e.itemId) {
		case "Bremervoerde":
			{
				var win = Alloy.createController('bremervoerdeDetails').getView();
			}
			break;
		case "Cloppenburg":
			{
				var win = Alloy.createController('cloppenburgDetails').getView();
			}
			break;
		case "Lingen":
			{
				var win = Alloy.createController('lingenDetails').getView();
			}
			break;
		case "Uelzen":
			{
				var win = Alloy.createController('uelzenDetails').getView();
			}
			break;
		case "Verden":
			{
				var win = Alloy.createController('verdenDetails').getView();
			}
			break;
	}

	var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
	masterRindFacade.loadAppointmentsFromDB();
	win.open();

	var allShows = masterRindFacade.getShowsAndSpecials().allAppointments();
	var bremervoerde = masterRindFacade.getAuctions().bremervoerde();
	var cloppenburg = masterRindFacade.getAuctions().cloppenburg();
	var lingen = masterRindFacade.getAuctions().lingen();
	var uelzen = masterRindFacade.getAuctions().uelzen();
	var verden = masterRindFacade.getAuctions().verden();

	Alloy.Collections.allShowsCol.reset();
	Alloy.Collections.bremervoerdeCol.reset();
	Alloy.Collections.cloppenburgCol.reset();
	Alloy.Collections.lingenCol.reset();
	Alloy.Collections.uelzenCol.reset();
	Alloy.Collections.verdenCol.reset();

	for ( i = 0; i < allShows.length; i++) {

		var appointment = allShows[i];

		var model = Alloy.createModel('appointmentMod', {
			date : appointment.getDate(),
			distance : appointment.getDistance(),
			id : appointment.getId(),
			name : appointment.getName(),
		});

		Alloy.Collections.allShowsCol.add(model);
	}

	for ( i = 0; i < bremervoerde.length; i++) {

		var appointment = bremervoerde[i];
		var model = Alloy.createModel('appointmentMod', {
			date : appointment.getDate(),
			distance : appointment.getDistance(),
			id : appointment.getId(),
			name : appointment.getName(),
		});

		Alloy.Collections.bremervoerdeCol.add(model);
	}

	for ( i = 0; i < cloppenburg.length; i++) {

		var appointment = cloppenburg[i];

		var model = Alloy.createModel('appointmentMod', {
			date : appointment.getDate(),
			distance : appointment.getDistance(),
			id : appointment.getId(),
			name : appointment.getName(),
		});

		Alloy.Collections.cloppenburgCol.add(model);

		for ( i = 0; i < lingen.length; i++) {

			var appointment = lingen[i];

			var model = Alloy.createModel('appointmentMod', {
				date : appointment.getDate(),
				distance : appointment.getDistance(),
				id : appointment.getId(),
				name : appointment.getName(),
			});

			Alloy.Collections.lingenCol.add(model);
		}

		for ( i = 0; i < uelzen.length; i++) {

			var appointment = uelzen[i];

			var model = Alloy.createModel('appointmentMod', {
				date : appointment.getDate(),
				distance : appointment.getDistance(),
				id : appointment.getId(),
				name : appointment.getName(),
			});

			Alloy.Collections.uelzenCol.add(model);
		}

		for ( i = 0; i < verden.length; i++) {

			var appointment = verden[i];

			var model = Alloy.createModel('appointmentMod', {
				date : appointment.getDate(),
				distance : appointment.getDistance(),
				id : appointment.getId(),
				name : appointment.getName(),
			});

			Alloy.Collections.verdenCol.add(model);
		}
	}
};
