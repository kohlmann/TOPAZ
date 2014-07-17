TOPAZ.namespace("TOPAZ.masterrind.FavoriteFactory");

require("TOPAZ/masterrind/interfaces/Favorite");

require("TOPAZ/masterrind/impl/CowFavorite");

TOPAZ.masterrind.FavoriteFactory = function() {
    this.create = function(type) {
        var favorite;
        "cow" == type ? favorite = new TOPAZ.masterrind.impl.CowFavorite() : console.log("Unbekannte Favoritart");
        return favorite;
    };
};

TOPAZ.masterrind.FavoriteFactory.prototype = new TOPAZ.masterrind.inerfaces.MasterRindFactory();