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

	var getCityDates = function () {
		var date = [];
		for (var i = 0; i < data.length; ++i) {
			// console.log(data[0].city.day[i].date);			
			date.push(data[0].city.day[i].date);			
		}
		// console.log(data);
		return date;
	};

	var getAllCity = function () {
		var city = [];
		for (var i = 0; i < data.length; ++i) {
			city.push(data[i].city.name);
		}
		return city;
	};

	var searchBySelected = function (city, date) {
		var result = [];
		for (var i = 0; i < data.length; ++i) {
			if (data[i].city === city) {
				for (var j = 0; j < data[i].city.day.length; ++j) {
					if (data[i].city.day[j].date === date) {
						result.push(data[i].city.day[j]);
					}
				}

			}
			city.push(data[i].city.name);
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
		getCityDates: getCityDates,
		getAllCity: getAllCity,
		searchBySelected: searchBySelected
	};

}) ();