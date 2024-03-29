var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            a: "text",
            aAa: "text",
            mating: "text",
            yearOfBirth: "text",
            monthOfBirth: "text",
            dayOfBirth: "text",
            geneDefect: "text",
            herdBookNumber: "text",
            mmfName: "text",
            mmff: "text",
            mfName: "text",
            mff: "text",
            fmf: "text",
            ff: "text",
            fff: "text",
            father: "text",
            breeder: "text",
            image: "image",
            name: "text",
            race: "text",
            id: "text",
            gRZG: "text",
            gRZM: "text",
            milkKg: "text",
            fatPercent: "text",
            fatKg: "text",
            proteinPercent: "text",
            proteinKg: "text",
            gRZE: "text",
            milkType: "text",
            body: "text",
            base: "text",
            udder: "text",
            gRZFit: "text",
            gRZN: "text",
            gRZS: "text",
            gRZD: "text",
            gRZR: "text",
            gRZkd: "text",
            gRZKM: "text",
            calfRunningDirectly: "text",
            backLegsPosition: "text",
            beckTilt: "text",
            beckWide: "text",
            behindUdderHeight: "text",
            bodyDepth: "text",
            centralBelt: "text",
            dairyCharacter: "text",
            directionOfGrowthBack: "text",
            directionOfGrowthFront: "text",
            DirectionOfGrowthLength: "text",
            foreUdderSuspension: "text",
            hock: "text",
            movement: "text",
            size: "text",
            stealAngle: "text",
            strength: "text",
            udderDepth: "text",
            hornless: "text",
            genomics: "text",
            sexed: "text",
            freshSemen: "text"
        },
        adapter: {
            collection_name: "cowsMod"
        }
    }
};

model = Alloy.M("cowsMod", exports.definition, []);

collection = Alloy.C("cowsMod", exports.definition, model);

exports.Model = model;

exports.Collection = collection;