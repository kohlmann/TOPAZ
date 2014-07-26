require("TOPAZ/masterrind/impl/Calc");

CalcTest = TestCase("CalcTest");

CalcTest.prototype.testAdd = function() {
    var calc = new TOPAZ.masterrind.impl.Calc();
    assertEquals("TEST FAILED", "5", calc.add(2, 3));
};