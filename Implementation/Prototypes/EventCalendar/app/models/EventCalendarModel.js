exports.definition = {
	config : {
		columns : {
			"numberOfEvents" : "text",
		},
		adapter : {
			type : "sql",
			// Tabellenname in der Sqlite-Datenbank, die für auf dieser Definiton
			// basierenden Models und Collections benutzt wird
			collection_name : "EVENTS",
			// db_file gibt an, dass products.sqlite benutzt wird um die Datenbank zu installieren
			// Pre-load the database (safe method)
			db_file : "/EVENT_CALENDAR.sqlite",

			// db_name sagt dem model, dass es den Namen anstatt des Dateinamens verwenden soll
			// db_name required when pre-loading a db
			// should the name of your pre-loaded db
			db_name : "EVENT_CALENDAR",

			//wichtig, wenn in db primerykey gesetzt ist
			idAttribute : 'id',
			// iOS Datenbank in der iCloud?
			remoteBackup : false

		}
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// Implement a custom sort method
			initialize : function() {
				// *** Default sort field
				this.sortField = "datum_von";

				// *** Default sort direction
				this.sortDirection = "ASC";
			},

			// User setSortField to specify field and direction before calling sort method
			setSortField : function(field, direction) {
				this.sortField = field;
				this.sortDirection = direction;
			},

			comparator : function(collection) {
				return collection.get(this.sortField);
			},

			// *** Override sortBy to allow sort on any field, either direction
			sortBy : function(iterator, context) {
				var obj = this.models;
				var direction = this.sortDirection;

				return _.pluck(_.map(obj, function(value, index, list) {
					return {
						value : value,
						index : index,
						criteria : iterator.call(context, value, index, list)
					};
				}).sort(function(left, right) {
					// swap a and b for reverse sort
					var a = direction === "ASC" ? left.criteria : right.criteria;
					var b = direction === "ASC" ? right.criteria : left.criteria;

					if (a !== b) {
						if (a > b || a ===
							void 0)
							return 1;
						if (a < b || b ===
							void 0)
							return -1;
					}
					return left.index < right.index ? -1 : 1;
				}), 'value');
			},
		});

		return Collection;
	}
};

