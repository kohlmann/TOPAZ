/*
 * Fehler: Test läuft nicht durch.
 * Ursache: wahrscheinlich wird keine Referenz auf Calc übergeben.
 * Lösung: nicht bekannt
 */
require('TOPAZ/masterrind/impl/Calc');

/**
 * Die Klasse CalcTest testet die vier Grundrechenarten
 * mit JSDriver Framework. Es gibt zwei Arten zum Erstellen
 * eines Tests. Mit Literalen und mit Prototypes. Die Tests
 * in diesem Beispiel werden mit Literalen durchgeführt.
 *
 * Wie man die Tests mit Prototypen erstellt zeigt dieses
 * Beispiel:
 *
 * CalcTest = TestCase("CalcTest");
 * CalcTest.prototype.testSubtraktion = function() {
 * 		var calc = new JSDriverDemo.Calc();
 *		assertEquals("TEST FAILED", "1", calc.sub(3, 2));
 *	};
 *
 * @namespace JSDriverDemo
 * @class Calc
 */
TestCase("CalcTest", {
	calc : "null",

	setUp : function() {
		this.calc = new TOPAZ.masterrind.impl.Calc();
	},
	testAddition : function() {
		assertEquals("TEST FAILED", "6", this.calc.add(4, 2));
	},
	testSubtraktion : function() {
		assertEquals("TEST FAILED", "2", this.calc.sub(4, 2));
	},
	testMultiplikation : function() {
		assertEquals("TEST FAILED", "8", this.calc.mult(4, 2));
	},
	testDivision : function() {
		assertEquals("TEST FAILED", "2", this.calc.div(4, 2));
	},
	tearDown : function() {
		//code
	}
});
