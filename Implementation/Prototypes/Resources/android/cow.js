cow = {
    id: "null",
    name: "null",
    description: "null",
    cowImage: "null",
    detailsImage: "null",
    relationShip: "null",
    breedingValue: "null",
    cowAll: function(id, name, description, cowImage, detailsImage, relationShip, breedingValue) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cowImage = cowImage;
        this.detailsImage = detailsImage;
        this.relationShip = relationShip;
        this.breedingValue = breedingValue;
    },
    getId: function() {
        return this.id;
    },
    getName: function() {
        return this.name;
    },
    getDescription: function() {
        return this.description;
    },
    getCowImage: function() {
        return this.cowImage;
    },
    getDetailsImage: function() {
        return this.detailsImage;
    },
    getRelationShip: function() {
        return this.relationShip;
    },
    getBreedingValue: function() {
        return this.breedingValue;
    }
};