function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "10%",
        backgroundImage: "/images/MAR_Logo01_xl.png",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.body = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "80%",
        backgroundImage: "/images/grid_an_hintergrund_ap01.png",
        id: "body",
        layout: "horizontal",
        horizontalWrap: "true"
    });
    $.__views.index.add($.__views.body);
    $.__views.about = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_ueber_uns.png",
        backgroundSelectedColor: "blue",
        id: "about"
    });
    $.__views.body.add($.__views.about);
    $.__views.contacts = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_ap.png",
        backgroundSelectedColor: "blue",
        id: "contacts"
    });
    $.__views.body.add($.__views.contacts);
    $.__views.appointments = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_termine.png",
        backgroundSelectedColor: "blue",
        id: "appointments"
    });
    $.__views.body.add($.__views.appointments);
    $.__views.favorites = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_fav.png",
        backgroundSelectedColor: "blue",
        id: "favorites"
    });
    $.__views.body.add($.__views.favorites);
    $.__views.holsteins = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_holstein.png",
        backgroundSelectedColor: "blue",
        id: "holsteins"
    });
    $.__views.body.add($.__views.holsteins);
    $.__views.blackColored = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_sbt.png",
        backgroundSelectedColor: "blue",
        id: "blackColored"
    });
    $.__views.body.add($.__views.blackColored);
    $.__views.redColored = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_rbt.png",
        backgroundSelectedColor: "blue",
        id: "redColored"
    });
    $.__views.body.add($.__views.redColored);
    $.__views.hornless = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_hornlose.png",
        backgroundSelectedColor: "blue",
        id: "hornless"
    });
    $.__views.body.add($.__views.hornless);
    $.__views.daughterTested = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_gepruefte.png",
        backgroundSelectedColor: "blue",
        id: "daughterTested"
    });
    $.__views.body.add($.__views.daughterTested);
    $.__views.genomics = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_genomics.png",
        backgroundSelectedColor: "blue",
        id: "genomics"
    });
    $.__views.body.add($.__views.genomics);
    $.__views.sexed = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_gesext.png",
        backgroundSelectedColor: "blue",
        id: "sexed"
    });
    $.__views.body.add($.__views.sexed);
    $.__views.freshSemen = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_sperma.png",
        backgroundSelectedColor: "blue",
        id: "freshSemen"
    });
    $.__views.body.add($.__views.freshSemen);
    $.__views.properties = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_settings.png",
        backgroundSelectedColor: "blue",
        id: "properties"
    });
    $.__views.body.add($.__views.properties);
    $.__views.manual = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_handbuch.png",
        backgroundSelectedColor: "blue",
        id: "manual"
    });
    $.__views.body.add($.__views.manual);
    $.__views.imprint = Ti.UI.createButton({
        width: "25%",
        height: "25%",
        borderWidth: "5",
        backgroundImage: "/images/grid_icon_impressum.png",
        backgroundSelectedColor: "blue",
        id: "imprint"
    });
    $.__views.body.add($.__views.imprint);
    $.__views.footer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "10%",
        id: "footer"
    });
    $.__views.index.add($.__views.footer);
    $.__views.home = Ti.UI.createImageView({
        image: "/images/ios7_icon_home_xl.png",
        left: "20%",
        top: "20%",
        id: "home"
    });
    $.__views.footer.add($.__views.home);
    $.__views.search = Ti.UI.createImageView({
        image: "/images/icon_in_der_naehe_2_xl.png",
        right: "20%",
        top: "25%",
        id: "search"
    });
    $.__views.footer.add($.__views.search);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("TOPAZ/masterrind/impl/MasterRindFacade");
    require("TOPAZ/masterrind/datatypes/Cow");
    require("TOPAZ/masterrind/datatypes/Favorite");
    $.about.addEventListener("click", function() {
        Alloy.createController("about").getView();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.addFavorite("10", "Test", "TEST");
        console.log("-----Favorite eingefügt-------");
    });
    $.appointments.addEventListener("click", function() {
        var win = Alloy.createController("appointments").getView();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadAppointmentsFromDB();
        win.open();
        var allShows = masterRindFacade.getShowsAndSpecials().allAppointments();
        var bremervoerde = masterRindFacade.getAuctions().bremervoerde();
        var cloppenburg = masterRindFacade.getAuctions().cloppenburg();
        var lingen = masterRindFacade.getAuctions().lingen();
        var uelzen = masterRindFacade.getAuctions().uelzen();
        var verden = masterRindFacade.getAuctions().verden();
        Alloy.Collections.allShowsCol.reset();
        Alloy.Collections.bremervoerdeCol.reset();
        Alloy.Collections.cloppenburgCol.reset();
        Alloy.Collections.lingenCol.reset();
        Alloy.Collections.uelzenCol.reset();
        Alloy.Collections.verdenCol.reset();
        for (i = 0; allShows.length > i; i++) {
            var appointment = allShows[i];
            var model = Alloy.createModel("appointmentMod", {
                date: appointment.getDate(),
                distance: appointment.getDistance(),
                id: appointment.getId(),
                name: appointment.getName()
            });
            Alloy.Collections.allShowsCol.add(model);
        }
        for (i = 0; bremervoerde.length > i; i++) {
            var appointment = bremervoerde[i];
            console.log(appointment.getDate());
            var model = Alloy.createModel("appointmentMod", {
                date: appointment.getDate(),
                distance: appointment.getDistance(),
                id: appointment.getId(),
                name: appointment.getName()
            });
            Alloy.Collections.bremervoerdeCol.add(model);
        }
        for (i = 0; cloppenburg.length > i; i++) {
            var appointment = cloppenburg[i];
            var model = Alloy.createModel("appointmentMod", {
                date: appointment.getDate(),
                distance: appointment.getDistance(),
                id: appointment.getId(),
                name: appointment.getName()
            });
            Alloy.Collections.cloppenburgCol.add(model);
            for (i = 0; lingen.length > i; i++) {
                var appointment = lingen[i];
                var model = Alloy.createModel("appointmentMod", {
                    date: appointment.getDate(),
                    distance: appointment.getDistance(),
                    id: appointment.getId(),
                    name: appointment.getName()
                });
                Alloy.Collections.lingenCol.add(model);
            }
            for (i = 0; uelzen.length > i; i++) {
                var appointment = uelzen[i];
                var model = Alloy.createModel("appointmentMod", {
                    date: appointment.getDate(),
                    distance: appointment.getDistance(),
                    id: appointment.getId(),
                    name: appointment.getName()
                });
                Alloy.Collections.uelzenCol.add(model);
            }
            for (i = 0; verden.length > i; i++) {
                var appointment = verden[i];
                var model = Alloy.createModel("appointmentMod", {
                    date: appointment.getDate(),
                    distance: appointment.getDistance(),
                    id: appointment.getId(),
                    name: appointment.getName()
                });
                Alloy.Collections.verdenCol.add(model);
            }
        }
    });
    $.blackColored.addEventListener("click", function() {
        var win = Alloy.createController("blackColored").getView();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        win.open();
        var allCows = masterRindFacade.getBlackColored().allCows();
        var genomics = masterRindFacade.getBlackColored().genomics();
        var daughterTested = masterRindFacade.getBlackColored().daughterTested();
        var hornless = masterRindFacade.getBlackColored().hornless();
        Alloy.Collections.allCowsCol.reset();
        Alloy.Collections.genomicsCol.reset();
        Alloy.Collections.daughterTestedCol.reset();
        Alloy.Collections.hornlessCol.reset();
        for (i = 0; allCows.length > i; i++) {
            var cow = allCows[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.allCowsCol.add(model);
        }
        for (i = 0; genomics.length > i; i++) {
            var cow = genomics[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.genomicsCol.add(model);
        }
        for (i = 0; daughterTested.length > i; i++) {
            var cow = daughterTested[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.daughterTestedCol.add(model);
        }
        for (i = 0; hornless.length > i; i++) {
            var cow = hornless[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.hornlessCol.add(model);
        }
    });
    $.contacts.addEventListener("click", function() {
        var win = Alloy.createController("contacts").getView();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        var allContacts = masterRindFacade.loadContactsFromDB();
        win.open();
        Alloy.Collections.animalSalesCol.reset();
        for (i = 0; allContacts.length > i; i++) {
            var contact = allContacts[i];
            var model = Alloy.createModel("contactMod", {
                country: contact.getCountry(),
                id: contact.getId(),
                info: contact.getInfo(),
                name: contact.getName(),
                number: contact.getNumber(),
                street: contact.getStreet(),
                town: contact.getTown(),
                zipCode: contact.getZipCode()
            });
            Alloy.Collections.animalSalesCol.add(model);
        }
    });
    $.daughterTested.addEventListener("click", function() {
        var win = Alloy.createController("daughterTested").getView();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        win.open();
        var allCows = masterRindFacade.getDaughterTested().allCows();
        var hornless = masterRindFacade.getDaughterTested().hornless();
        var redColored = masterRindFacade.getDaughterTested().redColored();
        var blackColored = masterRindFacade.getDaughterTested().blackColored();
        Alloy.Collections.allCowsCol.reset();
        Alloy.Collections.hornlessCol.reset();
        Alloy.Collections.redColoredCol.reset();
        Alloy.Collections.blackColoredCol.reset();
        for (i = 0; allCows.length > i; i++) {
            var cow = allCows[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.allCowsCol.add(model);
        }
        for (i = 0; hornless.length > i; i++) {
            var cow = hornless[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.hornlessCol.add(model);
        }
        for (i = 0; blackColored.length > i; i++) {
            var cow = blackColored[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.blackColoredCol.add(model);
        }
        for (i = 0; redColored.length > i; i++) {
            var cow = redColored[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.redColoredCol.add(model);
        }
    });
    $.favorites.addEventListener("click", function() {
        var win = Alloy.createController("favorites").getView();
        win.open();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadFavoritesFromDB();
        var favorites = masterRindFacade.getFavorites().allFavorites();
        Alloy.Collections.allFavoritesCol.reset();
        for (i = 0; favorites.length > i; i++) {
            var favorite = favorites[i];
            console.log(favorite.getName());
            var model = Alloy.createModel("favoriteMod", {
                cowId: favorite.getCowId(),
                cowName: favorite.getCowName(),
                id: favorite.getId(),
                name: favorite.getName()
            });
            Alloy.Collections.allFavoritesCol.add(model);
        }
    });
    $.freshSemen.addEventListener("click", function() {
        var win = Alloy.createController("freshSemen").getView();
        win.open();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        win.open();
        var allCows = masterRindFacade.getFreshSemen().allCows();
        Alloy.Collections.allCowsCol.reset();
        for (i = 0; allCows.length > i; i++) {
            var cow = allCows[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.allCowsCol.add(model);
        }
    });
    $.genomics.addEventListener("click", function() {
        var win = Alloy.createController("genomics").getView();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        win.open();
        var allCows = masterRindFacade.getDaughterTested().allCows();
        var hornless = masterRindFacade.getDaughterTested().hornless();
        var redColored = masterRindFacade.getDaughterTested().redColored();
        var blackColored = masterRindFacade.getDaughterTested().blackColored();
        Alloy.Collections.allCowsCol.reset();
        Alloy.Collections.hornlessCol.reset();
        Alloy.Collections.redColoredCol.reset();
        Alloy.Collections.blackColoredCol.reset();
        for (i = 0; allCows.length > i; i++) {
            var cow = allCows[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.allCowsCol.add(model);
        }
        for (i = 0; hornless.length > i; i++) {
            var cow = hornless[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.hornlessCol.add(model);
        }
        for (i = 0; blackColored.length > i; i++) {
            var cow = blackColored[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.blackColoredCol.add(model);
        }
        for (i = 0; redColored.length > i; i++) {
            var cow = redColored[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.redColoredCol.add(model);
        }
    });
    $.holsteins.addEventListener("click", function() {
        var win = Alloy.createController("holsteins").getView();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        win.open();
        var allCows = masterRindFacade.getHolsteins().allCows();
        Alloy.Collections.allCowsCol.reset();
        for (i = 0; allCows.length > i; i++) {
            var cow = allCows[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.allCowsCol.add(model);
        }
    });
    $.hornless.addEventListener("click", function() {
        var win = Alloy.createController("hornless").getView();
        win.open();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        var allCows = masterRindFacade.getHornless().allCows();
        var genomics = masterRindFacade.getHornless().genomics();
        var daughterTested = masterRindFacade.getHornless().daughterTested();
        var homozygous = masterRindFacade.getHornless().homozygous();
        var redColored = masterRindFacade.getHornless().redColored();
        var blackColored = masterRindFacade.getHornless().blackColored();
        Alloy.Collections.allCowsCol.reset();
        Alloy.Collections.genomicsCol.reset();
        Alloy.Collections.daughterTestedCol.reset();
        Alloy.Collections.homozygousCol.reset();
        Alloy.Collections.redColoredCol.reset();
        Alloy.Collections.blackColoredCol.reset();
        for (i = 0; allCows.length > i; i++) {
            var cow = allCows[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.allCowsCol.add(model);
        }
        for (i = 0; genomics.length > i; i++) {
            var cow = genomics[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.genomicsCol.add(model);
        }
        for (i = 0; daughterTested.length > i; i++) {
            var cow = daughterTested[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.daughterTestedCol.add(model);
        }
        for (i = 0; homozygous.length > i; i++) {
            var cow = homozygous[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.homozygousCol.add(model);
        }
        for (i = 0; redColored.length > i; i++) {
            var cow = redColored[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.redColoredCol.add(model);
        }
        for (i = 0; blackColored.length > i; i++) {
            var cow = blackColored[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.blackColoredCol.add(model);
        }
    });
    $.imprint.addEventListener("click", function() {
        var win = Alloy.createController("imprint").getView();
        win.open();
    });
    $.manual.addEventListener("click", function() {
        var win = Alloy.createController("manual").getView();
        win.open();
    });
    $.properties.addEventListener("click", function() {
        var win = Alloy.createController("properties").getView();
        win.open();
    });
    $.redColored.addEventListener("click", function() {
        var win = Alloy.createController("redColored").getView();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        win.open();
        var allCows = masterRindFacade.getBlackColored().allCows();
        var genomics = masterRindFacade.getBlackColored().genomics();
        var daughterTested = masterRindFacade.getBlackColored().daughterTested();
        var hornless = masterRindFacade.getBlackColored().hornless();
        Alloy.Collections.allCowsCol.reset();
        Alloy.Collections.genomicsCol.reset();
        Alloy.Collections.daughterTestedCol.reset();
        Alloy.Collections.hornlessCol.reset();
        for (i = 0; allCows.length > i; i++) {
            var cow = allCows[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.allCowsCol.add(model);
        }
        for (i = 0; genomics.length > i; i++) {
            var cow = genomics[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.genomicsCol.add(model);
        }
        for (i = 0; daughterTested.length > i; i++) {
            var cow = daughterTested[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.daughterTestedCol.add(model);
        }
        for (i = 0; hornless.length > i; i++) {
            var cow = hornless[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.hornlessCol.add(model);
        }
    });
    $.sexed.addEventListener("click", function() {
        var win = Alloy.createController("sexed").getView();
        win.open();
        var masterRindFacade = new TOPAZ.masterrind.impl.MasterRindFacade();
        masterRindFacade.loadCowsFromDB();
        win.open();
        var allCows = masterRindFacade.getSexed().allCows();
        Alloy.Collections.allCowsCol.reset();
        for (i = 0; allCows.length > i; i++) {
            var cow = allCows[i];
            var model = Alloy.createModel("cowsMod", {
                a: cow.getA(),
                aAa: cow.getAAA(),
                mating: cow.getMating(),
                yearOfBirth: cow.getYearOfBirth(),
                monthOfBirth: cow.getMonthOfBirth(),
                dayOfBirth: cow.getDayOfBirth(),
                geneDefect: cow.getGeneDefect(),
                herdBookNumber: cow.getHerdBookNumber(),
                mmfName: cow.getMMFName(),
                mmff: cow.getMMFF(),
                mfName: cow.getMFName(),
                mff: cow.getMFF(),
                fmf: cow.getFMF(),
                ff: "x " + cow.getFF(),
                fff: "x " + cow.getFFF(),
                father: cow.getFather(),
                breeder: cow.getBreeder(),
                image: cow.getImage(),
                name: cow.getName(),
                race: cow.getRace(),
                id: cow.getId(),
                gRZG: "RZG" + cow.getGRZG(),
                gRZM: cow.getGRZM(),
                milkKg: cow.getMilkKg(),
                fatPercent: cow.getFatPercent(),
                fatKg: cow.getFatKg(),
                proteinPercent: cow.getProteinPercent(),
                proteinKg: cow.getProteinKg(),
                gRZE: cow.getGRZE(),
                milkType: cow.getMilkType(),
                body: cow.getBody(),
                base: cow.getBase(),
                udder: cow.getUdder(),
                gRZFit: cow.getGRZFit(),
                gRZN: cow.getGRZN(),
                gRZS: cow.getGRZS(),
                gRZD: cow.getGRZD(),
                gRZR: cow.getGRZR(),
                gRZkd: cow.getGRZkd(),
                gRZKM: cow.getGRZKM(),
                calfRunningDirectly: cow.getCalfRunningDirectly(),
                backLegsPosition: cow.getBackLegsPosition(),
                beckTilt: cow.getBeckTilt(),
                beckWide: cow.getBeckWide(),
                behindUdderHeight: cow.getBehindUdderHeight(),
                bodyDepth: cow.getBodyDepth(),
                centralBelt: cow.getCentralBelt(),
                dairyCharacter: cow.getDairyCharacter(),
                directionOfGrowthBack: cow.getDirectionOfGrowthBack(),
                directionOfGrowthFront: cow.getDirectionOfGrowthFront(),
                DirectionOfGrowthLength: cow.getDirectionOfGrowthLength(),
                foreUdderSuspension: cow.getForeUdderSuspension(),
                hock: cow.getHock(),
                movement: cow.getMovement(),
                size: cow.getSize(),
                stealAngle: cow.getStealAngle(),
                strength: cow.getStrength(),
                udderDepth: cow.getUdderDepth(),
                hornless: cow.getHornless(),
                genomics: cow.getGenomics(),
                sexed: cow.getSexed(),
                freshSemen: cow.getFreshSemen()
            });
            Alloy.Collections.allCowsCol.add(model);
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;