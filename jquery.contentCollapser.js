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
			$(options.parent).find(options.element).addClass(options.classHeadCollapsed).each(function(){ 
			    $(this).nextUntil(options.element).wrapAll('<div class="'+options.classHide+'" />');
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
			
			
			
			
			
			
			
			
			
			/*
			var o = $(this);
			var fontSize = o.css('font-size');
			fontSize = fontSize.replace(/\D/g,''); 
			var height = o.height();
			var lineHeight = o.css('line-height');
			lineHeight = lineHeight.replace(/\D/g,''); 
			var lines = Math.floor(height/lineHeight);
			var wrap;
			if(options.wrapper==='') { 
				wrap = o.parent();
			} else {
				wrap = o.wrap(options.wrapper);
			}
			for (var i = 0; i<lines; i++) {
				wrap.append('<div class="'+options.baseline+'" style="height:'+lineHeight+'px; top:'+(lineHeight*i-(lineHeight-fontSize))+'px">');
			}
			*/
			/*console.log(
				'Height: '+height + '\n' +
				'Line height: ' + lineHeight + '\n' +
				'Lines: ' + lines + '\n' +
				'Font size: ' + fontSize + '\n'
				);
			*/
		});
	}
})(jQuery);