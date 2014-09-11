TOPAZ.namespace("TOPAZ.masterrind.impl.MasterRindFacade");

require("TOPAZ/masterrind/datatypes/Appointment");

require("TOPAZ/masterrind/datatypes/Company");

require("TOPAZ/masterrind/datatypes/Contact");

require("TOPAZ/masterrind/datatypes/Cow");

require("TOPAZ/masterrind/datatypes/Favorite");

TOPAZ.masterrind.impl.MasterRindFacade = function() {
    var m_appointments = new Array();
    var m_companies = new Array();
    var m_contacts = new Array();
    var m_cows = new Array();
    var m_favorites = new Array();
    var db = Ti.Database.install("/masterrind.sqlite", "massterrindDB");
    this.loadAppointmentsFromDB = function() {
        var masterRindRS = db.execute("SELECT date,id, name FROM appointments");
        var appointment = new TOPAZ.masterrind.datatypes.Appointment();
        while (masterRindRS.isValidRow()) {
            appointment.setDate(masterRindRS.fieldByName("date"));
            appointment.setId(masterRindRS.fieldByName("id"));
            appointment.setName(masterRindRS.fieldByName("name"));
            m_appointments.push(appointment);
            masterRindRS.next();
        }
        masterRindRS.close();
        return m_appointments;
    };
    this.loadCompaniesFromDB = function() {
        var masterRindRS = db.execute("SELECT id,description, name, imprint FROM companies");
        var company = new TOPAZ.masterrind.datatypes.Company();
        while (masterRindRS.isValidRow()) {
            company.setDescription(masterRindRS.fieldByName("description"));
            company.setId(masterRindRS.fieldByName("id"));
            company.setImprint(masterRindRS.fieldByName("imprint"));
            company.setName(masterRindRS.fieldByName("name"));
            m_companies.push(company);
            masterRindRS.next();
        }
        masterRindRS.close();
    };
    this.loadContactsFromDB = function() {
        var masterRindRS = db.execute("SELECT country,id, name, number,street, town, zipCode FROM contacts");
        var contact = new TOPAZ.masterrind.datatypes.Contact();
        while (masterRindRS.isValidRow()) {
            contact.setCountry(masterRindRS.fieldByName("country"));
            contact.setId(masterRindRS.fieldByName("id"));
            contact.setName(masterRindRS.fieldByName("name"));
            contact.setNumber(masterRindRS.fieldByName("number"));
            contact.setStreet(masterRindRS.fieldByName("street"));
            contact.setTown(masterRindRS.fieldByName("town"));
            contact.setImprint(masterRindRS.fieldByName("zipCode"));
            m_contacts.push(contact);
            masterRindRS.next();
        }
        masterRindRS.close();
    };
    this.loadCowsFromDB = function() {
        var masterRindRS = db.execute("SELECT * FROM cows");
        while (masterRindRS.isValidRow()) {
            var cow = new TOPAZ.masterrind.datatypes.Cow();
            cow.setA(masterRindRS.fieldByName("a"));
            cow.setAAA(masterRindRS.fieldByName("aAa"));
            cow.setMating(masterRindRS.fieldByName("mating"));
            cow.setYearOfBirth(masterRindRS.fieldByName("yearOfBirth"));
            cow.setMonthOfBirth(masterRindRS.fieldByName("monthOfBirth"));
            cow.setDayOfBirth(masterRindRS.fieldByName("dayOfBirth"));
            cow.setGeneDefect(masterRindRS.fieldByName("geneDefect"));
            cow.setHerdBookNumber(masterRindRS.fieldByName("herdBookNumber"));
            cow.setMMFName(masterRindRS.fieldByName("mmfName"));
            cow.setMMFF(masterRindRS.fieldByName("mmff"));
            cow.setMFName(masterRindRS.fieldByName("mfName"));
            cow.setMFF(masterRindRS.fieldByName("mff"));
            cow.setFMF(masterRindRS.fieldByName("fmf"));
            cow.setFF(masterRindRS.fieldByName("ff"));
            cow.setFFF(masterRindRS.fieldByName("fff"));
            cow.setFather(masterRindRS.fieldByName("father"));
            cow.setBreeder(masterRindRS.fieldByName("breeder"));
            cow.setImage(masterRindRS.fieldByName("image"));
            cow.setName(masterRindRS.fieldByName("name"));
            cow.setRace(masterRindRS.fieldByName("race"));
            cow.setId(masterRindRS.fieldByName("id"));
            cow.setGRZG(masterRindRS.fieldByName("gRZG"));
            cow.setGRZM(masterRindRS.fieldByName("gRZM"));
            cow.setMilkKg(masterRindRS.fieldByName("milkKg"));
            cow.setFatPercent(masterRindRS.fieldByName("fatPercent"));
            cow.setFatKg(masterRindRS.fieldByName("fatKg"));
            cow.setProteinPercent(masterRindRS.fieldByName("proteinPercent"));
            cow.setProteinKg(masterRindRS.fieldByName("proteinKg"));
            cow.setGRZE(masterRindRS.fieldByName("gRZE"));
            cow.setMilkType(masterRindRS.fieldByName("milkType"));
            cow.setBody(masterRindRS.fieldByName("body"));
            cow.setBase(masterRindRS.fieldByName("base"));
            cow.setUdder(masterRindRS.fieldByName("udder"));
            cow.setGRZFit(masterRindRS.fieldByName("gRZFit"));
            cow.setGRZN(masterRindRS.fieldByName("gRZN"));
            cow.setGRZS(masterRindRS.fieldByName("gRZS"));
            cow.setGRZD(masterRindRS.fieldByName("gRZD"));
            cow.setGRZR(masterRindRS.fieldByName("gRZR"));
            cow.setGRZkd(masterRindRS.fieldByName("gRZkd"));
            cow.setGRZKM(masterRindRS.fieldByName("gRZKM"));
            cow.setCalfRunningDirectly(masterRindRS.fieldByName("calfRunningDirectly"));
            cow.setBackLegsPosition(masterRindRS.fieldByName("backLegsPosition"));
            cow.setBeckTilt(masterRindRS.fieldByName("beckTilt"));
            cow.setBeckWide(masterRindRS.fieldByName("beckWide"));
            cow.setBehindUdderHeight(masterRindRS.fieldByName("behindUdderHeight"));
            cow.setBodyDepth(masterRindRS.fieldByName("bodyDepth"));
            cow.setCentralBelt(masterRindRS.fieldByName("centralBelt"));
            cow.setDairyCharacter(masterRindRS.fieldByName("dairyCharacter"));
            cow.setDirectionOfGrowthBack(masterRindRS.fieldByName("directionOfGrowthBack"));
            cow.setDirectionOfGrowthFront(masterRindRS.fieldByName("directionOfGrowthFront"));
            cow.setDirectionOfGrowthLength(masterRindRS.fieldByName("directionOfGrowthLength"));
            cow.setForeUdderSuspension(masterRindRS.fieldByName("foreUdderSuspension"));
            cow.setHock(masterRindRS.fieldByName("hock"));
            cow.setMovement(masterRindRS.fieldByName("movement"));
            cow.setSize(masterRindRS.fieldByName("size"));
            cow.setStealAngle(masterRindRS.fieldByName("stealAngle"));
            cow.setStrength(masterRindRS.fieldByName("strength"));
            cow.setUdderDepth(masterRindRS.fieldByName("udderDepth"));
            cow.setHornless(masterRindRS.fieldByName("hornless"));
            cow.setGenomics(masterRindRS.fieldByName("genomics"));
            cow.setSexed(masterRindRS.fieldByName("sexed"));
            cow.setFreshSemen(masterRindRS.fieldByName("freshSemen"));
            m_cows.push(cow);
            masterRindRS.next();
        }
        masterRindRS.close();
        return m_cows;
    };
    this.loadFavoritesFromDB = function() {
        var masterRindRS = db.execute("SELECT cowId, cowName, id, name FROM favorites");
        var favorite = new TOPAZ.masterrind.datatypes.Favorite();
        while (masterRindRS.isValidRow()) {
            favorite.setCowId(masterRindRS.fieldByName("cowId"));
            favorite.setCowName(masterRindRS.fieldByName("cowName"));
            favorite.setId(masterRindRS.fieldByName("id"));
            favorite.setName(masterRindRS.fieldByName("name"));
            m_favorites.push(favorite);
            masterRindRS.next();
        }
        masterRindRS.close();
    };
    this.getAppointments = function(type) {
        var appointments = new Array();
        for (i = 0; m_appointments.length > i; i++) {
            appointment = factory.create(type);
            appointment.setDate(m_appointments[i].getDate());
            appointment.setId(m_appointments[i].getId());
            appointment.setName(m_appointments[i].getName());
            appointments.push(appointment);
        }
        return appointments;
    };
    this.getCompanies = function(type) {
        var companies = new Array();
        for (i = 0; m_companies.length > i; i++) {
            company = factory.create(type);
            company.setId(m_companies[i].getId());
            company.setDescription(m_companies[i].getDescription());
            company.setName(m_companies[i].getName());
            company.setImprint(m_companies[i].getImprint());
            cows.push(company);
        }
        return companies;
    };
    this.getContacts = function(type) {
        var contacts = new Array();
        for (i = 0; m_contacts.length > i; i++) {
            contact = factory.create(type);
            contact.setCountry(m_contacts[i].getCountry());
            contact.setId(m_contacts[i].getId());
            contact.setName(m_contacts[i].getName());
            contact.setNumber(m_contacts[i].getNumber());
            contact.setStreet(m_contacts[i].getStreet());
            contact.setTown(m_contacts[i].getTown());
            contact.setZipCode(m_contacts[i].getZipCode());
            cows.push(contact);
        }
        return contacts;
    };
    this.getCows = function() {
        cs = new Array();
        new TOPAZ.masterrind.impl.CowFactory();
        for (i = 0; m_cows.length > i; i++) {
            var cow = new TOPAZ.masterrind.interfaces.Cow();
            cow.setId(m_cows[i].getId());
            cow.setImage(m_cows[i].getImage());
            cow.setName(m_cows[i].getName());
            cow.setFather(m_cows[i].getFather());
            console.log("getCow " + cow.getId());
            cs.push(cow);
            console.log("liste-> " + cs[i].getId());
        }
        for (i = 0; cs.length > i; i++) console.log("cs-> " + i + " " + cs[i].getId() + " " + cs[i].getName());
        return cs;
    };
    this.getFavorites = function(type) {
        var favorites = new Array();
        for (i = 0; m_favorites.length > i; i++) {
            favorite = factory.create(type);
            favorite.setCowId(m_favorites[i].getCowId());
            favorite.setCowName(m_favorites[i].getCowName());
            favorite.setId(m_favorites[i].getId());
            favorite.setName(m_favorites[i].getName());
            favorites.push(favorite);
        }
        return favorites;
    };
    this.addFavorite = function(cowId, cowName, id, name) {
        db.execute("INSERT INTO favorites (cowId,cowName,id,name) VALUES (?,?,?,?)", cowId, cowName, id, name);
        db.close();
    };
    this.removeFavorite = function() {};
    this.getBlackColored = function() {
        var cows = {
            allCows: function() {
                return m_cows;
            },
            genomics: function() {
                return m_cows;
            },
            daughterTested: function() {
                return m_cows;
            },
            hornless: function() {
                return m_cows;
            }
        };
        return cows;
    };
    this.getRedColored = function() {
        var cows = {
            allCows: function() {
                return m_cows;
            },
            genomics: function() {
                return m_cows;
            },
            daughterTested: function() {
                return m_cows;
            },
            hornless: function() {
                return m_cows;
            }
        };
        return cows;
    };
    this.getHornless = function() {
        var cows = {
            allCows: function() {
                return m_cows;
            },
            homozygous: function() {
                return m_cows;
            },
            daughterTested: function() {
                return m_cows;
            },
            blackColored: function() {
                return m_cows;
            },
            redColored: function() {
                return m_cows;
            },
            genomics: function() {
                return m_cows;
            }
        };
        return cows;
    };
    this.getHornless = function() {
        var cows = {
            allCows: function() {
                return m_cows;
            },
            blackColored: function() {
                return m_cows;
            },
            redColored: function() {
                return m_cows;
            }
        };
        return cows;
    };
    this.getHornless = function() {
        var cows = {
            allCows: function() {
                return m_cows;
            },
            blackColored: function() {
                return m_cows;
            },
            redColored: function() {
                return m_cows;
            },
            hornless: function() {
                return m_cows;
            }
        };
        return cows;
    };
    this.getHolsteins = function() {
        var cows = m_cows;
        return cows;
    };
    this.getSexed = function() {
        var cows = m_cows;
        return cows;
    };
    this.getFreshSemen = function() {
        var cows = m_cows;
        return cows;
    };
};