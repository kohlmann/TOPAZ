TOPAZ.namespace('TOPAZ.masterrind.util.CodeGenerator');

/**
 * Codegenerator erkennt Membervariablen und erstellt zu diesen
 * Getter-und Settermethoden, sowie die passenden Komentare dazu.
 * Damit die Membervariablen erkannt werden, müssen sie mit "m_"
 * als Präfix beginnen und vor der Variablen muss das Schlüssel-
 * wort var stehen. 
 * Bsp.: var m_MeineVariable
 *
 * @namespace TOPAZ.masterrind.util
 * @class CodeGenerator
 */
TOPAZ.masterrind.util.CodeGenerator = function() {

	var m_PathToFile;
	
	/**
	 * Öffnet eine Datei und konvertiert den Inhalt in eine Zeichen-
	 * kette und gibt diese zurück.
	 * 
	 * @method fileToString
	 * @param {String} pathToFile
	 * @return {String} codeBlock 
	 */
	fileToString=function(pathToFile){
		
	};
	
	
	/**
	 * Wandelt eine beliebiege Zeichenkette in eine Zeichenkette, die
	 * mit einem großen Buchtaben anfängt.
	 *
	 * @method toCapitalLetter
	 * @param {String} string
	 * @return {String} stringWithCapitalLetter
	 */
	toCapitalLetter = function(string) {

		// var lowerCase = string.toLowerCase();
		var firstChar = string.charAt(0);
		var upperCase = firstChar.toUpperCase();
		var stringWithCapitalLetter = string.replace(string.charAt(0), upperCase);

		return stringWithCapitalLetter;
	};

	/**
	 * Erstellt Gettermethode
	 *
	 * @method createGetter
	 * @param {String} name
	 * @return {String} codeBlock
	 */
	this.createGetter = function(name) {
		var codeBlock;

		codeBlock = "this.get" + toCapitalLetter(name) + " = function() {" + "return m_" + name + ";};";

		return codeBlock;
	};

	/**
	 * Erstellt Settermethode
	 *
	 * @method createSetter
	 * @param {String} name
	 * @return {String} codeBlock
	 */
	this.createSetter = function(name) {

		var codeBlock;

		codeBlock = "this.set" + toCapitalLetter(name) + " = function(" + name + ") {" + "m_" + name + "=" + name + "};";

		return codeBlock;
	};

	/**
	 * Erstellt Kommentar zur Gettermethode
	 *
	 * @method createGetterComment
	 * @param {String} name
	 * @return {String} codeBlock
	 */
	this.createGetterComment = function(name) {

		var codeBlock;
		codeBlock = "/**\n* Gibt " + name + " zurück.\n*\n* @method get" + toCapitalLetter(name) + "\n* @return {Object} m_" + name + "\n*/";

		return codeBlock;
	};

	/**
	 * Erstellt Kommentar zur Settermethode
	 *
	 * @method createSetterComment
	 * @param {String} name
	 * @return {String} codeBlock
	 */
	this.createSetterComment = function(name) {

		var codeBlock;
		codeBlock = "/**\n* Setzt " + name + ".\n*\n* @method set" + toCapitalLetter(name) + "\n* @param {Object} " + name + "\n*/";

		return codeBlock;
	};

};
