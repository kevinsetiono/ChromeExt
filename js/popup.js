/*var callback = function (results) {
    // ToDo: Do something with the image urls (found in results[0])

    document.body.innerHTML = '';
    for (var i in results[0]) {
        document.body.innerHTML += results[0][i] + "<BR>";
        //var img = document.createElement('img');
        //img.src = results[0][i];
        //document.body.appendChild(results[0][i]);
    }
};

chrome.tabs.query({ // Get active tab
    active: true,
    currentWindow: true
}, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
        code: 'Array.prototype.map.call(document.images, function (i) { return i.src; });'
    }, callback);
});
*/

$(document).ready(function(){
	console.log("HELP ME");
	//const model = tf.sequential();
	//model.add(tf.layers.dense({ units: 1, inputShape: [1], useBias: true }));
	//console.log(model.summary());
	model = tf.loadLayersModel('https://heathered-iron-petroleum.glitch.me/model.json')
	

    /*setInterval(function(){
	$('img').each(function(){
	    if(!$(this).hasClass("caged")){
        //console.log($(this).attr('src'));
		var number = 1 + Math.floor(Math.random() * 2);
		if(number == 1){
		    var image = chrome.extension.getURL("img/doge.jpg");
		}
		else{
		    var image = chrome.extension.getURL("img/sadcat.jpg");
		}
		var width = $(this).width();
		var height = $(this).height();
		$(this).addClass("caged");
		$(this).attr("src",image);
		$(this).width(width);
		$(this).height(height);
	    }
	});
    },200);*/
});