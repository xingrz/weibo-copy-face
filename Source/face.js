document.addEventListener('DOMSubtreeModified', function() {
	$$('img[type=face]').each(function(item) {
		item.outerHTML = '<span style="width:0px;height:22px;padding-left:22px;overflow:hidden;display:inline-block;background:url(' + item.src + ')">' + item.title + '</div>';
	});
}, false);