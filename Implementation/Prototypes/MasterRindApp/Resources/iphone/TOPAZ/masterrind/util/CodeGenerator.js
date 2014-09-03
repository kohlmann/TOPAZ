TOPAZ.namespace("TOPAZ.masterrind.util.CodeGenerator");

TOPAZ.masterrind.util.CodeGenerator = function() {
    fileToString = function() {};
    toCapitalLetter = function(string) {
        var firstChar = string.charAt(0);
        var upperCase = firstChar.toUpperCase();
        var stringWithCapitalLetter = string.replace(string.charAt(0), upperCase);
        return stringWithCapitalLetter;
    };
    this.createGetter = function(name) {
        var codeBlock;
        codeBlock = "this.get" + toCapitalLetter(name) + " = function() {" + "return m_" + name + ";};";
        return codeBlock;
    };
    this.createSetter = function(name) {
        var codeBlock;
        codeBlock = "this.set" + toCapitalLetter(name) + " = function(" + name + ") {" + "m_" + name + "=" + name + "};";
        return codeBlock;
    };
    this.createGetterComment = function(name) {
        var codeBlock;
        codeBlock = "/**\n* Gibt " + name + " zurück.\n*\n* @method get" + toCapitalLetter(name) + "\n* @return {Object} m_" + name + "\n*/";
        return codeBlock;
    };
    this.createSetterComment = function(name) {
        var codeBlock;
        codeBlock = "/**\n* Setzt " + name + ".\n*\n* @method set" + toCapitalLetter(name) + "\n* @param {Object} " + name + "\n*/";
        return codeBlock;
    };
};