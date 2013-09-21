/*
** Copyright 2012, Andreas Nymark
** Licensed under a MIT license, http://ibuypink.com/mit-license/
**
*/
(function($){ 
	$.fn.contentFold = function(options) {
		/*
		**
		** Default values used throughout.
		** Override with: 
		**
		** $('.main').contentFold({option:'value'});
		**
		*/
		var defaults = {  
		    element: 'h2',
		    classCollapsed: 'is-collapsed',
		    classExpanded: 'is-opened',
		    classContent: 'content-fold'
		};  
		var options = $.extend(defaults, options); 
		return this.each(function() { 
			/*
			**
			** wrapper to start from, find element, add class for collapsed content.
			** for all siblings following the element, we wrap it in a div-element.
			*/
			$(this)
				.find(options.element)
				.addClass(options.classCollapsed)
				.wrapInner('<a href="javascript:;" />')
				.each(function(){ 
					/*
					**
					** Wrap everything after the “default.element” (<H2> by default)
					** Adds the class used to toggle show/hide.
					*/
				    $(this)
				    	.nextUntil(options.element)
				    	.wrapAll('<div class="'+options.classContent+'" />');
				    /*
				    **	
				    ** click to open. Toggle class names. Use :after or 
				    ** background images in your CSS to give visual input.
				    */
				    $(this).find('a').on('click touchstart', function(e) {
				    	$(this)
				    		/*
				    		**	
				    		** Toggle class on “default.element” to show/hide.
				    		*/
				    		.parent()
				    			.toggleClass(options.classCollapsed)
				    			.toggleClass(options.classExpanded);
				    		/*
				    		**	
				    		** Toggle class on wrapped content to show/hide.
				    		*/
				    	e.preventDefault();
				    });
				});
		});
	}
})(jQuery);