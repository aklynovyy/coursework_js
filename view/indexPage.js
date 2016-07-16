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
		'<title>Fish Peck Detector</title>' +
		'</head>' +
		'<body>';
	};

	var getPageHeader = function () {
		return '<header>' +
			'<meta charset="utf-8"/>' +
			'<link rel="stylesheet" href="http://localhost:3030/public/css/style.css"/>' +
			'<div class="container">' +
			'</div>' +
		'</header>'
	};

	var getPageMain = function (params) {
		return '<main>' +
			'<div class="container">' +
				'<h1>Fish Peck Application</h1>'
			'</div>' +
		'</main>'
	};

	var getPageFooter = function () {
		return '<footer>' +
			'<div class="container">' +
			'</div>' +
		'</footer>'
	};

	return {
		getPage: getPage
	};

})();