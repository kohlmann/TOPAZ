dummyDataGenerator = {
    model: Backbone.Model,
    collection: Backbone.Collection,
    addCow: function(collection, cow) {
        this.collection = collection;
        this.model = Alloy.createModel("cowModel", {
            id: cow.getId(),
            name: cow.getName(),
            description: cow.getDescription(),
            cowImage: cow.getCowImage(),
            detailsImage: cow.getDetailsImage(),
            relationShip: cow.getRelationShip(),
            breedingValue: cow.getBreedingValue()
        });
    },
    saveCows: function() {
        this.collection.add(this.model);
        this.model.save();
    },
    loadCows: function() {
        this.collection.fetch();
    }
};