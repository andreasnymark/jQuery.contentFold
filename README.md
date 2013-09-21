# jQuery.contentFold.js

## Version 0.2

***

## What does it do

Wrap, folds and hides content after every element specified, to give a better overview of an article. By default, content followed after a H2 is hidden. Primary use is for long articles on devices with small screens. Inspired of Mobile Wikipedia.

## How to use

Simply add the plugin and then run the plugin on parent element:

`$('.main').contentFold();`

You need to set all styles for each class name. This javascript only removes, adds and toggles a specific class names.

### Options

#### Default values 

	element: 'h2',					// head element (every sibling after a h2 will be wrapped within a <div class="content" />)
	classCollapsed: 'is-collapsed', // class name on collapsed head
	classExpanded: 'is-expanded',	// class name on expanded head
	classContent: 'content', 		// class name on hidden content

#### Override default values

To change default values, simply add them when you initiate the script:

	$('.main').contentFold({
		element:'h3',
		classCollapsed:'hidden'
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



