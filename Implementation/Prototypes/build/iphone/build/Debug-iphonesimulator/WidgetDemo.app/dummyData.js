dummyData = {
    addCow: function(collection, cow) {
        var model = Alloy.createModel("cowModel", {
            gRZG: cow.getgRZG()
        });
        collection.add(model);
        model.save();
        collection.fetch();
    }
};