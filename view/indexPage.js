var conditionsModule = require('./../module/conditionsModule.js');

module.exports = (function () {
	// var dataAll = conditionsModule.getDataAll();

	var getPage = function (params) {
		return '<!DOCTYPE html><html>' +
						getPageHead() +
						getPageHeader() +
						getPageMain(params) +
						getPageFooter() +
						'</body></html>';
	};

	var getPageHead = function () {
		return  '<head>' +
						'<meta charset="utf-8"/>' +
						'<meta name="viewport" content="width=device-width, initial-scale=1.0"/>' +
						'<title>Fish Peck Detector</title>' +
						'<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' +
						'<link rel="stylesheet" href="http://localhost:3030/css/materialize.css"/>' +
						// '<link rel="stylesheet" href="http://localhost:3000/css/style.css"/>' +
						'</head>' +
						'<body>';
	};

	var getPageHeader = function () {
		return  '<header>' +
						'<div class="container">' +
						'</div>' +
						'</header>';
	};

	var getPageMain = function (params) {
		return  '<main>' +
						'<div class="container">' +
						// '<h1>Fish Peck Application</h1>' +
						'<h1>------</h1>' +
						getMainForm() +
						getResultTable(params) +
						'</div>' +
						'</main>';
	};

	var getPageFooter = function () {
		return  '<footer>' +
						'<div class="container">' +
						'</div>' +
						'</footer>' +
						'<script src="http://localhost:3030/js/jquery/jquery-1.12.1.min.js"></script>' +
						'<script src="http://localhost:3030/js/materialize/materialize.min.js"></script>' +
						'<script src="http://localhost:3030/js/main.js"></script>';
	};

	var getMainForm = function () {
		return  '<form class="row" mathod="GET" action="search">' +
						'<input type="hidden" name="action" value="search" />' +  
						'<div class="input-field col s4">' +
		    		getSelectDate(conditionsModule.getAllDate()) +
		    		'<label>Select Date</label>' +
		  			'</div>' +
						'<div class="input-field col s5">' +
		    		getSelectCity(conditionsModule.getAllCity()) +
		    		'<label>Select City</label>' +
		  			'</div>' +
		  			'<div class="col s3">' +
		  			'<button type="submit" class="btn waves-effect waves-light">Submit' +
		  			'<i class="material-icons right">send</i>' +
		  			'</button>' +
		  			'</div>' +
			  		'</form>';
	};

	var getResultTable = function (params) {
		// var data = getParamsData(params);
		var data = conditionsModule.getDataAll();
		if (!data.length) {
			return "Nothing Found";
		}

		var result = '<tr>' +
								'<th>Температура</th>' +
								'<th>Характер Погоди</th>' +
								'<th>Атмосферний тиск</th>' +
								'<th>Сила вітру</th>' +
								'<th>Рівень Води</th>' +
								'<tr>';
		for (var i = 0; i < data[i].terms.length; i++) {
			result += '<tr>' +
								'<td>' + data[i].terms.temperature + '</td>' +
								'<td>' + data[i].terms.weatherCharacteristics + '</td>' +
								'<td>' + data[i].terms.airPressure + '</td>' +
								'<td>' + data[i].terms.windForce + '</td>' +
								'<td>' + data[i].terms.waterLevel + '</td>' +
								"</tr>";
		}
		return	'<table class="responsive-table">' + result + '</table>';
	};

	var getSelectDate = function (date) {
		var optionDate = '<option value="0">- Select Date -</option>';
		for (var i = 0; i < date.length; ++i) {
      optionDate += "<option value='" + date[i] + "'>" + date[i] + "</option>";
   	}
   	return '<select name="date">' + optionDate + '</select>';
	};

	var getSelectCity = function (city) {
		var optionCity = '<option value="0">- Select City -</option>';
		for (var i = 0; i < city.length; i++) {
      optionCity += "<option value='" + city[i] + "'>" + city[i] + "</option>";
   	}
   	return '<select name="city">' + optionCity + '</select>';
	};

	var getParamsData = function (params) {
		if (!params) {
			return conditionsModule.getDataAll();
		}
		if (params.date && params.city && params.action == 'search') {
			return conditionsModule.searchBySelected(params.date, params.city);
		} else {
			return conditionsModule.getDataAll();
		}


	};
	// console.log(getParamsData());

	return {
		getPage: getPage
	};

}) ();