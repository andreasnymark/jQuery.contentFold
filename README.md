# jQuery.contentCollapser.js

## Version 0.2

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
		classCollapsed:'is-collapsed'
	});

### Options

	element: 'h2',	// head element (every sibling after a h2 will be wrapped within a <div class="content" />)
	classCollapsed: 'is-collapsed', // class name on collapsed head
	classExpanded: 'is-expanded',	// class name on expanded head
	classContent: 'content', // class name on hidden content


### HTML output

#### Default HTML

	<h2>Headline</h2>	
	<p>Content. </p>
	<h2>Headline</h2>	
	<p>Content. </p>
	<p>Content. </p>
	
#### Collapsed HTML

	<h2 class="is-collapsed">Headline</h2>	
	<div class="content">
		<p>Content. </p>
	</div>
	<h2 class="is-collapsed">Headline</h2>	
	<div class="content">
		<p>Content. </p>
		<p>Content. </p>
	</div>
	
#### Open HTML

	<h2 class="is-expanded">Headline</h2>	
	<div class="content">
		<p>Content. </p>
	</div>
	
### CSS 

This you add to your stylesheet in order to work. The javascript simply handles the wrapping of elements and toggling of classes. 

	.is-expanded + .content {
		display: block;
	}
	.is-collapsed + .content {
		display: none;
	}



