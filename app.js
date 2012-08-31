chrome.tabs.getSelected(null, function(tab) {
	chrome.tabs.executeScript(tab.id, {file: "return_document.js"});
});

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		
		var target = 'validator_response';
		if (localStorage["show_results_in"] == 'window') {
			$('body').hide();
			target = '_blank';
		}

		var f = document.createElement('form');
		f.action  = 'http://validator.w3.org/check';
		f.method  = "POST";
		f.enctype = "multipart/form-data";
		f.target  = target;
		f.acceptCharset = 'utf-8';
		
		// issue is here
		console.log(request.source);
		var input = $('<input>').prop({name: 'fragment'});
		input[0].value = request.source;
		$(f).append(input);
		$(f).submit();

	}
);
