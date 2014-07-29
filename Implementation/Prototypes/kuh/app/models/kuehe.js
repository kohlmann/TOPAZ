exports.definition = {
	config: {

		adapter: {
			type: "sql",		
			// Tabellenname in der Sqlite-Datenbank, die für auf dieser Definiton 
			// basierenden Models und Collections benutzt wird
			collection_name: "kuehe",
			
			// db_file gibt an, dass products.sqlite benutzt wird um die Datenbank zu installieren
			// Pre-load the database (safe method)
			db_file: "/kuhdb3.sqlite",
			
			// db_name sagt dem model, dass es den Namen anstatt des Dateinamens verwenden soll
			// db_name required when pre-loading a db
			// should the name of your pre-loaded db
			db_name: "kuhdb3",
			
			// idAttribute sagt Alloy/Backbone welche Spalte als UID benutzt werden soll.
			// Ohne diese Angabe wird eine alloy_id angelegt
			//idAttribute: "id",
			
			// iOS Datenbank in der iCloud? 
			remoteBackup: false
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// Implement a custom sort method
			initialize : function () {
				// *** Default sort field
				this.sortField = "gRZG";
				
				// *** Default sort direction
				this.sortDirection = "DESC";
			},
			
			// User setSortField to specify field and direction before calling sort method
			setSortField : function (field, direction) {
				this.sortField = field;
				this.sortDirection = direction;
			},
			
			comparator : function(collection) {
				return collection.get(this.sortField);
			},
			
			// *** Override sortBy to allow sort on any field, either direction
			sortBy : function (iterator, context) {
				var obj = this.models;
				var direction = this.sortDirection;
				
				return _.pluck(_.map(obj, function (value, index, list) {
					return {
						value : value,
						index : index,
						criteria : iterator.call(context, value, index, list)
					};
				}).sort(function (left, right) {
					// swap a and b for reverse sort
					var a = direction === "ASC" ? left.criteria : right.criteria;
					var b = direction ==="ASC" ? right.criteria : left.criteria;
					
					if (a !== b) {
						if (a > b || a === void 0) return 1;
						if (a < b || b === void 0) return -1;
					}
					return left.index < right.index ? -1 : 1;
				}), 'value');
			},
						
		});

		return Collection;
	}
};