var conditionsModule = require('./../module/conditionsModule.js');

module.exports = (function () {

	var getPage = function (params) {
		return '<!DOCTYPE html><html>' +
			getPageHead() +
			getPageHeader() +
			getPageMain(params) +
			getPageFooter() +
		'</body></html>';
	};

	var getPageHead = function () {
		return '<head>' +
			'<meta charset="utf-8"/>' +
			'<meta name="viewport" content="width=device-width, initial-scale=1.0"/>' +
			'<title>Fish Peck Detector</title>' +
			'<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' +
			'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">' +
			// '<link rel="stylesheet" href="http://localhost:3030/public/css/style.css"/>' +
		'</head>' +
		'<body>';
	};

	var getPageHeader = function () {
		return '<header>' +
			'<div class="container">' +
			'</div>' +
		'</header>';
	};

	var getPageMain = function (params) {
		return '<main>' +
			'<div class="container">' +
			'<h1>Fish Peck Application</h1>' +
			getMainForm() +
			'</div>' +
		'</main>';
	};

	var getPageFooter = function () {
		return '<footer>' +
			'<div class="container">' +
			'</div>' +
		'</footer>' +
		'<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>' +
		'<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>';
	};

	var getMainForm = function () {
		return '<form class="row" mathod="GET" action="generator">' +
			// '<div class="input-field col s12">' +
		 //    '<select id="select-fish">' +
		 //      '<option value="" disabled selected>Choose your fish</option>' +
		 //      '<option value="1">Pike</option>' +
		 //      '<option value="2">Perch</option>' +
		 //    '</select>' +
		 //    '<label>Select</label>' +
		 //  '</div>' +
		 '<div class="input-field col s12">'+
	    '<select>'+
	      '<option value="" disabled selected>Choose your option</option>'+
	      '<option value="1">Option 1</option>'+
	      '<option value="2">Option 2</option>'+
	      '<option value="3">Option 3</option>'+
	    '</select>'+
	    '<label>Materialize Select</label>'+
	  '</div>'+
	  '</form>';
	};

	return {
		getPage: getPage
	};

}) ();