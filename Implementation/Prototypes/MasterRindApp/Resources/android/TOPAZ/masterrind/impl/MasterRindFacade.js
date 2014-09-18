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
    var db = Ti.Database.install("/RSH.sqlite", "rshDB");
    this.loadAppointmentsFromDB = function() {
        var masterRindRS = db.execute("SELECT * FROM appointments");
        var appointment = new TOPAZ.masterrind.datatypes.Appointment();
        while (masterRindRS.isValidRow()) {
            appointment.setDate(masterRindRS.fieldByName("date"));
            appointment.setId(masterRindRS.fieldByName("id"));
            appointment.setName(masterRindRS.fieldByName("name"));
            appointment.setDistance(masterRindRS.fieldByName("distance"));
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
        var masterRindRS = db.execute("SELECT * FROM contacts");
        var contact = new TOPAZ.masterrind.datatypes.Contact();
        while (masterRindRS.isValidRow()) {
            contact.setCountry(masterRindRS.fieldByName("country"));
            contact.setId(masterRindRS.fieldByName("id"));
            contact.setName(masterRindRS.fieldByName("name"));
            contact.setNumber(masterRindRS.fieldByName("number"));
            contact.setStreet(masterRindRS.fieldByName("street"));
            contact.setTown(masterRindRS.fieldByName("town"));
            contact.setZipCode(masterRindRS.fieldByName("zipCode"));
            contact.setInfo(masterRindRS.fieldByName("info"));
            m_contacts.push(contact);
            masterRindRS.next();
        }
        masterRindRS.close();
        return m_contacts;
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
        var masterRindRS = db.execute("SELECT * FROM favorites");
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
        return m_favorites;
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
    this.addFavorite = function(cowId, cowName, id, name) {
        db.execute("INSERT INTO favorites (cowId,cowName,name) VALUES (?,?,?)", cowId, cowName, name);
        db.close();
    };
    this.removeFavorite = function() {};
    this.getBlackColored = function() {
        var query = db.execute("SELECT * FROM RSH WHERE Rasse = 'HOL'");
        var allCows = this.setCows(query);
        query = db.execute("SELECT * FROM RSH WHERE Genomic = 'G' AND Rasse = 'HOL'");
        var genomics = this.setCows(query);
        query = db.execute("SELECT * FROM RSH WHERE Genomic = 'T' AND Rasse = 'HOL'");
        var daughterTested = this.setCows(query);
        query = db.execute("SELECT * FROM RSH WHERE Hornlos = 'H' AND Rasse = 'HOL'");
        var hornless = this.setCows(query);
        var cows = {
            allCows: function() {
                return allCows;
            },
            genomics: function() {
                return genomics;
            },
            daughterTested: function() {
                return daughterTested;
            },
            hornless: function() {
                return hornless;
            }
        };
        return cows;
    };
    this.getRedColored = function() {
        var cows = {
            allCows: function() {
                var query = db.execute("SELECT * FROM cows WHERE Rasse = 'RED'");
                var cows = this.setCows(query);
                return cows;
            },
            genomics: function() {
                var query = db.execute("SELECT * FROM cows WHERE Genomic = 'G' AND Rasse = 'RED'");
                var cows = this.setCows(query);
                return cows;
            },
            daughterTested: function() {
                var query = db.execute("SELECT * FROM cows WHERE Genomic = 'T' AND Rasse = 'RED'");
                var cows = this.setCows(query);
                return cows;
            },
            hornless: function() {
                var query = db.execute("SELECT * FROM cows WHERE Hornlos = 'H' AND Rasse = 'RED'");
                var cows = this.setCows(query);
                return cows;
            }
        };
        return cows;
    };
    this.getHornless = function() {
        var query = db.execute("SELECT * FROM RSH WHERE Hornlos = 'H' OR Hornlos = 'HH'");
        var allCows = this.setCows(query);
        query = db.execute("SELECT * FROM RSH WHERE Hornlos = 'HH'");
        var homozygous = this.setCows(query);
        query = db.execute("SELECT * FROM RSH WHERE Hornlos = 'H' OR Hornlos = 'HH' AND Genomic = 'T'");
        var dt = this.setCows(query);
        query = db.execute("SELECT * FROM RSH WHERE Hornlos = 'H' OR Hornlos = 'HH' AND Rasse='HOL'");
        var bc = this.setCows(query);
        query = db.execute("SELECT * FROM RSH WHERE Hornlos = 'H' OR Hornlos = 'HH' AND Rasse='RED'");
        var rc = this.setCows(query);
        query = db.execute("SELECT * FROM RSH WHERE Hornlos = 'H' OR Hornlos = 'HH' AND Genomic = 'G'");
        var gen = this.setCows(query);
        var cows = {
            allCows: function() {
                return allCows;
            },
            homozygous: function() {
                return homozygous;
            },
            daughterTested: function() {
                return dt;
            },
            blackColored: function() {
                return bc;
            },
            redColored: function() {
                return rc;
            },
            genomics: function() {
                return gen;
            }
        };
        return cows;
    };
    this.getDaughterTested = function() {
        var cows = {
            allCows: function() {
                var query = db.execute("SELECT * FROM cows WHERE Genomic = 'T'");
                var cows = this.setCows(query);
                return cows;
            },
            blackColored: function() {
                var query = db.execute("SELECT * FROM cows WHERE Genomic = 'T' AND Rasse='HOL'");
                var cows = this.setCows(query);
                return cows;
            },
            redColored: function() {
                var query = db.execute("SELECT * FROM cows WHERE Genomic = 'T' AND Rasse='RED'");
                var cows = this.setCows(query);
                return cows;
            },
            hornless: function() {
                var query = db.execute("SELECT * FROM cows WHERE Hornlos = 'H' AND Hornlos='HH' AND Genomic='T'");
                var cows = this.setCows(query);
                return cows;
            }
        };
        return cows;
    };
    this.getGenomics = function() {
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
        var cows = {
            allCows: function() {
                return m_cows;
            }
        };
        return cows;
    };
    this.getSexed = function() {
        var cows = {
            allCows: function() {
                return m_cows;
            }
        };
        return cows;
    };
    this.getFreshSemen = function() {
        var cows = {
            allCows: function() {
                return m_cows;
            }
        };
        return cows;
    };
    this.getShowsAndSpecials = function() {
        var appointments = {
            allAppointments: function() {
                return m_appointments;
            }
        };
        return appointments;
    };
    this.getAuctions = function() {
        var appointments = {
            allAppointments: function() {
                return m_appointments;
            },
            bremervoerde: function() {
                return m_appointments;
            },
            cloppenburg: function() {
                return m_appointments;
            },
            lingen: function() {
                return m_appointments;
            },
            uelzen: function() {
                return m_appointments;
            },
            verden: function() {
                return m_appointments;
            }
        };
        return appointments;
    };
    this.getFavorites = function() {
        var favorites = {
            allFavorites: function() {
                return m_favorites;
            }
        };
        return favorites;
    };
    this.setCows = function(masterRindRS) {
        var cows = new Array();
        while (masterRindRS.isValidRow()) {
            var cow = new TOPAZ.masterrind.datatypes.Cow();
            cow.setA(masterRindRS.fieldByName("all"));
            cow.setAAA(masterRindRS.fieldByName("aAa"));
            cow.setMating(masterRindRS.fieldByName("Anpaarung"));
            cow.setYearOfBirth(masterRindRS.fieldByName("Gebdat_Jahr"));
            cow.setMonthOfBirth(masterRindRS.fieldByName("Gebdat_Monat"));
            cow.setDayOfBirth(masterRindRS.fieldByName("Gebdat_Tag"));
            cow.setGeneDefect(masterRindRS.fieldByName("Genedefekt"));
            cow.setHerdBookNumber(masterRindRS.fieldByName("Herdbuchnr"));
            cow.setMMFName(masterRindRS.fieldByName("MMV_Name"));
            cow.setMMFF(masterRindRS.fieldByName("MMVV"));
            cow.setMFName(masterRindRS.fieldByName("MV_Name"));
            cow.setMFF(masterRindRS.fieldByName("MVV"));
            cow.setFMF(masterRindRS.fieldByName("VMV"));
            cow.setFF(masterRindRS.fieldByName("VV"));
            cow.setFFF(masterRindRS.fieldByName("VVV"));
            cow.setFather(masterRindRS.fieldByName("Vater"));
            cow.setBreeder(masterRindRS.fieldByName("Zuechter"));
            cow.setImage(masterRindRS.fieldByName("s_bild_al"));
            cow.setName(masterRindRS.fieldByName("Name"));
            cow.setRace(masterRindRS.fieldByName("Rasse"));
            cow.setId(masterRindRS.fieldByName("Id"));
            cow.setGRZG(masterRindRS.fieldByName("gRZG"));
            cow.setGRZM(masterRindRS.fieldByName("gRZM"));
            cow.setMilkKg(masterRindRS.fieldByName("Milch-Kg"));
            cow.setFatPercent(masterRindRS.fieldByName("Fett-Pr"));
            cow.setFatKg(masterRindRS.fieldByName("Fett-Kg"));
            cow.setProteinPercent(masterRindRS.fieldByName("Eiw-Pr"));
            cow.setProteinKg(masterRindRS.fieldByName("Eiw-Kg"));
            cow.setGRZE(masterRindRS.fieldByName("gRZE"));
            cow.setMilkType(masterRindRS.fieldByName("Milchtyp"));
            cow.setBody(masterRindRS.fieldByName("Koerper"));
            cow.setBase(masterRindRS.fieldByName("Fundament"));
            cow.setUdder(masterRindRS.fieldByName("Euter"));
            cow.setGRZFit(masterRindRS.fieldByName("gRZFit"));
            cow.setGRZN(masterRindRS.fieldByName("gRZN"));
            cow.setGRZS(masterRindRS.fieldByName("gRZS"));
            cow.setGRZD(masterRindRS.fieldByName("gRZD"));
            cow.setGRZR(masterRindRS.fieldByName("gRZR"));
            cow.setGRZkd(masterRindRS.fieldByName("gRZkd"));
            cow.setGRZKM(masterRindRS.fieldByName("gRZKm"));
            cow.setCalfRunningDirectly(masterRindRS.fieldByName("Kalbverlauf direkt"));
            cow.setBackLegsPosition(masterRindRS.fieldByName("Hbeinstell"));
            cow.setBackLegsAngularity(masterRindRS.fieldByName("Hbeinwi"));
            cow.setBeckTilt(masterRindRS.fieldByName("Beckenneig"));
            cow.setBeckWide(masterRindRS.fieldByName("Beckenbr"));
            cow.setBehindUdderHeight(masterRindRS.fieldByName("Hintereuterh"));
            cow.setBodyDepth(masterRindRS.fieldByName("Koerpertiefe"));
            cow.setCentralBelt(masterRindRS.fieldByName("Zentralband"));
            cow.setDairyCharacter(masterRindRS.fieldByName("Milchchar"));
            cow.setDirectionOfGrowthBack(masterRindRS.fieldByName("Strichpl_h"));
            cow.setDirectionOfGrowthFront(masterRindRS.fieldByName("Strichpl_v"));
            cow.setDirectionOfGrowthLength(masterRindRS.fieldByName("Strichl"));
            cow.setForeUdderSuspension(masterRindRS.fieldByName("VeutAuf"));
            cow.setHock(masterRindRS.fieldByName("Sprunggel"));
            cow.setMovement(masterRindRS.fieldByName("Bewegung"));
            cow.setSize(masterRindRS.fieldByName("Groesse"));
            cow.setStealAngle(masterRindRS.fieldByName("Klauenwi"));
            cow.setStrength(masterRindRS.fieldByName("Staerke"));
            cow.setUdderDepth(masterRindRS.fieldByName("Eutertiefe"));
            cow.setHornless(masterRindRS.fieldByName("Hornlos"));
            cow.setGenomics(masterRindRS.fieldByName("Genomic"));
            cow.setSexed(masterRindRS.fieldByName("gesexed"));
            cow.setFreshSemen(masterRindRS.fieldByName("Frischsperma"));
            cows.push(cow);
            masterRindRS.next();
        }
        masterRindRS.close();
        return cows;
    };
};