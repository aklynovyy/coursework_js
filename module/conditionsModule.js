var fs = require('fs');

module.exports = (function () {
	var dbFilePath = './data/data.json';

	var getDataFromDb = function (path) {
		try {
      var result = fs.readFileSync(path, 'utf8');
      return JSON.parse(result);
    } catch(e) {
    	logger.logError('Can not read from file');
      return [];
    }
    // console.log(getDataFromDb);
	};

	var data = getDataFromDb(dbFilePath);

  var getDataAll = function () {
		return data;
	};

	var getAllDate = function () {
		var date = [];
		for (var i = 0; i < data.length; i++) {
			date.push(data[i].date);
		}
		return date;
	};

	var getAllCity = function () {
		var city = [];
		for (var i = 0; i < data[0].terms.length; i++) {
			city.push(data[0].terms[i].city);
		}
		return city;
	};

	var searchBySelected = function (date, city) {
		var result = [];
		for (var i = 0; i < data.length; ++i) {
			if (data[i].date === date) {

				for (var j = 0; data[i].terms.length; ++j) {
					if (data[i].terms[j].city === city) {
						result.push(data[i].terms[j]);
					}
				}
			}
		}
		return result;
	};

	// var getDataTemp = function () {
	// 	var temperature = [];
	// 	for (var i = 0; i < data.length; i++) {

	// 		for (var j = 0; ) {

	// 		}
	// 	}
	// };

	return {
		// getDataFromDb: getDataFromDb,
		getDataAll: getDataAll,
		getAllDate: getAllDate,
		getAllCity: getAllCity,
		searchBySelected: searchBySelected
	};

}) ();