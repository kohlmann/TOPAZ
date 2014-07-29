var args=arguments[0] || {};

//Ti.API.info("args.$model: ", args.$model);

// add the datatransformation

$.kuhDetail = _.extend({}, $.kuhDetail, {
	transform : function() {
		return dataTransformation(this);
	}
});

// instance variable used in data-binding
$.kuhDetail.set(args.$model);

//Ti.API.info(dataTransformation($.kuhDetail));

function dataTransformation(_model) {
	
	return {
		name : _model.attributes.Name,
		headerline : _model.attributes.Name + " " + _model.attributes.Herdbuchnr + " RZG " + _model.attributes.gRZG,
		subheaderline : _model.attributes.Vater + " x " + _model.attributes.MV_Name + " x " + _model.attributes.MMV_Name,
		herdbuchnr : _model.attributes.Herdbuchnr,
		rasse : _model.attributes.Rasse,
		grzg :  _model.attributes.gRZG,
		hornlos : _model.attributes.Hornlos,
		genomic : _model.attributes.Genomic,
		a : _model.attributes.A,
		gesext : _model.attributes.gesext,
		frischsperma : _model.attributes.Frischsperma,

		vatervv : "Vater: " +_model.attributes.Vater + " v. " + _model.attributes.VV,
		mvmvv : "MV: " + _model.attributes.MV_Name + " v. " + _model.attributes.MVV,
		
		vater : _model.attributes.Vater,
		vv : _model.attributes.VV,
		mvname : _model.attributes.MV_Name,
		mmvname : _model.attributes.MMV_Name,		
		vmv : _model.attributes.VMV,
		mvv : _model.attributes.MVV,
		mmvv : _model.attributes.MMVV,
		grzm :  + _model.attributes.gRZM,
		milchkg : _model.attributes.MilchKg,
		fettpr : _model.attributes.FettPr,
		fettkg : _model.attributes.FettKg,
		eiwpr : _model.attributes.EiwPr,
		eiwkg : _model.attributes.EiwKg,
		grze :  + _model.attributes.gRZE,
		milchtyp : _model.attributes.Milchtyp,
		koerper : _model.attributes.Koerper,
		fundament : _model.attributes.Fundament,
		euter : _model.attributes.Euter,
		grzfit : _model.attributes.gRZFit,
		grzn :  + _model.attributes.gRZN,
		grzs :  + _model.attributes.gRZS,
		grzd :  + _model.attributes.gRZD,
		grzr :  + _model.attributes.gRZR,
		grzkd :  + _model.attributes.gRZKd,
		grzkm :  + _model.attributes.gRZKm,
		kalbeverlaufdirekt : _model.attributes.Kalbeverlaufdirekt,
		gendefekt : _model.attributes.Gendefekt,
		aaa : "aAa: " + _model.attributes.aAa,
		geburtstag : "geb.: " + _model.attributes.GebdatTag + "." + _model.attributes.GebdatMonat + "." + _model.attributes.GebdatJahr,
		gebdattag: _model.attributes.GebdatTag,
		gebdatmonat: _model.attributes.GebdatMonat,
		gebdatjahr: _model.attributes.GebdatJahr,
		zuechter: "Züchter: " + _model.attributes.Zuechter,
		anpaarung: _model.attributes.Anpaarung
	};
}

function closeDetail(e) {
	$.destroy();
	$.detail.close();
}