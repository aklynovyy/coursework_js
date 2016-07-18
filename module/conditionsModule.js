var fs = require('fs');

module.exports = ( function () {
	var dbFilePath = './data/data.json';

	var getDataFromDb = function (path) {
		try {
      var result = fs.readFileSync(path, 'utf8');
      return JSON.parse(result);
    } catch(e) {
      return [];
    }
	};

	var getAllData = function () {
		var data = getDataFromDb(dbFilePath);
		return data;
	}

	var dataArr = getDataFromDb(dbFilePath);

	var searchLocalCity = function (fishName, city) {
		var result = [];
		for (var i = 0; i < data.length; i++ ) {
			if (data[i].fishName === fishName) {
				for (var j = 0; j < data[i].terms.length; j++) {
					if (data[i].terms[j].city === city) {
						result.push(data[i].termsp[j]);
					}
				};
			}
		};

		// console.log(result);
		return result;
	};

	var searchAllFish = function () {
		var result = [];
		for (var i = 0; i < data.length; i ++) {
			result.push(data[i].fishName);
		}
		
		// console.log('result - ' + result.length);
		return result;
	}

	var searchAllcity = function () {
		var result = [] ;
		for (var i = 0; i < data.length; i++) {
			result.push(data[0].terms[i].city);
		}
		// console.log(result);
		return result;
	};



	return {
		getDataFromDb: getDataFromDb
	}

}) ();