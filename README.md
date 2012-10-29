# jQuery.contentCollapser.js

## Version 0.1

***

## What does it do

Collapse content between two elements and wraps it in a another element.

## How to use

Simply add the plugin and then add selector on parent element:

`$('.collapser').contentCollapser();`

You need to set all styles for each class name. This javascript only removes, adds and toogle class names.

To change default values, simply:

	$('.collapser').contentCollapser({
		element:'h1',
		classHide:'hide'
	});

### Options

	parent: '.collapser', //parent element 
	element: 'h2',	// head element (everything between each h2 will be wrapped)
	classHeadCollapsed: 'is-collapsed', // class name on collapsed head
	classHeadOpen: 'is-open',	// class name on open header
	classHide: 'is-hidden', // class name on hidden content
	classShow: 'is-visible' // class name on visible content

### HTML output

#### Default HTML

	<h2>Headline</h2>	
	<p>Content. </p>
	<h2>Headline</h2>	
	<p>Content. </p>
	<p>Content. </p>
	
#### Collapsed HTML

	<h2 class="is-collapsed">Headline</h2>	
	<div class="is-hidden">
		<p>Content. </p>
	</div>
	<h2 class="is-collapsed">Headline</h2>	
	<div class="is-hidden">
		<p>Content. </p>
		<p>Content. </p>
	</div>
	
#### Open HTML

	<h2 class="is-open">Headline</h2>	
	<div class="is-visible">
		<p>Content. </p>
	</div>



