import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { numberOfPosts, order, orderBy, categories } = attributes;

	return (
		<div class="widget-box blog-widget-box mb-30">
			<h4 class="widget-title">Categories</h4>
			<div class="category-widget-box">
				<ul class="category-list">
					{
						categories.map((category, index) => (
							<li><a href="#0"><i class="fas fa-chevron-right" key={index}></i> {category.name} <span>4</span></a></li>
						))
					}
				</ul>
			</div>
		</div>
	);
}
