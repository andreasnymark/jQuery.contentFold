# jQuery.contentFold.js

## Version 0.2

***

## What does it do

Wrap, folds and hides content following a specified element. Purpose is to give a better overview of an article. By default, content followed after a `<h2 />` is hidden. An option to specify a certain width for the plugin to initiate is available. 

Primary use is for long articles on devices with small screens. Inspiration comes from Mobile Wikipedia.

## How to use

Simply add the plugin and then run the plugin on parent element with `$('.main').contentFold();`

By default, the plugin runs at any resolution. To change this you need to add a width when you initiate the plugin: `$('.main').contentFold({initSize:700});` Remember also, you need to set all styles for each class name. This javascript only toggles a specific class names, no inline styles are added.

## Browser support

Test it. So far, it works in the following browsers

* Mobile Safari, iOS6
* Safari 6, Mac OSX
* Chrome 26, Mac OSX
* Firefox 23, Mac OSX
* Opera 15, Mac OSX

### Options

#### Default values 

	initSize: 0,                    // at what viewport width we initiate the plugin.
                                    // default is 0 = runs at all resolutions.
	element: 'h2',                  // head element (every following sibling element after this element will be 
	                                // wrapped within a <div class="content-fold" />)
	collapsed: 'is-collapsed',      // class name on collapsed head
	expanded: 'is-expanded',        // class name on expanded head
	content: 'content-fold',        // class name on folded content

#### Override default values

To change default values, simply add them when you initiate the script:

	$('.main').contentFold({
		element:'h3',
		collapsed:'hidden'
	});


### HTML output

#### Default HTML

	<h2>Headline</h2>	
	<p>Content. </p>
	<h2>Headline</h2>	
	<p>Content. </p>
	<p>Content. </p>
	
#### Collapsed HTML

	<h2 class="is-collapsed"><a href="javascript:;">Headline</a></h2>	
	<div class="content-fold">
		<p>Content. </p>
	</div>
	<h2 class="is-collapsed"><a href="javascript:;">Headline</a></h2>	
	<div class="content-fold">
		<p>Content. </p>
		<p>Content. </p>
	</div>
	
#### Open HTML

	<h2 class="is-expanded"><a href="javascript:;">Headline</a></h2>	
	<div class="content-fold">
		<p>Content. </p>
	</div>
	
### CSS 

This you add to your stylesheet in order to work. The javascript simply handles the wrapping of elements and toggling of classes. 

	.is-expanded + .content-fold {
		display: block;
	}
	.is-collapsed + .content-fold {
		display: none;
	}



