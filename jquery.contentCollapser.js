/*
** Copyright 2012, Andreas Johansson
** Licensed under a MIT license, http://ibuypink.com/mit-license/
**
*/
(function($){ 
	$.fn.contentCollapser = function(options) {
		var defaults = {  
		    parent: '.collapser',
		    element: 'h2',
		    classHeadCollapsed: 'is-collapsed',
		    classHeadOpen: 'is-opened',
		    classHide: 'is-hidden',
		    classShow: 'is-visible'
		};  
		var options = $.extend(defaults, options); 
		return this.each(function() { 
			$(options.parent)
				.find(options.element)
				.addClass(options.classHeadCollapsed)
				.each(function(){ 
				    $(this)
				    	.nextUntil(options.element)
				    	.wrapAll('<div class="'+options.classHide+'" />');
				    $(this).click(function(e) {
				    	$(this)
				    		.toggleClass(options.classHeadCollapsed)
				    		.toggleClass(options.classHeadOpen)
				    		.next()
				    		.toggleClass(options.classHide)
				    		.toggleClass(options.classShow);
				    	e.preventDefault();
			    });
			});
		});
	}
})(jQuery);