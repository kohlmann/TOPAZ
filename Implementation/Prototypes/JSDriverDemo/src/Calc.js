var JSDriverDemo = JSDriverDemo || {};
/**
 * Die Klasse Calc implementiert die vier Grundrechenarten.
 *
 * @namespace JSDriverDemo
 * @class Calc
 */
JSDriverDemo.Calc = function() {

	/**
	 * Führt Addition durch.
	 *
	 * @method add
	 */
	this.add = function(a, b) {
		return a + b;
	};

	/**
	 * Führt Subtraktoin durch.
	 *
	 * @method add
	 */
	this.sub = function(a, b) {
		return a - b;
	};
	
		/**
	 * Führt Multiplikation durch.
	 *
	 * @method mult
	 */
	this.mult = function(a, b) {
		return a * b;
	};

	/**
	 * Führt Division durch.
	 *
	 * @method div
	 */
	this.div = function(a, b) {
		return a / b;
	};
};
