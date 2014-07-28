TOPAZ.namespace('TOPAZ.masterrind.interfaces.Cow');

/**
 * Bildet eine Datenstruktur zum Speichern von Daten einer Kuh.
 *
 * @namespace TOPAZ.masterrind.interfaces
 * @class Cow
 */
TOPAZ.masterrind.interfaces.Cow = function() {

	var m_a = "null";
	var m_aAa = "null";
	//anpparung
	var m_mating = "null";
	var m_yearOfBirth = "null";
	var m_monthOfBirth = "null";
	var m_dayOfBirth = "null";
	var m_geneDefect = "null";
	//herdbuchnr
	var m_herdBookNumber = "null";
	var m_mmfName = "null";
	var m_mmff = "null";
	var m_mfName = "null";
	var m_mff = "null";
	var m_fmf = "null";
	var m_ff = "null";
	var m_fff = "null";
	var m_father = "null";
	var m_breeder = "null";
	var m_image = "null";
	var m_name = "null";
	var m_race = "null";
	var m_id = "null";
	var m_gRZG = "null";
	var m_gRZM = "null";
	var m_milkKg = "null";
	var m_fatPercent = "null";
	var m_fatKg = "null";
	var m_proteinPercent = "null";
	var m_proteinKg = "null";
	var m_gRZE = "null";
	var m_milkType = "null";
	var m_body = "null";
	var m_base = "null";
	var m_udder = "null";
	var m_gRZFit = "null";
	var m_gRZN = "null";
	var m_gRZS = "null";
	var m_gRZD = "null";
	var m_gRZR = "null";
	var m_gRZkd = "null";
	var m_gRZKM = "null";
	var m_calfRunningDirectly = "null";
	var m_cowType = "null";

	/**
	 * Gibt a der Kuh zurück.
	 *
	 * @method getA
	 * @return {String} m_a
	 */
	this.getA = function() {
		return m_a;
	};

	/**
	 * Gibt aAa der Kuh zurück.
	 *
	 * @method getAAA
	 * @return {String} m_aAa
	 */
	this.getAAA = function() {
		return m_aAa;
	};

	/**
	 * Gibt Anpaarung der Kuh zurück.
	 *
	 * @method getMating
	 * @return {String} m_mating
	 */
	this.getMating = function() {
		return m_mating;
	};

	/**
	 * Gibt den Geburtsjahr der Kuh zurück.
	 *
	 * @method getYearOfBirth
	 * @return {String} m_yearOfBirth
	 */
	this.getYearOfBirth = function() {
		return m_yearOfBirth;
	};

	/**
	 * Gibt den Geburtsmonat der Kuh zurück.
	 *
	 * @method getMonthOfBirth
	 * @return {String} m_monthOfBirth
	 */
	this.getMonthOfBirth = function() {
		return m_monthOfBirth;
	};

	/**
	 * Gibt den Geburtstag der Kuh zurück.
	 *
	 * @method getDayOfBirth
	 * @return {String} m_dayOfBirth
	 */
	this.getDayOfBirth = function() {
		return m_dayOfBirth;
	};

	/**
	 * Gibt Genedefekt der Kuh zurück.
	 *
	 * @method getGeneDefect
	 * @return {String} m_geneDefect
	 */
	this.getGeneDefect = function() {
		return m_geneDefect;
	};

	/**
	 * Gibt die Herdbuchnummer der Kuh zurück.
	 *
	 * @method getHerdBookNumber
	 * @return {String} m_herdBookNumber
	 */
	this.getHerdBookNumber = function() {
		return m_herdBookNumber;
	};

	/**
	 * Gibt den Muttersmuttervaternamen der Kuh zurück.
	 *
	 * @method getMMFName
	 * @return {String} m_mmfName
	 */
	this.getMMFName = function() {
		return m_mmfName;
	};

	/**
	 * Gibt den Muttersmuttervattersvater der Kuh zurück.
	 *
	 * @method getMMFF
	 * @return {String} m_mmff
	 */
	this.getMMFF = function() {
		return m_mmff;
	};

	/**
	 * Gibt den Muttersvaternamen der Kuh zurück.
	 *
	 * @method getMFName
	 * @return {String} m_mfName
	 */
	this.getMFName = function() {
		return m_mfName;
	};

	/**
	 * Gibt den Muttervatersvater der Kuh zurück.
	 *
	 * @method getMFF
	 * @return {String} m_mff
	 */
	this.getMFF = function() {
		return m_mff;
	};

	/**
	 * Gibt den Vatersmuttervater der Kuh zurück.
	 *
	 * @method getFMF
	 * @return {String} m_fmf
	 */
	this.getFMF = function() {
		return m_fmf;
	};

	/**
	 * Gibt den Vatervater der Kuh zurück.
	 *
	 * @method getFF
	 * @return {String} m_ff
	 */
	this.getFF = function() {
		return m_ff;
	};

	/**
	 * Gibt den Vatervatervater der Kuh zurück.
	 *
	 * @method getFFF
	 * @return {String} m_ff
	 */
	this.getFFF = function() {
		return m_fff;
	};

	/**
	 * Gibt den Vater der Kuh zurück.
	 *
	 * @method getFather
	 * @return {String} m_father
	 */
	this.getFather = function() {
		return m_father;
	};

	/**
	 * Gibt den Züchter Kuh zurück.
	 *
	 * @method getBreeder
	 * @return {String} m_breeder
	 */
	this.getBreeder = function() {
		return m_breeder;
	};

	/**
	 * Gibt das Bild der Kuh zurück.
	 *
	 * @method getImage
	 * @return {String} m_image
	 */
	this.getImage = function() {
		return m_image;
	};

	/**
	 * Gibt den Namen der Kuh zurück.
	 *
	 * @method getName
	 * @return {String} m_name
	 */
	this.getName = function() {
		return m_name;
	};

	/**
	 * Gibt die Rasse der Kuh zurück.
	 *
	 * @method getRace
	 * @return {String} m_race
	 */
	this.getRace = function() {
		return m_race;
	};

	/**
	 * Gibt die Id der Kuh zurück.
	 *
	 * @method getId
	 * @return {String} m_id
	 */
	this.getId = function() {
		return m_id;
	};

	/**
	 * Gibt den Gesamtzuchtwert der Kuh zurück.
	 *
	 * @method getGRZG
	 * @return {String} m_gRZG
	 */
	this.getGRZG = function() {
		return m_gRZG;
	};

	/**
	 * Gibt Relativzuchtwert Milch der Kuh zurück.
	 *
	 * @method getGRZM
	 * @return {String} m_gRZM
	 */
	this.getGRZM = function() {
		return m_gRZM;
	};

	/**
	 * Gibt MilckKg der Kuh zurück.
	 *
	 * @method getMilkKg
	 * @return {String} m_milkKg
	 */
	this.getMilkKg = function() {
		return m_milkKg;
	};

	/**
	 * Gibt Milchfettanteil der Kuh in Prozent zurück.
	 *
	 * @method getFatPercent
	 * @return {String} m_fatPercent
	 */
	this.getFatPercent = function() {
		return m_fatPercent;
	};

	/**
	 * Gibt den Milchfettanteil der Kuhin kg zurück.
	 *
	 * @method getFatKg
	 * @return {String} m_fatKg
	 */
	this.getFatKg = function() {
		return m_fatKg;
	};

	/**
	 * Gibt den Milcheiweißanteil der Kuh in Prozent zurück.
	 *
	 * @method getProteinPercent
	 * @return {String} m_proteinPercent
	 */
	this.getProteinPercent = function() {
		return m_proteinPercent;
	};

	/**
	 * Gibt den Milcheiweißanteil der Kuh in kg zurück.
	 *
	 * @method getProteinKg
	 * @return {String} m_proteinKg
	 */
	this.getProteinKg = function() {
		return m_proteinKg;
	};

	/**
	 * Gibt Relativzuchtwert Exterieur der Kuh zurück.
	 *
	 * @method getGRZE
	 * @return {String} m_gRZE
	 */
	this.getGRZE = function() {
		return m_gRZE;
	};

	/**
	 * Gibt den Milchtyp der Kuh zurück.
	 *
	 * @method getMilkType
	 * @return {String} m_milkType
	 */
	this.getMilkType = function() {
		return m_milkType;
	};

	/**
	 * Gibt den Körper der Kuh zurück.
	 *
	 * @method getBody
	 * @return {String} m_body
	 */
	this.getBody = function() {
		return m_body;
	};

	/**
	 * Gibt den Fundament der Kuh zurück.
	 *
	 * @method getBase
	 * @return {String} m_base
	 */
	this.getBase = function() {
		return m_base;
	};

	/**
	 * Gibt Euter der Kuh zurück.
	 *
	 * @method getUdder
	 * @return {String} m_udder
	 */
	this.getUdder = function() {
		return m_udder;
	};

	/**
	 * Gibt den Fitnesszuchtwert der Kuh zurück.
	 *
	 * @method getGRZFit
	 * @return {String} m_gRZFit
	 */
	this.getGRZFit = function() {
		return m_gRZFit;
	};

	/**
	 * Gibt Relativzuchtwert Nutzungsdauer der Kuh zurück.
	 *
	 * @method getGRZN
	 * @return {String} m_gRZN
	 */
	this.getGRZN = function() {
		return m_gRZN;
	};

	/**
	 * Gibt Relativzuchtwert Zellzahl der Kuh zurück.
	 *
	 * @method getId
	 * @return {String} m_id
	 */
	this.getGRZS = function() {
		return m_gRZS;
	};

	/**
	 * Gibt Relativzuchtwert Melkbarkeit der Kuh zurück.
	 *
	 * @method getGRZD
	 * @return {String} m_gRZD
	 */
	this.getGRZD = function() {
		return m_gRZD;
	};

	/**
	 * Gibt Relativzuchtwert Reproduktion der Kuh zurück.
	 *
	 * @method getGRZR
	 * @return {String} m_gRZR
	 */
	this.getGRZR = function() {
		return m_gRZR;
	};

	/**
	 * Gibt Relativzuchtwert Kalbverlauf direkt der Kuh zurück.
	 *
	 * @method getGRZkd
	 * @return {String} m_gRZkd
	 */
	this.getGRZkd = function() {
		return m_gRZkd;
	};

	/**
	 * Gibt Relativzuchtwert Kalbverlauf maternal der Kuh zurück.
	 *
	 * @method getGRZkd
	 * @return {String} m_gRZkd
	 */
	this.getGRZKM = function() {
		return m_gRZKM;
	};

	/**
	 * Gibt den direkten Kalbverlauf der Kuh zurück.
	 *
	 * @method getCalfRunningDirectly
	 * @return {String} m_calfRunningDirectly
	 */
	this.getCalfRunningDirectly = function() {
		return m_calfRunningDirectly;
	};

	/**
	 * Gibt den Kuhtyp zurück.
	 *
	 * @method getCowType
	 * @return {String} m_cowType
	 */
	this.getCowType = function() {
		return m_cowType;
	};

	/**
	 * Setzt a der Kuh.
	 *
	 * @method setA
	 * @param {String} a
	 *
	 */
	this.setA = function(a) {
		m_a = a;
	};

	/**
	 * Setzt aAa der Kuh.
	 *
	 * @method setAAA
	 * @param {String} aAa
	 *
	 */
	this.setAAA = function(aAa) {
		m_aAa = aAa;
	};

	/**
	 * Setzt Anpaarung der Kuh.
	 *
	 * @method setMating
	 * @param {String} mating
	 *
	 */
	this.setMating = function(mating) {
		m_mating = mating;
	};

	/**
	 * Setzt Geburtsjahr der Kuh.
	 *
	 * @method setYearOfBirth
	 * @param {String} yearOfBirth
	 *
	 */
	this.setYearOfBirth = function(yearOfBirth) {
		m_yearOfBirth = yearOfBirth;
	};

	/**
	 * Setzt Geburtsmonat der Kuh.
	 *
	 * @method setMonthOfBirth
	 * @param {String} monthOfBirth
	 *
	 */
	this.setMonthOfBirth = function(monthOfBirth) {
		m_monthOfBirth = monthOfBirth;
	};

	/**
	 * Setzt den Geburtstag der Kuh.
	 *
	 * @method setDayOfBirth
	 * @param {String} dayOfBirth
	 *
	 */
	this.setDayOfBirth = function(dayOfBirth) {
		m_dayOfBirth = dayOfBirth;
	};

	/**
	 * Setzt Gendefect der Kuh.
	 *
	 * @method setGeneDefect
	 * @param {String} geneDefect
	 *
	 */
	this.setGeneDefect = function(geneDefect) {
		m_geneDefect = geneDefect;
	};

	/**
	 * Setzt die Herdbuchnummer der Kuh.
	 *
	 * @method setHerdBookNumber
	 * @param {String} herdBooknumber
	 *
	 */
	this.setHerdBookNumber = function(herdBookNumber) {
		m_herdBookNumber = herdBookNumber;
	};

	/**
	 * Setzt den Muttermuttervaternamen der Kuh.
	 *
	 * @method setMMFName
	 * @param {String} mmfName
	 *
	 */
	this.setMMFName = function(mmfName) {
		m_mmfName = mmfName;
	};

	/**
	 * Setzt den Muttersmuttervatervater der Kuh.
	 *
	 * @method setMMFF
	 * @param {String} mmff
	 *
	 */
	this.setMMFF = function(mmff) {
		m_mmff = mmff;
	};

	/**
	 * Setzt den Muttersvaternamen der Kuh.
	 *
	 * @method setMFName
	 * @param {String} mfName
	 *
	 */
	this.setMFName = function(mfName) {
		m_mfName = mfName;
	};

	/**
	 * Setzt den Muttersvatervater der Kuh.
	 *
	 * @method setMFF
	 * @param {String} mff
	 *
	 */
	this.setMFF = function(mff) {
		m_mff = mff;
	};

	/**
	 * Setzt den Vatersmuttervater der Kuh.
	 *
	 * @method setFMF
	 * @param {String} fmf
	 *
	 */
	this.setFMF = function(fmf) {
		m_fmf = fmf;
	};

	/**
	 * Setzt den Vatervater der Kuh.
	 *
	 * @method setFF
	 * @param {String} ff
	 *
	 */
	this.setFF = function(ff) {
		m_ff = ff;
	};

	/**
	 * Setzt den Vatervatervater der Kuh.
	 *
	 * @method setFFF
	 * @param {String} fff
	 *
	 */
	this.setFFF = function(fff) {
		m_fff = fff;
	};

	/**
	 * Setzt den Vater der Kuh.
	 *
	 * @method setFather
	 * @param {String} father
	 *
	 */
	this.setFather = function(father) {
		m_father = father;
	};

	/**
	 * Setzt den Züchter der Kuh.
	 *
	 * @method setBreeder
	 * @param {String} breeder
	 *
	 */
	this.setBreeder = function(breeder) {
		m_breeder = breeder;
	};

	/**
	 * Setzt das Bild der Kuh.
	 *
	 * @method setImage
	 * @param {String} image
	 *
	 */
	this.setImage = function(image) {
		m_image = image;
	};

	/**
	 * Setzt den Namen der Kuh.
	 *
	 * @method setName
	 * @param {String} name
	 *
	 */
	this.setName = function(name) {
		m_name = name;
	};

	/**
	 * Setzt die Rasse der Kuh.
	 *
	 * @method setRace
	 * @param {String} race
	 *
	 */
	this.setRace = function(race) {
		m_race = race;
	};

	/**
	 * Setzt die Id der Kuh.
	 *
	 * @method setId
	 * @param {String} id
	 *
	 */
	this.setId = function(id) {
		m_id = id;
	};

	/**
	 * Setzt den Gesamtzuchtwert der Kuh.
	 *
	 * @method setGRZG
	 * @param {String} gRZG
	 *
	 */
	this.setGRZG = function(gRZG) {
		m_gRZG = gRZG;
	};

	/**
	 * Setzt Relativzuchtwert Milch der Kuh.
	 *
	 * @method setGRZM
	 * @param {String} gRZM
	 *
	 */
	this.setGRZM = function(gRZM) {
		m_gRZM = gRZM;
	};

	/**
	 * Setzt den MilchKg der Kuh.
	 *
	 * @method setMilkKg
	 * @param {String} milkKg
	 *
	 */
	this.setMilkKg = function(milkKg) {
		m_milkKg = milkKg;
	};

	/**
	 * Setzt den Milchfettanteil der Kuh in Prozent.
	 *
	 * @method setFatPercent
	 * @param {String} fatPercent
	 *
	 */
	this.setFatPercent = function(fatPercent) {
		m_fatPercent = fatPercent;
	};

	/**
	 * Setzt Milchfettanteil der Kuh in kg.
	 *
	 * @method setFatKg
	 * @param {String} fatKg
	 *
	 */
	this.setFatKg = function(fatKg) {
		m_fatKg = fatKg;
	};

	/**
	 * Setzt den Milcheiweißanteil der Kuh in Prozent.
	 *
	 * @method setProteinPercent
	 * @param {String} proteinPercent
	 *
	 */
	this.setProteinPercent = function(proteinPercent) {
		m_proteinPercent = proteinPercent;
	};

	/**
	 * Setzt den Milcheiweißanteil der Kuh in kg.
	 *
	 * @method setProteinKg
	 * @param {String} proteinKg
	 *
	 */
	this.setProteinKg = function(proteinKg) {
		m_proteinKg = proteinKg;
	};

	/**
	 * Setzt Relativzuchtwert Exterieur der Kuh.
	 *
	 * @method setGRZE
	 * @param {String} gRZE
	 *
	 */
	this.setGRZE = function(gRZE) {
		m_gRZE = gRZE;
	};

	/**
	 * Setzt den Milchtyp der Kuh.
	 *
	 * @method setMilkType
	 * @param {String} milkType
	 *
	 */
	this.setMilkType = function(milkType) {
		m_milkType = milkType;
	};

	/**
	 * Setzt den Körper der Kuh.
	 *
	 * @method setBody
	 * @param {String} body
	 *
	 */
	this.setBody = function(body) {
		m_body = body;
	};

	/**
	 * Setzt den Fundament der Kuh.
	 *
	 * @method setBase
	 * @param {String} base
	 *
	 */
	this.setBase = function(base) {
		m_base = base;
	};

	/**
	 * Setzt Euter der Kuh.
	 *
	 * @method setUdder
	 * @param {String} udder
	 *
	 */
	this.setUdder = function(udder) {
		m_udder = udder;
	};

	/**
	 * Setzt Fitnesszuchtwert der Kuh.
	 *
	 * @method setGRZFit
	 * @param {String} gRZFit
	 *
	 */
	this.setGRZFit = function(gRZFit) {
		m_gRZFit = gRZFit;
	};

	/**
	 * Setzt Relativzuchtwert Nutzungsdauer der Kuh.
	 *
	 * @method setGRZN
	 * @param {String} gRZN
	 *
	 */
	this.setGRZN = function(gRZN) {
		m_gRZN = gRZN;
	};

	/**
	 * Setzt Relativzuchtwert Zellzahl der Kuh.
	 *
	 * @method setGRZS
	 * @param {String} gRZS
	 *
	 */
	this.setGRZS = function(gRZS) {
		m_gRZS = gRZS;
	};

	/**
	 * Setzt Relativzuchtwert Melkbarkeit der Kuh.
	 *
	 * @method setGRZD
	 * @param {String} gRZD
	 *
	 */
	this.setGRZD = function(gRZD) {
		m_gRZD = gRZD;
	};

	/**
	 * Setzt Relativzuchtwert Reproduktion der Kuh.
	 *
	 * @method setGRZR
	 * @param {String} gRZR
	 *
	 */
	this.setGRZR = function(gRZR) {
		m_gRZR = gRZR;
	};

	/**
	 * Setzt Relativzuchtwert Kalbverlauf direkt der Kuh.
	 *
	 * @method setGRZkd
	 * @param {String} gRZkd
	 *
	 */
	this.setGRZkd = function(gRZkd) {
		m_gRkd = gRZkd;
	};

	/**
	 * Setzt Relativzuchtwert Kalbverlauf maternal der Kuh.
	 *
	 * @method setGRZM
	 * @param {String} gRZM
	 *
	 */
	this.setGRZKM = function(gRZKM) {
		m_gRZKM = gRZKM;
	};

	/**
	 * Setzt den direkten Kalbverlauf der Kuh.
	 *
	 * @method setCalfRunningDirectly
	 * @param {String} calfRunningDirectly
	 *
	 */
	this.setCalfRunningDirectly = function(calfRuningDirectly) {
		m_calfRunningDirectly = calfRunningDirectly;
	};

	/**
	 * Setzt den Kuhtyp.
	 *
	 * @method setCowType
	 * @param {String} cowType
	 *
	 */
	this.setCowType = function(cowType) {
		m_cowType = cowType;
	};

};
