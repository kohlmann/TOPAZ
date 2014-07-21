TOPAZ.namespace("TOPAZ.masterrind.impl.FavoriteFactory");

require("TOPAZ/masterrind/interfaces/Favorite");

require("TOPAZ/masterrind/datatypes/CowFavorite");

TOPAZ.masterrind.impl.FavoriteFactory = function() {
    this.create = function(type) {
        var favorite;
        "cow" == type ? favorite = new TOPAZ.masterrind.datatypes.CowFavorite() : console.log("Unbekannte Favoritart");
        return favorite;
    };
};

TOPAZ.masterrind.impl.FavoriteFactory.prototype = new TOPAZ.masterrind.inerfaces.MasterRindFactory();